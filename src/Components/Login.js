import React, { useState } from 'react';
import login from '../../src/images/login.png'
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css'
import auth from '../firebase.init';


const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    const handleEmailBlur = e => {
        setEmail(e.target.value)
    }
    const handlePasswordBlur = e => {
        setPassword(e.target.value)
    }

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    let errorMessage

    if (error) {
        errorMessage =
            <p className='text-danger'>Error: {error?.message}</p>
    }
    if (user) {
        navigate('/home')
    }
    const handleSubmitForm = e => {
        e.preventDefault();
        signInWithEmailAndPassword(email, password)


    };

    return (
        <div>
            <div className='container'>
                <div className="row">
                    <div className="col col-lg-6 col-12">
                        <h2 className='mt-3 text-center' style={{ color: 'purple' }}> Login Form</h2>
                        <form onSubmit={handleSubmitForm} className='form-register'>
                            <input className='py-3' onBlur={handleEmailBlur} type="email" name="email" id="" placeholder='Enter your email' required />
                            <input className='py-3' onBlur={handlePasswordBlur} type="password" name="password" id="" placeholder='Password' required />
                            <input className='py-3' style={{ backgroundColor: 'lightblue', fontSize: '18px' }} type="submit" value="Login" />
                        </form>
                        {errorMessage}
                        <p>You have no Account?   <Link to='/register'>Please Register</Link></p>
                    </div>

                    <div className="col col-lg-6 col-12">
                        <div className='mt-5  '>
                            <img className='img-fluid rounded-2' src={login} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;