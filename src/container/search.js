import React from 'react';
import './style/search.css';

import axios from 'axios';

class Search extends React.Component {

    state={
        query : '',
        useruid: '',
        username: '',
        avatar: '',
        postcounts: '',
        followingcounts: '',
        error : '', 
    }

    handleChange = (e) =>{
        console.log('here', e.target.value)
        this.setState({
            query: e.target.value
        })
    }

    handleClick = () =>{
        axios({
            url: `http://localhost:3100/user/searchuser/${this.state.query}`,
            method: 'get'
        })
        .then((data)=>{
            this.setState({
                useruid: data.data.data[0].useruid,
                username: data.data.data[0].username,
                avatar: data.data.data[0].avatar
            })
            axios({
                url: `http://localhost:3100/post/userpost/${this.state.useruid}`,
                method: 'get'
            })
            .then((data)=>{
                this.setState({
                    postcounts: data.data.data.length
                })
                axios({
                    url: `http://localhost:3100/follower/${this.state.useruid}`,
                    method: 'get'
                })
                .then((data)=>{
                    this.setState({
                        followingcounts: data.data.following.length
                    })
                    console.log('my follower', data.data.following.length)
                })
                // console.log('to get post count', data.data.data.length)
            })
        })

        
    }


    render() {
        
        return (
            <>
            <div className="search-bar">
                    <input className="search-iput" type="text" placeholder="search by username..." onChange={this.handleChange}></input>
                    <div className="search-btn" onClick={this.handleClick}>Search</div>
            </div>
                <div className='user-wrapper'>
                    <div className="search-header">Search Result for {this.state.query}</div>
                    
                    <div className="info-section">
                        <div className="user-info">
                            <div>
                                <img className="user-img-search" src={this.state.avatar} alt="avatar" />
                            </div>
                        </div>
                        <div className="user-text">
                            <div className="baseline" >Username: {this.state.username}</div>
                            <div className="baseline">Post Count: {this.state.postcounts}</div>
                            <div className="baseline">Following Users: {this.state.followingcounts}</div>
                        </div>
                        
                    </div>
                </div>
            </>

        )
    }
}

export default Search;