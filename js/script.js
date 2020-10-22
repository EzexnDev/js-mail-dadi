var emailArray = ["pippo@gmail.com", "pluto@gmail.com","paperino@gmail.com","topolino@gmail.com"];
var userEmail = prompt("Acesso limitato !! Inserisci la tua email");
var message = "Email non presente"

for (var i = 0 ; i < emailArray.length ; i ++){
    if (userEmail == emailArray[i]){    
     message = "Email presente"
     }
}
console.log(message);






var dadoUser = [1,2,3,4,5,6];
var dadoPc = [1,2,3,4,5,6];
var playEl = document.getElementById("play");

playEl.addEventListener("click",
function(){
    var i = Math.floor(Math.random() * (5 - 0)) + 0;
    var v = Math.floor(Math.random() * (5 - 0)) + 0;
if ( dadoUser[i] > dadoPc[v] ){
    console.log("Hai Vinto");
    } else {
    console.log("Hai Perso");
    }
})