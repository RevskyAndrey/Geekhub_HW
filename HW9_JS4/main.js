'use strict';
document.addEventListener('DOMContentLoaded', function () {
    // var   //
    let min = 1;
    let max = 10;
    let pageNumber1, pageNumber2, pageNumber3;
    let limitNumber1, limitNumber2, limitNumber3;
    let myXMLHttp = new XMLHttpRequest();

    // функция генерации рандомного числа //
    function randomN(rand, id) {
        rand = min + Math.random() * (max + 1 - min);
        rand = Math.floor(rand);
        document.getElementById(id).textContent = rand;
        return rand;
    }

    // запрос на сервер и возврат результата через callback
    function getPosts(callback) {
        myXMLHttp.onreadystatechange = function () {
            if (this.readyState === 4 && this.status === 200) {
                callback(JSON.parse(this.responseText));
            }
        };
        myXMLHttp.open("GET", `http://apistaging.theatre.pp.ua/posts.json?limit=${limitNumber1}&page=${pageNumber1}`);
        myXMLHttp.send();
    }

    function start() {
        //  первый запрос //
        setTimeout(function () {
            limitNumber1 = randomN(limitNumber1, "limitNumber1");
        }, 1000);
        setTimeout(function () {
            pageNumber1 = randomN(pageNumber1, "pageNumber1");
        }, 2000);
        //  второй запрос //
        setTimeout(function () {
            limitNumber2 = randomN(limitNumber2, "limitNumber2");
        }, 1000);
        setTimeout(function () {
            pageNumber2 = randomN(pageNumber2, "pageNumber2");
        }, 2000);
        // третий запрос //
        setTimeout(function () {
            limitNumber3 = randomN(limitNumber3, "limitNumber3");
        }, 1000);
        setTimeout(function () {
            pageNumber3 = randomN(pageNumber3, "pageNumber3");
        }, 2000);
        //  запрос на сервер через callback //
        setTimeout(function () {
            getPosts(function (result) {
                console.warn("callback result =>", result);
            });
        }, 2500);
        // функция получения промиса //
        setTimeout(getPostPromis, 2500);


        setTimeout(getPostsAsync, 2500);
    }

    async function getPostsAsync() {
        try {
            await getAwait(limitNumber3, pageNumber3);
        } catch (error) {
            console.error('error message');
        }
    }

    function getAwait(limitNumber3, pageNumber3) {
        let request = new XMLHttpRequest();
        request.addEventListener('readystatechange', function () {
            if (request.readyState === 4 && request.status === 200) {
                console.warn("Async =>", JSON.parse(request.response));
            }
        });
        request.open('GET', `http://apistaging.theatre.pp.ua/posts.json?limit=${limitNumber3}&page=${pageNumber3}`);
        request.send();
    }

    function getPostPromis() {
        let myPromis = new Promise((resolve, reject) => {
            let XMLHttp = new XMLHttpRequest();
            XMLHttp.onreadystatechange = function () {
                if (this.readyState === 4 && this.status === 200) {
                    resolve(this.responseText);
                }
            };
            XMLHttp.open("GET", `http://apistaging.theatre.pp.ua/posts.json?limit=${limitNumber2}&page=${pageNumber2}`);
            XMLHttp.send();
        });
        myPromis.then((resolve) => {
            console.warn("Promise =>", JSON.parse(resolve));
        }).catch((reject) => {
            console.error("Sorry, you or we have some problem");
        })
    }

    start();
});