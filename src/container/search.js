import React from 'react';
import './style/search.css';

import userImg from './image/sunicon.png'

class Search extends React.Component {

    state={
        query :"user",
        username:'',
        post_count: '',
        followers: '',
        following: '',
        error : '' 
    }

    handleInputChange = (e) =>{
        console.log('here', e.target.value)
        this.setState({
            query: e.target.value
        })
       
    }

    handleClick = (e)=>{
    
    }

    //ComponentDidMounth() make the API call

    render() {
        return (
            <>
            <div className="search-bar">
                    <input className="search-iput" type="text" placeholder="search for a user..." onChange={this.handleInputChange}></input>
                    <div className="search-btn" onClick={this.handleClick}>Search</div>
            </div>
                <div className='user-wrapper'>
                    <div className="search-header">Search Results for {this.query}</div>
                    <div className="info-section">
                        <div className="user-info">
                            <div className='user-img'>
                                <img className="user-img" src={userImg} alt="avatar" />
                            </div>
                            <div className="username-info">
                                <h1>{this.state.username}</h1>
                            </div>
                            <div className="post-info">
                                <div className="post-detail">{this.state.post_count}Posts</div>
                                <div className="post-detail">{this.state.follower}Followers</div>
                                <div className="post-detail">{this.state.following}Following</div>
                            </div>
                        </div>
                    </div>
                </div>
            </>

        )
    }
}

export default Search;