//Movie array
let myMovies = ['Frankenstein' , 'Tron' , 'Jurassic World' , 'Nosferatu' , 'Sketch' ];
console.log("My recent favorite films ", myMovies);

//User's favorite movie prompt
const userInput = window.prompt ("What is your favorite movie of all time?");
console.log("Your favorite movie is " + userInput);

//User's addition - push method
const userMovie = userInput;
window.alert ("You chose " + userMovie + ". I have to watch that soon!");
myMovies.push(userMovie);
console.log("Adding your choice to my list: " + myMovies.toString());

