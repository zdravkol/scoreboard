// javascript
let numHome = 0;
let numGuest = 0;
document.getElementById("scorehome").textContent = numHome;
document.getElementById("scoreguest").textContent = numGuest;
// console.log(numHome);
// console.log(numGuest);

// for the HOME counter
    // event listener for the first button '+1'
document.getElementById("buttonOne").addEventListener('click', function(e){
        numHome += 1;
        console.log(numHome)
        document.getElementById("scorehome").textContent = numHome;
    }, false)
    // event listener for the second button '+2'
document.getElementById("buttonTwo").addEventListener('click', function(e){
        numHome += 2;
        console.log(numHome)
        document.getElementById("scorehome").textContent = numHome;
    }, false)
  
    // event listener for the third button '+3'
document.getElementById("buttonThree").addEventListener('click', function(e){
        numHome += 3;
        console.log(numHome)
        document.getElementById("scorehome").textContent = numHome;
    }, false)


// For the GUEST counter
    // event listener for the guest '+1' button
const listenG1 = document.getElementById("buttonOneGuest");
    if(listenG1) { 
        listenG1.addEventListener('click', function(e){
            numGuest += 1;
            document.getElementById("scoreguest").textContent = numGuest;
            console.log(numGuest)
        }, false)
    } 
        // event listener for the guest '+2' button
const listenG2 = document.getElementById("buttonTwoGuest");
    if(listenG2) {
        listenG2.addEventListener('click', function(e){
            numGuest +=  2;
            document.getElementById("scoreguest").textContent = numGuest
            console.log(numGuest);
        }, false)
    }
        // event listener for the guest '+3' buttion
const listenG3 = document.getElementById("buttonThreeGuest");
    if(listenG3) {
        listenG3.addEventListener('click', function(e){
            numGuest += 3;
            document.getElementById("scoreguest").textContent = numGuest;
            console.log(numGuest);
        }, false)
    }
    
// onclick RESET button for NEW GAME
const newGameButton = document.getElementById("buttonGame")
 if(newGameButton) {
    newGameButton.addEventListener('click', function(e){
        let choice = window.confirm("Erease Scores?!");
        if (choice) {
            window.location.reload();            
        }
        else {
            console.log("back to game..")
        }        
    },false)
 }
