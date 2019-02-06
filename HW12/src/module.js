"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// не захотел компилиться   ек переносил в основной файл //
function testError(x, y, i) {
    var boolean = false;
    var str_empty = 'Вы не заполнили все ячейки';
    var str_NaN = 'Вводите только числа ';
    var str_less = 'Количество точек для многоугольника должно быть больше 3х';
    if (isNaN(x) || isNaN(y) || isNaN(i)) {
        showError('.error', str_NaN);
        boolean = true;
    }
    else if ((x == +'') || (y == +'') || (i == +'')) {
    }
    else if (i < 3) {
        showError('.error', str_less);
        boolean = true;
    }
    return boolean;
}
exports.testError = testError;
function showError(classItem, str_error) {
    document.querySelector(classItem).innerHTML = str_error;
    setTimeout(function () {
        document.querySelector(classItem).innerHTML = '';
    }, 1600);
}
exports.showError = showError;
