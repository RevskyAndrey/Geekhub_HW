'use strict';
document.addEventListener('DOMContentLoaded', function () {

    let btn_prev = document.querySelector('#slider .arrow-left');
    let btn_next = document.querySelector('#slider .arrow-right');
    let images = document.querySelectorAll('#slider .photos img');
    let item = document.querySelectorAll('#slider .js_button');
    let item_content = document.querySelectorAll('#slider .content-item');
    let i ,items;

    console.log(item_content);

    for (let j = 0; j < item.length; j++) {
        items = item.item(j);
        items.addEventListener("click", function (ent) {
            i = j;
            showSlides(i)
        });
    };


    btn_prev.addEventListener("click", function () {
        i--;
        if (i < 0) {
            i = images.length - 1;
        };
        showSlides(i)
    });


    btn_next.addEventListener("click", function () {
        i++;
        if (i >= images.length) {
            i = 0;
        };
        showSlides(i)

    });

    function showSlides(i) {
        console.log(i);

        for (let j = 0; j < item.length; j++) {
            items = images.item(j);
            items.classList.remove('showed');
        };
        for (let j = 0; j < item.length; j++) {
            items = item.item(j);
            items.classList.remove('item-active');
        };
        for (let j = 0; j < item.length; j++) {
            items = item_content.item(j);
            items.classList.remove('content-active');
        };


        images[i].className = 'showed';
        item[i].classList.toggle("item-active");
        item_content[i].classList.toggle("content-active");
    };


});

