import React from 'react';
import * as firebase from 'firebase';

import ImageService from '../service/image';
import axios from 'axios';


class CreatePost extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            user_id: '',
            image: '',
            post_caption: '',
        }
    }

    saveImage =(url) =>{
        const date = Date()
        ImageService.saveImage(url, date)
    }

    handleFileInput = (e)=>{
        const firstFile = e.target.files[0]
        const root = firebase.storage().ref()
        const newImage = root.child(firstFile.name)
        
        newImage.put(firstFile)
        .then((snapshot)=>{
            return snapshot.ref.getDownloadURL()
        })
        .then((url)=>{
            this.saveImage(url)
            return axios.post('http://localhost:3100/post', {
            'author_id': this.state.user_id,    
            'image_url': url,
            'caption': this.state.caption
            })
            .then((response)=>{
                console.log(response)
            })
            .catch((err)=>{
                console.log(err)
            })
        })
    }

    render(){
        return(<>
            <div className="profile-centered-form">
             <div className="profile-form-wrapper">
               
               <div className="header-row">
                   <div className="form-header">Create New Post</div>
                </div>

               <form>
                   <div className="input-group mb-3">
                       <div className="custom-file">
                           <input type="file" className="custom-file-input" id="inputGroupFile01"
                               aria-describedby="inputGroupFileAddon01" onChange={this.handleFileInput} />
                           <label className="custom-file-label" >Choose file</label>
                       </div>
                   </div>
                   <div className="form-group">
                       <label>Caption</label>
                       <input type="password" className="form-control" id="exampleInputPassword1" placeholder=" " />
                   </div>
               </form>
               <div className="btn-wrapper">
                   <div className="btn-row">
                        <button type="submit" className="btn border">
                            <h6>Create Post</h6>
                        </button>
                   </div>
                   
               </div>
           </div>
           </div>
           <div>
               <h1>You've uploaded this image..</h1>
           </div>
        </>)
    }

}

export default CreatePost;