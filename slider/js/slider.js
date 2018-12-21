'use strict';
document.addEventListener('DOMContentLoaded', function() {

let btn_prev = document.querySelector('#slider .buttons .arrow-left');
let btn_next = document.querySelector('#slider .buttons .arrow-right');
let images = document.querySelectorAll('#slider .photos img');
let item = document.querySelectorAll(' .js_button');
let i = 2;


btn_prev.onclick = function(){
    images[i].className = '';
    item[i].classList.remove('active');
     i-- ;


    if(i < 0){
        i = images.length - 1;
    }

    images[i].className = 'showed';
    item[i].classList.add('active');
};

btn_next.onclick = function(){
    images[i].className = '';
    item[i].classList.remove('active');

     i++ ;


    if(i >= images.length){
        i = 0;
    }

    images[i].className = 'showed';
    item[i].classList.add('active');
}

});



