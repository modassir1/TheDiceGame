
const randomNumber1 = Math.floor(Math.random() * 6) + 1;
const randomDiceImg = "imeage/dice" + randomNumber1 + ".png";
const img1 = document.querySelectorAll("img")[0];
img1.setAttribute("src", randomDiceImg);


const randomNumber2 = Math.floor(Math.random() * 6) + 1;
const randomDiceImg2 = "imeage/dice" + randomNumber2 + ".png";
const img2 = document.querySelectorAll("img")[1];
img2.setAttribute("src", randomDiceImg2);


if(randomNumber1 > randomNumber2){
    document.querySelector('h1').innerHTML = "Player One Win!"
}
else if(randomNumber2 > randomNumber1){
    document.querySelector('h1').innerHTML = "Player Two Win!"
}
else{
    document.querySelector('h1').innerHTML = "Mathch Draw!"
    
}
