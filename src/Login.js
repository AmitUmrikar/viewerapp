import React from 'react';
import {useAuth0} from '@auth0/auth0-react';



function Login(){
    const {loginWithRedirect} = useAuth0();
    return (
        <div className="col-md-6 offset-md-3 mt-5 text-center">
            <div className="card">
                <h4 className="card-header">Viewer - Search your wallpaper </h4>
                <div className="card-body">
                    <button className="btn btn-facebook" onClick={loginWithRedirect}>
                        Login
                    </button>
                </div>
            </div>
        </div>);
    }

export default Login;