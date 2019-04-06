import React from 'react';
import './style/editUser.css';

import * as firebase from 'firebase';

import ImageService from '../service/image';
import axios from 'axios';

class EditUser extends React.Component {

  state = {
    username: '',
    avatar: ''
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
        console.log('here', this.state.image)
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
    axios.put('http://localhost:3100/user/', {
      'username': this.state.username,
      'avatar': this.state.avatar
    })
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



      </>
    )
  }
}

export default EditUser;