
import { showError } from './module.js';

document.addEventListener('DOMContentLoaded', () => {
    const errorClass = '.error';

    const allTask = document.querySelector('.all_task');

    const doneTask = document.querySelector('.done_task');

    const inputTask = document.querySelector('.input_task');

    const addBtn = document.querySelector('.addBtn');

    const list = document.getElementById('list');

    addBtn.addEventListener('click', () => {
        newElement();
    });

    class Task {
        constructor(title, status) {
            this._title = title;
            this._status = status;
        }
    }


    //
    // btn_edit.addEventListener("click", function () {
    //     if (input_task.value != "") {
    //         let ev = this_event;
    //         ev.target.classList.remove("edit_this");
    //         ev.path[1].firstChild.data = input_task.value;
    //         toLocal();
    //         input_task.value = "";
    //     } else {
    //         ShowError("Вы не выбрали задачу, повторите попытку");
    //     }
    // });
    //
    // const forLocal = localStorage.getItem('todolist');
    // if (forLocal) {
    //     document.querySelector('ul').innerHTML = (forLocal);
    //     f_filtr();
    // }

    list.addEventListener('click', (ev) => {
        switch (ev.target.tagName) {
            case ('LI'):
                ev.target.classList.toggle('checked');
                // toLocal();
                break;
            case ('SPAN'):
                const div = ev.target.parentNode;
                div.remove();
                // toLocal();
                break;
            // case ("DIV"):
            //     let temp = ev.target.parentNode.innerText;
            //     let str = ev.path[1].firstChild.data;
            //     this_event = ev;
            //     editTask(str);
            //     break
        }
    });

    // function editTask(item) {
    //     let btn_add = document.getElementById("btn_add"),
    //         btn_edit = document.getElementById("btn_edit");
    //     document.getElementById("input_task").value = item;
    //     btn_edit.classList.toggle('hide');
    //     btn_add.classList.toggle('hide');
    // }

    function newElement() {
        const inputValue = input_task.value;
        if (inputValue == '') {
            const errorStr = 'Вы не ввели задачу, повторите попытку';
            ShowError(errorClass, errorStr);
        } else {
            createTask(inputValue);
            input_task.value = '';
        }
    }

    function ShowError(str) {
        document.getElementById('error').innerHTML = str;
        setTimeout(() => {
            document.getElementById('error').innerHTML = '';
        }, 750);
    }

    function toLocal() {
        todolist = list.innerHTML;
        localStorage.setItem('todolist', todolist);
        f_filtr();
    }

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

    function createTask(inputValue, status) {
        const li = document.createElement('li');
        const tmp = document.createTextNode(inputValue);
        li.appendChild(tmp);
        document.getElementById('list').appendChild(li);
        const edit = document.createElement('DIV');
        const span = document.createElement('SPAN');
        const txt = document.createTextNode('X');
        const temp = document.createTextNode('EDIT');
        edit.className = 'edit';
        edit.appendChild(temp);
        li.appendChild(edit);
        span.className = 'close';
        span.appendChild(txt);
        li.appendChild(span);
        if (status) {
            li.classList.add('checked');
        }
        // toLocal();
    }
});
