const music = new Audio('Assets/music/NoPetsAllowed - Libre Sampak feat. Vicky.mp3');

document.getElementById('PLAY').addEventListener('click', () => {
    index = 0;
    music.pause();
    music.src = 'Assets/music/NoPetsAllowed - Libre Sampak feat. Vicky.mp3';
    poster_master_player.src = 'Assets/images/zoilo.jpg';
    title.innerHTML = 'B4LB4UTOG<br><div class="subtitle">Zoilo</div>';
    music.play();
    masterPlay.classList.remove('fa-play');
    masterPlay.classList.add('fa-pause');
    wave.classList.add('active1');
    
    makeAllBackground();
    Array.from(document.getElementsByClassName('songItem'))[index - 1];
    makeAllplays();
    el.target.classList.remove('fa-circle-play');
    el.target.classList.add('fa-circle-pause');
    wave.classList.add('active1');
});

const songs = [
    {
        id: '1',
        songName: 'Eyes Closed<br><div class="subtitle">Imagine Dragons</div>',
        poster: "Assets/images/1.jpg",
    },

    {
        id: '2',
        songName: 'Ava<br><div class="subtitle">Famy</div>',
        poster: "Assets/images/2.jpg",
    },

    {
        id: '3',
        songName: 'Pompeii<br><div class="subtitle">Bastille</div>',
        poster: "Assets/images/3.jpg",
    },

    {
        id: '4',
        songName: 'Gate Only<br><div class="subtitle">FloyyMenor ft. Cris Mj</div>',
        poster: "Assets/images/4.jpg",
    },

    {
        id: '5',
        songName: 'Shadow<br><div class="subtitle">AMAG</div>',
        poster: "Assets/images/5.jpg",
    },

    {
        id: '6',
        songName: 'Coming Off<br><div class="subtitle">Brevin Kim</div>',
        poster: "Assets/images/6.jpg",
    },

    {
        id: '7',
        songName: 'Broadway Girls<br><div class="subtitle">Nate Good</div>',
        poster: "Assets/images/7.jpg",
    },

    {
        id: '8',
        songName: 'See You Later<br><div class="subtitle">GRAHAM</div>',
        poster: "Assets/images/8.jpg",
    },

    {
        id: '9',
        songName: 'A bar song<br><div class="subtitle">Shaboozey</div>',
        poster: "Assets/images/9.jpg",
    },

    {
        id: '10',
        songName: 'Lose Control<br><div class="subtitle">Teddy Swims</div>',
        poster: "Assets/images/10.jpg",
    },

    {
        id: '11',
        songName: 'Slow It Down<br><div class="subtitle">Benson Boone</div>',
        poster: "Assets/images/11.jpg",
    },

    {
        id: '12',
        songName: 'Million Dollar<br><div class="subtitle">Tommy Richman</div>',
        poster: "Assets/images/12.jpg",
    },

    {
        id: '13',
        songName: 'One Of The Girls<br><div class="subtitle">Jennie Kim, Lily-Rose Depp, and The Weeknd</div>',
        poster: "Assets/images/13.jpg",
    },

    {
        id: '14',
        songName: 'Espresso<br><div class="subtitle">Sabrina Carpenter</div>',
        poster: "Assets/images/14.jpg",
    },

    {
        id: '15',
        songName: 'Too Sweet<br><div class="subtitle">Hozier</div>',
        poster: "Assets/images/15.jpg",
    },

    {
        id: '16',
        songName: 'Fortnight<br><div class="subtitle">Taylor Swift ft. Post Malone</div>',
        poster: "Assets/images/16.jpg",
    },

    {
        id: '17',
        songName: 'Beautiful Things<br><div class="subtitle">Benson Boone</div>',
        poster: "Assets/images/17.jpg",
    },

    {
        id: '18',
        songName: 'greedy<br><div class="subtitle">Tata McRae</div>',
        poster: "Assets/images/18.jpg",
    },

    {
        id: '19',
        songName: 'I like the way you kiss me<br><div class="subtitle">Artemas</div>',
        poster: "Assets/images/19.jpg",
    },

    {
        id: '20',
        songName: 'WE CANT BE FRIENDS<br><div class="subtitle">Ariana Grande</div>',
        poster: "Assets/images/20.jpg",
    },

    {
        id: '21',
        songName: 'End of Beginning<br><div class="subtitle">Djo</div>',
        poster: "Assets/images/21.jpg",
    },

    {
        id: '22',
        songName: 'TEXAS HOLD "EM<br><div class="subtitle">Beyonce</div>',
        poster: "Assets/images/22.jpg",
    },

    {
        id: '23',
        songName: 'Belong Together<br><div class="subtitle">Mark Ambor</div>',
        poster: "Assets/images/23.jpg",
    },

    {
        id: '24',
        songName: 'yes and?<br><div class="subtitle">Ariana Grande</div>',
        poster: "Assets/images/24.jpg",
    },

    {
        id: '25',
        songName: 'Whatever She Wants<br><div class="subtitle">Bryson Tiller</div>',
        poster: "Assets/images/25.jpg",
    },

    {
        id: '26',
        songName: 'Looking FOr<br><div class="subtitle">Johnning</div>',
        poster: "Assets/images/26.jpg",
    },

]

