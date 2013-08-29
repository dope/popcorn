//
// Popcorn Version 0.3
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
var curtimetext;
var durtimetext;
var mutebtn;
var fullscreenbtn;

function intializePlayer() {
    // object references
    // main vid class
    vid = document.getElementById("mainVideo");
    // play/pause button
    playbtn = document.getElementById("playPausebtn");
    // click the video to play
    clickplay = document.getElementById("mainVideo");
    // time slider
    slider = document.getElementById("slider");
    // curent time
    curtimetext = document.getElementById("curtimetext");
    // duration time
    durtimetext = document.getElementById("durtimetext");
    // mute button
    mutebtn = document.getElementById("mutebtn");
    // full screen option
    fullscreenbtn = document.getElementById("fullscreenbtn");
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
    mutebtn.addEventListener("click", vidmute, false);
    // full screen
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

function clickPlay() {
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
