import React from 'react'
import { useState, useEffect } from 'react'
import auth from '../../firebase'
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useLoading } from '../services/Loading'
import '../../styles/authDetails.css'


const AuthDetails = () => {
  const [authUser, setAuthUser] = useState(null);
  const navigate = useNavigate();
  const { isLoading } = useLoading();

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user)
      } else {
        setAuthUser(null)
      }
    });
    return () => {
      listen();
    }
  }
    , []);
  const userSignedOut = () => {
    signOut(auth).then(() => {
      navigate('/');
    }).catch(error => console.log(error));
  }
  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div className='hero-header'>
<div className="logo"><img src="images/Wakalery.svg" alt="" /></div>
          <div>
            {authUser ? <div className='button-flex'> <p className='signedOut-text'>{`Signed In as ${authUser.email}`}</p> <button onClick={userSignedOut} className='signout'>SIgn Out</button></div> : <p>Signed Out</p>}
          </div>

        </div>
      )}

    </div>

  )
}

export default AuthDetails