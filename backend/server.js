const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const multer = require('multer');
const cors = require('cors');

const app = express();
app.use(cors());
const PORT = process.env.PORT || 3000;

mongoose.connect('mongodb+srv://harshpayal3252:VoyageVue@voyagevue.cegdow1.mongodb.net/?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;

const storage = multer.memoryStorage(); // Use memory storage for storing files as Buffer
const upload = multer({ storage: storage });

db.once('open', () => {
  console.log('Connected to MongoDB');
});

db.on('error', (err) => {
  console.error(`MongoDB connection error: ${err}`);
});

app.use(bodyParser.json());

const userSchema = new mongoose.Schema({
  email: String,
  Fullname: String,
  bio: String,
  password: String,
  profileImage: String, // Store the image as Base64-encoded string
});

const User = mongoose.model('User', userSchema);











app.post('/register', upload.single('profileImage'), async (req, res) => {
  const { email, Fullname, bio, password } = req.body;
  const profileImageBuffer = req.file.buffer;
  const profileImageBase64 = profileImageBuffer.toString('base64'); // Convert the buffer to Base64

  try {
    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({
      email,
      Fullname,
      bio,
      password: hashedPassword, // Store the hashed password
      profileImage: profileImageBase64, // Store the Base64 string
    });

    await user.save();
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Error registering user' });
  }
});







const authenticateUser = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1];
    const decoded = jwt.verify(token, 'your-secret-key'); // Replace with your own secret key

    req.userId = decoded.userId;
    next();
  } catch (error) {
    res.status(401).json({ error: 'Authentication failed' });
  }
};










app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    const token = jwt.sign({ userId: user._id }, 'your-secret-key', { expiresIn: '1h' }); // Replace with your own secret key

    res.status(200).json({ token });
  } catch (error) {
    res.status(500).json({ error: 'Error authenticating user' });
  }
});







app.get('/users', async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Error fetching user data' });
  }
});










app.get('/profile', authenticateUser, async (req, res) => {
  try {
    // Retrieve the user data using the userId from the token
    const user = await User.findById(req.userId);

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Return the user data excluding the password
    const { email, Fullname, bio, profileImage } = user;
    res.status(200).json({ email, Fullname, bio, profileImage });
  } catch (error) {0
    console.error('Error:', error);
    res.status(500).json({ error: 'Error fetching user data' });
  }
});







app.use('/uploads', express.static('uploads'));

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
