
import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../hooks/useAuth';

const Login = () => {
    const {signInUsingGoogle} = useAuth();
    const history = useHistory();
    const location = useLocation();
    

    return (
        <div>
            <h2>Please Login</h2>
            <button onClick={() => signInUsingGoogle(history, location)} className="btn btn-warning">Sign In with Google</button>
        </div>
    );
};

export default Login;




