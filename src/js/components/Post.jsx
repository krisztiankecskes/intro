import React, { PureComponent } from 'react';

class Post extends PureComponent {

  handleOnClick = link => () => {
    window.open(link, '_blank');
  }

  render() {

    const { post } = this.props;
    const { title, thumbnail, link } = post;

    return (
      <div className="post" onClick={this.handleOnClick(link)} style={{background: `url(${thumbnail})`, backgroundSize: 'cover', backgroundPosition: 'center center'}}>
        <div className="post__title">
          {title}
        </div>
        <div class="post__overlay"></div>
      </div>
    )
  }

}

export default Post;