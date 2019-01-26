    export function ShowError(classItem, str) {
        document.querySelector(classItem).innerHTML = str;
        setTimeout(function () {
            document.querySelector(classItem).innerHTML = ""
        }, 750)
    }
