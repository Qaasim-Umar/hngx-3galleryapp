import React, { useState } from 'react';
import '../../styles/Signin.css'
import auth from '../../firebase'
import { Link } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from "react-router-dom";
import { useLoading } from '../services/Loading';


const Signin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const { setIsLoading } = useLoading();

    const signin = async (e) => {
        e.preventDefault();
       
        setIsLoading(true);

        //  sign-in logic here
        signInWithEmailAndPassword(auth, email, password)
            .then(() => {
                setIsLoading(false);
                navigate('/Home');
            }).catch((error) => {
               
                setIsLoading(false);
                console.log(error);
            })
    };
    return (
        <div className='container'>
            <div className="sign-in-container">
                <h2>Log In</h2>
                <form onSubmit={signin}>
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
                        Log In
                    </button>
                </form>

                <p>New Instead ? <Link className='link' to='Signup'>REGISTER</Link> </p>
            </div>
        </div>
    )
}
export default Signin