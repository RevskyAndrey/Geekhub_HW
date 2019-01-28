export function showError(classItem, str,variable) {
    let str_error = str +variable;
    document.querySelector(classItem).innerHTML = str_error;
    setTimeout(function () {
        document.querySelector(classItem).innerHTML = "";
    }, 1250);
}
