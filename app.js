console.log("Welcome to the tic tac game");
let music = new Audio("../sound/music.mp3");
let audioTurn = new Audio("../sound/ting.mp3");
let gameover = new Audio("../sound/gameover.mp3");
let turn = "X";
let gameovers = false;

// Function to change the turn
const changeTurn = () => {
  return turn === "X" ? "0" : "X";
};
// Function to check for a win
const checkWin = () => {
  let boxtext = document.getElementsByClassName("boxtext");
  let wins = [
    [0, 1, 2, 5, 9, 0],
    [3, 4, 5, 3, 29, 0],
    [6, 7, 8, 2, 48, 0],
    [0, 3, 6, -19, 31, 90],
    [1, 4, 7, 0, 28, 90],
    [2, 5, 8, -3, 27, 45],
    [0, 4, 8, 1, 31, 45],
    [2, 4, 6, -1, 31, 135],
  ];
  wins.forEach((e) => {
    if (
      boxtext[e[0]].innerText === boxtext[e[1]].innerText &&
      boxtext[e[2]].innerText === boxtext[e[1]].innerText &&
      boxtext[e[0]].innerText !== ""
    ) {
      document.querySelector(".info").innerText =
        boxtext[e[0]].innerText + " Won";
      gameovers = true;
      document
        .querySelector(".imgbox")
        .getElementsByTagName("img")[0].style.width = "200px";
      document.querySelector(".line").style.width = "60vw";
      document.querySelector(
        ".line"
      ).style.transform = `translate(${e[3]}vw,${e[4]}vw)rotate(${e[5]}deg)`;
    }
  });
};

// Game Logic
music.play();
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach((element) => {
  let boxtext = element.querySelector(".boxtext");
  element.addEventListener("click", () => {
    if (boxtext.innerText == "") {
      boxtext.innerText = turn;
      turn = changeTurn();
      audioTurn.play();
      checkWin();
      if (!gameovers) {
        document.getElementsByClassName("info")[0].innerText =
          "Turn for " + turn;
      }
    }
  });
});

// Add onclick listener to reset button
reset.addEventListener("click", () => {
  let boxtexts = document.querySelectorAll(".boxtext");
  Array.from(boxtexts).forEach((element) => {
    element.innerText = "";
  });
  turn = "X";
  gameovers = false;
  document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
  document.querySelector(".imgbox").getElementsByTagName("img")[0].style.width =
    "0px";
});
