let gameseq=[];
let userseq=[];
let btns = ["yellow","red","purple","green"];
let started = false;
let lvl = 0;
let h2 =document.querySelector("h2");

document.addEventListener("keypress",function(){
    // console.log("game started");
    if(started==false)
    {
        console.log("game started");
        started = true;
        levelup();
    }
});
function levelup(){
    userseq=[];
    lvl++;
      h2.innerText=`level ${lvl}`;
    //   random button choose krka flash krna ka liya
     let randIdx =Math.floor(Math.random()*3);
     let randcolor = btns[randIdx];
     let randbtn = document.querySelector(`.${randcolor}`);
     gameseq.push(randcolor);
     console.log(gameseq);

      gameflash(randbtn);
    //   console.log(randbtn);
    //   console.log(randIdx);
    //   console.log(randcolor);
} 
function  gameflash(btn)
{
   btn.classList.add("flash");
   setTimeout(function()
{
    btn.classList.remove("flash");
},250);
}
function checkans(idx)
{
    // let idx = lvl-1;
    if(userseq[idx] === gameseq[idx])
    {
        if(userseq.length ==gameseq.length)
        {
            // levelup();
            setTimeout(levelup,1000);
        }
    }
    else{
        h2.innerText = "game over ,press again !";
    }
}
function  userflash(btn)
{
   btn.classList.add("userflash");
   setTimeout(function()
{
    btn.classList.remove("userflash");
},250);
}
 
function  btnpress()
{
    console.log("button pressed");
    console.log(this);
    let btn = this;
    userflash(btn);
    let usercolor = btn.getAttribute("id");
    // console.log(usercolor);
    userseq.push(usercolor);
    // console.log(userseq);
    checkans(userseq.length-1);
}
let allbtns = document.querySelectorAll(".btn");
for(btn of allbtns)
{
    btn.addEventListener("click",btnpress);
}
