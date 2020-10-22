//Esercizio Email

var emailArray = ["pippo@gmail.com", "pluto@gmail.com","paperino@gmail.com","topolino@gmail.com"]; // Array Email
var userEmail = prompt("Acesso limitato !! Inserisci la tua email");
var message = "Email non presente"

for (var i = 0 ; i < emailArray.length ; i ++){
    if (userEmail == emailArray[i]){    
     message = "Email presente"
     }
}
console.log(message);
document.getElementById("answer").innerHTML = message;





// Esercizio Dadi

var dadoUser = [1,2,3,4,5,6]; //Array Dado User
var dadoPc = [1,2,3,4,5,6]; //Array Dado PC
var playEl = document.getElementById("play");

//Premere il bottone nella pagina per giocare!
playEl.addEventListener("click",
function(){
    var i = Math.floor(Math.random() * (5 - 0)) + 0;
    var v = Math.floor(Math.random() * (5 - 0)) + 0;
if ( dadoUser[i] > dadoPc[v] ){
    console.log("Hai Vinto");
    document.getElementById("risultato").innerHTML = "Hai Vinto"
    } else {
    console.log("Hai Perso");
    document.getElementById("risultato").innerHTML = "Hai Perso"
    }
})