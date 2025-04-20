const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];
hite= document.getElementById("two")
kiy=document.getElementById("one")
function password(){
    hite.textContent = "";
    kiy.textContent = "";
    for(i=0;i<9;i++){
    let m = Math.floor(Math.random()* characters.length)+1
    if(characters[m]!= undefined)
    {
        hite.textContent += characters[m]
    }
    }
    for(i=0;i<9;i++){   
    let n = Math.floor(Math.random()* characters.length)+1
    if(characters[n]!= undefined)
    {
        kiy.textContent += characters[n]
    }
    }
}
// each password should be 15 charecters long
