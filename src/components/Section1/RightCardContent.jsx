import React from 'react'

const RightCardContent = (props) => {
  return (
    <div className='absolute top-0 left-0 h-full w-full p-8 flex flex-col justify-between'>
            <h2 className='bg-white rounded-full flex justify-center items-center h-12 w-12 text-xl font-semibold'>{props.id+1}</h2>
            <div>
                   <p className='text-xl leading-relaxed text-white mb-14'>Reading books every day improves knowledge, builds confidence, and helps us become better people in life.
                  I can also write one about nature, friendship, or education.</p>
                   <div className='flex justify-between'>
                       <button className='bg-blue-600 text-white font-medium px-8 py-2 rounded-full '>{props.tag}</button>
                        <button className='bg-blue-600 text-white font-medium px-3 py-2 rounded-full'><i class="ri-arrow-right-line"></i></button>
                   </div>
            </div>
         
          </div>
  )
}

export default RightCardContent
