import React, { Component } from 'react';
import { connect } from 'react-redux';
import EditComponent from './EditComponent';
class PostForm extends Component {
handleSubmit = (e) => {
e.preventDefault();
 const title = this.getTitle.value;
 const message = this.getMessage.value;
 const data = {
  id: new Date(),
  title,
  message,
  editing: false
 }
 this.props.dispatch({
 type: 'ADD_POST',
 data
 })
 this.getTitle.value = '';
 this.getMessage.value = '';
}

render() {
return (
<div className="post-container">
  <h1 className="post_heading">Create Post</h1>
  <form className="form" onSubmit={this.handleSubmit} >
   <input required type="text" ref={(input) => this.getTitle = input}
   placeholder="Enter Post Title" /><br /><br />
   <input required rows="5" ref={(input) => this.getMessage = input}
   cols="28" placeholder="Enter Post" /><br /><br />
 
   <button>Post</button>
  </form>
</div>
);
}
}
export default connect()(PostForm);