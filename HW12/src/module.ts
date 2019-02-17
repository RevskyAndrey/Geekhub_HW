// не захотел компилиться   ек переносил в основной файл //
export function testError(x:number, y:number, i:number) {
    let boolean:boolean = false;
    const str_empty:string = 'Вы не заполнили все ячейки';
    const str_NaN:string = 'Вводите только числа ';
    const str_less:string = 'Количество точек для многоугольника должно быть больше 3х';
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

export function showError(classItem:string, str_error:string) {
    document.querySelector(classItem).innerHTML = str_error;
    setTimeout(() => {
        document.querySelector(classItem).innerHTML = '';
    }, 1600);
}
