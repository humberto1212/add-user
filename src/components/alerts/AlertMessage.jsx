import React from 'react'
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import ReactDom from 'react-dom'

const ModalOverlay = (props) => {
  return(
    <>
    <Stack sx={{ width: '100%' }} spacing={2}>
        <Alert variant="filled" severity="error">
        This is an error alert — Add your name and age!
        </Alert>
    </Stack>
    </>
  )
}

export default function AlertMessage() {
  return (
    <>
      {ReactDom.createPortal(
        <ModalOverlay />, document.getElementById('overlay-root')
        )}
    </>
  )
}
