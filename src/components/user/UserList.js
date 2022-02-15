import React from 'react'
import User from './User'

export default function UserList(props) {
  return (
    <div>
      {
        props.onUsersList.map((user, id) => {
          return (
            <div key={id}>
              <User onName={user.name} onAge={user.age} />
            </div>
            
          )
        })
      }
    </div>
  )
}
