import { useState } from 'react'

function Aliens() {
  const [leftPos, newLeft] = useState(10)
  const [topPos, newTop] = useState(10)
  const [audio, setAudio] = useState(false)

  const handleClick = () => {
    const newAudio = new Audio('./images/alienSound.wav')
    if (audio && !newAudio.paused) {
      newAudio.pause()
    } else {
      newAudio.loop = true
      newAudio.play()
      setAudio(true)
    }

    newLeft(Math.floor(Math.random() * 50))
    newTop(Math.floor(Math.random() * 10))
    console.log(leftPos)
  }

  const handleHover = () => {
    const playAudio = new Audio('./images/alienSound.wav')
    playAudio.loop = true
    playAudio.play()
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
