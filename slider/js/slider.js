'use strict';
document.addEventListener('DOMContentLoaded', function() {

let btn_prev = document.querySelector('#slider .buttons .arrow-left');
let btn_next = document.querySelector('#slider .buttons .arrow-right');

let images = document.querySelectorAll('#slider .photos img');
let item = document.querySelectorAll('#slider .button-list li');
let i = 3;
console.log (images);
console.log (item); // ???
btn_prev.onclick = function(){
    images[i].className = '';
    i = i - 1; /* i-- */
    console.log(i);

    if(i < 0){
        i = images.length - 1;
    }

    images[i].className = 'showed';
}

btn_next.onclick = function(){
    images[i].className = '';
    i = i + 1; /* i++ */
    console.log(i);

    if(i >= images.length){
        i = 0;
    }

    images[i].className = 'showed';
}

});
