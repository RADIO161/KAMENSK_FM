/*jshint esversion: 8 */

let playRadio = document.getElementById("radio_player");
let imgSrc = document.getElementById("img1");
let mpRadio = document.getElementById("audioPlayer");
let NameRadio = document.getElementById("name-radio");

let EuropaRadSrc = document.getElementById("ep-rad");
let LoveRadSrc = document.getElementById("love-rad");
let RetroRadSrc = document.getElementById("retro-rad");
let ComedyRadSrc = document.getElementById("comedy-rad");
let ZharaRadSrc = document.getElementById("zhara-rad");



EuropaRadSrc.addEventListener('click', function () {
    EuropaRadSrc.classList.add("shadow");
    LoveRadSrc.classList.remove("shadow");
    RetroRadSrc.classList.remove("shadow");
    ComedyRadSrc.classList.remove("shadow");
    ZharaRadSrc.classList.remove("shadow");
    NameRadio.innerHTML = "RADIO DACHA <br>89.0 FM";
    mpRadio.src = "http://95.216.194.68/12_dacha_28_reg_602";
    mpRadio.play();
    imgSrc.src = 'https://raw.githubusercontent.com/RADIO161/KAMENSK_FM/main/icon_pause2x.png';
})

LoveRadSrc.addEventListener('click', function () {
    LoveRadSrc.classList.add("shadow");
    EuropaRadSrc.classList.remove("shadow");
    RetroRadSrc.classList.remove("shadow");
    ComedyRadSrc.classList.remove("shadow");
    ZharaRadSrc.classList.remove("shadow");
    NameRadio.innerHTML = "AVTORADIO <br>89.6 FM";
    mpRadio.src = "http://pub0101.101.ru:8000/stream/reg/mp3/128/region_avto_317?";
    mpRadio.play();
    imgSrc.src = 'https://raw.githubusercontent.com/RADIO161/KAMENSK_FM/main/icon_pause2x.png';
})

RetroRadSrc.addEventListener('click', function () {
    RetroRadSrc.classList.add("shadow");
    EuropaRadSrc.classList.remove("shadow");
    LoveRadSrc.classList.remove("shadow");
    ComedyRadSrc.classList.remove("shadow");
    ZharaRadSrc.classList.remove("shadow");
    NameRadio.innerHTML = "RADIO ENERGY <br>101.6 FM";
    mpRadio.src = "https://pub0201.101.ru/stream/reg/mp3/128/region_energy_124?";
    mpRadio.play();
    imgSrc.src = 'https://raw.githubusercontent.com/RADIO161/KAMENSK_FM/main/icon_pause2x.png';
})

ComedyRadSrc.addEventListener('click', function () {
    ComedyRadSrc.classList.add("shadow");
    RetroRadSrc.classList.remove("shadow");
    EuropaRadSrc.classList.remove("shadow");
    LoveRadSrc.classList.remove("shadow");
    ZharaRadSrc.classList.remove("shadow");
    NameRadio.innerHTML = "RETRO FM <br>103.5 FM";
    mpRadio.src = "http://online-1.gkvr.ru:8000/retro_rnd_64.aac";
    mpRadio.play();
    imgSrc.src = 'https://raw.githubusercontent.com/RADIO161/KAMENSK_FM/main/icon_pause2x.png';
})

ZharaRadSrc.addEventListener('click', function () {
    ZharaRadSrc.classList.add("shadow");
    RetroRadSrc.classList.remove("shadow");
    EuropaRadSrc.classList.remove("shadow");
    LoveRadSrc.classList.remove("shadow");
    ComedyRadSrc.classList.remove("shadow");
    NameRadio.innerHTML = "HUMOR FM <br>105.3 FM";
    mpRadio.src = "https://s0.radioheart.ru:8000/RH20606";
    mpRadio.play();
    imgSrc.src = 'http://pub0101.101.ru:8000/stream/reg/mp3/128/region_humor_136?';
})


playRadio.addEventListener('click', play_pause, function () {
    mpRadio.play();
}, false);

async function playAudio() {
    if (mpRadio.src != null) {
        playRadio.classList.add("playing");
        imgSrc.src = 'https://raw.githubusercontent.com/RADIO161/KAMENSK_FM/main/icon_pause2x.png';
        mpRadio.play();
    } else {
        NameRadio.innerHTML = "ВЫБЕРИТЕ РАДИОСТАНЦИЮ -->";
        mpRadio.src = null;
        imgSrc.src = 'https://raw.githubusercontent.com/RADIO161/KAMENSK_FM/main/icon_play2x.png';
    }
};

function play_pause() {
    if (mpRadio.paused && NameRadio.innerHTML == "RADIO DACHA <br>89.0 FM") {
        mpRadio.src = "http://95.216.194.68/12_dacha_28_reg_602";
        imgSrc.src = './assets/image/icon_pause2x.png';
        playAudio();
    } else if (mpRadio.paused && NameRadio.innerHTML == "AVTORADIO <br>89.6 FM") {
        mpRadio.src = "http://pub0101.101.ru:8000/stream/reg/mp3/128/region_avto_317?";
        playAudio();
    } else if (mpRadio.paused && NameRadio.innerHTML == "RADIO ENERGY <br>101.6 FM") {
        mpRadio.src = "https://pub0201.101.ru/stream/reg/mp3/128/region_energy_124?"
        playAudio();
    } else if (mpRadio.paused && NameRadio.innerHTML == "RETRO FM <br>103.5 FM") {
        mpRadio.src = "http://online-1.gkvr.ru:8000/retro_rnd_64.aac";
        playAudio();
    } else if (mpRadio.paused && NameRadio.innerHTML == "HUMOR FM <br>105.3 FM") {
        mpRadio.src = "http://pub0101.101.ru:8000/stream/reg/mp3/128/region_humor_136?";
        playAudio();
    } else {
        mpRadio.pause();
        mpRadio.src = null;
        imgSrc.src = 'https://raw.githubusercontent.com/RADIO161/KAMENSK_FM/main/icon_play2x.png';
    }
}

/*
"http://95.216.194.68/12_dacha_28_reg_602",
"http://pub0101.101.ru:8000/stream/reg/mp3/128/region_avto_317?",
"https://pub0201.101.ru/stream/reg/mp3/128/region_energy_124?",
"http://online-1.gkvr.ru:8000/retro_rnd_64.aac",
"http://pub0101.101.ru:8000/stream/reg/mp3/128/region_humor_136?",
*/
