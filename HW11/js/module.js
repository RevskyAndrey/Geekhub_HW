export function showError(classItem, strError) {
    document.querySelector(classItem).innerHTML = strError;
    setTimeout(() => {
        document.querySelector(classItem).innerHTML = '';
    }, 1600);
}

export default { showError };
