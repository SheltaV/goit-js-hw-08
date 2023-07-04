import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');

const player = new Player(iframe);

// player.on('timeupdate', onPlay);

function onPlay() {
    localStorage.setItem('videoplayer-current-time', JSON.stringify(1))
}

onPlay()