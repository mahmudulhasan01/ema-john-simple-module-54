
import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Register = () => {
    const {user, singInUsingGoogle} = useAuth();
    return (
        <div className="login-form">
            
            <div>
                <h2>Register: Create Account</h2>
                <form>
                    <input type="email" name=""  placeholder="email" />
                    <br /> <br />
                    <input type="password" name=""  placeholder="Your Password" />
                    <br /> <br />
                    <input type="password" name=""  placeholder="Re-enter Password" />
                    <br /><br />
                    <input className="btn-regular" type="submit" value="Submit" />
                    <br /><br /><br />
                    <p>Already have an account <Link to="/login">Login</Link></p>
                    <br />
                    <div>------- or -------</div>
                    <button onClick={singInUsingGoogle} className="btn-regular">Google Sing In</button>
    

                </form>
            </div>
        </div>
    );
};

export default Register;