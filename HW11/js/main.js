document.addEventListener('DOMContentLoaded', () => {
    const inputTask = document.querySelector('.input_task');
    const addBtn = document.querySelector('.addBtn');
    const editBtn = document.querySelector('.editBtn');
    const list = document.getElementById('list');
    const select = document.querySelector('.select');
    let thisTarget;
    const tastObj = {};

    class TaskFunction {
        createItem() {
            list.insertAdjacentHTML('beforeend', `<li><input disabled class="editInput" value=" ${this._title} ">
<div class="edit">EDIT</div><span class="close">X</span></li>`);
            // toLocal();
        }
    }

    class TaskItem extends TaskFunction {
        constructor(title, status = false) {
            super();
            this._title = title;
            this._status = status;
        }
    }

    class Task extends TaskItem {
        createItem() {
            super.createItem();
        }
    }

    list.addEventListener('click', (ev) => {
        switch (ev.target.tagName) {
            case ('INPUT'):
                ev.target.classList.toggle('checked');
                funFiltr();
                // toLocal();
                break;
            case ('SPAN'):
                ev.target.parentNode.remove();
                funFiltr();
                // toLocal();
                break;
            case ('DIV'):
                const str = ev.target.previousSibling.previousSibling.value;
                const value = str.slice(0, -1);
                thisTarget = ev.target;
                editTask(value);
                break;
            default:
                ev.target.classList.toggle('checked');
                funFiltr();
                // toLocal();

                break;
        }
    });

    function editTask(value) {
        addBtn.classList.toggle('hide');
        editBtn.classList.toggle('hide');
        inputTask.value = value;
        thisTarget.classList.toggle('edit_this');
    }

    select.addEventListener('click', () => {
        const arrItems = Array.from(list.children);
        switch (select.value) {
            case ('done'):
                for (let i = 0; i < arrItems.length; i++) {
                    arrItems[i].classList.remove('hide');
                    if (arrItems[i].classList != 'checked') {
                        arrItems[i].classList.add('hide');
                    }
                }
                break;
            case ('notdone'):
                for (let i = 0; i < arrItems.length; i++) {
                    arrItems[i].classList.remove('hide');
                    if (arrItems[i].classList == 'checked') {
                        arrItems[i].classList.add('hide');
                    }
                }
                break;
            case ('all'):
                for (let i = 0; i < arrItems.length; i++) {
                    arrItems[i].classList.remove('hide');
                }
                break;
        }
    });

    editBtn.addEventListener('click', () => {
        const inputValue = inputTask.value;
        if (inputValue === '') {
            const errorStr = 'Вы не ввели задачу, повторите попытку';
            showError(errorStr);
        } else {
            thisTarget.previousSibling.previousSibling.value = inputValue;
            thisTarget.classList.remove('edit_this');
            addBtn.classList.toggle('hide');
            editBtn.classList.toggle('hide');
            inputTask.value = '';
            // toLocal();
        }
    });


    function showError(strError) {
        document.querySelector('.error').innerHTML = strError;
        setTimeout(() => {
            document.querySelector('.error').innerHTML = '';
        }, 1250);
    }

    addBtn.addEventListener('click', () => {
        const inputValue = inputTask.value;
        if (inputValue === '') {
            const errorStr = 'Вы не ввели задачу, повторите попытку';
            showError(errorStr);
        } else {
            new Task(inputValue).createItem();
            inputTask.value = '';
        }
        funFiltr();
    });

    // const forLocal = localStorage.getItem('todolist');
    // if (forLocal) {
    //     document.querySelector('ul').innerHTML = (forLocal);
    //     f_filtr();
    // }
    //
    //
    // function toLocal() {
    //     todolist = list.innerHTML;
    //     localStorage.setItem('todolist', todolist);
    //     f_filtr();
    // }
    //
    function funPrint(all, done, notDone) {
        document.querySelector('.all_task').innerHTML = all;
        document.querySelector('.done_task').innerHTML = done;
        document.querySelector('.not_done_task').innerHTML = notDone;
    }

    function funFiltr() {
        const items = document.getElementById('list');
        const all = items.children.length;
        let done = 0;
        let notDone = 0;
        for (let i = 0; i < all; i++) {
            const item = items.children[i];
            const str = item.classList;
            if (str == 'checked') {
                done++;
            } else if (str != 'checked') {
                notDone++;
            }
            funPrint(all, done, notDone);
            console.log(all, done, notDone);
        }
    }
});
