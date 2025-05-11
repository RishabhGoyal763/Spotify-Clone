console.log("Welcome to Spotify");

// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    
    {songName: "Cielo - Huma-Huma", filePath: "songs/2.mp3", coverPath: "logoo.png"},
    {songName: "Warriyo - Mortals [NCS Release]", filePath: "songs/1.mp3", coverPath: "logoo.png"},
    {songName: "DEAF KEV - Invincible [NCS Release]-320k", filePath: "songs/3.mp3", coverPath: "logoo.png"},
    {songName: "Different Heaven & EH!DE - My Heart [NCS Release]", filePath: "songs/4.mp3", coverPath: "logoo.png"},
    {songName: "Janji-Heroes-Tonight-feat-Johnning-NCS-Release", filePath: "songs/5.mp3", coverPath: "logoo.png"},
    {songName: "Rabba - Salam-e-Ishq", filePath: "songs/2.mp3", coverPath: "logoo.png"},
    {songName: "Sakhiyaan - Salam-e-Ishq", filePath: "songs/2.mp3", coverPath: "logoo.png"},
    {songName: "Bhula Dena - Salam-e-Ishq", filePath: "songs/2.mp3", coverPath: "logoo.png"},
    {songName: "Tumhari Kasam - Salam-e-Ishq", filePath: "songs/2.mp3", coverPath: "logoo.png"},
    {songName: "Na Jaana - Salam-e-Ishq", filePath: "songs/4.mp3", coverPath: "logoo.png"},

    {songName: "Aathma Raama - Brodhha V", filePath: "songs/11.mp3", coverPath: "logoo.png"},

    {songName: "Allah Ke Bande - Kailash Kher", filePath: "songs/12.mp3", coverPath: "logoo.png"},
    {songName: "Tu Hai Kaha - Aur", filePath: "songs/13.mp3", coverPath: "logoo.png"},
    {songName: "Shikayat - Aur", filePath: "songs/14.mp3", coverPath: "logoo.png"},
    {songName: "Backbone - Hardy Sandhu", filePath: "songs/15.mp3", coverPath: "logoo.png"},
    {songName: " Bekhayali - Arijit Singh", filePath: "songs/16.mp3", coverPath: "logoo.png"},
    {songName: "Bella Ciao - Money Heist", filePath: "songs/17.mp3", coverPath: "logoo.png"},
    {songName: "Bones - Imagine Dragons", filePath: "songs/18.mp3", coverPath: "logoo.png"},
    {songName: "Breathless - Shankar Mahadevan", filePath: "songs/19.mp3", coverPath: "logoo.png"},
    {songName: "Brown Munde - Ap Dhillon", filePath: "songs/20.mp3", coverPath: "logoo.png"},
    {songName: "Brown Rang - Honey Singh", filePath: "songs/21.mp3", coverPath: "logoo.png"},
    {songName: "Chithhi - Hustle", filePath: "songs/22.mp3", coverPath: "logoo.png"},
    {songName: "Counting Stars - One Republic", filePath: "songs/23.mp3", coverPath: "logoo.png"},
    
    {songName: "Dekhte Dekhte - Nusrat Fateh Ali", filePath: "songs/24.mp3", coverPath: "logoo.png"},
    {songName: "Dheere Dheere Se - Honey Singh", filePath: "songs/25.mp3", coverPath: "logoo.png"},
    {songName: "Ek Pyar Ka Nagma - Jagjit Singh", filePath: "songs/26.mp3", coverPath: "logoo.png"},
    {songName: "Gangsta's Paradise - Coolio", filePath: "songs/27.mp3", coverPath: "logoo.png"},
    {songName: "Ghoomar", filePath: "songs/28.mp3", coverPath: "logoo.png"},
    
    {songName: "Halka Halka - Nusrat Fateh Ali", filePath: "songs/29.mp3", coverPath: "logoo.png"},
    {songName: " Hariyala Banna", filePath: "songs/30.mp3", coverPath: "logoo.png"},
    {songName: "Hasti Rahe Tu - Paradox", filePath: "songs/31.mp3", coverPath: "logoo.png"},
    {songName: "Hum To Tere Aashiq - Mukesh", filePath: "songs/32.mp3", coverPath: "logoo.png"},
    {songName: "Ik Bagal - Piyush Mishra", filePath: "songs/33.mp3", coverPath: "logoo.png"},

    {songName: "Inteha Ho Gyi - Kishore Kumar", filePath: "songs/34.mp3", coverPath: "logoo.png"},
    {songName: "Jadugar - Paradox", filePath: "songs/35.mp3", coverPath: "logoo.png"},
    {songName: "Kajaliyo", filePath: "songs/36.mp3", coverPath: "logoo.png"},
    {songName: "Kaleshi Chhori ", filePath: "songs/37.mp3", coverPath: "logoo.png"},
    {songName: "Kali Kali Julfo Ke - Nusrat Fateh", filePath: "songs/38.mp3", coverPath: "logoo.png"},
    
    {songName: "Kaun Tuje - Amaal Malik", filePath: "songs/39.mp3", coverPath: "logoo.png"},
    {songName: "Khairiyat - Arijit Singh", filePath: "songs/40.mp3", coverPath: "logoo.png"},
    {songName: "Lacasa Da Papel - Money Heist", filePath: "songs/41.mp3", coverPath: "logoo.png"},
    {songName: "Love Dose - Honey Singh", filePath: "songs/42.mp3", coverPath: "logoo.png"},
    {songName: "Mai Nikla - Udit Narayan", filePath: "songs/43.mp3", coverPath: "logoo.png"},
    
    {songName: "Mumal - Mame Khan", filePath: "songs/44.mp3", coverPath: "logoo.png"},
    {songName: "Naina Ra Lobhi", filePath: "songs/45.mp3", coverPath: "logoo.png"},
    {songName: "Jeda Nasha - Amar Jalal Group", filePath: "songs/46.mp3", coverPath: "logoo.png"},
    {songName: "O Womaniya - Wasseypur", filePath: "songs/47.mp3", coverPath: "logoo.png"},
    {songName: "Oops - King", filePath: "songs/48.mp3", coverPath: "logoo.png"},
    {songName: "Red Right Hand - Peaky Blinders", filePath: "songs/49.mp3", coverPath: "logoo.png"},
    {songName: "Piya Aao", filePath: "songs/50.mp3", coverPath: "logoo.png"},
    {songName: "Radha Kese Na Jale - AR Rehman", filePath: "songs/51.mp3", coverPath: "logoo.png"},
    {songName: "Rahgir Yahi Janjhal - Rahgir", filePath: "songs/52.mp3", coverPath: "logoo.png"},
    {songName: "Rajsthani Folk Anthem", filePath: "songs/53.mp3", coverPath: "logoo.png"},

    {songName: "Ram Ram - MC Square", filePath: "songs/54.mp3", coverPath: "logoo.png"},
    {songName: "Ram Siya Ram - Sachet Parampara", filePath: "songs/55.mp3", coverPath: "logoo.png"},
    {songName: "Rihayi - Paradox", filePath: "songs/56.mp3", coverPath: "logoo.png"},
    {songName: "Sach Keh Raha He Diwana- B Prak", filePath: "songs/57.mp3", coverPath: "logoo.png"},
    {songName: "Satrani Rajsthan ", filePath: "songs/58.mp3", coverPath: "logoo.png"},
    
    {songName: "Srivalli", filePath: "songs/59.mp3", coverPath: "logoo.png"},
    {songName: "Sunshine - Shaan", filePath: "songs/60.mp3", coverPath: "logoo.png"},
    {songName: "The Local Train", filePath: "songs/61.mp3", coverPath: "logoo.png"},
    {songName: "Tum Itna Jo Muskura Rahe ho", filePath: "songs/62.mp3", coverPath: "logoo.png"},
    {songName: "Vaathi Coming", filePath: "songs/63.mp3", coverPath: "logoo.png"},
    
    {songName: "Vo Purane Din - Piyush Mishra", filePath: "songs/64.mp3", coverPath: "logoo.png"},
    {songName: "Woh - Dino James", filePath: "songs/65.mp3", coverPath: "logoo.png"}
    

    
]

songItems.forEach((element, i)=>{ 
    element.getElementsByTagName("img")[0].src = songs[i].coverPath; 
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName; 
})
 

// Handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})
// Listen to Events
audioElement.addEventListener('timeupdate', ()=>{ 
    // Update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100); 
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{ 
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=9){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})