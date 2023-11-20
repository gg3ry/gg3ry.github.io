function videoselector (videoLink) {
    document.getElementById('video').src=videoLink;
    document.getElementById('play').style.display="block";
    document.getElementById('pause').style.display="none";
    y = 0;
    v = 2;
}
let v = 2;
let y = 0;
function pl() {
    vid = document.getElementById('video')
    playbutton = document.getElementById('play');
    pausebutton = document.getElementById('pause');
    if (y==0)  {
        vid.pause();
        playbutton.style.display = 'none';
        pausebutton.style.display = 'block';
        y = 1;
    }
    else if (y==1) {
        vid.play();
        playbutton.style.display = 'block';
        pausebutton.style.display = 'none';
        y = 0;
    }
}
function vol() {
    vid = document.getElementById('video');
    high = document.getElementById('high');
    muted = document.getElementById('muted');
    medium = document.getElementById('medium');

    if (v==2) {
        high.style.display = 'none';
        muted.style.display = 'block';
        v = 0;
        vid.volume = 0;
    }
    else if (v==0) {
        muted.style.display = 'none';
        medium.style.display = 'block';
        v = 1;
        vid.volume = 0.5;
    }
    else {
        medium.style.display = 'none';
        high.style.display = 'block';
        v = 2;
        vid.volume = 1;
    }
}
function fs() {
    vid = document.getElementById('video');
    if (vid.requestFullscreen) {
        vid.requestFullscreen();
      } else if (vid.webkitRequestFullscreen) {
        vi.webkitRequestFullscreen();
      } else if (vid.msRequestFullscreen) {
        vid.msRequestFullscreen();
      }
}
