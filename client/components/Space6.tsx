import { useState } from 'react'

function Space6() {
  const [count, setCount] = useState(-2)

  const handleClick = () => {
    setCount(count + 5)
    console.log('testing', count)
  }

  return (
    <div>
      <img
        onClick={handleClick}
        style={{ bottom: count * 3 + 'vw', position: 'fixed' }}
        className="planet6"
        src="./images/planet6.png"
        alt="planet6"
      />
    </div>
  )
}

export default Space6
