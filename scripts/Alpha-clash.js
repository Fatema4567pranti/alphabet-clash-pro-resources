// function play(){
//     //console.log('click the button');

//     //step-1: hide the home screen. to hide the screen add the class hidden to the home section
//     const homeSection = document.getElementById('home-screen');
//     //console.log(homeSection.classList)
//     homeSection.classList.add('hidden');

//     //show the playground
//     const playGroundSection = document.getElementById('play-ground');
//     //console.log(playGroundSection.classList)
//     playGroundSection.classList.remove('hidden');
// }

// function handleKeybordButtonPress(){
//     console.log('button press');

// }
// //capture keybord key press
// document.addEventListener('keyup', handleKeybordButtonPress)

function handleKeybordKeyUpEvent(event){
    //console.log('button pressed. I am impressed');
    //console.log(event.key);
    const playerPressed = event.key;
    console.log('Player Pressed', playerPressed);

    //stop the game if pressed 'Esc'
      if(playerPressed === 'Escape'){
        gameOver();
      }

    //get the expected to press
    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet. toLowerCase();
    //console.log(playerPress, expectedAlphabet);

    //check matched or not
     if(playerPressed === expectedAlphabet){
         console.log('you get a point!');
      // console.log('you have press correctly', expectedAlphabet);

      const currentScore = getTextElementValueById('current-score');
      console.log(currentScore);
      const newScore = currentScore + 1; 
      setTextElementValueById('current-score', newScore);

//-------------------------------------------------------------------------------
    //     //  update score
    //     // 1. get the current score
    //     const currentScoreElement = document.getElementById('current-score');
    //     const currentScoreText = currentScoreElement.innerText;
    //     const currentScore = parseInt(currentScoreText);
    //     console.log(currentScore);
    //   // 2. increase the current score
    //   const newScore = currentScore + 1; 

    //   // 3. show the updated score
    //   currentScoreElement.innerText = newScore;
      // start a new round
        // start a new round
//------------------------------------------------------------------------------        
         removeBackgroundColorById(expectedAlphabet);
         continueGame();
     }
     else{
         console.log('you missed. you lost a life');

         const currentLife = getTextElementValueById('current-life');
         const newLife = currentLife - 1;
         setTextElementValueById('current-life', newLife);

         if(newLife === 0){
            //console.log('game over');
            gameOver();
         }
//--------------------------------
        //  //step-1: get the current Life number
        //   const currentLifeElement = document.getElementById('current-life');
        //   const currentLifeText = currentLifeElement.innerText;
        //   const currentLife = parseInt(currentLifeText);
        //  //step-2: reduce the Life count
        //   const newLife = currentLife - 1;
        //  //spet-3: display the updated Life count
        //  currentLifeElement.innerText = newLife;
//-------------------------------       
     }
}
//capture keybord key press
document.addEventListener('keyup',handleKeybordKeyUpEvent);

function continueGame(){
    // step-1: generate a random alphabet
    const alphabet = getARandomAlphabet();
    console.log('your random alphabet',alphabet);

    //get randomly generated alphabet to the screen (show it)
    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;

    //set background color
    setBackgroundColorById(alphabet);
}

function play(){
    // hide everything show only the playground
    hideElementById('home-screen');
    hideElementById('fainal-score');
    showElementById('play-ground');

    // reset score and life
    setTextElementValueById('current-life', 5);
    setTextElementValueById('current-score', 0);

    continueGame();
}

function gameOver(){
    hideElementById('play-ground');
    showElementById('fainal-score');

    //update final score
    // 1. get the final score
    const lastScore = getTextElementValueById('current-score');
    console.log(lastScore);
    setTextElementValueById('last-score', lastScore);

    //clear the last selected alphabet highlight
    const currentAlphabet = getElementTextById('current-alphabet');
    console.log(currentAlphabet);
    removeBackgroundColorById(currentAlphabet);
}