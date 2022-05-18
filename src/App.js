import './App.css';
import React from 'react'
import ReactDOM from 'react-dom';
import Button from '@mui/material/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import CreateUser from "./frontEnd/createUser-component"
import NewUser from "./frontEnd/newUser-component"
import UserList from "./frontEnd/userList-component"
import Box from "@mui/material/Box";


function App() {
  return (
    
    <>
    <Box>
    <NewUser></NewUser>
    </Box>
    {/* <Box sx={{ m: 10, width: "125ch"}}>
    <UserList></UserList>
    </Box> */}
   </>
  );
}

export default App;