Array.from(document.getElementsByClassName('songItem')).forEach((e, i) =>{
    e.getElementsByTagName('img')[0].src = songs[i].poster;
    e.getElementsByTagName('h5')[0].innerHTML = songs[i].songName;
});

let index = 0;

let poster_master_player = document.getElementById('poster_master_player');
let title = document.getElementById('title');

Array.from(document.getElementsByClassName('playListPlay')).forEach((e)=>{
    e.addEventListener('click',(el)=>{
        index = el.target.id;
        console.log(index);
        music.src = `Assets/music/${index}.mp3`;
        poster_master_player.src = `Assets/images/${index}.jpg`;
        music.play();
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');

       let songTitles = songs.filter((els) =>{
        return els.id == index;
       });

       songTitles.forEach(elss =>{
        let {songName} = elss;
        title.innerHTML = songName;
       });

       makeAllBackground();
       Array.from(document.getElementsByClassName('songItem'))[index - 1].style.background ="rgb(105, 105, 105, .1)";
       makeAllplays();
       el.target.classList.remove('fa-circle-play');
       el.target.classList.add('fa-circle-pause');
       wave.classList.add('active1');
    });
})

let currentStart = document.getElementById('currentStart');
let currentEnd = document.getElementById('currentEnd');
let seek = document.getElementById('seek');
let bar2 = document.getElementById('bar2');
let dot = document.getElementsByClassName('dot')[0];

music.addEventListener('timeupdate',()=>{
    let music_curr = music.currentTime;
    let music_dur = music.duration;
  
    let min1 = Math.floor(music_dur / 60);
    let sec1 = Math.floor(music_dur % 60);

    // console.log(min1);
    if(sec1 < 10){
        sec1 = `0${sec1}`;
    }
    currentEnd.innerText = `${min1}:${sec1}`;

    let min2 = Math.floor(music_curr / 60);
    let sec2 = Math.floor(music_curr % 60);

    if(sec2 < 10){
        sec2 = `0${sec2}`;
    }
    currentStart.innerText = `${min2}:${sec2}`;

    let progressBar = parseInt((music_curr / music_dur)*100);
    seek.value = progressBar;
    // console.log(seek.value);
    let seekbar = seek.value;
    bar2.style.width = `${seekbar}%`;
    dot.style.left = `${seekbar}%`;
    
    if (!music.paused && !music.ended) {
        dot.classList.add('playing');
        bar2.style.backgroundColor = '#1db954';
        dot.style.borderColor = '#1db954';
        dot.style.backgroundColor = '#1db954';
    } else {
        dot.classList.remove('playing');
        bar2.style.backgroundColor = '#fff';
        dot.style.borderColor = '#fff';
        dot.style.backgroundColor = '#fff';
    }
});

seek.addEventListener('change',()=>{
    music.currentTime = seek.value * music.duration / 100;
})

const makeAllBackground = () => {
    Array.from(document.getElementsByClassName('songItem')).forEach((el)=>{
        el.style.background = 'rgb(105, 105, 105, .0)';
    })
}

const makeAllplays = () => {
    Array.from(document.getElementsByClassName('playListPlay')).forEach((el)=>{
        el.classList.add('fa-circle-play');
        el.classList.remove('fa-circle-pause');
    })
}


document.addEventListener("keydown", function(event) {
    if (event.key == " ") {
        const playlistPlayButtons = document.getElementsByClassName('playListPlay');
        if (music.paused || music.currentTime <= 0) {
            music.play();
            wave.classList.add('active1');
            masterPlay.classList.remove('fa-play');
            masterPlay.classList.add('fa-pause');
            playlistPlayButtons[index - 1].classList.remove('fa-circle-play');
            playlistPlayButtons[index - 1].classList.add('fa-circle-pause');
        } else {
            music.pause();
            wave.classList.remove('active1');
            masterPlay.classList.add('fa-play');
            masterPlay.classList.remove('fa-pause');
            playlistPlayButtons[index - 1].classList.add('fa-circle-play');
            playlistPlayButtons[index - 1].classList.remove('fa-circle-pause');
        }
    }
});


let masterPlay = document.getElementById('masterPlay');

