import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { FormEvent, useState, ChangeEvent, useEffect } from 'react'

function Space100() {
  const [pic, togglePic] = useState(true)

  const handleClick = () => {
    togglePic(!pic)
  }

  const img = <img src="./images/planet1.png" alt="red-blue-planet" />
  const flam = <img src="./images/flamingo.png" alt="flamingo" />

  return (
    <div className="flamingo" onClick={handleClick}>
      {pic ? img : flam}
    </div>
  )
}

export default Space100
