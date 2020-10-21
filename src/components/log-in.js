import React, { useState } from 'react';
import * as yup from 'yup';
import axios from 'axios'

export default function Login () {

    const [loginData, setLoginData] = useState({
        username: '',
        password: '',
    });

    const onChange = event => {
        setLoginData({
            ...loginData, 
            [event.target.name]: event.target.value,
        })
    }

    const onSubmit = event => {
        event.preventDefault();
        axios.post('https://potluck-planner-bw.herokuapp.com/users/login', user)
        .then(result => {
            console.log(result.data);
            localStorage.setItem('token', result.data.token);
            push('/Home');
        })
        .catch(error => {
            console.log(error);
        });
    };

    return (
        <div className='logIn inputs'>
            <form onSubmit={onSubmit}>
                <label>Username
                    <input 
                    type='text' 
                    name='username' 
                    onChange={onChange} 
                    placeholder='Enter Username' 
                    maxLength='20'
                    />
                </label>

                <label>Password
                    <input 
                    type='text'
                    name='password'
                    onChange={onChange}
                    placeholder='Enter Password'
                    maxLength='12'
                    />
                </label>

                <div className='enter'>
                    <button>Enter</button>
                </div>
            </form>
        </div>
    )
}