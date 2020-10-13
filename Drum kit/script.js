// Add an event listener that fires when a user clicks a button
// The first parameter is the type of the event (like "click" or "mousedown" or any other HTML DOM Event.)
// The second parameter is the function we want to call when the event occurs.
// The third parameter is a boolean value specifying whether to use event bubbling or event capturing. 
// This parameter is optional.




function playSound(e) {
    // const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    console.log(e.keyCode);
    const keyElement = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    // if (!audio) return; //stop the function from running all together if it's not the key we need
    // audio.currentTime = 0;
    // audio.play();
    keyElement.classList.add('playing');
}

function stopSound(e) {
    console.log(e.keyCode);
    const keyElement = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    console.log(keyElement);
    keyElement.classList.remove('playing');
}

function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound);
window.addEventListener('keyup', playSound);