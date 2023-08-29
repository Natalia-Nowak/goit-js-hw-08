import Player from '@vimeo/player';
var _ = require('lodash');

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const currentTime = localStorage.getItem('videoplayer-current-time');

console.log('pobieram zapisany czas ' + currentTime);
player
  .getDuration()
  .then(function (duration) {
    // duration = the duration of the video in seconds
    console.log(duration);
    if (duration <= currentTime) {
      player.setCurrentTime(0);
    } else {
      player.setCurrentTime(currentTime);
    }
  })
  .catch(function (error) {
    // an error occurred
  });

player.on(
  'timeupdate',
  _.throttle(function () {
    player.getCurrentTime().then(function (seconds) {
      console.log('zapisuje czas ' + seconds);

      localStorage.setItem('videoplayer-current-time', seconds);
    });
  }, 1000)
);
