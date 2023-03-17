import { useState, ChangeEvent, useEffect } from 'react'

function Space5() {
  const [count, setCount] = useState(-2)

  const handleClick = () => {
    setCount(count + 5)
    console.log('testing', count)
  }

  useEffect(() => {
    const audio = new Audio('./images/whoosh.wav')
    audio.play()
  })

  return (
    <div>
      <img
        onClick={handleClick}
        style={{ bottom: count * 3 + 'vw', position: 'fixed' }}
        className="planet5"
        src="./images/planet5.png"
        alt="planet5"
      />
    </div>
  )
}

export default Space5
