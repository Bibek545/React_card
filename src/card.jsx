import React from 'react'
import profilePic from './assets/image.png'

const card = () => {
  return (
    <div className='card'>
        <img className="card-image" alt='My picture' src={profilePic}></img>
        <h2 className='card-title'>Bibek Hamal</h2>
        <p className='card-text'> I am a MERN stack developer.</p>
      
    </div>
  )
}

export default card
