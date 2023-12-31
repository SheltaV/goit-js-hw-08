import Player from '@vimeo/player';
const throttle = require('lodash.throttle');

const iframe = document.querySelector('iframe');

const player = new Player(iframe);

player.on('timeupdate', throttle(onPlay, 1000));

function onPlay({seconds}) {
    localStorage.setItem('videoplayer-current-time', JSON.stringify(seconds))
};

const timing = JSON.parse(localStorage.getItem('videoplayer-current-time'))

player.setCurrentTime(timing).then(function(seconds) {}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            break;
        default:
            break;
    }
});