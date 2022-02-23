import './App.css';
import React , {useState} from 'react'
import UserList from './components/user/UserList'
import UserForm from './components/form/UserForm'
import {theme} from './theme/theme'
import {ThemeProvider} from '@mui/material/styles';
import Wrapper from '../src/components/helpers/Wrapper'


function App() {
  const [usersList, setUsersList] = useState([])
  
  const addUser = (newUser) => {
    setUsersList((prevUser) => {
      return [newUser, ...prevUser]
    })
  }

  const handleDelete = (id) => {
    const newList = usersList.filter((user) => {return user.id !== id})
    setUsersList(newList)
  }

  console.log("users list",usersList)

  return (
    <ThemeProvider theme={theme}>
      <Wrapper>
        <UserForm
          onAddUser={addUser}
        />
        <UserList
          onUsersList={usersList}
          onHandleDelete={handleDelete}
        /> 
      </Wrapper>
    </ThemeProvider>
  );
}

export default App;