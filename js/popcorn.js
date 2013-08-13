// basic variables
var vid, playbtn, slider, curtimetext, durtimetext, mutebtn, fullscreenbtn;


function intializePlayer() {
    // Object references
    vid = document.getElementById("mainVideo");
    playbtn = document.getElementById("playPausebtn");
    slider = document.getElementById("slider");
    curtimetext = document.getElementById("curtimetext");
    durtimetext = document.getElementById("durtimetext");
    mutebtn = document.getElementById("mutebtn");
    fullscreenbtn = document.getElementById("fullscreenbtn");
    // Event listeners
    playbtn.addEventListener("click", playPause, false);
    slider.addEventListener("change", vidSeek, false);
    vid.addEventListener("timeupdate", seektimeupdate, false);
    mutebtn.addEventListener("click", vidmute, false);
    fullscreenbtn.addEventListener("click", toggleFullScreen, false);
}
window.onload = intializePlayer;

// play and pause button
function playPause() {
    if (vid.paused) {
        vid.play();
        playbtn.innerHTML = "<i class='icon-pause'></i>";
    } else {
        vid.pause();
        playbtn.innerHTML = "<i class='icon-play'></i>";
    }
}

// video scroller
function vidSeek() {
    var seekto = vid.duration * (slider.value / 100);
    vid.currentTime = seekto;
}

// updating time, wit maths & shit
function seektimeupdate() {
    var nt = vid.currentTime * (100 / vid.duration);
    slider.value = nt;
    var curmins = Math.floor(vid.currentTime / 60);
    var cursecs = Math.floor(vid.currentTime - curmins * 60);
    var durmins = Math.floor(vid.duration / 60);
    var dursecs = Math.floor(vid.duration - durmins * 60);
    if (cursecs < 10) {
        cursecs = "0" + cursecs;
    }
    if (dursecs < 10) {
        dursecs = "0" + dursecs;
    }
    if (curmins < 10) {
        curmins = "0" + curmins;
    }
    if (durmins < 10) {
        durmins = "0" + durmins;
    }
    curtimetext.innerHTML = curmins + ":" + cursecs;
    durtimetext.innerHTML = durmins + ":" + dursecs;
}

// mute & unmute the video
function vidmute() {
    if (vid.muted) {
        vid.muted = false;
        mutebtn.innerHTML = "<i class='icon-unmute'></i>";
    } else {
        vid.muted = true;
        mutebtn.innerHTML = "<i class='icon-mute'></i>";
    }
}

// full screen
function toggleFullScreen() {
    if (vid.requestFullScreen) {
        vid.requestFullScreen();
    } else if (vid.webkitRequestFullScreen) {
        vid.webkitRequestFullScreen();
    } else if (vid.mozRequestFullScreen) {
        vid.mozRequestFullScreen();
    }
}