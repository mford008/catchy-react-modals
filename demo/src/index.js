import React, {Component} from 'react'
import {render} from 'react-dom'
import { Button } from 'react-catchymodals'

class Demo extends Component {
  render () {
    return <div>
      <h1>Catchy React Modals</h1>
      <Button />
    </div>
  }
}

render(<Demo/>, document.querySelector('#demo'))
