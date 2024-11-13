let compScore = 0;
let userScore = 0;
const choices= document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");

//generate computer choice function
const getCompChoice =()=>{
    const options = ["rock" , "paper" , "scissor"];
    const ranIdx= Math.floor(Math.random()*3);
    return options[ranIdx];
}

//draw game function
const drawGame=()=>{
    console.log("Game was draw.");
    msg.innerText="Game was draw.Play Again!";
    msg.style.backgroundColor="#081b31";
}

//show winner function
const showWinner=(userwin)=>{
    if(userwin){
        console.log("You won!");
msg.innerText="You Won!";
msg.style.backgroundColor="green";
userScore++;
let won =document.querySelector("#user-score");
won.innerText=userScore;
    }
    else{
        console.log("you lose!");
        msg.innerText = "You Lose.Try Again!";
        msg.style.backgroundColor="red";
        compScore++;
        let lose =document.querySelector("#comp-score");
lose.innerText=compScore;
    }
}

//playgame function
const playGame = (choice) =>{
    console.log("user choice = " ,choice)
    const compChoice=getCompChoice();
    console.log("Computer choice = " + compChoice);
    if(choice===compChoice){
        drawGame();
    }
    else{
let userwin=true;
if(choice==="rock"){
    //scissor paper
    userwin=compChoice=="paper"?false:true;


}else if(choice==="paper"){
    userwin=compChoice=="scissors"?false : true;
//scissor rock
}
else{
    //rock paper
userwin=compChoice=="rock"?false:true;
}
showWinner(userwin);
    }
    
}
//chose any given choice
choices.forEach((choice) => {
    
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        console.log(" choice was clicked",userChoice);
playGame(userChoice);
    })
});
