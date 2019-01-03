'use strict';
document.addEventListener('DOMContentLoaded', function () {
    let min = 1;
    let max = 10;
    let pageNumber;
    let limitNumber;
    let MyAPI;

    function delay(f,t) {
        setTimeout( f,t) ;
    };

    function getApi() {
        let str1 = "http://apistaging.theatre.pp.ua/posts.json?limit=";
        let str2 = "&page=";
        MyAPI  = str1 +limitNumber +str2 + pageNumber;
        document.getElementById("MyAPI").textContent = MyAPI;
        console.log ("API",MyAPI);
    };

    function getLimitNumber() {
        limitNumber = min + Math.random() * (max + 1 - min);
        limitNumber = Math.floor(limitNumber);
        document.getElementById("limitNumber").textContent = limitNumber;
        console.log("limitNumber", limitNumber);
    };

    function getPageNumber() {
        pageNumber = min + Math.random() * (max + 1 - min);
        pageNumber = Math.floor(pageNumber);
        document.getElementById("pageNumber").textContent = pageNumber;
        console.log("pageNumber", pageNumber);
    };

    let myXMLHttp = new XMLHttpRequest();

    function GetCallback(callback) {
          myXMLHttp.onreadystatechange = function () {
            if (this.readyState === 4 && this.status === 200) {
                callback(this.responseText);
                // console.warn(JSON.parse(this.responseText));
            };
        };
    };


    function myXMLHttpPrint() {
        myXMLHttp.open("GET",MyAPI);
        document.getElementById("callback_Request").textContent = myXMLHttp;
        myXMLHttp.send();
        console.log(myXMLHttp);
    };

    GetCallback( function (callback) {
        console.log (callback);
    });

    function go() {
        delay(getLimitNumber, 1000);
        delay(getPageNumber, 2000);
        delay(getApi,3000);
        delay(myXMLHttpPrint, 6000);
    };

    go();
});