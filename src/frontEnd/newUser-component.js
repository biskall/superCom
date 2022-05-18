import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import Button from "@mui/material/Button";
import UserList from "./userList-component"
import { BrowserRouter as Router,Routes, Route, Link, NavLink } from 'react-router-dom';


export default function NewUser() {
  const [person, setPerson] = React.useState({
    firstName: "",
    lastName: " ",
    userName: "",
    phone: "",
    timeZone: "",
    aboutMe: " ",
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setPerson({ ...person, [name]: value });
  };

  const handleSubmit = (e) => {
    // המתודה מבטלת את האירוע אם הוא ניתן לביטול 
    // כלומר פעולת הברירת מחדל של האירוע לא תתרחש
    // לדוגמא כאן הפעולה גורמת להעמוד לא להתרנדר
    e.preventDefault();
      const newPerson = { id: new Date().getTime().toString(), ...person }
      console.log(newPerson);
      setPerson(newPerson);
    
  }


  return (
    <Router>
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          error
          id="filled-error"
          label="First Name"
          name="firstName"
          value ={person.firstName}
          onChange={handleChange}
          variant="filled"
        />
        <TextField
          error
          id="filled-error"
          label="Last Name"
          name = "lastName"
          value ={person.lastName}
          onChange={handleChange}
          variant="filled"
        />
      </div>
      <div>
        <TextField
          error
          id="filled-error"
          label="User Name"
          name="userName"
          value ={person.userName}
          onChange={handleChange}
          variant="filled"
        />
        <TextField
          error
          id="filled-error"
          label="Phone"
          name="phone"
          value ={person.phone}
          onChange={handleChange}
          variant="filled"
        />
      </div>
      <div>
        <FormControl sx={{ m: 1, width: "25ch" }}>
          <InputLabel id="demo-simple-select-label">Time Zone</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={person.timeZone}
            label="Time Zone"
            name="timeZone"
            onChange={handleChange}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
        <TextField
          error
          id="filled-error"
          label="About Me"
          multiline
          rows={3}
          name="aboutMe"
          value ={person.aboutMe}
          onChange={handleChange}
          variant="filled"
        />
      </div>
      
      <Button sx={{ m: 1, width: "25ch" }} variant="contained" type="submit" onClick={handleSubmit}>
      {/* <Link to="/userList"> */}
          create
      {/* </Link> */}
      </Button>
      {/* <Routes>
          <Route exact path='/userList' element={< UserList />}></Route>
      </Routes> */}
    </Box>
    </Router>
    
  );
}
