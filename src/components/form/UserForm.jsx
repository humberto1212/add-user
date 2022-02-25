import React, { useState, useRef } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button'
import AlertMessage from '../alerts/AlertMessage';
import  Wrapper from '../helpers/Wrapper'

export default function UserForm(props) {
    //for imput name Im using useRef() and not states, just to try
    const nameInputRef = useRef();
    const ageInputRef = useRef();


    //const [newName, setNewName] = useState('')
    const [newAge, setNewAge] = useState('')
    const [alert, setAlert] = useState('')
  
    // const handleName = (event) => {
    //     return setNewName(event.target.value)
    // }

    const handleAge = (event) => {
        return setNewAge(event.target.value) 
    }
    
    const handleSubmit = (event) => {
        event.preventDefault()
        console.log('this is nameInputRef', nameInputRef.current.value)
        console.log('this is nameInputRef', ageInputRef.current)

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
            name: nameInputRef.current.value,
            age: newAge,
            id: guid()
        }

        if(nameInputRef.current.value  === '' || user.age === ''){
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
         //manipulation of the Dom with useRef.
         nameInputRef.current.value = ''
    }   

  return (
    <Wrapper>
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
                        inputRef={nameInputRef}
                        />
                        <TextField 
                        id="age" 
                        label="Age" 
                        type="number"
                        variant="outlined" 
                        onChange={handleAge}
                        value={newAge}
                        inputRef={ageInputRef}
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
                    inputRef={nameInputRef}
                    />
                    <TextField 
                    id="age" 
                    label="Age" 
                    variant="outlined" 
                    onChange={handleAge}
                    value={newAge}
                    inputRef={ageInputRef}
                    />
                    <Button type="submit" variant="outlined">Create New User</Button>
                </Box>    
            }
    </Wrapper>
  )
}
