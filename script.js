


//--------------------- lets's built rock paper siccors------------
//------------------------------------------------------------------

//create an object for total score

const totalScore = {playerChoice : 0, computerChoice : 0}






// get the random computer choices 
function getComputerChoice() {
  let rpsChoice = ['Rock','Paper','Scissors']
  let randomNumber= Math.floor(Math.random()*rpsChoice.length)
  return rpsChoice[randomNumber]
}

getComputerChoice()

// let's get the conditons where player wins. looses and draws
function getResult(playerChoice, computerChoice) {
  
    // initialize a variable for storing score
  let score
  

  // all situations where human draws, set `score` to 0
  if (playerChoice == computerChoice ){
    score = 0
  }

  // all situations where human wins, set `score` to 1
 

   else if (playerChoice == 'Rock' && computerChoice == 'Scissors'){
    score = 1
  }else if (playerChoice == 'Paper' && computerChoice == 'Rock'){
    score = 1
  }else if (playerChoice == 'Scissors' && computerChoice == 'Paper'){
     score = 1
  }
  

  // Otherwise human loses (aka set score to -1)
  else {
    score = -1
  }

  // return score
return score
  
}

// show the results and update it to DOM


function showResult(score, playerChoice, computerChoice) {

    // get the div elements
    const playerscoreDiv = document.getElementById('player-score')
    const handsDiv = document.getElementById('hands')
    const resultDiv = document.getElementById('result')
  // display the results according to the score
  if (score == -1){
    
    resultDiv.innerText = `You Lose !..`
  
  }else if (score == 0){
   resultDiv.innerText = `It's a tie !..`
  }else {
   resultDiv.innerText = `You Won !..`
  }
  handsDiv.innerText = `👱 ${playerChoice} vs 🤖 ${computerChoice}`
  playerscoreDiv.innerText = `Your Score is ${totalScore['playerChoice']}`
}

// ** Calculate who won and show it on the screen **
function onClickRPS(playerChoice) {

  const computerChoice = getComputerChoice()
  const score = getResult(playerChoice, computerChoice)
  totalScore['playerChoice'] += score

  showResult(score, playerChoice, computerChoice)
}


// lets select each button respect to our clicks
function playGame() {
  // use querySelector to select all Rock Paper Scissor Buttons
  let rpsButtons = document.querySelectorAll('.rpsButton')


// on clicking rock/paper/sciccors call onclickRPS function where all other function are called and play the game

 rpsButtons.forEach(rpsButton => {
    rpsButton.onclick = () => onClickRPS(rpsButton.value)
  })

 

  // get the endgame button div
    let endGameButton = document.getElementById('endGameButton')
  endGameButton.onclick = () => endGame()
}

  


//  endGame function clears all the text on the DOM  or clear the game on clicking endgame button
function endGame() {
    let playerScore = document.getElementById('player-score')
  let hands = document.getElementById('hands')
  let result = document.getElementById('result')
  playerScore.innerText = ''
  hands.innerText = ''
  result.innerText = ''
}

playGame()