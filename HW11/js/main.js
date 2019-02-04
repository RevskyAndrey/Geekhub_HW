document.addEventListener('DOMContentLoaded', () => {
    // const allTask = document.querySelector('.all_task');
    // const doneTask = document.querySelector('.done_task');
    const inputTask = document.querySelector('.input_task');
    const addBtn = document.querySelector('.addBtn');
    const editBtn = document.querySelector('.editBtn');
    const list = document.getElementById('list');
    const select = document.querySelector('.select');
    let thisTarget;

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
                // toLocal();
                break;
            case ('SPAN'):
                ev.target.parentNode.remove();
                // toLocal();
                break;
            case ('DIV'):
                const value = ev.target.previousSibling.previousSibling.value;
                thisTarget = ev.target;
                editTask(value);
                break;
            default:
                ev.target.classList.toggle('checked');
                // toLocal();
                break;
        }
    });

    function editTask(value) {
        console.log(value);
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
// function f_print(all, done) {
//     const allStr = 'Всего поставленно задач : ';
//     const doneStr = 'Выполненеый зачач : ';
//     if (done === undefined) { done = 0; }
//     allTask.innerHTML = allStr + all;
//     doneTask.innerHTML = doneStr + done;
// }
//
// function f_filtr() {
//     const items = document.querySelectorAll('li');
//     const all = items.length;
//     let done;
//     for (let i = 0; i < items.length; i++) {
//         const item = items[i];
//         const str = item.classList;
//         if (done === undefined) { done = 0; }
//         if (str.value) { done++; }
//     }
//     f_print(all, done);
// }
});
