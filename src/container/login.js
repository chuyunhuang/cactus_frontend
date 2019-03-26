import React from 'react';
import { Redirect } from 'react-router-dom';
import './style/login.css';
import Background from './image/yellowbg2.png';


const bgStyle = {
    height: "100%",
    backgroundImage: `url(${Background})`
};

class Login extends React.Component {

    state = {
        username: '',
        password: '',
        error: ''
    }


    render() {
        return (
            <>
            <div style={{ height: '95vh' }}>
                    <div style={bgStyle}>
                        <div className="login-page">
                            <div className="form-wrapper">
                                <form>
                                    <div className="form-group">
                                        <label for="exampleInputEmail1">Email address</label>
                                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"></input>
                                    </div>
                                    <div className="form-group">
                                        <label for="exampleInputPassword1">Password</label>
                                        <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"></input>
                                    </div>
                                    <button type="submit" className="btn btn-primary">Log In</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
             
            </>
        )
    }

}

export default Login;