let keys = document.querySelectorAll(".key");
// console.log(keys);


function playNote(event) {
    // key code

    let keyCode;

    const iskeyboard = event.type === 'keydown'
    if(iskeyboard) {

    }
    console.log(event.keyCode)
    // typed or pressed key

    // if key exists

}

keys.forEach( function(key){
    key.addEventListener('click', playNote);
});

window.addEventListener('keydown', playNote);