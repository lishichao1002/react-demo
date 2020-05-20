import React from 'react'

export class ReactFormHandler extends React.Component {

  constructor (props) {
    super(props)
  }

  handleFormChange = (event) => {
    if (event && event.target && event.target.value && event.target.name) {
      this.setState({
        [event.target.name]: event.target.value
      })
    }
  }
}