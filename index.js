let start = false;
let col = ["red", "green", "yellow", "blue"];
let GameSeq = [];
let UserSeq = [];

let level = 0;
let heading = document.querySelector("h2");
let startBtn = document.querySelector("#start-btn"); // Select the new button

// Add a click event listener to the start button
startBtn.addEventListener("click", function () {
  if (start == false) {
    console.log("game started");
    start = true;
    levelup();
  }
});

// Remove the old keypress event listener
// document.addEventListener("keypress", function () {
//   if (start == false) {
//     console.log("game starded");
//     start = true;
//     levelup();
//   }
// });

function btnflash(btn) {
  btn.classList.add("flash");
  setTimeout(() => {
    btn.classList.remove("flash");
  }, 600);
}
function Gameflash(btn) {
  btn.classList.add("gflash");
  setTimeout(() => {
    btn.classList.remove("gflash");
  }, 200);
}
///////
function levelup() {
  UserSeq = [];
  level++;
  heading.innerText = `Level ${level}`;
  let colindx = Math.floor(Math.random() * 4);
  let rancol = col[colindx];
  let randbtn = document.querySelector(`.${rancol}`);
  GameSeq.push(rancol);

  console.log(randbtn);
  btnflash(randbtn);
}
function checkAns(idx) {
  if (UserSeq[idx] === GameSeq[idx]) {
    if (UserSeq.length == GameSeq.length) {
      setTimeout(levelup, 500);
    }
  } else {
    heading.innerHTML = `Game over! Your Score is <b>${level}</b><br> Press any key to restart`;
    gamerest();
  }
}

function btnpress() {
  let btn = this;
  Gameflash(btn);
  let usercol = btn.getAttribute("id");
  console.log(usercol);
  UserSeq.push(usercol);
  checkAns(UserSeq.length - 1);
}
let btnall = document.querySelectorAll(".btn");
for (btn of btnall) {
  btn.addEventListener("click", btnpress);
}
function gamerest() {
  start = false;
  GameSeq = [];
  UserSeq = [];
  level = 0;
}