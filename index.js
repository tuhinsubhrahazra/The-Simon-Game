var isGamestart = false;
var i = 0;
var gameArray = [];
var inputArray = [];
var timeoutSec = 200;

$(".startButton").click(function () {
  if (!isGamestart) {
    startGame();
  }
})

$(document).keypress(function (event) {
  if (!isGamestart && event.key === "a") {
    startGame();
  }
});

function startGame() {
  isGamestart = true;
  inputArray = [];
  i++;
  $(".heading").text("Level "+i);
  var random =Math.floor(Math.random()*4)+1;
  gameArray.push(random);
  setTimeout(function () {
    buttonpress(random);
  },timeoutSec);
}

$(".btn").click(function () {
  var clickUser = $(this).attr("name");
  console.log(clickUser);
  var inp;
  if (clickUser === "button1") {
    inputArray.push(1);
    buttonpress(1);
    inp = 1;
  }
  else if (clickUser === "button2") {
    inputArray.push(2);
    buttonpress(2);
    inp = 2;
  }
  else if (clickUser === "button3") {
    inputArray.push(3);
    buttonpress(3);
    inp = 3;
  }
  else if (clickUser === "button4") {
    inputArray.push(4);
    buttonpress(4);
    inp = 4;
  }

  check(inputArray.length);
});

function check(len){
  if (gameArray[len-1] === inputArray[len-1]) {
    if (gameArray.length === inputArray.length) {
      setTimeout(function() {
        startGame();
      },timeoutSec);
    }
  }
  else{
    $(".heading").text("Game over Press A to restart");
    $("body").addClass("gameOver");
    var audio = new Audio("sounds/wrong.mp3");
    audio.play();
    setTimeout(function () {
      $("body").removeClass("gameOver");
    },200);
    startOver();
  }
}

function startOver() {
  i =0;
  gameArray = [];
  inputArray = [];
  isGamestart = false;
  // $(document).keypress(function () {
  //   if (!isGamestart) {
  //     startGame();
  //     isGamestart = true;
  //   }
  // })
}

function buttonpress(p) {
  switch (p) {
    case 1:
      document.querySelector(".button1").classList.add("animation");
      var audio = new Audio("sounds/green.mp3");
      audio.play();
      setTimeout(function() {
        document.querySelector(".button1").classList.remove("animation");
      },timeoutSec);

      break;

    case 2:
      document.querySelector(".button2").classList.add("animation");
      var audio = new Audio("sounds/red.mp3");
      audio.play();
      setTimeout(function() {
        document.querySelector(".button2").classList.remove("animation");
      },timeoutSec);

      break;

    case 3:
      document.querySelector(".button3").classList.add("animation");
      var audio = new Audio("sounds/yellow.mp3");
      audio.play();
      setTimeout(function() {
        document.querySelector(".button3").classList.remove("animation");
      },timeoutSec);

      break;

    case 4:
      document.querySelector(".button4").classList.add("animation");
      var audio = new Audio("sounds/blue.mp3");
      audio.play();
      setTimeout(function() {
        document.querySelector(".button4").classList.remove("animation");
      },timeoutSec);

      break;

    default:
      console.log(p);
  }
}
