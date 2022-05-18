import React, { useState } from 'react';
import "../App.css";
import  'bootstrap/dist/css/bootstrap.min.css';

const CreateUser = () => {
    const [person, setPerson] = useState({ firstName: '',  lastName: " ", userName: '',
     phone: '', timeZone: '', aboutMe:" "})

     const dynamicinput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setPerson({ ...person, [name]: value });
      }
 
     const handleSubmit = (e) => {
        // המתודה מבטלת את האירוע אם הוא ניתן לביטול 
        // כלומר פעולת הברירת מחדל של האירוע לא תתרחש
        // לדוגמא כאן הפעולה גורמת להעמוד לא להתרנדר
        e.preventDefault();
          const newPerson = { id: new Date().getTime().toString(), ...person }
          console.log(newPerson)
      }
    

     return (
    <form style={{ marginLeft:"auto"}} className="row g-3 needs-validation" noValidate>
        <div className="col-md-3">
          <label htmlFor="validationCustom01" className="Form-label">
            First name
          </label>
          <input
            type="text"
            className="Form-control"
            id="firstName"
            name="firstName"
            value ={person.firstName}
            onChange={dynamicinput}
          ></input>
          <div className="valid-feedback">Looks good!</div>
        </div>
        <div className="col-md-3">
          <label htmlFor="validationCustom02" className="Form-label">
            Last name
          </label>
          <input
            type="text"
            className="Form-control"
            id="validationCustom02"
            name = "lastName"
            value ={person.lastName}
            onChange={dynamicinput}
            required
          ></input>
          <div className="valid-feedback">Looks good!</div>
        </div>
        <div className="col-md-3">
          <label htmlFor="validationCustomUsername" className="Form-label">
            Username
          </label>
          <div className="input-group has-validation">
            <input
              type="text"
              className="Form-control"
              id="validationCustomUsername"
              aria-describedby="inputGroupPrepend"
              name="userName"
              value ={person.userName}
              onChange={dynamicinput}
              required
            ></input>
            <div className="invalid-feedback">Please choose a username.</div>
          </div>
        </div>
        <div className="col-md-3">
          <label htmlFor="validationCustom01" className="Form-label">
            Phone
          </label>
          <input
            type="phone"
            className="Form-control"
            id="validationCustom01"
            name="phone"
            value ={person.phone}
            onChange={dynamicinput}
            required
          ></input>
          <div className="valid-feedback">Looks good!</div>
        </div>
        <div className="col-md-3">
          <label htmlFor="validationCustom04" className="Form-label">
            Time zone
          </label>
          <select className="Form-select" 
            id="validationCustom04" 
            name="timeZone"
            value ={person.timeZone}
            onChange={dynamicinput}
             required>
            <option selected disabled value="">
              Choose...
            </option>
            <option>...</option>
          </select>
          <div className="invalid-feedback">Please select a valid state.</div>
        </div>
        <div className="col-md-3">
          <label htmlFor="exampleFormControlTextarea1" className="Form-label">
            About me
          </label>
          <textarea
            className="Form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            name="aboutMe"
            value ={person.aboutMe}
            onChange={dynamicinput}
          ></textarea>
        </div>
        <div>
          <button className="btn btn-primary" type="submit" onClick={handleSubmit}>
            create
          </button>
        </div>
    </form>
  );
};

export default CreateUser;