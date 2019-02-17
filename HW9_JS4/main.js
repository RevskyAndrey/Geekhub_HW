'use strict';
document.addEventListener('DOMContentLoaded', function () {
    // var   //
    let min = 1;
    let max = 10;
    let pageNumber1, pageNumber2, pageNumber3;
    let limitNumber1, limitNumber2, limitNumber3;
    let myXMLHttp = new XMLHttpRequest();

    // функция генерации рандомного числа //

    function randomN(rand) {
        rand = min + Math.random() * (max + 1 - min);
        rand = Math.floor(rand);
        return rand;
    }

    // запрос на сервер и возврат результата через callback

    function getPosts(callback,limitNumber,pageNumber) {
        myXMLHttp.onreadystatechange = function () {
            if (this.readyState === 4 && this.status === 200) {
                callback(JSON.parse(this.responseText));
            }
        };

        myXMLHttp.open("GET", `http://apistaging.theatre.pp.ua/posts.json?limit=${limitNumber}&page=${pageNumber}`);
        myXMLHttp.send();
    }

    function start() {
        //  первый запрос //
        setTimeout(function () {

            limitNumber1 = randomN(limitNumber1);
        }, 1000);
        setTimeout(function () {
            pageNumber1 = randomN(pageNumber1);
        }, 2000);
        //  второй запрос //
        setTimeout(function () {
            limitNumber2 = randomN(limitNumber2);
        }, 1000);
        setTimeout(function () {
            pageNumber2 = randomN(pageNumber2);
        }, 2000);
        // третий запрос //
        setTimeout(function () {
            limitNumber3 = randomN(limitNumber3);
        }, 1000);
        setTimeout(function () {
            pageNumber3 = randomN(pageNumber3);
        }, 2000);
        //  запрос на сервер через callback //


        setTimeout(function () {

            getPosts(function (result,limitNumber1,pageNumber1) {
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

    function getAwait(limitNumber, pageNumber) {
        let request = new XMLHttpRequest();
        request.addEventListener('readystatechange', function () {
            if (request.readyState === 4 && request.status === 200) {
                console.warn("Async =>", JSON.parse(request.response));
            }
        });

        request.open('GET', `http://apistaging.theatre.pp.ua/posts.json?limit=${limitNumber}&page=${pageNumber}`);
        request.send();
    }

    function getPostPromis(limitNumber,pageNumber) {
        let myPromis = new Promise((resolve, reject) => {
            let XMLHttp = new XMLHttpRequest();
            XMLHttp.onreadystatechange = function () {
                if (this.readyState === 4 && this.status === 200) {
                    resolve(this.responseText);
                }
            };
            XMLHttp.open("GET", `http://apistaging.theatre.pp.ua/posts.json?limit=${limitNumber}&page=${pageNumber}`);
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