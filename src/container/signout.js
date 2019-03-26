import React from 'react';
import firebase from '../firebase';
import {Redirect} from 'react-router-dom';
import './style/logout.css';


class Logout extends React.Component{

    componentDidMount() {
        firebase.auth().signOut()
      }

    render(){
        return(
            <h1>You are logged out...</h1>
        )
    }
}

export default Logout;