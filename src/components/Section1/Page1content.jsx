import React from 'react'
import LeftContent from './LeftContent'
import RightContent from './RightContent'

const Page1content = (props) => {
  return (
    <div className=' flex gap-10 pb-16 pt-6 px-18 h-[85vh]'>
        <LeftContent />
        <RightContent users={props.users}/>
    </div>
  )
}

export default Page1content