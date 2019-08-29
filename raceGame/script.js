let startButton = document.querySelector(".button")
let player1 = document.querySelector(".player1").querySelector('img');
let player2 = document.querySelector(".player2").querySelector('img');

let posL = 10;

let pos2 = 10;

let pos3 = 10

document.addEventListener("click", function(event) {

    startButton.style.visibility= 'hidden'
    console.log(player1)
  if("click") {
    player1.style.visibility = 'visible';
    player2.style.visibility = 'visible';
  }

})





document.addEventListener("keydown", function(event){
  // this checks that you pressed the spacebar, if using Mac OS & Chrome
  if(event.keyCode == 32){
    posL -= 10;
    player1.style.marginTop = posL + "px";
  }else if(event.keyCode == 66) {
    pos2 +=10;
    player1.style.marginLeft = pos2 + "px";
  }else if(event.keyCode == 86) {
    pos3 +=10;
    player1.style.marginRight = pos3 + "px";
  }


  if(posL < -460) {
    alert('I won bitch')
  }
})

document.addEventListener("keydown", function(event){
  // this checks that you pressed the spacebar, if using Mac OS & Chrome
  if(event.keyCode == 38){
    posL -= 10;
    player2.style.marginTop = posL + "px";
    if(posL < -460) {
      alert('I won bitch')
    }
  }
})
