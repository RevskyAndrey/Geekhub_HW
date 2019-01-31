export function testError(x, y, i) {
    let bollean = false;
    let str_empty = "Вы не заполнили все ячейки";
    let str_less = "Количество точек для многоугольника должно быть больше 3х";
    if  ((x === "") ||(y === "")||(i === "")){
        showError(".error", str_empty);
        bollean = true;
     } else if (i < 3) {
        showError(".error", str_less);
        bollean = true;
    }
    return bollean
}

export function showError(classItem, str_error ) {
    document.querySelector(classItem).innerHTML = str_error;
    setTimeout(function () {
        document.querySelector(classItem).innerHTML = "";
    }, 1250);
}
