
import React,{useEffect, useState} from "react";
import './../styles/App.css';
import {useDispatch} from 'react-redux';
import {theName,theEmail} from '../redux/actions/updateAction';


const App = () => {

  let dispatch = useDispatch();
  let [Name,setName] = useState('');
  let [Email,setEmail] = useState('');


  useEffect(()=>{
    dispatch(theName(Name))
    dispatch(theEmail(Email))
  },[Name,Email])

  return (
    <div>
        {/* Do not remove the main div */}
        <h1>User Information</h1>
        <label for='name'>Name:</label>
        <input onChange={e=>setName(e.target.value)} placeholder='enter the name' type='text' id='name'/>
        <br/>
        <label for='email'>Email:</label>
        <input onChange={e=>setEmail(e.target.value)} placeholder='enter the email' type='email' id='email'/>
        <p>Current values in store:</p>
        <p>Name - {Name}</p>
        <p>Email - {Email}</p>
    </div>
  )
}

export default App
