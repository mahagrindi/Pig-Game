const button = document.getElementById("RollDice");
var player = "player1";
var curent1 = 0;
var curent0 = 0;
const Hold = document.getElementById("Hold");

var score0 = 0;
var score1 = 0;
const newGame = document.getElementById("newGame");


const switch_Player = function (player ,curent0) {
   
    if (player == "player1" ) {

        document.getElementById("current--0").innerHTML = curent0;
        
        var current = document.getElementsByClassName("player--active");
        current[0].className = current[0].className.replace(
          " player--active",
          ""  );
        var current2 = document.getElementById("player--1");

          current2.classList.add("player--active");

          return  "player2"; 
    } else  if (player == "player2" ) {
        document.getElementById("current--1").innerHTML = curent0;
        
        var current = document.getElementsByClassName("player--active");
        current[0].className = current[0].className.replace(
          " player--active",
          ""
        );

        var current2 = document.getElementById("player--0");
        current2.classList.add("player--active");
         
        return  "player1"; 

    }
    
  };

button.addEventListener("click", function handleClick() {
  var Number = Math.trunc(Math.random() * 6) + 1;

  document.getElementById("dice").src = "dice-" + Number + ".png";

  console.log(Number);

  switch (player) {
    case "player1":
      if (Number == 1) {
        curent0 = 0;
        console.log(curent0);

        // to change the active sections
       
       player = switch_Player(player , curent0);

       
      } else {
        curent0 = curent0 + Number;
        console.log(curent0);
        document.getElementById("current--0").innerHTML = curent0;
      }

      break;

    case "player2":
      // code block
      console.log("player 2");
      if (Number == 1) {
        curent1 = 0;
        console.log(curent1);

        
        player =  switch_Player(player ,curent1);
       
      } else {
        curent1 = curent1 + Number;
        console.log(curent1);
        document.getElementById("current--1").innerHTML = curent1;
      }
      break;
    default:
    // code block
  }
});




Hold.addEventListener("click", function handleClick() {


    switch (player) {
        case "player1":
         
            score0 = score0 +curent0 ;
            document.getElementById("score--0").innerHTML = score0;
               curent0 = 0;
                player =  switch_Player(player , curent0);
        
          break;
        case "player2":
            score1 = score1 +curent1 ;
            document.getElementById("score--1").innerHTML = score1;
            curent1 = 0 ;

            player =  switch_Player(player , curent1);
          break;
        default:
        // code block
      }
    });
    
 

    
    newGame.addEventListener("click", function handleClick() {

     score0 = 0;
     score1 = 0;
     curent0 = 0;
     curent1 = 0;
    document.getElementById("score--1").innerHTML = 0 ;

    document.getElementById("score--0").innerHTML = 0 ;
    document.getElementById("current--0").innerHTML = 0;
    document.getElementById("current--1").innerHTML = 0;
  
     
    });