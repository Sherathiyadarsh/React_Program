import React, { forwardRef } from 'react'
import video from "../../assets/a.mp4"

const ChildRefForward = forwardRef((props,ref) => {
  return (
    <div>
      <h1>{props.id }</h1>
      {/* <input className='form-control' ref={ref}/> */}
      <video height={700} width={700} ref={ref}>
        <source src={video} />
      </video>
    </div>
  )
})

export default ChildRefForward
