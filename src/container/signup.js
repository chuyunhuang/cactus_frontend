import React from 'react';
import firebase from '../firebase';
import AuthContext from "../context/auth";
import { Redirect } from 'react-router-dom';

import './style/signup.css';
import Background from './image/bluebg2.png';

const bgStyle = {
    height: "100%",
    backgroundImage: `url(${Background})`
};

class SignUp extends React.Component {

    state = {
        email: '',
        password: '',
        error: ''
    }

    handleChange =(e)=>{
        this.setState({[e.target.name]: e.target.value})
    }

    handleSubmit = (e) =>{
        e.preventDefault(); 

        const {email, password} = this.state
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(response=>{
                console.log('Return:', response)
                //promise function to upload file, return the url
                //.then((url)=> do axois request to your server)
            })
            .catch(err =>{
                const {message} = err
                this.setState({error: message})
            })
    }

    render() {
        const {email, password, error}= this.state; 
        const displayError = error === '' ? '' : <div className="alert alert-danger" role="alert">{error}</div>

        return (
            <AuthContext.Consumer>
                {
                    (user)=>{
                        if(user){
                           return <Redirect to="/" />
                        } else{
                            return(
                                <>
                                {displayError}
                                    <div style={{ height: '95vh' }}>
                                        <div style={bgStyle}>
                                            <div className="login-page">
                                                <div className="form-wrapper">
                                                    <form>
                                                        <div className="form-group">
                                                            <label htmlFor="exampleInputEmail1">Email address</label>
                                                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" name="email" value={email} onChange={this.handleChange}></input>
                                                        </div>
                                                        <div className="form-group">
                                                            <label htmlFor="exampleInputPassword1">Password</label>
                                                            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" name="password" value={password} onChange={this.handleChange}></input>
                                                        </div>
                                                        <button type="submit" className="btn btn-primary" onClick={this.handleSubmit}>Sign Up</button>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )
                        }
                    }
                }

            </AuthContext.Consumer>
        )
    }

}

export default SignUp;