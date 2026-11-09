import React from 'react'
import 'remixicon/fonts/remixicon.css'
import RightCardContent from './RightCardContent'

const RightCard = (props) => {
  return (
    <div className='h-full shrink-0 overflow-hidden relative rounded-4xl w-80'>

          <img  className='h-full w-full object-cover' src={props.img}/>
          <RightCardContent id={props.id} tag={props.tag}/>
    </div>
  )
}

export default RightCard
