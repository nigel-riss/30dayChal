// Add an event listener that fires when a user clicks a button
// The first parameter is the type of the event (like "click" or "mousedown" or any other HTML DOM Event.)
// The second parameter is the function we want to call when the event occurs.
// The third parameter is a boolean value specifying whether to use event bubbling or event capturing. 
// This parameter is optional.


const _keyDownHandler = (e) => {
  console.log(`Key Down: `, e.keyCode);

  const keyElement = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  if (!keyElement) {return};
  keyElement.classList.add(`playing`);

  const audioElement = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  audioElement.currentTime = 0;
  audioElement.play();
};

const _keyUpHandler = (e) => {
  console.log(`Key Up: `, e.keyCode);
  
  const keyElement = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  if (!keyElement) {return};
  keyElement.classList.remove(`playing`);
};


window.addEventListener(`keydown`, _keyDownHandler);
window.addEventListener(`keyup`, _keyUpHandler);
