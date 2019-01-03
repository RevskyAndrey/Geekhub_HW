'use strict';
document.addEventListener('DOMContentLoaded', function () {
    let min = 1,
        max = 10;



    function randomN(id) {
        return function () {
            let rand = min + Math.random() * (max + 1 - min);
            rand = Math.floor(rand);
            document.getElementById(id).textContent = rand;
            console.log(id, rand);
        }
    }

    setTimeout(randomN("limitNumber") , 1000);

    setTimeout(randomN("pageNumber"), 2000);






});