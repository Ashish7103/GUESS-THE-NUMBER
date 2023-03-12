' use strict';
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '🎉 New record'

document.querySelector('.number').textContent="13"
document.querySelector('.guess').value = '22';
console.log(document.querySelector('.guess').value);

*/
let score = 20;
let highscore = 0;
let secretNumber = Math.trunc(Math.random() * 20) + 1;

document.querySelector('.number').textContent = secretNumber;
document.querySelector('.number').textContent = '?';

const displayMessage=function(message){
  document.querySelector('.message').textContent =message;
}


// ....... functions for btn check..............
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  // ..........when player fill no input.........
  if (!guess)
    // document.querySelector('.message').textContent = '⛔ No any input';
    
    // ... refactoring code or DRY ......
    displayMessage('⛔ No any input');

  // ............. When player Wins...............
  else if (guess === secretNumber)
   {
    // document.querySelector('.message').textContent = '🎉 New Record';
    displayMessage('🎉 New Record');

document.querySelector('.number').textContent = secretNumber;


    // ........to manupulate in Style of page......
    document.querySelector('body').style.backgroundColor = '#FF00FF';
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  }

  // ........When guess us wrong...........................
  // .......Rrefactoring :The dry principle.............
  else if(guess !== secretNumber){
    {if(score>1){
      // document.querySelector('.message').textContent = guess >secretNumber?'📈 Too High!':'📉 Too Low!';
      displayMessage(guess >secretNumber?'📈 Too High!':'📉 Too Low!')
      score--;
      document.querySelector('.score').textContent = score;
      document.querySelector('.score').textContent = score;
    }
     else{
        // document.querySelector('.message').textContent =
        //   '😔You Lose the game try again';

        displayMessage('😔You Lose the game try again')
     }
     }

  }

  // ....... for decreasing score for evwery wrong guessing.......
  //  .......... When input is too high............
  // else if (guess > secretNumber) {if(score>1){
  //   document.querySelector('.message').textContent = '📈 Too High!';
  //   score--;
  //   document.querySelector('.score').textContent = score;
  //   document.querySelector('.score').textContent = score;
  // }
  //  else{
  //     document.querySelector('.message').textContent =
  //       '😔You Lose the game try again';
  //  }
  //  }

  // //  .......... When input is too Low ............
  // else if (guess < secretNumber  ){
  //   if( score > 1){
  //   score--;
  //   document.querySelector('.message').textContent = '📉 Too Low!';

  //   document.querySelector('.score').textContent = score;
  // }
  //   else{
  //   document.querySelector('.message').textContent =
  //     '😔You Lose the game try again';
  //   }
      
    
  // }
});

//  ............... function for button Again !..............
//  .... funnction to reload the page.........
document.querySelector('.again').addEventListener('click', function () {
  score=20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector('.number').textContent = '?';
  // document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage('Start guessing...')
  document.querySelector('.score').textContent = score;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.guess').value = ' ';
});

// ................. ALL TYPE OF DECLERATION AND EVENT RELATED TO INFORFMATION BUTTON......

// .........Decleartion of variables................
const modal =document.querySelector('.modal')
const overlay=document.querySelector('.overlay')
const btnCloseModal=document.querySelector('.close-modal')
const information=document.querySelector('.between')


const openModel=function(){
    modal.classList.remove('hidden')
    overlay.classList.remove('hidden')
}
const closeModel=function(){
    modal.classList.add('hidden')
    overlay.classList.add('hidden')
}

information.addEventListener("click",openModel)

btnCloseModal.addEventListener("click",closeModel)
overlay.addEventListener("click",closeModel)
// .............Add escape keyboard buttton...........

document.addEventListener('keydown',function(e){
   
  //    fuction () create an object named e which contain all value related to e=which key is pressed
  // e.key  five the output from object which key is pressed
  
      // console.log(e);
      // console.log(e.key);
      if(e.key ==='Escape'){
          if(!modal.classList.contains('hidden')){
              closeModel();
          }
      }

      
  })


  // .........START BUTTON FUNCTION...........
let start=document.querySelector('.start')
let newPage=document.querySelector('.new-page')
start.addEventListener('click',function(){
newPage.classList.remove('new-page')
start.classList.add('new-page')

})

document.addEventListener('keydown',function(e){
  if(!newPage.classList.contains('new-page')){
    if(e.key==='Enter'){
      start.classList.add('newpage')
     newPage.classList.remove('newpage')

    }
  }
})







