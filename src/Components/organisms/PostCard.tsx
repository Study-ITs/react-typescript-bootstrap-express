import React from 'react'

function PostCard(props: {name: string, age: number, text: string}) {
  return (
    <div>
      <div className="card mb-3">
        <div className='card-body'>
          <h5 className='card-title'>{props.name}{props.age}</h5>
          <p className='card-text'>{props.text}</p>
        </div>
      </div>
    </div>
  )
}

export default PostCard