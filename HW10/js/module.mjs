export function showError(classItem, str,variable) {
    let str_error = str +variable;
    document.querySelector(classItem).innerHTML = str_error;
    setTimeout(function () {
        document.querySelector(classItem).innerHTML = "";
    }, 1250);
}

// let myX, myY,
//     yourX = document.querySelector('.js_x'),
//     yourY = document.querySelector('.js_y'),
//     btn = document.querySelector('.js_bnt'),
//     btn_close = document.querySelector('.close');
//
// btn_close.addEventListener("click", function () {
//     document.querySelector(".popup").classList.add("hide");
//     document.querySelector(".task").classList.remove("hide");
// });
//
// btn.addEventListener("click", function () {
//     let tempX = yourX.value;
//     let tempY = yourY.value;
//     let str_error = "Вы не ввели значение";
//     let error = false;
//     if (tempX === "") {
//         showError(".error", str_error, "X");
//         error = true;
//     } else if (tempY === "") {
//         showError(".error", str_error, "Y");
//         error = true;
//     }
//     myX = tempX;
//     myY = tempY;
//     console.log("myX", myX);
//     console.log("myY", myY);
//     yourX.value = "";
//     yourY.value = "";
//     if (error == false) {
//         start();
//     }
// });
//
// function showPopup() {
//     document.querySelector(".popup").classList.remove("hide");
//     document.querySelector(".task").classList.add("hide");
// }