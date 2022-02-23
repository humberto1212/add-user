import React from 'react'
import User from './User'
import Wrapper from '../helpers/Wrapper'

export default function UserList(props) {
  return (
    <Wrapper>
      {
        props.onUsersList.map((user) => {
          return (
            <div key={user.id}>
              <User onId={user.id} onName={user.name} onAge={user.age} onHandleDelete={props.onHandleDelete} />
            </div>
            
          )
        })
      }
    </Wrapper>
  )
}
