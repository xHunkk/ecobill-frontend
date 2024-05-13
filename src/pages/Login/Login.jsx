import React from 'react'
import EmailLogin from '../../components/EmailLogin'
import PhoneLogin from '../../components/PhoneLogin'

const Login = () => {
    return (
        <div>
            <PhoneLogin />
            <EmailLogin />
        </div>
    )
}

export default Login