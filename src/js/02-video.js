import Player from '@vimeo/player';
var _ = require('lodash');

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const currentTime = localStorage.getItem('videoplayer-current-time');

console.log('pobieram zapisany czas ' + currentTime);
player.setCurrentTime(currentTime);

player.on(
  'timeupdate',
  _.throttle(function () {
    player.getCurrentTime().then(function (seconds) {
      console.log('zapisuje czas ' + seconds);

      localStorage.setItem('videoplayer-current-time', seconds);
    });
  }, 1000)
);
