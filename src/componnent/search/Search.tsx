import Drawer from '@mui/material/Drawer';
import Sign from '../login/Sign';
import { IInput } from '../interface/IInput';
import AddDriver from '../storybook/addDrive';
import { useState } from 'react';
const drawerWidth = 240;

const Search = ({handleClose}:{handleClose: () => void},{open:boolean}) => { 
  const inputs: IInput[] = [
    { placeorder: 'שם משתמש', nameInput: 'userName', typ: 'text', regexPattern: '^(?=.*[A-Z])[A-Za-z]+$' },
    { placeorder: 'סיסמה', nameInput: 'password', typ: 'password', regexPattern: '\w' },
    { placeorder: 'מייל', nameInput: 'email', typ: 'text', regexPattern: '^[\\w]{6,}+(@{1})([\w]{5,9}+\.{1})+[\w-]{2,4}$' },
    { placeorder: 'נייד', nameInput: 'tel', typ: 'text', regexPattern: '^[0]{1}[\+]?[(]?[0-9]{2}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4}$' }
  ]



  return (
    <>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="right"
      >
        <AddDriver handleClose={handleClose} />
        <Sign title={'להתחברות הכנס שם משתמש וסיסמה'} open={open} FormProps={inputs} handleClose={handleClose}/>
      </Drawer>
    </>
  )
}
export default Search;
