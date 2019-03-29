import React from 'react';
import './style/search.css';

import userImg from './image/sunicon.png'

class Search extends React.Component {

    state={
        avatar: '',
        username: 'Yun_n1992',
        post_count: 1,
        follower: 200,
        following: 10
    }

    //ComponentDidMounth() make the API call

    render() {
        return (
            <>
            <div className="search-bar">
                    <input className="search-iput" type="text" placeholder="search for a user..."></input>
                    <div className="search-btn">Search</div>
            </div>
                <div className='user-wrapper'>
                    <div className="search-header">Search Results..</div>
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