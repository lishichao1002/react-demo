import React from 'react'

export function loader (promiseFun) {
  return class LoaderComponent extends React.Component {

    state = {
      component: null
    }

    componentDidMount () {
      promiseFun()
        .then((component) => {
          this.setState({
            component: component && component.default ? component.default : component
          })
        })
        .catch(console.error)
    }

    render () {
      const AsyncComponent = this.state.component
      return (
        <>
          {this.state.component ? <AsyncComponent/> : null}
        </>
      )
    }
  }
}
