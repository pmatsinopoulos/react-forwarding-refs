import React from 'react'

const logProps = WrappedComponent => {
  class LogProps extends React.Component {
    componentDidUpdate(prevProps) {
      console.debug('old props:', prevProps)
      console.debug('new props:', this.props)
    }

    render() {
      const {forwardRef, ...rest} = this.props

      return (
        <WrappedComponent ref={forwardRef} {...rest} />
      )
    }
  }

  return React.forwardRef((props, ref) => {
    return <LogProps {...props} forwardRef={ref} />
  })
}

export default logProps