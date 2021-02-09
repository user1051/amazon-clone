import { Button, Link } from '@material-ui/core'
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { auth } from './firebase'
import './Login.css'

function Login() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const history = useHistory()
    const login = (event) => {
        event.preventDefault()
        // login logic 
        auth.signInWithEmailAndPassword(email, password).then((auth) => {
            // logged in, redirect to homepage
             history.push('/')
        })
        .catch((e) => alert(e.message))

    }
    const register = (event) => {
        event.preventDefault()  // this stops the refresh
         auth.createUserWithEmailAndPassword(email, password).then((auth) => {
             // created a user and logged in, redirect to home page
            history.push('/')
         }).catch((e) => alert(e.message))
    }

    return (
        <div className="login">
            <Link to ='/'>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" alt="" className="login__logo"/>
            </Link>
            <div className="login__container">
                <h1>Sign in</h1>
                <form>
                    <h5>Email</h5>
                    <input type="text" value={email} onChange={ event => setEmail(event.target.value)}/>
                    <h5>Password</h5>
                    <input type="text" value={password} onChange={ event => setPassword(event.target.value)}/>
                    <Button className="login__signIn" onClick={login}>Sign In</Button>
                </form>
                <p>By signing-in you agree to Amazon's Conditions of Use & Sale. Please see our Privacy Policy, our Cookies Notice and our Interest-Based Ads Notice</p>
                <Button variant="outlined" onClick={register} className="login__createAccount">Create your Amazon Account</Button>
            </div>
        </div>
    )
}

export default Login
