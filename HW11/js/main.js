import {showError} from './module.js';

document.addEventListener('DOMContentLoaded', () => {
    const errorClass = '.error';
    //
    // const allTask = document.querySelector('.all_task');
    //
    // const doneTask = document.querySelector('.done_task');

    const inputTask = document.querySelector('.input_task');

    const addBtn = document.querySelector('.addBtn');

    const list = document.getElementById('list');

    addBtn.addEventListener('click', () => {
        newElement();
    });

    class TaskItem {


        constructor(title, status = false) {
            this._title = title;
            this._status = status;
        }

        createItem() {
            const li = document.createElement('li');
            const divEdit = document.createElement('DIV');
            const span = document.createElement('SPAN');
            const txt = document.createTextNode('X');
            const edit = document.createTextNode('EDIT');
            li.appendChild(document.createTextNode(this._title));
            list.appendChild(li);
            divEdit.className = 'edit';
            divEdit.appendChild(edit);
            li.appendChild(divEdit);
            span.className = 'close';
            span.appendChild(txt);
            li.appendChild(span);
            if (this._status) {
                li.classList.add('checked');
            }
        }
    }

    function newElement() {
        const inputValue = inputTask.value;
        if (inputValue == '') {
            const errorStr = 'Вы не ввели задачу, повторите попытку';
            showError(errorStr);
        } else {
            new TaskItem(inputValue).createItem();
            inputTask.value = '';
        }
    }

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


    // function toLocal() {
    //     todolist = list.innerHTML;
    //     localStorage.setItem('todolist', todolist);
    //     f_filtr();
    // }

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
