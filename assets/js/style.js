// media controllers
const playPause = document.querySelector("#play-stop");
const backward = document.querySelector("#backward");
const forward = document.querySelector("#forward");

// record player animation
const circleBig = document.querySelector("#circle-bg");
const circleSm = document.querySelector("#circle-sm");

// playing song
const songName = document.querySelector("#song-name");
const audio = document.querySelector("#audio");
const coverArt = document.querySelector("#cover");
const musicbox = document.querySelector("#musicbox");
const playMusic = document.querySelector(".track-item");

//some more functionality
const playbox = document.querySelector(".playbox")

// control button images
let playImg = "./assets/images/play.svg";
let pauseImg = "./assets/images/pause.svg";

// default controls
playPause.src = playImg;
let isPlaying = true;

const songList = [
    {
        name: "Ek Din Aap",
        source: "./assets/music/Ek_Din_Aap.mp3",
        cover: "./assets/images/chillhop-2.jpg"
    },
    {
        name: "Nainowale Ne",
        source: "./assets/music/Nainowale Ne.mp3",
        cover: "./assets/images/naino.jpeg"
    },
    {
        name: "Shaam Bhi Khoob Hai",
        source: "./assets/music/Shaam Bhi Khoob Hai.mp3",
        cover: "./assets/images/chillhop.jpg"
    },
    {
        name: "Kyaa Dil Ne Kahaa",
        source: "./assets/music/Kyaa Dil Ne Kahaa.mp3",
        cover: "./assets/images/chillhop-3.jpg"
    },
    {
        name: "Pehla Nasha",
        source: "./assets/music/Pehla Nasha.mp3",
        cover: "./assets/images/chillhop-4.jpg"
    },
    {
        name: "Kahin Pyaar Na",
        source: "./assets/music/Kahin Pyaar Na.mp3",
        cover: "./assets/images/chillhop-2.jpg"
    },
    {
        name: "Rang Lageya",
        source: "./assets/music/Rang Lageya.mp3",
        cover: "./assets/images/chillhop.jpg"
    }
];

// helper function
function createEle(ele) {
    return document.createElement(ele);
}
function append(parent, child) {
    return parent.append(child);
}

let res = "<ul>"

function createPlayList() {
    songList.forEach((song,index)=>{
        res += `<li class='track-item'><h3 onclick='handlePlay(this)'  key='${index}'>${song.name}</h3></li>`
    })

    res +='</ul>'
    musicbox.innerHTML=res
}

const handlePlay=(a)=>{
    pauseSong()
    let ind= a.getAttribute("key")
    songIndex = ind
    loadMusic()
}

let songIndex = 0;
// preloaded song
loadMusic(songList[songIndex]);


function loadMusic() {
    coverArt.src = songList[songIndex].cover;
    songName.innerText = songList[songIndex].name;
    audio.src = songList[songIndex].source;
}

function playSong() {
    playPause.src = pauseImg;
    circleBig.classList.add("animate");
    circleSm.classList.add("animate");
    audio.play();
}

function pauseSong() {
    playPause.src = playImg;
    circleBig.classList.remove("animate");
    circleSm.classList.remove("animate");
    audio.pause();
}


function nextPlay() {
    songIndex++;
    if(songIndex > songList.length - 1) {
        songIndex = 0;
    }
    loadMusic(songList[songIndex]);
    playSong()
}

function backPlay() {
    songIndex--;
    if(songIndex < 0) {
        songIndex = songList.length - 1;
    }
    loadMusic(songList[songIndex]);
    playSong()
}
function playHandler() {
    isPlaying = !isPlaying;
    //console.log("Change: ",isPlaying)
    isPlaying ? pauseSong() : playSong();
}


// player event 
playPause.addEventListener("click", playHandler);
backward.addEventListener("click", backPlay);
forward.addEventListener("click", nextPlay);

createPlayList()