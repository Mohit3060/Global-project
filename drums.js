const drumSounds = {
    "kick": "sound_files/kick.wav",
    "snare": "sound_files/snare.wav",
    "hi-hat": "sound_files/hihat.wav",
    "tom 1": "sound_files/tom1.wav",
    "tom 2": "sound_files/tom2.wav",
    "crash": "sound_files/crash.wav"
};

// Preload audio files and store Audio objects
const audioObjects = {};
for (const [key, value] of Object.entries(drumSounds)) {
    audioObjects[key] = new Audio(value);
}

// Play sound on click
document.querySelectorAll('.drum').forEach(drum => {
    drum.addEventListener('click', () => {
        const soundKey = drum.textContent.trim().toLowerCase();
        playSound(soundKey);
    });
});

// Play sound on keydown
document.addEventListener('keydown', (event) => {
    const keyMap = {
        "k": "kick",
        "s": "snare",
        "h": "hi-hat",
        "t": "tom 1",
        "y": "tom 2",
        "c": "crash"
    };
    const soundKey = keyMap[event.key.toLowerCase()];
    if (soundKey) {
        playSound(soundKey);
    }
});

// Function to play sound
function playSound(soundKey) {
    const audio = audioObjects[soundKey];
    if (audio) {
        audio.currentTime = 0; // Reset playback position
        audio.play();
    }
}