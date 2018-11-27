import React, { PureComponent } from 'react';

class Post extends PureComponent {

  handleOnClick = link => () => {
    console.log(link)
    window.open(link, '_blank');
  }

  render() {

    const { post } = this.props;
    const { title, thumbnail, link } = post;

    return (
      <div className="post" onClick={this.handleOnClick(link)} style={{background: `url(${thumbnail})`, backgroundSize: 'cover', backgroundPosition: 'center center'}}>
      </div>
    )
  }

}

export default Post;