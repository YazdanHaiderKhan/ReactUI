import React from 'react'
import RightCard from './RightCard'

const RightContent = (props) => {
  
  return (
    <div id = "rightcontent" className=' h-full w-2/3  flex flex-nowrap gap-10 overflow-x-auto rounded-4xl'>
      {props.users.map(function (user,idx){
        return <RightCard key = {idx} id = {user.id} img = {user.img} tag = {user.tag} intro = {user.intro} color = {user.color} textColor = {user.textColor}/>
      })}
    </div>
  )
}

export default RightContent