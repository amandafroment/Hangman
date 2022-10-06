// constants

const button = document.querySelector(".button");
const letters = document.querySelectorAll(".letters");
const displayLetters = document.querySelector(".display-letters");
const spaces = document.querySelector(".spaces");
const structure = document.querySelectorAll(".structure");
const lettersContainer = document.querySelector(".letters-container");
// const mediaQuery = window.matchMedia("(max-width: 480px)");

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
let wrongGuesses = 0;
let correctGuess = 0;

// cached elements

// event listeners

for (let i = 0; i < letters.length; i++) {
  letters[i].addEventListener("click", handleMove);
}

button.addEventListener("click", initialize);

// mediaQuery.addEventListener(handleScreenChanges);

// functions

function handleMove(e) {
  // console.log(chosenWord);
  // console.log(chosenWord.indexOf(e.target.textContent));
  console.log(e.target.textContent);
  if (chosenWord.indexOf(e.target.textContent) !== -1) {
    let correctGuesses = document.getElementsByClassName(e.target.textContent);
    // console.log(correctGuesses.length, "hello");
    for (let i = 0; i < correctGuesses.length; i++) {
      correctGuess++;
      console.log("correct guess", correctGuesses[i]);
      const newSpan = document.createElement("span");
      newSpan.classList.add("selected-letters");
      newSpan.innerText = e.target.textContent;
      correctGuesses[i].appendChild(newSpan);
    }

    if (correctGuess === chosenWord.length) {
      for (let i = 0; i < letters.length; i++) {
        letters[i].classList.add("hidden");
      }
      console.log(correctGuess, "im here");
      newParaWinning = document.createElement("p");
      newParaWinning.setAttribute("class", "show");
      newParaWinning.setAttribute("id", "wonMsg");
      // newParaWinning.style.margin = "0px";
      newParaWinning.innerHTML = "You won! Great job!";
      lettersContainer.appendChild(newParaWinning);
    }
  } else if (chosenWord.indexOf(e.target.textContent) === -1) {
    if (wrongGuesses === 0) {
      structure[0].style.visibility = "visible";
    } else if (wrongGuesses === 1) {
      structure[1].style.visibility = "visible";
    } else if (wrongGuesses === 2) {
      structure[2].style.visibility = "visible";
    } else if (wrongGuesses === 3) {
      structure[3].style.visibility = "visible";
    } else if (wrongGuesses === 4) {
      structure[4].style.visibility = "visible";
    }

    if (wrongGuesses === 4) {
      for (let i = 0; i < letters.length; i++) {
        letters[i].classList.add("hidden");
      }
      const newPara = document.createElement("p");
      newPara.setAttribute("class", "show");
      newPara.setAttribute("id", "lostMsg");
      newPara.innerHTML = "You lost! The word was " + chosenWord;
      lettersContainer.appendChild(newPara);
      console.log(newPara);
    }
    wrongGuesses++;
  }
  e.target.classList.remove("white-visible");
  e.target.classList.add("darkgreen");
}

function createSpaces() {
  for (i = 0; i < chosenWord.length; i++) {
    const newDiv = document.createElement("div");
    newDiv.setAttribute("class", chosenWord[i]);
    spaces.appendChild(newDiv);
  }
}

function initialize() {
  let min = 0;
  let max = animals.length;
  let number = Math.floor(Math.random() * (max - min) + min);
  chosenWord = animals[number].toUpperCase();
  spaces.innerHTML = "";
  console.log(letters.length);
  for (let i = 0; i < letters.length; i++) {
    letters[i].classList.remove("darkgreen");
    letters[i].classList.add("white-visible");
    letters[i].classList.remove("hidden");
  }
  for (let i = 0; i < structure.length; i++) {
    structure[i].style.visibility = "hidden";
  }
  lostMsg = document.querySelector("#lostMsg");
  if (lostMsg !== null) {
    lettersContainer.removeChild(lostMsg);
  }
  wonMsg = document.querySelector("#wonMsg");
  if (wonMsg !== null) {
    lettersContainer.removeChild(wonMsg);
  }
  wrongGuesses = 0;
  correctGuess = 0;
  createSpaces();
}

initialize();

// What I need to do:

// the app should choose a word for the user to try and solve - check
// render that value to the page and provide the appropriate letter spaces for the word
// Wait for a player to click a letter

// have an array of words for the computer to choose from - check

// create a function that loops through all of the letters - check

// if and else statements (if letter is in chosenWord, return word), if else, reveal a piece of the hangman structure.

// think about what to do with multiple letters in the same word - done
// maybe looping throughout the word - done
// looping the chosen word to create divs for .length of them , add in the index number of the id to insert the letter into them (initialization) - done
// looping through the index - done
