import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { FormEvent, useState, ChangeEvent, useEffect } from 'react'

function Aliens() {
  const [sound, playSound] = useState(false)

  const handleClick = () => {
    playSound(!sound)
    const audio = new Audio('./images/alienSound.wav')
    if (sound) {
      audio.pause()
    } else {
      audio.loop = true
      audio.play()
    }
  }

  const img = (
    <img
      onClick={handleClick}
      className="alienShip"
      src="./images/alienShip.png"
      alt="aliens"
    />
  )

  return <div className="Aliens">{img}</div>
}

export default Aliens
