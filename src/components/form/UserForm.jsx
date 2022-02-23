import React, { useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button'
import AlertMessage from '../alerts/AlertMessage';

export default function UserForm(props) {

    const [newName, setNewName] = useState('')
    const [newAge, setNewAge] = useState('')
    const [alert, setAlert] = useState('')
  
    const handleName = (event) => {
        return setNewName(event.target.value)
    }

    const handleAge = (event) => {
        return setNewAge(event.target.value) 
    }
    
    const handleSubmit = (event) => {
        event.preventDefault()

        let guid = () => {
            let s4 = () => {
                return Math.floor((1 + Math.random()) * 0x10000)
                    .toString(16)
                    .substring(1);
            }
            //return id of format 'aaaaaaaa'-'aaaa'-'aaaa'-'aaaa'-'aaaaaaaaaaaa'
            return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
        }

        let user = {
            name: newName,
            age: newAge,
            id: guid()
        }

        if(user.name === '' || user.age === ''){
            setAlert('send a warning')
            return false
        }else if(+user.age <= 0){
            setAlert('send a warning')
            return false
        }else{
            setAlert('success')
            props.onAddUser(user)
        }
        setNewAge('')
        setNewName('')
    }   

  return (
    <div>

            {
                alert === 'send a warning' 
                ? 
                <>
                    <AlertMessage />

                    <Box
                    component="form"
                    onSubmit={handleSubmit}
                    sx={{
                        '& > :not(style)': { m: 1, width: '25ch' },
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}
                    noValidate
                    autoComplete="off"
                    > 
                        <TextField 
                        id="name" 
                        label="Name" 
                        variant="outlined"
                        onChange={handleName}
                        value={newName}
                        />
                        <TextField 
                        id="age" 
                        label="Age" 
                        type="number"
                        variant="outlined" 
                        onChange={handleAge}
                        value={newAge}
                        />
                        <Button type="submit" variant="outlined">Create New User</Button>
                    </Box>
                
                </> 
                :
                <Box
                component="form"
                onSubmit={handleSubmit}
                sx={{
                    '& > :not(style)': { m: 1, width: '25ch' },
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
                noValidate
                autoComplete="off"
                > 
                    <TextField 
                    id="name" 
                    label="Name" 
                    variant="outlined"
                    onChange={handleName}
                    value={newName}
                    />
                    <TextField 
                    id="age" 
                    label="Age" 
                    variant="outlined" 
                    onChange={handleAge}
                    value={newAge}
                    />
                    <Button type="submit" variant="outlined">Create New User</Button>
                </Box>    
            }
    </div>
  )
}
