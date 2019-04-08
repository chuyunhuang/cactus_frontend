import React from 'react';
import './style/editUser.css';

import * as firebase from 'firebase';

import ImageService from '../service/image';
import axios from 'axios';

import ImageUpload from '../components/image';
import SideNav from '../components/sideNav';

class EditUser extends React.Component {

  state = {
    user: '',
    userId: '',
    username: '',
    avatar: ''
  }

  componentDidMount(){
    this.unsubscribe = firebase.auth().onAuthStateChanged((user=>{
      if (user){
        this.setState({
          user: user,
          userId: user.uid})
      }
      else{
        this.setState({user: null, userId: null})
      }
    }))
  }

  saveImage = (url) => {
    const date = Date()
    ImageService.saveImage(url, date)
  }

  handleFileInput = (e) => {
    const firstFile = e.target.files[0]
    const root = firebase.storage().ref() //access the bucket
    const newImage = root.child(firstFile.name)

    newImage.put(firstFile)
      .then((snapshot) => {
        return snapshot.ref.getDownloadURL()
      })
      .then((url) => {
        this.saveImage(url)
        this.setState({
          avatar: url
        })
        console.log('here', this.state)
      })
      .catch((err) => {
        console.log(err)
      })
  }


  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log('here')
    axios.put('http://localhost:3100/user/update', {
      'uid': this.state.userId,
      'username': this.state.username,
      'imgurl': this.state.avatar
    })
      .then((response) => console.log(response))
      .catch(err => {
        console.log(err)
      })
  }

  render() {

    return (
      <>
        <div className="profile-centered-form">
          <div className="profile-form-wrapper">

            <div className="header-row">
              <div className="form-header">Edit My Profile</div>
            </div>

            <form>
              <div className="input-group mb-3">
                <div className="custom-file">
                  <input type="file" className="custom-file-input"
                    aria-describedby="inputGroupFileAddon01" onChange={this.handleFileInput} />
                  <label className="custom-file-label">Choose file</label>
                  <div className="input-group-prepend">
                    <span className="input-group-text" >Change Profile Image</span>
                  </div>
                </div>
              </div>
              <div className="form-group">
                <label>Username</label>
                <input type="text" className="form-control" name="username" onChange={this.handleChange} />
              </div>

            </form>
            <div className="btn-wrapper">
              <div className="btn-row">
                <button type="submit" className="btn border" value="submit" onClick={this.handleSubmit}>
                  <h6>Save Changes</h6>
                </button>
              </div>
            </div>
          </div>
          
        </div>
        <h1>You uploaded image will appear below</h1>
        <ImageUpload image={this.state.avatar} />
      <SideNav />


      </>
    )
  }
}

export default EditUser;