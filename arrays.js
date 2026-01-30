let myMovies = ['Frankenstein' , 'Tron' , 'Jurassic World' , 'Nosferatu' , 'Sketch' ];
//myMovies.push('Nosferatu');
console.log("My recent favorite films ", myMovies);
// const yourMovie = window.prompt ("What is your Favorite movie?");

const userInput = window.prompt ("What is your favorite movie of all time?");
console.log("Your favorite movie is " + userInput);

const userMovie = userInput;
window.alert ("You chose " + userMovie + ". I have to watch that soon!");
myMovies.push(userMovie);
console.log("Adding your choice to my list: " + myMovies.toString());

