let keys = document.querySelectorAll(".key");
// console.log(keys);


function playNote(event) {

    let audioKeyCode = getKeyCode(event)
    const key = document.querySelector(`.key[data-key="${audioKeyCode}"]`)
    
    const cantFoundAnyKey = !key
    if(cantFoundAnyKey) {
        return;
    }
    playAudio(audioKeyCode);

}

function playAudio(audioKeyCode){
    const audio = document.querySelector(`audio[data-key="${audioKeyCode}"]`)
    audio,currentTime = 0
    audio.play();

}
function getKeyCode(event){

    let keyCode

    const iskeyboard = event.type === 'keydown'
    if(iskeyboard) {
        keyCode = event.keyCode

    }else {
        keyCode = event.target.dataset.key
    }
    
    return keyCode
}

keys.forEach( function(key){
    key.addEventListener('click', playNote);
});

window.addEventListener('keydown', playNote);