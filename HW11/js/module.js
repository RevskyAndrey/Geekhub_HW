export function showError( strError) {
    document.querySelector('.error').createTextNode = strError;
    setTimeout(() => {
        document.querySelector('.error').createTextNode = '';
    }, 1600);
}

export default { showError };
