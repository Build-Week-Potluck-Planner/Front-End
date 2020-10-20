import React, { useState } from 'react';
import * as yup from 'yup';
import axios from 'axios'

export default function logIn (props) {
    const { values, updates, sumbit } = props

    const login = () => {
        const [loginState, setLoginState] = useState({
            username: '',
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
                <label>Username
                    <input 
                    id='username' 
                    type='text' 
                    name='username' 
                    onChange={onChange} 
                    value={values.username} 
                    placeholder='Enter Username' 
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
                    maxLength='12'
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