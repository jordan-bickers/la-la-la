import { useState } from 'react'

function Space5() {
  const [count, setCount] = useState(0)

  const handleClick = () => {
    setCount(count + 3)
    console.log('testing', count)
  }

  return (
    <div>
      <img
        onClick={handleClick}
        style={{ left: count * 3 + 'vw', position: 'fixed' }}
        className="planet5"
        src="./images/planet5.png"
        alt="planet3"
      />
    </div>
  )
}

export default Space5
