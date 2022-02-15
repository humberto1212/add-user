import React, { useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button'


export default function UserForm(props) {

    const [newName, setNewName] = useState('')
    const [newAge, setNewAge] = useState('')
  
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

        props.onAddUser(user)
    }   


  return (
    <div>
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
                onChange={handleName}/>
                <TextField 
                id="age" 
                label="Age" 
                variant="outlined" 
                onChange={handleAge}
                />
                <Button type="submit" variant="outlined">Create New User</Button>
            </Box>
    </div>
  )
}
