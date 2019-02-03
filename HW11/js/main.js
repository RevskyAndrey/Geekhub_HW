document.addEventListener('DOMContentLoaded', () => {
    //
    // const allTask = document.querySelector('.all_task');
    //
    // const doneTask = document.querySelector('.done_task');

    const inputTask = document.querySelector('.input_task');

    const addBtn = document.querySelector('.addBtn');

    const list = document.getElementById('list');

    // let thisEvent;

    class TaskFunction {
        createItem() {
            const li = document.createElement('li');
            const input = document.createElement('input');
            const divEdit = document.createElement('DIV');
            const span = document.createElement('SPAN');
            const txt = document.createTextNode('X');
            const edit = document.createTextNode('EDIT');
            const i = document.createElement('i');
            const iText = document.createTextNode('SELECT');
            list.appendChild(li);
            li.appendChild(input);
            input.value = this._title;
            li.appendChild(i);
            i.appendChild(iText);
            input.className = 'editInput';
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
            case ('LI'):
                ev.target.classList.toggle('checked');
                // toLocal();
                break;
            case ('SPAN'):
                ev.target.parentNode.remove();
                // toLocal();
                break;
            case ("DIV"):
                let value = ev.target.previousSibling.previousSibling.value;
                // thisEvent = ev;
                // editTask(str);
                console.error(value, ev);
                // console.warn(temp);
                break;
            default:
                break;
        }
    });

    function editTask(value,ev) {
        console.log(value);
        console.log(ev);
    }


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
