const keySounds = {
    "A": "sound_files/A.wav",
    "W": "sound_files/W.wav",
    "S": "sound_files/S.wav",
    "E": "sound_files/E.wav",
    "D": "sound_files/D.wav",
    "F": "sound_files/F.wav",
    "T": "sound_files/T.wav",
    "G": "sound_files/G.wav",
    "Y": "sound_files/Y.wav",
    "H": "sound_files/H.wav",
    "U": "sound_files/U.wav",
    "J": "sound_files/J.wav",
    "K": "sound_files/K.wav",
    "O": "sound_files/O.wav",
    "L": "sound_files/L.wav",
    "P": "sound_files/P.wav",
    ";": "sound_files/semicolon.wav"
};

// Preload audio files and store Audio objects
const audioObjects = {};
for (const [key, soundFile] of Object.entries(keySounds)) {
    audioObjects[key] = new Audio(soundFile);
}

// Play sound on click
document.querySelectorAll('.key').forEach(key => {
    key.addEventListener('click', () => {
        const note = key.textContent.trim();
        playSound(note);
    });
});

// Play sound on keydown
document.addEventListener('keydown', (event) => {
    const note = event.key.toUpperCase();
    playSound(note);
});

// Function to play sound
function playSound(note) {
    const audio = audioObjects[note];
    if (audio) {
        audio.currentTime = 0; // Reset playback position
        audio.play();
    }
}