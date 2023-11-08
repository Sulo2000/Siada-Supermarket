import { useState } from "react"
import { FaInstagram, FaFacebook, FaTwitter, FaYoutube, FaRegEnvelope, FaLock, FaUnlockAlt } from "react-icons/fa"

export default function LoginPage() {
    const [pass, setPass] = useState(false)
    return (
        <div className="LoginPage__container" data-aos='fade-up'>
            <div className="login__container">
                <div className="LoginWelcome">
                    <h2>Siada</h2>
                    <div className="welcome">
                        <h3>Welcome!</h3>
                        <h4>To Our Supermarket</h4>
                        <p>Follow Us On</p>
                        <div className="social__section">
                            <FaInstagram />
                            <FaFacebook />
                            <FaTwitter />
                            <FaYoutube />
                        </div>
                    </div>
                </div>
                <div className="Login__page">
                    <h3>Sign in</h3>
                    <div className="loginInputs">
                        <label>
                            <input type="email" placeholder="Email" />
                            <FaRegEnvelope />
                        </label>
                        <label>
                            <input type={pass ? "Text" : "password"} placeholder="Password" />
                            {pass ? <FaUnlockAlt onClick={() => setPass(false)} /> : <FaLock onClick={() => setPass(true)} />}
                        </label>
                        <div className="remember__section">
                            <label>
                                <input type="checkbox" name="" id="" />
                                <p>Remember Me</p>
                            </label>
                            <p>Forgot Password?</p>
                        </div>
                        <input type="submit" value="Sign in" />
                    </div>
                </div>
            </div>
            <div className="registration__container"></div>
        </div>

    )
}
