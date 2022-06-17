import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import registration from '../../src/images/registraton.png'
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';

import auth from '../firebase.init';


const Register = () => {
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [confrimPass, setconfrimPass] = useState('')
    const [customError, setCustomError] = useState('')
    const navigate = useNavigate()

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    let errorMessage

    if (error) {
        errorMessage =
            <p className='text-danger'>Error: {error?.message}</p>
    }

    if (user) {
        navigate('/home')
    }


    const handleEmailBlur = e => {
        setEmail(e.target.value)
    }

    const handlePhoneBlur = e => {
        setPhone(e.target.value)
    }

    const handleNameBlur = e => {
        setName(e.target.value)
    }

    const handlePasswordBlur = e => {
        setPassword(e.target.value)
    }
    const handleConfirmPassBlur = e => {
        setconfrimPass(e.target.value)
    }

    const handleSubmitForm = e => {
        e.preventDefault();
        if (password !== confrimPass) {
            setCustomError('Please enter the valid password')
        }
        else {
            createUserWithEmailAndPassword(email, password.phone)
            alert(`Email is ${email} and password is ${password} and Name is ${name} and phone number is ${phone}`)
        }
    }

    return (
        <div className='container'>
            <div className="row">
                <div className="col col-lg-6 col-12 ">
                    <h2 className='mt-3 text-center' style={{ color: 'purple' }}> Register Form</h2>
                    <form onSubmit={handleSubmitForm} className='form-register'>
                        <input className='py-3' onBlur={handleNameBlur} name="name" type="text" placeholder='Name' />
                        <input className='py-3' onBlur={handleEmailBlur} type="email" name="email" id="" placeholder='Enter your email' required />
                        <input className='py-3' onBlur={handlePhoneBlur} type="number" name="phone" id="" placeholder='Enter your phone number' required />
                        <input className='py-3' onBlur={handlePasswordBlur} type="password" name="password" id="" placeholder='Password' required />
                        <input className='py-3' onBlur={handleConfirmPassBlur} type="password" name="ConfirmPassword" id="" placeholder='Confirm Password' required />
                        <p><small className='text-danger'>{customError}</small></p>
                        <input className='py-3' style={{ backgroundColor: 'lightblue', fontSize: '18px' }} type="submit" value="Register" />
                    </form>
                    {errorMessage}

                    <p>Already have an account?   <Link to='/login'>Please Login</Link></p>
                </div>
                <div className="col col-lg-6 col-12 ">
                    <div className='mt-5  '>
                        <img className='img-fluid rounded-2 mt-5' src={registration} alt="" />
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Register;