'use strict';
document.addEventListener('DOMContentLoaded', function () {
    let min = 1;
    let max = 10;
    let pageNumber,pageNumber1,pageNumber2;
    let limitNumber,limitNumber1,limitNumber2;
    let MyAPI,MyAPI1,MyAPI2;

    function delay(f,t) {
        setTimeout( f,t) ;
    };

    function getApi(API,limitN,pageN,id){
        let str1 = "http://apistaging.theatre.pp.ua/posts.json?limit=";
        let str2 = "&page=";
       API  = str1 + limitN + str2 + pageN;
        document.getElementById(id).textContent = API;
        console.log ("API",API);
        MyAPI = API ;
    };

    function getLimitNumber(limitN,id) {
        limitN = min + Math.random() * (max + 1 - min);
        limitN = Math.floor(limitN);
        document.getElementById(id).textContent = limitN;
        console.log(id, limitN);
        limitNumber = limitN ;
    };

    function getPageNumber(pageN,id) {
        pageN = min + Math.random() * (max + 1 - min);
        pageN = Math.floor(pageN);
        document.getElementById(id).textContent = pageN;
        console.log(id, pageN);
        pageNumber =  pageN;
    };

    let myXMLHttp = new XMLHttpRequest();

    function GetCallback(callback) {
        myXMLHttp.onreadystatechange = function () {
            if (this.readyState === 4 && this.status === 200) {
                callback(this.responseText);
                 console.warn(JSON.parse(this.responseText));
            };
        };
    };


    function myXMLHttpPrint(id) {
        myXMLHttp.open("GET",MyAPI);
        document.getElementById(id).textContent = myXMLHttp;
        myXMLHttp.send();
        console.log(myXMLHttp);
    };

    GetCallback( function (myXMLHttp_callback,callback) {
        console.log (callback);
    });


    //
    //
    // getApi(MyAPI2,limitNumber2,pageNumber2 );
    // getLimitNumber(limitNumber2);
    // getPageNumber(pageNumber2);


    function goCallback() {
        delay(function () {
            getLimitNumber(limitNumber1,"limitNumber1");
            limitNumber1 = limitNumber;
        }, 1000);

        delay(function () {
            getPageNumber(pageNumber1,"pageNumber1");
            pageNumber1 = pageNumber;
        }, 2000);
        delay(function () {
            getApi(MyAPI1,limitNumber1,pageNumber1,"MyAPI1");
            MyAPI1 =MyAPI;
        }    ,4000);
        delay(function(){
            myXMLHttpPrint("callback_Request")
        }, 6000);
        delay( goPromise,6500);
    };


    function goPromise() {
        delay(function () {
            getLimitNumber(limitNumber2,"limitNumber2");
            limitNumber2 = limitNumber;
        }, 1000);

        delay(function () {
            getPageNumber(pageNumber2,"pageNumber2");
            pageNumber2 = pageNumber;
        }, 2000);
        delay(function () {
            getApi(MyAPI2,limitNumber2,pageNumber2,"MyAPI2");
            MyAPI2 =MyAPI;
        }    ,4000);
        delay(function(){
            myXMLHttpPrint("promise_Request")
        }, 6000);
    };

    goCallback();

});