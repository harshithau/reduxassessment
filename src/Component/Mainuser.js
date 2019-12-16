import React, { Component } from 'react';
import AllPost from './AllPost';
import PostForm from './PostForm';
import BrowserHistory from "../Utils/BrowserHistory";



class User extends Component {
    navigate(){
        BrowserHistory.push('/')
      }
render() {
return (
<div>
    <button style={{ marginRight: -963, color: "red" }} onClick={this.navigate}>log out</button>
<PostForm/>
<AllPost />
</div>
);
}
}

export default User;