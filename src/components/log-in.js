import React, { useState } from 'react';
import * as yup from 'yup';
import axios from 'axios'

export default function logIn (props) {
    const { values, updates, sumbit } = props

    const login = () => {
        const [loginState, setLoginState] = useState({
            email: '',
            password: '',
        });

        const onChange = event => {
            const {name, value} = event.target;
            update(name, value);
        }

    const onSubmit = event => {
        event.preventDefault();
        sumbit();
    }

    return (
        <form onSubmit={onSubmit}>
            <div className='logIn inputs'>
                <label>Email
                    <input 
                    id='email' 
                    type='email' 
                    name='email' 
                    onChange={onChange} 
                    value={values.email} 
                    placeholder='Enter Email' 
                    maxLength='35'
                    />
                </label>

                <label>Password
                    <input 
                    id='password'
                    type='text'
                    name='password'
                    onChange={onChange}
                    value={values.password}
                    placeholder='Enter Password'
                    Maxlength='12'
                    />
                </label>

                <div className='enter'>
                <button>Enter</button>
                </div>
            </div>
        </form>
    )
    }
}