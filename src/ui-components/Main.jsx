import React from 'react'
import Appbar from './Appbar'

const Main = (props) => {
  return (
    <div>
        <Appbar />
        {props.child}
    </div>
  )
}

export default Main