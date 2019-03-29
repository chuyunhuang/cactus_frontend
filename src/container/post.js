import React from "react";
import AuthContext from '../context/auth';

import sunIcon from './image/sunicon.png';
import robImg from './image/userImg.jpg';

class Post extends React.Component {

    state = {
        caption: '',
        image: '',
        error: '',
    }

    render() {
        return (
            <AuthContext.Consumer>
                {
                    (user) => {
                        if (user) {
                            return (
                                <>
                                    <div class="card-flex-grid">
                                        <div class="card">
                                            <div class="icon-bar">
                                                <img src={sunIcon} class="icon" alt="sun"></img>
                                            </div>
                                            <img src={robImg} class="card-img-top" alt="..."></img>
                                            <div class="card-body">
                                                <p>I’ve had this bad boy for 3 years. Almost lost em but growing strong.</p>
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

export default Post;