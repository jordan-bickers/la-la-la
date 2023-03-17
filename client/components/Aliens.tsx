import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { FormEvent, useState, ChangeEvent, useEffect } from 'react'

function Aliens() {
  const [leftPos, newLeft] = useState(10)
  const [topPos, newTop] = useState(10)
  const audio = new Audio('./images/alienSound.wav')

  const handleClick = () => {
    audio.loop = false
    audio.pause
    console.log(leftPos)
  }

  const handleHover = () => {
    audio.loop = true
    audio.play()
    newLeft(Math.floor(Math.random() * 50))
    newTop(Math.floor(Math.random() * 10))
  }

  const img = (
    <img
      onMouseOver={handleHover}
      onClick={handleClick}
      className="alienShip"
      src="./images/alienShip.png"
      style={{ left: leftPos + 'vw', position: 'fixed', top: topPos + 'vw' }}
      alt="aliens"
    />
  )

  return <div className="Aliens">{img}</div>
}

export default Aliens
