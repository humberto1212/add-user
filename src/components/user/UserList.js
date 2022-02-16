import React from 'react'
import User from './User'

export default function UserList(props) {
  return (
    <div>
      {
        props.onUsersList.map((user) => {
          return (
            <div key={user.id}>
              <User onName={user.name} onAge={user.age} />
            </div>
            
          )
        })
      }
    </div>
  )
}
