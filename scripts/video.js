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
        medium.style.display = 'none';
        v = 0;
        vid.volume = 0;
    }
    else if (v==0) {
        muted.style.display = 'none';
        high.style.display = 'none'
        medium.style.display = 'block';
        v = 1;
        vid.volume = 0.3;
    }
    else {
        medium.style.display = 'none';
        muted.style.display = 'none';
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
let a = 2;
function billentyu(k) {
    vid = document.getElementById('video');
    high = document.getElementById('high');
    muted = document.getElementById('muted');
    medium = document.getElementById('medium');
    if (k.code === 'KeyM') {
        if (v != 0) {
            a = v
            v=0; 
            vid.volume = 0;
            muted.style.display = 'block';
            high.style.display = 'none';
            medium.style.display = 'none';
        }
        else if (a == 1) {
        v = a;
        vid.volume = 0.3;
        muted.style.display = 'none'
        high.style.display = 'none';
        medium.style.display = 'block';
        }
        else if (a == 2) { 
            v = a;
            vid.volume = 1;
            high.style.display = 'block';
            muted.style.display = 'none';
            medium.style.display = 'none';
        }
    }
    else if (k.code === 'Space' || k.key === ' ') {
        pl();
    }
    else if (k.code === 'ArrowDown') {
        if (v==2) {
            v = 1;
            vid.volume = 0.3;
            high.style.display = 'none';
            medium.style.display = 'block';
        }
        else if (v==1) {
            v = 0;
            vid.volume = 0;
            medium.style.display = 'none'
            muted.style.display = 'block'
            high.style.display = 'none'
        }
    }
    else if (k.code === 'ArrowUp') {
        if (v==0) {
            v = 1;
            vid.volume = 0.3;
            high.style.display = 'none';
            muted.style.display = 'none';
            medium.style.display = 'block';
        }
        else if (v==1) {
            v = 2;
            vid.volume = 1;
            high.style.display = 'block';
            muted.style.display = 'none';
            medium.style.display = 'none';
        }
    }
    else if (k.code === 'ArrowRight') {
        vid.currentTime += 5;
    }
    else if (k.code === 'ArrowLeft') {
        vid.currentTime -= 5;
    }
    
}
document.addEventListener('DOMContentLoaded', function() {
    document.addEventListener('keydown', billentyu);
});
