interface Sing {
    audio: HTMLAudioElement;
    background: string;
}

const sounds: {[key: string]:Sing} = {
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
}
let currentSound: HTMLAudioElement | null = null;
const backgorundElement = document.getElementById('background') as HTMLElement;

const volumeControl = document.getElementById('input') as HTMLInputElement; 

volumeControl.addEventListener('input', () => {
    const volume = parseFloat(volumeControl.value); 
  if (currentSound) { 
    currentSound.volume = volume; 
  }
} )
function playSound(id: string) {
    const element = sounds[id]
    if(currentSound && currentSound !== element.audio) {
        currentSound.pause();
        currentSound.currentTime = 0;
    }
    if(currentSound === element.audio && !element.audio.paused) {
        element.audio.pause();
    } else {
        element.audio.volume = parseFloat(volumeControl.value); 
        element.audio.play();
        currentSound = element.audio;
        backgorundElement.style.backgroundImage = element.background;
    }
}

document.getElementById('button_summer')!.addEventListener("click", () => playSound('summer'))
document.getElementById('button_rain')!.addEventListener("click", () => playSound('rain'))
document.getElementById('button_winter')!.addEventListener("click", () => playSound('winter'))
