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
        error : '', 
    }

    handleChange = (e) =>{
        console.log('here', e.target.value)
        this.setState({
            query: e.target.value
        })
    }

    handleClick = () =>{
        const {query} = this.state 
        axios({
            url: `http://localhost:3100/user/searchuser/${query}`,
            method: 'get'
        })
        .then((data)=>{
            this.setState({
                useruid: data.data.data[0].useruid,
                username: data.data.data[0].username,
                avatar: data.data.data[0].avatar
            })
            console.log('search', data)
            axios({
                url: `http://localhost:3100/post/userpost/${this.state.useruid}`,
                method: 'get'
            })
            .then((data)=>{
                this.setState({
                    postcounts: data.data.data.length
                })
                console.log('to get post count', data.data.data.length)
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
                    <div className="search-header">Search Results for {this.state.query}</div>
                    <div className="info-section">
                        <div className="user-info">
                            <div className='user-img'>
                                <img className="user-img" src={this.state.avatar} alt="avatar" />
                            </div>
                            <div className="username-info">
                                <h1>Username: {this.state.username}</h1>
                                <h1>Post Count: {this.state.postcounts}</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </>

        )
    }
}

export default Search;