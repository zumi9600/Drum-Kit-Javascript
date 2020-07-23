var numberOfButton = document.querySelectorAll(".drum").length; //Selecting the number of HTML elements which contains .drum class
for (var i = 0; i < numberOfButton; i++) {
  // Event Listener which will get in effect at mouse click
  document.querySelectorAll("button")[i].addEventListener("click", function() { //Selecting the buttons dynamically using for loop
    makeSound(this.innerHTML); //Fetching the name of the button pressed by mouse and passing it to function makeSound
    buttonAnimation(this.innerHTML);
    // What to do when click detected (Anonyms Function)
  });
}
// Event Listener which will get in effect at pressing a keyboard key
document.addEventListener("keydown", function(event) {
  makeSound(event.key); //Fetching the key pressed from the keyboard event and passing it to function makeSound
  buttonAnimation(event.key);
});
// A General Function for both event listeners which will take key as an argument and pass it to switch statement
function makeSound(key) {
  switch (key) {
    case "w":
      var tom1 = new Audio("sounds/tom1.mp3");
      tom1.play();
      break
    case "a":
      var tom2 = new Audio("sounds/tom2.mp3");
      tom2.play();
      break;
    case "s":
      var tom3 = new Audio("sounds/tom3.mp3");
      tom3.play();
      break;
    case "d":
      var tom4 = new Audio("sounds/tom4.mp3");
      tom4.play();
      break;
    case "j":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;
    case "k":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;
    case "l":
      var kick = new Audio("sounds/kick.mp3");
      kick.play();
      break;
    default:
      console.log(key);

  }
}
// Function for animation of the buttons
function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey); //Selecting the class of the pressed button
  activeButton.classList.add("pressed"); //Adding a class(pressed) to the pressed button
  // Setting timeout function to remove the added class(pressed) to get the animations in effect
  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 1000);
}
