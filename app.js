//start
let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");


choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        // console.log("choice was clicked", userChoice);
        playGame(userChoice);

    })
})



const playGame = (userChoice) =>{
 console.log("user choice =",userChoice);

 //generate computer choice 
 const compChoice = genComChoice();
 console.log("com choice = ", compChoice);

 if(userChoice === compChoice){
    //draw game
    drawGame();
 } else {
    let userWin = true;
    if(userChoice === "rock"){
        //scissors, paper
        userWin = compChoice === "paper" ? false : true;
    }else if(userChoice === "paper"){
        //rock , scissors 
        userWin = compChoice === "scissors" ? false : true;
    } else{
        //rock, paper
        userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin,userChoice,compChoice);
     
 }
}


const genComChoice = () =>{
    const options = ["rock", "paper", "scissors"];
    const randomIndx = Math.floor(Math.random()*3);
    return options[randomIndx];
}



const drawGame = () =>{
    console.log("draw");
    msg.innerText = "Game was Draw! Play again.";
    msg.style.backgroundColor = "#081b31";
}
 

const showWinner = (userWin,userChoice,compChoice) =>{
if(userWin){
    userScore++;
    userScorePara.innerText = userScore;
    console.log("you win")
    msg.innerHTML = `You win! Your ${userChoice}  beats ${compChoice}`;
    msg.style.backgroundColor = "green";
   
}else{
    compScore++;
    compScorePara.innerText = compScore;
    console.log("you lost");
    msg.innerText = `You Lost! ${compChoice} beats your ${userChoice}`
    msg.style.backgroundColor = "red";
}
}