masterPlay.addEventListener('click',()=>{
    const playlistPlayButtons = document.getElementsByClassName('playListPlay');
    if (music.paused || music.currentTime <= 0) {
        music.play();
        wave.classList.add('active1');
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');
        playlistPlayButtons[index - 1].classList.remove('fa-circle-play');
        playlistPlayButtons[index - 1].classList.add('fa-circle-pause');
    } else {
        music.pause();
        wave.classList.remove('active1');
        masterPlay.classList.add('fa-play');
        masterPlay.classList.remove('fa-pause');
        playlistPlayButtons[index - 1].classList.add('fa-circle-play');
        playlistPlayButtons[index - 1].classList.remove('fa-circle-pause');
    }
});

let pop_song_left = document.getElementById('pop_song_left');
let pop_song_right = document.getElementById('pop_song_right');
let pop_song = document.getElementsByClassName('pop_song')[0];

pop_song_right.addEventListener('click',()=>{
    pop_song.scrollLeft += 300;
});

pop_song_left.addEventListener('click',()=>{
    pop_song.scrollLeft -= 300;
});

let pop_artist_left = document.getElementById('pop_artist_left');
let pop_artist_right = document.getElementById('pop_artist_right');
let item = document.getElementsByClassName('item')[0];

pop_artist_right.addEventListener('click',()=>{
    item.scrollLeft += 300;
});

pop_artist_left.addEventListener('click',()=>{
    item.scrollLeft -= 300;
});

let vol_icon = document.getElementById('vol_icon');
let vol = document.getElementById('vol');
let vol_dot = document.getElementById('vol_dot');
let vol_bar = document.getElementsByClassName('vol_bar')[0];

vol.addEventListener('change',()=>{
    if (vol.value == 0 ){
        vol_icon.classList.remove('fa-volume-high');
        vol_icon.classList.remove('fa-volume-low');
        vol_icon.classList.add('fa-volume-off');
        vol_icon.style.color = '#1db954';
    }

    if (vol.value > 0){
        vol_icon.classList.remove('fa-volume-high');
        vol_icon.classList.add('fa-volume-low');
        vol_icon.classList.remove('fa-volume-off');
        vol_icon.style.color = '#fff';
    }

    if (vol.value > 50){
        vol_icon.classList.add('fa-volume-high');
        vol_icon.classList.remove('fa-volume-low');
        vol_icon.classList.remove('fa-volume-off');
        vol_icon.style.color = '#fff';
    }

    let vol_a = vol.value;
    vol_bar.style.width = `${vol_a}%`;
    vol_dot.style.left = `${vol_a}%`;

    music.volume = vol_a / 100;
});

vol_icon.addEventListener('click', () => {
    if (music.muted) {

        let prevVolume = vol.value;
        
        music.muted = false;
        vol_icon.classList.remove('fa-volume-xmark');
        if (prevVolume <= 0) {
            vol_icon.classList.add('fa-volume-off');
        } else if (prevVolume <= 50) {
            vol_icon.classList.add('fa-volume-low');
        } else {
            vol_icon.classList.add('fa-volume-high');
        }
        vol_icon.style.color = '#fff';

        music.volume = prevVolume / 100;
        

        vol_bar.style.width = `${prevVolume}%`;
        vol_dot.style.left = `${prevVolume}%`;
    } else {
       
        let prevVolume = vol.value;
        
        music.muted = true;
        vol_icon.classList.remove('fa-volume-high', 'fa-volume-low');
        vol_icon.classList.add('fa-volume-xmark');
        vol_icon.style.color = '#1db954';
        
        
        vol_bar.style.width = '0%'; 
        vol_dot.style.left = '0%'; 
     
        vol.value = 100;
        
        music.volume = 0;
    }
});

back.addEventListener('click', () => {
    const songItem = document.getElementsByClassName('songItem');
    const tae = songItem.children;
    if(isShuffleOn == true){
        index = Math.floor(Math.random() * songItem.length);
    }else{
        index--;
    }
    if(index < 1){
        index = Array.from(document.getElementsByClassName('songItem')).length;
    }
    music.src = `Assets/music/${index}.mp3`;
    poster_master_player.src = `Assets/images/${index}.jpg`;
    music.play();
    masterPlay.classList.remove('fa-play');
    masterPlay.classList.add('fa-pause');
    let songTitles = songs.filter((els) => {
        return els.id == index;
    });

    songTitles.forEach(elss => {
        let {songName} = elss;
        title.innerHTML = songName;
    });
    
    makeAllBackground();
    Array.from(document.getElementsByClassName('songItem')).forEach((el, i) => {
        const playIcon = el.querySelector('.playListPlay');
        if (i === index - 1) { 
            playIcon.classList.remove('fa-circle-play');
            playIcon.classList.add('fa-circle-pause');
            el.style.background = "rgb(105, 105, 105, .1)";
        } else {
            playIcon.classList.remove('fa-circle-pause');
            playIcon.classList.add('fa-circle-play');
        }
    });
    wave.classList.add('active1');
});


