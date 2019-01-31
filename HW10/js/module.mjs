export function testError(x, y, i) {
    let bollean = false;
    let str_empty = "Вы не заполнили все ячейки";
    let str_NaN = "Вводите только числа ";
    let str_less = "Количество точек для многоугольника должно быть больше 3х";
    if  (isNaN(x) ||isNaN(y) || isNaN(i)){
        showError(".error", str_NaN);
        bollean = true;
     } else if ((x === "") ||(y === "")||(i === "")){

    }else if (i < 3) {
        showError(".error", str_less);
        bollean = true;
    }
    return bollean
}

export function showError(classItem, str_error ) {
    document.querySelector(classItem).innerHTML = str_error;
    setTimeout(function () {
        document.querySelector(classItem).innerHTML = "";
    }, 1600);
}
