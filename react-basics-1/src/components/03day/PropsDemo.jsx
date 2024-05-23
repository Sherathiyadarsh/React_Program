import React, { useState } from 'react'
import propTypes from 'prop-types'

const PropsDemo = ({vara,logging,children}) => {
  return (
    <>
      {vara}
      {children}
    </>
  )
}

export default PropsDemo

PropsDemo.defaultProps={
  vara:10
}
PropsDemo.propTypes={
  vara: propTypes.string
}
