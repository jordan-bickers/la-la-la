import Aliens from './Aliens'
import Space100 from './Space100'
import Space3 from './Space3'
import Space4 from './Space4'

function App() {
  return (
    <div>
      <div className="banner">
        <h1>A long time ago in a galaxy far, far away...</h1>
      </div>
      <Space100 />
      <Space3 />
      <Space4 />
      <Aliens />
    </div>
  )
}

export default App
