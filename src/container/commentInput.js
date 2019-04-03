import React from 'react';

class CommentInput extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      comment: ''
    }
  }

  render() {
    return (
      <>

        <div className="comment-header">Comment:</div>
        <div><textarea className="comment-input-field" type="text" placeholder=" Typing....." ></textarea></div>
        <div>< button>Submit Comment</button></div>

      </>
    )
  }
}

export default CommentInput