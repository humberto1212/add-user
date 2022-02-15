import React from 'react'

export default function User(props) {


  return (
    <>
      <div>
        Name: {props.onName}
      </div>
      <div>
        Age: {props.onAge}
      </div>
    </>
  )
}
