import React from 'react'

export default class Page21 extends React.Component {

  componentDidMount () {
    console.log(this)
    console.log(this.props)
  }

  render () {
    return (
      <h1>Async Sub Page 21</h1>
    )
  }
}