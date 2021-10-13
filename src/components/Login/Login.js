import React from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './login.css'

const Login = () => {
    const {singInUsingGoogle} = useAuth();
    const location = useLocation();
    const history =  useHistory();
    const redirect_uri = location.state?.from || '/shop'

    const handleGoogleLogin = () =>{
        singInUsingGoogle()
        .then(result=>{
            // setUser(result.user);
            // console.log(result.user)
            history.push(redirect_uri)
        })
    }
    return (
        <div className="login-form">

            <div>
                <h2>Login</h2>
                <form>
                    <input type="email" name="" id="" placeholder="Your Email"/>
                    <br />
                    <input type="password" name=""  placeholder="Password" />
                    <br /> <br />
                    <input className="btn-regular" type="submit" value="submit" />
                </form>
                <p>new to ema-john <Link to="/register">Create account</Link></p>
                <br />
                <div>------- or -------</div>
                <button onClick={handleGoogleLogin} className="btn-regular">Google Sing In</button>

            </div>
            
        </div>
    );
};

export default Login;