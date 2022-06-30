import React from 'react';
import { Link, Route} from "react-router-dom";

function AuthForm() {
    return (
        <form className='authform'>
            <h3 className='authform__title'></h3>
            <input
                className='auth__input'
                type="email"
                placeholder='Email'
            />
            <input
                className='auth__input'
                type="password"
                placeholder='Пароль'
            />
            <button className='auth__button'></button>
            <p className='auth__text'></p>
            <link className='auth__link'></link>
        </form>
    )
}

export default AuthForm;