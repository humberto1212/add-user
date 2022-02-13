import './App.css';
import React , {useState} from 'react'
import UserList from './components/user/UserList'
import UserForm from './components/form/UserForm'


function App() {
  const [usersList, setUsersList] = useState([])
  
  const addUser = (newUser) => {
    setUsersList((prevUser) => {
      return [newUser, ...prevUser]
    })
  }

  return (
    <div >

      <UserForm
        onAddUser={addUser}
      />

       <UserList
        onUsersList={usersList}
       /> 
    </div>
  );
}

export default App;