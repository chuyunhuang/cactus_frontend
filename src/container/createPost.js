import React from 'react';

class CreatePost extends React.Component{
    render(){
        return(<>
            <div className="profile-centered-form">
             <div className="profile-form-wrapper">
               
               <div className="header-row">
                   <div className="form-header">Create New Post</div>
                </div>

               <form>
                   <div className="input-group mb-3">
                       <div className="input-group-prepend">
                           <span className="input-group-text" id="inputGroupFileAddon01">Upload Image</span>
                       </div>
                       <div className="custom-file">
                           <input type="file" className="custom-file-input" id="inputGroupFile01"
                               aria-describedby="inputGroupFileAddon01" />
                           <label className="custom-file-label" for="inputGroupFile01">Choose file</label>
                       </div>
                   </div>
                   <div className="form-group">
                       <label for="exampleInputPassword1">Caption</label>
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
        </>)
    }

}

export default CreatePost;