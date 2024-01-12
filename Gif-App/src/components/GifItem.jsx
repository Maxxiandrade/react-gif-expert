import React from 'react'

const GifItem = (props) => {
  return (
    <div className='card'>
        <img src={props.image} />
        <p>{props.title}</p>
    </div>
  )
}

export default GifItem