next.addEventListener('click', () => {
    const songItem = document.getElementsByClassName('songItem');
    const tae = songItem.children;
    if(isShuffleOn == true){
        index = Math.floor(Math.random() * songItem.length);
    }else{
        index++;
    }
    if(index > Array.from(document.getElementsByClassName('songItem')).length){
        index = 1;
    }
    music.src = `Assets/music/${index}.mp3`;
    poster_master_player.src = `Assets/images/${index}.jpg`;
    music.play();
    masterPlay.classList.remove('fa-play');
    masterPlay.classList.add('fa-pause');
    let songTitles = songs.filter((els) =>{
        return els.id == index;
    });

    songTitles.forEach(elss =>{
        let {songName} = elss;
        title.innerHTML = songName;
    });
    
    makeAllBackground();
    Array.from(document.getElementsByClassName('songItem')).forEach((el, i) => {
        const playIcon = el.querySelector('.playListPlay');
        if (i === index - 1) {
            playIcon.classList.remove('fa-circle-play');
            playIcon.classList.add('fa-circle-pause');
            el.style.background = "rgb(105, 105, 105, .1)";
        } else {
            playIcon.classList.remove('fa-circle-pause');
            playIcon.classList.add('fa-circle-play');
        }
    });
    wave.classList.add('active1');
});


music.addEventListener('ended', () => {
    index++;
    if (index > songs.length) {
        index = 1;
    }
    music.src = `Assets/music/${index}.mp3`;
    poster_master_player.src = `Assets/images/${index}.jpg`;
    music.play();
    masterPlay.classList.remove('fa-play');
    masterPlay.classList.add('fa-pause');

    let songTitles = songs.filter((els) => {
        return els.id == index;
    });

    songTitles.forEach(elss => {
        let {songName} = elss;
        title.innerHTML = songName;
    });

    makeAllBackground();
    Array.from(document.getElementsByClassName('songItem')).forEach((el, i) => {
        const playIcon = el.querySelector('.playListPlay');
        if (i === index - 1) {
            playIcon.classList.remove('fa-circle-play');
            playIcon.classList.add('fa-circle-pause');
            el.style.background = "rgb(105, 105, 105, .1)";
        } else {
            playIcon.classList.remove('fa-circle-pause');
            playIcon.classList.add('fa-circle-play');
            el.style.background = "";
        }
    });
    wave.classList.add('active1');
});

const shuffleButton = document.getElementById('shuffle');
let isShuffleOn = false;
let isSongPlaying = false;
let playedIndices = [];

shuffleButton.addEventListener('click', () => {
    if (!isShuffleOn) {
        isShuffleOn = true;
        shuffleButton.style.color = '#1db954'; 
        playRandomSong(); 
    } else {
        isShuffleOn = false;
        shuffleButton.style.color = '#fff'; 
    }
});

function playRandomSong() {
    if (!isSongPlaying) {
        let randomIndex;
        do {
            randomIndex = Math.floor(Math.random() * songs.length); 
        } while (playedIndices.includes(randomIndex)); 

        const randomSong = songs[randomIndex]; 
        playSong(randomSong, randomIndex); 
    }
}

function playNextSong(index) {
    index++;
    if (index >= songs.length) {
        index = 0; 
    }
    const nextSong = songs[index];
    playSong(nextSong, index);
}

function playSong(song, index) {
    isSongPlaying = true; 
    music.src = `Assets/music/${song.id}.mp3`;
    poster_master_player.src = song.poster;
    title.innerHTML = song.songName;
    music.play();
    masterPlay.classList.remove('fa-play');
    masterPlay.classList.add('fa-pause');

    resetSongItems(); 
    highlightCurrentSong(index); 
  
    wave.classList.add('active1');

    music.addEventListener('ended', () => {
        isSongPlaying = false; 
        if (isShuffleOn) { 
            playedIndices.push(index); 
            playRandomSong(); 
        } else { 
            playNextSong(index);
        }
    });
}

function highlightCurrentSong(index) {
    const songItems = Array.from(document.getElementsByClassName('songItem'));
    if (songItems[index]) { 
        songItems[index].style.background = "rgb(105, 105, 105, .1)";
        const playIcon = songItems[index].querySelector('.playListPlay');
        playIcon.classList.remove('fa-circle-play');
        playIcon.classList.add('fa-circle-pause');
    }
};

function resetSongItems() {
    makeAllBackground();
    makeAllplays();
    wave.classList.remove('active1');
};

const repeatIcon = document.getElementById('repeat');

repeatIcon.addEventListener('click', () => {
   
    music.loop = !music.loop;


    if (music.loop) {
        repeatIcon.classList.add('active');
        repeatIcon.style.color = '#1db954';
    } else {
        repeatIcon.classList.remove('active');
        repeatIcon.style.color = '#fff';
    }
});