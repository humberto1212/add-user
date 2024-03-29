import * as React from 'react';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import PersonIcon from '@mui/icons-material/Person';
import DeleteIcon from '@mui/icons-material/Delete';

export default function User(props) {

  return (
    <>
            <List style={{backgroundColor:'#FFF1D0', margin: 10, borderRadius: 10}}>
                <ListItem
                  secondaryAction={
                    <IconButton onClick={() => props.onHandleDelete(props.onId)} edge="end" aria-label="delete">
                      <DeleteIcon color='secundary'/>
                    </IconButton>
                  }
                >
                  <ListItemAvatar>
                    <Avatar>
                    <PersonIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary={`Name: ${props.onName}`}
                    secondary={props.onAge ? `Age: ${props.onAge}` : null}
                  />
                </ListItem>
            </List>
    </>
  )
}
