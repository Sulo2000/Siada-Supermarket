import { Link } from 'react-router-dom';
import { BsFacebook } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { useState } from 'react';
import {AiFillEyeInvisible, AiFillEye} from 'react-icons/ai'

export default function Login() {
    const [pass,setPass] = useState(false)
  return (
    <div className="loginPage">
        <div className='login__container'>
        <div className="login__container__log">
            <div className="log">
                <h2>Login</h2>
                <Link to={'/Registration'}><button className='reg'>Registration</button></Link>
            </div>
            <div className="email">
                <h4>Email</h4>
                <input type="email" placeholder='user@email.com'/>
                <h4>Password</h4>
                <div className="pass">
                    <input type={pass ? "password" :  'text'}  placeholder='********'/ >
                    {pass ? <AiFillEyeInvisible onClick={() => setPass(!pass)}/> : <AiFillEye  onClick={() => setPass(!pass)}/>}
                </div>
                <button>Log in</button>
                <p>Forgot password?</p>
                <h3>Or login via social account</h3>
            </div>
            <div className="google">
                <button>
                    <BsFacebook />
                    <p>Continue With</p>
                </button>
                <button>
                    <FcGoogle />
                    <p>Continue With</p>
                </button>
            </div>
        </div>
        <div className="picture">
            <img src="img/login/p1.png" alt="Img" />
        </div>
    </div>
    </div>
  )
} 
