import React from 'react'
import DiaryCard from './Diarycard'

function Diarylist() {
  return (
    <div className=' flex flex-col mx-auto mt-10 justify-center items-center gap-7  lg:flex-row backdrop-blur-sm h-screen '>
      <DiaryCard/>
      <DiaryCard/>
      <DiaryCard/>
      
    
    </div>
  )
}

export default Diarylist
