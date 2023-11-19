function mute() {
    muted = document.getElementById("muted");
    high = document.getElementById("high");
    aud = document.getElementById('au');
    if (a==1) {
        aud.volume = 0;
        high.style.display = 'none';
        muted.style.display = 'block';
        a = 0;
    }
    else {
        aud.volume = 1;
        muted.style.display = 'none';
        high.style.display = 'block';
        a = 1;
    }
}

let a = 1;
