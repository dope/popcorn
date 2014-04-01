#Popcorn
Popcorn is a customizable video player that is created with the best technologies, HTML5, CSS3 & Javscript. Popcorn was created for web designers, designers who don't care much for Javscript and heavy programming and want to focus solely on the design aspect of HTML5 Video. Getting started with Popcorn couldn't be easier — it's currently at it's first stable release with compatibile with Chrome, Safari, Firefox, Opera & IE10.

###Getting started
It couldn't be easier to get started all you need to do is link two files and add a small ammount of markup. The first thing you need to do is add the script and style sheet to your HTML document:

```
<link rel="stylesheet" type="text/css" href="css/popcorn.css">

<script src="js/popcorn.min.js" type="text/javascript"></script>
```

You will notice that that ```popcorn.min.js``` is compressed but Popcorn also comes with a developer version for you heavy Javascript(ers?)

Next you're going to want to add the markup which is pretty small.

```
<div id="videoWrap">
    <video
        id="mainVideo"
        poster="http://popcorn.im/img/popcorn-poster.svg"
        src="http://popcorn.im/media/sin.mp4" type="video/mp4"
        src="http://popcorn.im/media/sintel.m4v" type="video/mp4"
        src="http://popcorn.im/media/sintel.mov" type="video/mov"
        src="http://popcorn.im/media/sin.ogv" type="video/ogg">
    </video>

    <div id="controls">
        <input id="slider" type="range" min="0" max="100" value="0" step="1">
        <button class="videoBtn" id="playPausebtn">
            <i class="icon-play"></i>
        </button>
        <span id="current">00:00</span>
        <span class="divide">/</span>
        <span id="duration">00:00</span>

        <button class="videoBtn" id="fullscreenbtn">
            <i class="icon-full"></i>
        </button>

        <button class="videoBtn" id="mutebtn">
            <i class="icon-unmute"></i>
        </button>
    </div>
</div>
```

Obviously you're going to want to replace the example video for your actual video which is just as easy as replacing the file names. After you have added the markup, you're done and ready to use or style your own video player.

###Support
Popcorn is not complete as of yet, but I'm still offering some strong support in terms of skinning the controls. You can contact me via [email](mailto:hello.joer@gmail.com) or [tweet me](http://twitter.com/joericho)

###Todo List
- Get it usable on older browsers
- Make responsive over mobile & tablet
- Create some sort of FireFox support for the slider
- Create more than one theme
