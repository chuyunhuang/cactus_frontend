import React from 'react';
import './style/editUser.css';

import * as firebase from 'firebase';

import ImageService from '../service/image';

class EditUser extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            image: '', //this requires uploading img to firebase
            email: '',
            password: '',

        }

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
            })
    }

    
    // handleInputChange = (e) => {
    //     const target = e.target
    //     const value = target.value
    //     const name = target.name

        // this.setState({
        //     [name]: value
        // })

    // }

    handleSubmit = (e) => {
        alert('Your profile is updated!')
        e.preventDefault();

        //API call to BE to update/PUT user data
    }


    render() {
       
        return (
            <>
                <div className="profile-centered-form">
                    <div className="profile-form-wrapper">

                        <div className="header-row">
                            <div className="form-header">Edit My Profile</div>
                        </div>

                        <form onSubmit={this.handleSubmit}>
                            <div className="input-group mb-3">
                                <div className="custom-file">
                                    <input type="file" className="custom-file-input" id="inputGroupFile01"
                                        aria-describedby="inputGroupFileAddon01" onChange={this.handleFileInput} />
                                    <label className="custom-file-label">Choose file</label>
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" id="inputGroupFileAddon01" onClick={this.displayUpload} >Change Profile Image</span>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <label>Username</label>
                                <input type="text" className="form-control" id="exampleInputPassword1" name="username" />
                            </div>

                            <div className="form-group">
                                <label>Email address</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="email" />
                            </div>
                            <div className="form-group">
                                <label >Password</label>
                                <input type="password" className="form-control" id="exampleInputPassword1" name="password" />
                            </div>
                        </form>
                        <div className="btn-wrapper">
                            <div className="btn-row">
                                <button type="submit" className="btn border" value="submit">
                                    <h6>Save Changes</h6>
                                </button>
                            </div>
                            {/* <div className="btn-row">
                         <button type="submit" className="btn border">
                            <h6>Delete My Account</h6>
                        </button>
                    </div> */}
                        </div>
                    </div>
                </div>
                


            </>
        )
    }
}

export default EditUser;