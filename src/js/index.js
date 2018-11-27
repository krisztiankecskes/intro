import "@babel/polyfill";
import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import PostList from './components/PostList';

const getAvatar = async function() {

  try {
    const { data: { avatar_url } } = await axios.get('https://api.github.com/users/krisztiankecskes');
    if(!avatar_url) return false;

    const avatar = document.querySelector('.header__profile-picture');
    if(!avatar) return false;

    avatar.style.backgroundImage = `url(${avatar_url})`;
    avatar.style.backgroundSize = 'cover';

  } catch(e) {
    console.log('Getting avatar url is failed!');
  }

};

const getFreshFeed = async() => {
  try {
    const mediumRssFeed = "https://medium.com/feed/@kozakrisz";
		const rssToJsonApi = "https://api.rss2json.com/v1/api.json";
		const data = { params: { rss_url: mediumRssFeed } };
    const { data: { items } } =  await axios.get(rssToJsonApi, data);
    if(items.length) {
      generateArticleList(items.filter((item)=>item.categories.length));
    }
  } catch(e) {
    console.log('Getting fresh feed from Medium is failed!');
  }
}

const generateArticleList = (items) => {

  ReactDOM.render(<PostList posts={items} />, document.querySelector('.posts'));

}

(function () {
  getAvatar();
  getFreshFeed();
})();