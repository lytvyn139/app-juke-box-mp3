const addSongBtn = document.getElementById('add-song-btn');

const blink182Btn = document.getElementById("blink182-btn");
const blink182Song = document.getElementById("blink182song");
const beartoothBtn = document.getElementById("beartooth-btn");
const beartoothSong = document.getElementById("beartooth-song");
const dwpBtn = document.getElementById("dwp-btn");
const dwpSong = document.getElementById("dwp-song");
const pmtmpBtn = document.getElementById("pmtmp-btn");
const pmtmpSong = document.getElementById("pmtmp-song");

const pauseBtn = document.getElementById('pause-btn');


const songsArr = [];

const addSongHandler = () => {
    const songName = document.getElementById('song-name').value;
    let artistName = document.getElementById('artist-name').value;

    const newSong = {
        info: {
            artistName,
            songName
        },
        id: Math.floor(Math.random() * 100)
    };
    if (newSong.id < 10) {
        newSong.id = newSong.id.toString();
        newSong.id = `0${newSong.id}`;
    }

    const inputValidator = () => {
        if (artistName === '') {


        } else if (artistName === 'Blink182' ||
            artistName === 'blink182') {
            blink182Song.play();
        } else if (artistName === 'Beartooth' ||
            artistName === 'beartooth') {
            beartoothSong.play();
        } else if (artistName === 'Devils wear prada' ||
            artistName === 'DWP' ||
            artistName === 'devils wear prada') {
            dwpSong.play();
        } else if (artistName === 'PMTMP' ||
            artistName === 'Pay money to my pride') {
            pmtmpSong.play();
        }

    };

    songsArr.push(newSong);
    console.log(newSong);
    inputValidator();
    renderSongs();
};


const renderSongs = (filter = '') => {
    const songList = document.getElementById('song-list');

    if (songsArr.length === 0) {
        songList.classList.remove('visible');
    } else {
        songList.classList.add('visible');
    }
    songList.innerHTML = '';


    const filteredMovies = !filter ?
        songsArr :
        songsArr.filter(songsArr => songsArr.info.artistName.includes(filter));

    filteredMovies.forEach((song) => {
        const songsNewItem = document.createElement('li');
        let text = `ID# ${song.id} | ${song.info.artistName} - ${song.info.songName} .mp3`;
        songsNewItem.textContent = text;
        songList.append(songsNewItem);
    });

};





blink182Btn.addEventListener('click', (e) => {
    blink182Song.play();
    artistName = document.getElementById('artist-name').value = 'Blink182';
});

beartoothBtn.addEventListener('click', (e) => {
    beartoothSong.play();
    artistName = document.getElementById('artist-name').value = 'Beartooth';
});

dwpBtn.addEventListener('click', (e) => {
    dwpSong.play();
    artistName = document.getElementById('artist-name').value = 'Devils wear prada';
});

pmtmpBtn.addEventListener('click', (e) => {
    pmtmpSong.play();
    artistName = document.getElementById('artist-name').value = 'Pay money to my pride';
});

const pauseSong = () => {
    blink182Song.pause();
    beartoothSong.pause();
    dwpSong.pause();
    pmtmpSong.pause();
}


pauseBtn.addEventListener('click', pauseSong);
addSongBtn.addEventListener('click', addSongHandler);


