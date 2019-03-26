import React from 'react';
import AuthContext from '../context/auth';

import './style/home.css';

class Home extends React.Component {



    render() {
        return (
            <AuthContext.Consumer>
                {
                    (user)=>{
                        if(user){
                            return(
                                <>
                                <div className="homepage-wrapper">
                                    <div className="homepage-msg">Welcome Back!</div>
                                    <div className="user">{user.email}</div>
                                </div>
                                </>
                            )
                        } else{
                            return(
                                <>
                                <div className="logout-wrapper">
                                    <div>OH NO! You're not logged in!</div>
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

export default Home;