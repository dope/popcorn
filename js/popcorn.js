//
// Popcorn V1
// A run through of what's what.
//
// Made by @joericho
// Licensed under MIT
//

// basic variables
var vid;
var playbtn;
var playbtn;
var clickplay;
var slider;
var current;
var duration;
var muteBtn;
var fullScreen;

function intializePlayer() {
    // object references
    // main vid class
    vid = document.getElementById("mainVideo");
    // play/pause button
    playbtn = document.getElementById("playPause");
    // click the video to play
    clickplay = document.getElementById("mainVideo");
    // time slider
    slider = document.getElementById("slider");
    // curent time
    current = document.getElementById("current");
    // duration time
    duration = document.getElementById("duration");
    // mute button
    muteBtn = document.getElementById("muteBtn");
    // full screen option
    fullScreen = document.getElementById("fullScreen");
    // event listeners
    // play button
    playbtn.addEventListener("click", playPause, false);
    // click to play
    clickplay.addEventListener("click", clickPlay, false);
    // text slider
    slider.addEventListener("change", vidSeek, false);
    // time update
    vid.addEventListener("timeupdate", seektimeupdate, false);
    // mute button
    muteBtn.addEventListener("click", vidmute, false);
    // full screen
    fullScreen.addEventListener("click", toggleFullScreen, false);
}
window.onload = intializePlayer;

// play and pause button
function playPause() {
    if (vid.paused) {
        vid.play();
        playbtn.innerHTML = "<i class='fa fa-pause'></i>";
    } else {
        vid.pause();
        playbtn.innerHTML = "<i class='fa fa-play'></i>";
    }
}

function clickPlay() {
    if (vid.paused) {
        vid.play();
        playbtn.innerHTML = "<i class='fa fa-pause'></i>";
    } else {
        vid.pause();
        playbtn.innerHTML = "<i class='fa fa-play'></i>";
    }
}

// video scroller
function vidSeek() {
    var seekto = vid.duration * (slider.value / 100);
    vid.currentTime = seekto;
}

// updating time, with maths & shit
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

function touchStart(event){
  var playbtn = event.target;
}
