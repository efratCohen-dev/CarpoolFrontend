import Drawer from '@mui/material/Drawer';
import PopUP from '../login/Sign';
import { IInput } from '../interface/IInput';
import AddDriver from '../storybook/addDrive';
import { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';

const drawerWidth = 240;

const Search = () => { 
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
        <PopUP title={'להתחברות הכנס שם משתמש וסיסמה'} FormProps={inputs} Add={AddIcon}/>
      </Drawer>
    </>
  )
}
export default Search;
