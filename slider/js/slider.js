'use strict';
document.addEventListener('DOMContentLoaded', function () {

    let btn_prev = document.querySelector('#slider .arrow-left');
    let btn_next = document.querySelector('#slider .arrow-right');
    let images = document.querySelectorAll('#slider .photos img');
    let item = document.querySelectorAll('#slider .js_button');
// let item_content = document.querySelectorAll('#slider .js_content');
    let i = 0;
    let items;

    for (let i = 0; i < item.length; i++) {
        items = item.item(i);
        items.addEventListener("click", function (ent) {
            this.classList.toggle("active");
            console.log(i);
            showSlides(i)
        });
    }
    ;


    btn_prev.addEventListener("click", function () {

        images[i].className = '';
        this.classList.toggle("active");
        i--;
        if (i < 0) {
            i = images.length - 1;
        }

        images[i].className = 'showed';
        this.classList.toggle("active");
    });

    btn_next.addEventListener("click", function () {
        images[i].className = '';
        this.classList.toggle("active");
        i++;
        if (i >= images.length) {
            i = 0;
        }

        images[i].className = 'showed';
        this.classList.toggle("active");

    });

    function showSlides(n) {

        // let slides = document.getElementsByClassName("slider-item");
        // let dots = document.getElementsByClassName("dot");

        if (i >= images.length) {
            i = 0;
        }
        images[i].className = 'showed';
        this.classList.toggle("active");

        if (i < 0) {
            i = images.length - 1;
        }
        images[i].className = 'showed';
        this.classList.toggle("active");
    };

});




