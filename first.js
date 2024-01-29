let userScore = 0;
let compScore = 0;
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#Comp-score");
const genCompChoice = () => {
  const options = ["rock", "paper", "scissors"];
  const randIdx  = Math.floor(Math.random() * 3 );
  return options[randIdx];
};
const drawgame = () => 
{
    msg.innerText = "GAME DRAW";
    msg.style.backgroundColor = " #081b31";

}
const showWinner = (userWin) => {
    if (userWin) {
        userScore++;
        msg.innerText = "YOU WON ";
        msg.style.backgroundColor = "green";
        userScorePara.innerText = userScore;
    }
    else 
    {
        compScore++; 
        msg.innerText = "YOU LOSE";
        msg.style.backgroundColor = "red";
        compScorePara.innerText = compScore;


    }
}

//user-side
const playGame = (userChoice) => {
  const compChoice = genCompChoice();
if (userChoice === compChoice){
    //Drawgame
    drawgame();
}else 
{
    let userWin = true;
    if (userChoice==="rock"){
        userWin = compChoice === `paper=` ? false : true ;
    }else if (userChoice === "paper") 
    {
        userWin = compChoice === `scissors` ? false : true;
    }
    else{
        userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin);
}

};
choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});
