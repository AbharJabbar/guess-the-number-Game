let secretNumber = Math.floor(Math.random() * 20) + 1;
console.log(secretNumber);
let score = 20;
let highscore = 0;
let oldHighscore = 0;
checkNumber = () => {
  score--;
  document.querySelector(".score").innerHTML = score;
  let inputText = document.querySelector(".guess").value;
  console.log(inputText);
  if (inputText < secretNumber) {
    document.querySelector(".message").innerHTML = "Too Low";
  } else if (inputText > secretNumber) {
    document.querySelector(".message").innerHTML = "Too High";
  } else if (inputText == secretNumber) {
    document.querySelector(".message").innerHTML = "Correct Answer";

    document.body.style.backgroundColor = "#632626";
    document.querySelector(".number").innerHTML = secretNumber;
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").innerHTML = highscore;
    }
    // console.log("This is highscore  " + highscore);
  }
};

// Again Button
reset = () => {
  secretNumber = Math.floor(Math.random() * 20) + 1;
  console.log(secretNumber);
  document.querySelector(".message").innerHTML = "Correct Answer";
  document.body.style.backgroundColor = "#9D5353";
  document.querySelector(".number").innerHTML = "?";
  document.querySelector(".message").innerHTML = "Start Guessing";
  score = 20;
  document.querySelector(".score").innerHTML = score;
  // if (score > highscore) {
  //   document.querySelector(".highscore").innerHTML = highscore;
  // } else if (score < highscore) {
  //   document.querySelector(".highscore").innerHTML = oldHighscore;
  // }
  document.querySelector(".guess").value = "";
};
