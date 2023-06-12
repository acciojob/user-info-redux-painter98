
import React,{useEffect, useState} from "react";
import './../styles/App.css';
import {useDispatch, useSelector} from 'react-redux';
import {theName,theEmail} from '../redux/actions/updateAction';


const App = () => {

  let name = useSelector(state=>state.name);
  let email = useSelector(state=>state.email);
  //console.log('app',typeof name);

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
        <div className="output">
          <p>Name - {name}</p>
          <p>Email - {email}</p>
        </div>
    </div>
  )
}

export default App
