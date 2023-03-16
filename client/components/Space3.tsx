import { useState } from 'react'

function Space3() {
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
        className="planet3"
        src="./images/planet3.png"
        alt="planet3"
      />
    </div>
  )
}

export default Space3
