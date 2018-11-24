import "@babel/polyfill";
import axios from 'axios';

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

(function () {
  getAvatar();
})();