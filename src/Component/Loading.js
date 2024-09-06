import React, { Component } from 'react'
import loading from './loading.gif'

class Loading extends Component {
  render() {
    return (
      <div className="loading-container flex justify-center items-center h-full" >
        <img className='my-4' src={loading} alt="loading"/>        
      </div>
    )
  }
}
export default Loading