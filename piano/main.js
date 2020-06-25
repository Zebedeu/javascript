let keys = document.querySelectorAll(".key");
// console.log(keys);


function playNote(event) {
console.log(event)
}

keys.forEach( function(key){
    key.addEventListener('click', playNote);
});

window.addEventListener('keydown', playNote);