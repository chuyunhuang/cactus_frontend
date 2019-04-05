import React from 'react';

const SingleView = (props) => {
  return (
    <>
      <img className="single-img" src={props.image} alt="example" />
      <div className="content-content"></div>
      <div className="body-text content-row">{props.text}</div>
    </>
  )

}

// class SingleView extends React.Component{
//   constructor(props){
//     super(props)
//     this.state =[
//       {
//       post_img: '',
//       post_caption: ''
//       }
//     ]
//   }

//   componentDidMount(){
//     axios.get('http://localhost:3100/post/:author_id')
//     .then(data=>{
//       console.log('post data', data.data.data[0].caption)

//       this.setState({
//         'post_img': data.data.data[0].image_url,
//         'post_caption': data.data.data[0].caption
//       })
//     })
//   }


//   render(){
//     return (
//       <>
//         <img className="single-img" src={this.state.post_img} alt="example" />
//         <div className="content-content"></div>
//         <div className="body-text content-row">{this.state.post_caption}</div>
//       </>
//     )

//   }

// } 


export default SingleView;