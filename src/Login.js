import React, { useState } from 'react';
import './Login.css';
import { Link, useHistory } from 'react-router-dom';
import { auth } from './firebase';


function Login() {
    const history = useHistory()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const signIn = e => {

    e.preventDefault();

    // some fancy firebase login shitt
    auth
    .signInWithEmailAndPassword(email, password)
    .then(auth => {
       
        history.push('/')
    })
    .catch(error => alert(error.message))
  }

  const register = e => {
      e.preventDefault()

       // some fancy firebase register shitt
       auth.createUserWithEmailAndPassword(email, password)
       .then((auth) => {
           // it successfuly created a new user with email and password
           console.log(auth)
           if(auth){
               history.push('/')
           }
       })
       .catch(error => alert(error.message));
       
  }

    return (
       
        <div className="login">
         <Link to='/'>
            <img className="login__logo"
             src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTjeWZBV7bNqOclgrVzVFPZqDLSZ9MQnCPi9g&usqp=CAU" alt=""/>
        </Link>
        <div className="login__container">
            <h1>Sign-in</h1>

            <form action="">
                <h5>E-mail</h5>
                <input type="text" value={email}
                    onChange={e => setEmail(e.target.value)}
                />
                <h5>Password</h5>
                <input type="password" value={password} 
                onChange={e => setPassword(e.target.value)}/>

                <button type='submit' onClick={signIn}
                className="login__signInButton">Sign In</button>
            </form>
            <p>By Sgning-in you agree to AMAZON FAKE CLONE condition of use &
               sale. Please see our Privivy Notice, Our Cookies Notice 
               and our Interest-based Ads Notice
            
            </p>
            <button onClick={register}
            className="login__registerButton">
            Create your Amazon Account</button>
        </div>
        </div>
    )
}

export default Login
