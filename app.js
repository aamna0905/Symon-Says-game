let gameSeq =[];
let userSeq=[];

let btns = ["yellow", "pink", "blue", "green"];

let started = false;
let level = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress", function() {
    if(started == false) {
        console.log("game started");
        started = true;

        levelup();
    }
   
});
function btnFlash(btn) {
    btn.classList.add("flash");
    setTimeout( function() {
       btn.classList.remove("flash");
    },250);
}

function levelup() {
    userSeq = [];
    level++;
    h2.innerText = `level ${level}`;

    let randIndx = Math.floor(Math.random()*3);
    let randcolor = btns[randIndx];
    let randbtn = document.querySelector(`.${randcolor}`);
    gameSeq.push(randcolor);
    console.log(gameSeq);
    btnFlash(randbtn);
}
function checkAns(idx) {
    if(userSeq[idx] == gameSeq[idx]){
       if(userSeq.length == gameSeq.length){
        setTimeout(levelup, 1000);
       }
    }else{
        h2.innerHTML = `Game Over ! Your Score was <u>${level}<u> <br> Press any key to start again.`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout( function() {
            document.querySelector("body").style.backgroundColor = "white";
        }, 150)
        reset();
    }
}

function btnPress() {
    let btn = this;
    btnFlash(btn);

    usercolor = btn.getAttribute("id");
    userSeq.push(usercolor);

    checkAns(userSeq.length-1);
}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click", btnPress);
}
function reset() {
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}