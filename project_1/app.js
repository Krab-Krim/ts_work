var sounds = {
    summer: {
        audio: new Audio('./assets/sounds/summer.mp3'),
        background: 'url(./assets/summer-bg.jpg)'
    },
    rain: {
        audio: new Audio('./assets/sounds/rain.mp3'),
        background: 'url(./assets/rainy-bg.jpg)'
    },
    winter: {
        audio: new Audio('./assets/sounds/winter.mp3'),
        background: 'url(./assets/winter-bg.jpg)'
    }
};
var currentSound = null;
var backgorundElement = document.getElementById('background');
var volumeControl = document.getElementById('input');
volumeControl.addEventListener('input', function () {
    var volume = parseFloat(volumeControl.value);
    if (currentSound) {
        currentSound.volume = volume;
    }
});
function playSound(id) {
    var element = sounds[id];
    if (currentSound && currentSound !== element.audio) {
        currentSound.pause();
        currentSound.currentTime = 0;
    }
    if (currentSound === element.audio && !element.audio.paused) {
        element.audio.pause();
    }
    else {
        element.audio.volume = parseFloat(volumeControl.value);
        element.audio.play();
        currentSound = element.audio;
        backgorundElement.style.backgroundImage = element.background;
    }
}
document.getElementById('button_summer').addEventListener("click", function () { return playSound('summer'); });
document.getElementById('button_rain').addEventListener("click", function () { return playSound('rain'); });
document.getElementById('button_winter').addEventListener("click", function () { return playSound('winter'); });
