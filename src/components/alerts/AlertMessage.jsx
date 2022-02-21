import React from 'react'
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

export default function AlertMessage() {
  return (
    <Stack sx={{ width: '100%' }} spacing={2}>
        <Alert variant="filled" severity="error">
        This is an error alert — Add your name and age!
        </Alert>
    </Stack>
  )
}
