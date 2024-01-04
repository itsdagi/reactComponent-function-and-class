
// class based component with arrow functions
import React from 'react'

export const App = () => {
  return (
    <div>App</div>
  )
}
// function based component 
import React from 'react'

export default function App() {
  return (
    <div>App</div>
  )
}
// class based component 
import React, { Component } from 'react'

export default class App extends Component {
  render() {
    return (
      <div>App</div>
    )
  }
}

