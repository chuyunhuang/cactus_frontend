import React from 'react';
import './style/editUser.css';

class EditUser extends React.Component {
    render(){
        return (
            <>
            <div className="profile-centered-form">
             <div className="profile-form-wrapper">
               
               <div className="header-row">
                   <div className="form-header">Edit My Profile</div>
                </div>

               <form>
                   <div className="input-group mb-3">
                       <div className="input-group-prepend">
                           <span className="input-group-text" id="inputGroupFileAddon01">Change Profile Image</span>
                       </div>
                       <div className="custom-file">
                           <input type="file" className="custom-file-input" id="inputGroupFile01"
                               aria-describedby="inputGroupFileAddon01" />
                           <label className="custom-file-label" for="inputGroupFile01">Choose file</label>
                       </div>
                   </div>
                   <div className="form-group">
                       <label for="exampleInputPassword1">Username</label>
                       <input type="password" className="form-control" id="exampleInputPassword1" placeholder=" " />
                   </div>
                   
                   <div className="form-group">
                       <label for="exampleInputEmail1">Email address</label>
                       <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                           placeholder="" />
                   </div>
                   <div className="form-group">
                       <label for="exampleInputPassword1">Password</label>
                       <input type="password" className="form-control" id="exampleInputPassword1" placeholder="" />
                   </div>
               </form>
               <div className="btn-wrapper">
                   <div className="btn-row">
                        <button type="submit" className="btn border">
                            <h6>Save Changes</h6>
                        </button>
                   </div>
                   <div className="btn-row">
                         <button type="submit" className="btn border">
                            <h6>Delete My Account</h6>
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