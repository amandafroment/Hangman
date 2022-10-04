// constants

const button = document.querySelector(".button");
const letters = document.querySelectorAll(".letters");
const displayLetters = document.querySelector(".display-letters");
const spaces = document.querySelector(".spaces");
const structure = document.querySelector(".hgmn-structure");

// state variables

let animals = [
  "Antelope",
  "Anteater",
  "Armadillo",
  "Badger",
  "Buffalo",
  "Butterfly",
  "Chameleon",
  "Cockatoo",
  "Cuttlefish",
  "Dingo",
  "Elephant",
  "Earthworm",
  "Falcon",
  "Flounder",
  "Grasshopper",
  "Giraffe",
  "Horse",
  "Iguana",
  "Jellyfish",
  "Kangaroo",
  "Lemur",
  "Lobster",
  "Manatee",
  "Monkfish",
  "Mouse",
  "Orangutan",
  "Panther",
  "Platypus",
  "Peacock",
  "Quokka",
  "Raccoon",
  "Rabbit",
  "Rhinoceros",
  "Swan",
  "Skunk",
  "Seahorse",
  "Tiger",
  "Turtle",
  "Warthog",
  "Wolf",
  "Zebra",
];
let chosenWord;

// cached elements

// event listeners

for (let i = 0; i < letters.length; i++) {
  letters[i].addEventListener("click", handleMove);
}

button.addEventListener("click", initialize);

// functions

function handleMove(e) {
  // console.log(chosenWord);
  // console.log(chosenWord.indexOf(e.target.textContent));
  console.log(e.target.textContent);
  if (chosenWord.indexOf(e.target.textContent) !== -1) {
    let correctGuesses = document.getElementsByClassName(e.target.textContent);

    for (let i = 0; i < correctGuesses.length; i++) {
      console.log("correct guess", correctGuesses[i]);
      const newSpan = document.createElement("span");
      newSpan.innerText = e.target.textContent;
      correctGuesses[i].appendChild(newSpan);
    }
  } else if (chosenWord.indexOf(e.target.textContent) === -1) {
    console.log("this letter isn't in the word");
  }
  e.target.style.color = "darkgreen";
}

function createSpaces() {
  // console.log(chosenWord);
  // console.log(chosenWord.length);
  for (i = 0; i < chosenWord.length; i++) {
    const newDiv = document.createElement("div");
    newDiv.setAttribute("class", chosenWord[i]);
    // console.log(chosenWord[i]);
    spaces.appendChild(newDiv);
  }
}

function initialize() {
  let min = 0;
  let max = animals.length;
  let number = Math.floor(Math.random() * (max - min) + min);
  chosenWord = animals[number].toUpperCase();
  spaces.innerHTML = "";
  for (let i = 0; i < letters.length; i++) {
    letters[i].style.color = "white";
  }
  createSpaces();
}

initialize();

// What I need to do:

// the app should choose a word for the user to try and solve - check
// render that value to the page and provide the appropriate letter spaces for the word
// Wait for a player to click a letter

// have an array of words for the computer to choose from - check

// create a function that loops through all of the letters

// if and else statements (if letter is in chosenWord, return word), if else, reveal a piece of the hangman structure.

// think about what to do with multiple letters in the same word
// maybe looping throughout the word
// looping the chosen word to create divs for .length of them , add in the index number of the id to insert the letter into them (initialization)
// looping through the index
