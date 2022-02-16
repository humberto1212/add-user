import React from 'react'
import User from './User'

export default function UserList(props) {
  return (
    <div>
      {
        props.onUsersList.map((user) => {
          return (
            <div key={user.id}>
              <User onId={user.id} onName={user.name} onAge={user.age} onHandleDelete={props.onHandleDelete} />
            </div>
            
          )
        })
      }
    </div>
  )
}
