import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const videoEl = document.querySelector('#vimeo-player');
const player = new Player(videoEl);
const STORAGE_KEY = 'videoplayer-current-time';

const savePlayerTime = throttle(
  data => localStorage.setItem(STORAGE_KEY, data.seconds),
  1000
);

player.setCurrentTime(localStorage.getItem(STORAGE_KEY)).then();
player.on('timeupdate', savePlayerTime);
