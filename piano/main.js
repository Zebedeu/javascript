let keys = document.querySelectorAll(".key");
// console.log(keys);


function playNote(event) {

    let audioKeyCode = getKeyCode(event)

}

function getKeyCode(event){

    let keyCode;

    const iskeyboard = event.type === 'keydown'
    if(iskeyboard) {
        keyCode = event.keyCode

    }else {
        keyCode = event.target.key
    }
    
    return keyCode
}

keys.forEach( function(key){
    key.addEventListener('click', playNote);
});

window.addEventListener('keydown', playNote);