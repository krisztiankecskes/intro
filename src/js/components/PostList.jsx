import React, { PureComponent } from 'react';
import Post from './Post';

class PostList extends PureComponent {

  renderPost = (item, index) => {
    return(
      <Post key={index} post={item}></Post>
    );
  }

  render() {
    return this.props.posts.map(this.renderPost);
  }

}

export default PostList;