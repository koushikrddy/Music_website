console.log("Welcome to Spotify");

// Song data
let songs = [
  { songName: "Apna Bana Le", filepath: "apna banale song.mp3", coverPath: "apna bana le.jpg" },
  { songName: "Sirivennela", filepath: "sirivennala song.mp3", coverPath: "shyam shingh roy img.jpg" },
  { songName: "Kalki oka nene", filepath: "kalki song.mp3", coverPath: "kalki img.jpg" },
  { songName: "Manasu Maree", filepath: "manasu mari nattu song.mp3", coverPath: "v img.jpg" },
  { songName: "Samayama", filepath: "samaya song.mp3", coverPath: "hi nanna img.jpg" },
  { songName: "Jailer main song", filepath: "jailer song.mp3", coverPath: "jailer img.jpg" },
  { songName: "Heeriye", filepath: "heeriye song.mp3", coverPath: " heeriya img.jpg " },
  { songName: "Prathi Kadalo", filepath: "saalar song.mp3", coverPath: "saalar img.jpg" },
  { songName: "Pedda Puli", filepath: "pedda puli song.mp3", coverPath: "pedda puli img.jpg" },
  { songName: "Jinna Sohna", filepath: "jinna sohda song.mp3", coverPath: "jinna soda.jpg" },
  { songName: "Arjan Vailly", filepath: "animal song.mp3", coverPath: "animal img.jpg" },
  { songName: "Modalaudaam", filepath: "modalavdam song.mp3", coverPath: "srinivasa kalyanam img.jpg" },
  { songName: "Tainu Khabar Nahi", filepath: "tainu kabar song.mp3", coverPath: "tainu img.jpg" },
  { songName: "JAB TAK", filepath: "ms dhoni song.mp3", coverPath: "ms dhoni img.jpg" },
 
 
  
];

let songIndex = 0;
let audioElement = new Audio(songs[songIndex].filepath);
let masterPlay = document.getElementById("masterPlay");
let myProgressBar = document.getElementById("myProgressBar");
let gif = document.getElementById("gif");
let currentSongName = document.getElementById("currentSong");
let next = document.getElementById("next");
let prev = document.getElementById("prev");
let songListDiv = document.getElementById("songList");

// Load songs into UI
songs.forEach((song, i) => {
  let songDiv = document.createElement("div");
  songDiv.classList.add("songItem");
  songDiv.innerHTML = `
    <img src="${song.coverPath}" alt="${i}" />
    <span class="songName">${song.songName}</span>
  `;
  songListDiv.appendChild(songDiv);
});

// Play/Pause toggle
masterPlay.addEventListener("click", () => {
  if (audioElement.paused || audioElement.currentTime <= 0) {
    audioElement.play();
    masterPlay.classList.remove("fa-play-circle");
    masterPlay.classList.add("fa-pause-circle");
    gif.style.opacity = 1;
  } else {
    audioElement.pause();
    masterPlay.classList.remove("fa-pause-circle");
    masterPlay.classList.add("fa-play-circle");
    gif.style.opacity = 0;
  }
});

// Update progress bar
audioElement.addEventListener("timeupdate", () => {
  let progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
  myProgressBar.value = progress;
});

myProgressBar.addEventListener("change", () => {
  audioElement.currentTime = (myProgressBar.value * audioElement.duration) / 100;
});

// Next song
next.addEventListener("click", () => {
  songIndex = (songIndex + 1) % songs.length;
  playSong();
});

// Previous song
prev.addEventListener("click", () => {
  songIndex = (songIndex - 1 + songs.length) % songs.length;
  playSong();
});

// Play selected song
function playSong() {
  audioElement.src = songs[songIndex].filepath;
  currentSongName.textContent = songs[songIndex].songName;
  audioElement.currentTime = 0;
  audioElement.play();
  masterPlay.classList.remove("fa-play-circle");
  masterPlay.classList.add("fa-pause-circle");
  gif.style.opacity = 1;
}