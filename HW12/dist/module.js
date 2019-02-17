

Object.defineProperty(exports, '__esModule', { value: true });
function testError(x, y, i) {
    let boolean = false;
    const str_empty = 'Вы не заполнили все ячейки';
    const str_NaN = 'Вводите только числа ';
    const str_less = 'Количество точек для многоугольника должно быть больше 3х';
    if (isNaN(x) || isNaN(y) || isNaN(i)) {
        showError('.error', str_NaN);
        boolean = true;
    } else if ((x == +'') || (y == +'') || (i == +'')) {
    } else if (i < 3) {
        showError('.error', str_less);
        boolean = true;
    }
    return boolean;
}
exports.testError = testError;
function showError(classItem, str_error) {
    document.querySelector(classItem).innerHTML = str_error;
    setTimeout(() => {
        document.querySelector(classItem).innerHTML = '';
    }, 1600);
}
exports.showError = showError;
