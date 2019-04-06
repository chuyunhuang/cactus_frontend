import React from 'react';
import * as firebase from 'firebase';
import ImageService from '../service/image';
import axios from 'axios';
import AuthContext from '../context/auth';

class CreatePost extends React.Component {

  static contextType = AuthContext;

  constructor(props) {
    super(props);

    this.state = {
      useruid: '',
      image: '',
      post_caption: '',
    }
  }

  saveImage = (url) => {
    const date = Date()
    ImageService.saveImage(url, date)
  }

  handleFileInput = (e) => {
    const firstFile = e.target.files[0]
    const root = firebase.storage().ref()
    const newImage = root.child(firstFile.name)

    newImage.put(firstFile)
      .then((snapshot) => {
        return snapshot.ref.getDownloadURL()
      })
      .then((url) => {
        this.saveImage(url)
        this.setState({
          image: url
        })
        console.log('here', this.state.image)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  handleChange = (e) => {
    const text = e.target.value
    this.setState({
      post_caption: text
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3100/post/', {
      'author_id': this.context.uid,
      'image_url': this.state.image,
      'caption': this.state.post_caption
    })
    .then(res=>{
      console.log(res)
    })
    .catch(err=>{
      console.log(err)
      })
  }

  render() {
    console.log(this.context.uid)
    return (<>
  
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
              <input type="text" className="form-control" id="exampleInputPassword1" placeholder=" " onChange={this.handleChange} />
            </div>
          </form>
          <div className="btn-wrapper">
            <div className="btn-row">
              <button type="submit" className="btn border" onClick={this.handleSubmit}>
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