'use strict';
document.addEventListener('DOMContentLoaded', function () {
    let x =1 ,
        y=10;
    let limitN,pageN;

function randomN(min,max) {
    let rand = min + Math.random()*(max+ 1 -min);
    rand = Math.floor(rand);
    console.log ("RANDOM ",rand);
    return rand;
};

console.log(randomN(x,y));
setTimeout(randomN(x,y), 5000)



});