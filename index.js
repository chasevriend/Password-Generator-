const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T"
,"U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r",
"s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@",
"#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
//generate 2 passwords
//each password should be at least 15 characters long 
let pass1El = document.getElementById("pass1-el");
let pass2El = document.getElementById("pass2-el");

function generate() {
    let shuffled = [...characters].sort(() => 0.5 - Math.random());
    pass1El.textContent = shuffled.slice(0, 15);
    let shuffledAgain = [...characters].sort(() => 0.5 - Math.random());
    pass2El.textContent = shuffledAgain.slice(0, 15);
}


