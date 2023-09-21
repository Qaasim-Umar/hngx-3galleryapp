import React, { useState } from 'react';
import auth from '../../firebase'
import { Link } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signup = (e) => {
    e.preventDefault();
    //  sign-in logic here
    createUserWithEmailAndPassword(auth, email, password)
     .then((userCredential) => {
        console.log(userCredential)
     }).catch((error)=> {
console.log(error);
     })

};

  return (
    <div className='container'>
        <div className="sign-in-container">
            <h2>Create Account</h2>
            <form onSubmit={signup}>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button type="submit" className="sign-in-button">
                    Sign Up
                </button>
            </form>
            <p>Have an Account ? <Link className='link' to='/'>LOG IN</Link> </p>
            </div>

    </div>
  )
}

export default Signup