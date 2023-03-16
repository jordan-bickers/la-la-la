import { useState } from 'react'
import React from 'react'
import { Motion, spring } from 'react-motion'

export default class Space5 extends React.Component {
  constructor(props) {
    super(props)
    this.state = { open: false }
  }

  mouseDown = () => {
    this.setState({ open: !this.state.open })
  }

  touchStart = (e) => {
    e.preventDefault()
    this.mouseDown()
  }

  render() {
    return (
      <div>
        <button onMouseDown={this.mouseDown} onTouchStart={this.touchStart}>
          Toggle
        </button>

        <Motion style={{ x: spring(this.state.open ? 400 : 0) }}>
          {({ x }) => (
            <div className="main-div">
              <div <img
                className="toggle"
                src="./images/planet3.png"
                style={{
                  WebkitTransform: `translate3d(${x}px, 0, 0)`,
                  transform: `translate3d(${x}px, 0, 0)`,
                }}
              /> 
            </div>
          )}
        </Motion>
      </div>
    )
  }
}

// export default Space5
