'use strict';
document.addEventListener('DOMContentLoaded', function () {

    // var   //
    let min = 1;
    let max = 10;
    let randomNumber;
    let pageNumber1, pageNumber2, pageNumber3;
    let limitNumber1, limitNumber2, limitNumber3;
    let MyAPI, MyAPI1, MyAPI2, MyAPI3;

    // функция отстрочки выполнения
    function delay(f, t) {
        setTimeout(f, t);
    }

    // Функция склеивания адресса запроса и вывод адресса запроса на html страницу
    function getApi(API, limitN, pageN, id) {
        let str1 = "http://apistaging.theatre.pp.ua/posts.json?limit=";
        let str2 = "&page=";
        API = str1 + limitN + str2 + pageN;
        document.getElementById(id).textContent = API;
        console.log("API", API);
       MyAPI = API;
    }

    // функция генерации рандомного числа //
    function RandomN(rand, id) {
        rand = min + Math.random() * (max + 1 - min);
        rand = Math.floor(rand);
        document.getElementById(id).textContent = rand;
        console.log(id, rand);
        randomNumber = rand;
    }


    let myXMLHttp = new XMLHttpRequest();

    let myPromis = new Promise((resolve, reject) => {
            let XMLHttp = new XMLHttpRequest();
            XMLHttp.onreadystatechange = function () {
                if (this.readyState === 4 && this.status === 200) {
                    resolve(this.responseText);
                }
            }
        }
    );

    myPromis.then((response) => {
        console.warn(JSON.parse(response));

    }).catch((reject) => {
        console.error("Sorry :( we have some problem")
    });

    // запрос на сервер и возврат результата через callback
    function GetCallback(callback) {
        myXMLHttp.onreadystatechange = function () {
            if (this.readyState === 4 && this.status === 200) {
                callback(JSON.parse(this.responseText));
                // console.warn(JSON.parse(this.responseText));
            }
        }
    }

    //функция вывода информации в консоль и на html страницу
    function myXMLHttpPrint(myXML, MyAPI, id) {
        myXML.open("GET", MyAPI);
        document.getElementById(id).textContent = myXML;
        myXML.send();


        //вызов функции Callback
        GetCallback(function (callback) {
            console.warn("callback =>", callback);
        });
    }

    // функция для последовательного вызова функций
    function start() {
        delay(function () {
            RandomN(limitNumber1, "limitNumber1");
            limitNumber1 = randomNumber;
        }, 1000);

        delay(function () {
            RandomN(pageNumber1, "pageNumber1");
            pageNumber1 = randomNumber;
        }, 2000);
        delay(function () {
            getApi(MyAPI1, limitNumber1, pageNumber1, "MyAPI1");
            MyAPI1 = MyAPI;
        }, 3000);
        delay(function () {
            myXMLHttpPrint(myXMLHttp, MyAPI1, "callback_Request")
        }, 5000);
        delay(goPromise, 6500);
    }

    // функция для последовательного вызова функций
    function goPromise() {
        delay(function () {
            RandomN(limitNumber2, "limitNumber2");
            limitNumber2 = randomNumber;
        }, 1000);

        delay(function () {
            RandomN(pageNumber2, "pageNumber2");
            pageNumber2 = randomNumber;
        }, 2000);
        delay(function () {
            getApi(MyAPI2, limitNumber2, pageNumber2, "MyAPI2");
            MyAPI2 = MyAPI;
        }, 3000);
        delay(function () {}, 5000);
            delay(function () {}, 6500);
        }


    //     function goAsync() {
    //         delay(function () {
    //             RandomN(limitNumber3, "limitNumber3");
    //             limitNumber3 = randomNumber;
    //         }, 1000);
    //
    //         delay(function () {
    //             RandomN(pageNumber3, "pageNumber3");
    //             pageNumber3 = randomNumber;
    //         }, 2000);
    //         delay(function () {
    //             getApi(MyAPI3, limitNumber3, pageNumber3, "MyAPI3");
    //             MyAPI3 = MyAPI;
    //         }, 4000);
    //         delay(function () {
    //             myXMLHttpPrint("async_Request")
    //         }, 6000);
    // }


    start();

});