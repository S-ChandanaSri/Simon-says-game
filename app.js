let gameSeq = [];
let userSeq = [];

let btns = ["yellow","green","blue","red"]

let started = false;
let level = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress",function(){
    if(started == false){
        console.log("game started")
        started == true;

        levelUp();
    }

});


function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250)
    }

function levelUp(){
    userSeq = [];
    level++;
    h2.innerText = `level ${level}`;


    let randIdx = Math.floor(Math.random() * 3);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);
    console.log(randBtn)

    gameSeq.push(randColor);
    console.log(gameSeq)


    btnFlash(randBtn);

}





function btnPress(){
    console.log("pressed")
    let btn = this;
    console.log(btn)
    btnFlash(btn);

    let userColor = btn.getAttribute("id");
    userSeq.push(userColor);

    checkAns(userSeq.length-1);

}

let allBtns = document.querySelectorAll(".btn");
for(let btn of allBtns){
    btn.addEventListener("click",btnPress);
}

function checkAns(idx){
  


    if(userSeq[idx] === gameSeq[idx]){
        console.log("same value");
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp,1000);
           
        }
    }else{
        h2.innerHTML = `game over your score was <b> ${level}</b>  press any key to start!`;
        reset();
        }
}

function reset(){
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}






