//
// Popcorn v2
// Let's go.
//
// Made by @joericho
// Licensed under MIT
//

// global variables
var vid;
var playBtn;
var clickPlay;
var slider;
var current;
var duration;
var muteBtn;
var fullScreen;

function intializePlayer() {
    // object references
    vid         = document.getElementById("video");
    playBtn     = document.getElementById("video--play");
    clickPlay   = document.getElementById("video--block");
    slider      = document.getElementById("video--slider");
    current     = document.getElementById("video--current");
    duration    = document.getElementById("video--duration");
    muteBtn     = document.getElementById("video--mute");
    fullScreen  = document.getElementById("video--full");

    // event listeners
    playBtn.addEventListener("click", playPause, false);
    clickPlay.addEventListener("click", clickPlay, false);
    slider.addEventListener("change", vidSeek, false);
    vid.addEventListener("timeupdate", seektimeupdate, false);
    muteBtn.addEventListener("click", vidmute, false);
    fullScreen.addEventListener("click", toggleFullScreen, false);
}

window.onload = intializePlayer;

// play and pause button
function playPause() {
    if (vid.paused) {
        vid.play();
        playBtn.innerHTML = "<i class='fa fa-pause'></i>";
    } else {
        vid.pause();
        playBtn.innerHTML = "<i class='fa fa-play'></i>";
    }
}

// video scroller
function vidSeek() {
    var seekto = vid.duration * (slider.value / 100);
    vid.currentTime = seekto;
}

// updating time, with maths & shit
function seektimeupdate() {
    var nt       = vid.currentTime * (100 / vid.duration);
    slider.value = nt;
    var curmins  = Math.floor(vid.currentTime / 60);
    var cursecs  = Math.floor(vid.currentTime - curmins * 60);
    var durmins  = Math.floor(vid.duration / 60);
    var dursecs  = Math.floor(vid.duration - durmins * 60);

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
    current.innerHTML = curmins + ":" + cursecs;
    duration.innerHTML = durmins + ":" + dursecs;
}

// mute & unmute the video
function vidmute() {
    if (vid.muted) {
        vid.muted = false;
        muteBtn.innerHTML = "<i class='fa fa-volume-up'></i>";
    } else {
        vid.muted = true;
        muteBtn.innerHTML = "<i class='fa fa-volume-off'></i>";
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
