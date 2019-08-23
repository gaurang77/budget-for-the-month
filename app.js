var userScore = 0;
var compScore = 0;
const userScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("comp-score");
const scoreBoard_div = document.querySelector(".scoreb");
const result_div = document.querySelector(".res");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissor_div = document.getElementById("s");
var explain_p= document.getElementById("act");



function compChoice(){
    const choices = ['r','p','s'];
    const randomNum = (Math.floor(Math.random() * 3));
    return choices[randomNum];

}

function wordc(letter){
    if(letter === "r") return "Rock";
    if(letter === "p") return "Paper";
    return "Scissors";
}

function win(user,comp){
    userScore++;
    userScore_span.innerHTML=userScore;
    result_div.innerHTML="YOU WIN";
    const uc = "user ".fontsize(5).sup();
    const cc = " of computer".fontsize(5).sup();
    explain_p.innerHTML =uc + wordc(user) + " WINS AGAINST " + wordc(comp) + cc;


}

function lose(user,comp){
    compScore++;
    compScore_span.innerHTML=compScore;
    result_div.innerHTML=" YOU LOSE";
    const uc = "user ".fontsize(5).sup();
    const cc = " of computer".fontsize(5).sup();
    explain_p.innerHTML =uc + wordc(user) + " LOSES AGAINST " + wordc(comp) + cc;
    console.log(user);
    console.log(comp);
}

function tie(user,comp){
    result_div.innerHTML="TIE";
    explain_p.innerHTML="Its a DRAW, Try again";

}

function game(userChoice) {
    const co = compChoice();
    switch (userChoice + co) {
        case "rs":
        case "pr":
        case "sp":
           win(userChoice,co);
           break;
        case "rp":
        case "ps":
        case "sr":
           lose(userChoice,co);
           break;
        case "rr":
        case "pp":
        case "ss":
           tie(userChoice,co);
           break;

    }
}

function main(){
    rock_div.addEventListener('click',function()
      { game("r");
      })

    paper_div.addEventListener('click',function()
      {game("p");
      })

     scissor_div.addEventListener('click',function()
       {game("s");
       })

    }

main();
