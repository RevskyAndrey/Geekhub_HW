document.addEventListener('DOMContentLoaded', () => {
    const inputTask = document.querySelector('.input_task');
    const addBtn = document.querySelector('.addBtn');
    const editBtn = document.querySelector('.editBtn');
    const list = document.getElementById('list');
    const select = document.querySelector('.select');
    const forLocal = localStorage.getItem('todolist');
    let thisTarget;
    let saveitem = [];

    function funPrint(all, done, notDone) {
        document.querySelector('.all_task').innerHTML = all;
        document.querySelector('.done_task').innerHTML = done;
        document.querySelector('.not_done_task').innerHTML = notDone;
    }

    function filtr() {
        const items = document.getElementById('list');
        const all = items.children.length;
        let done = 0;
        let notDone = 0;
        if (all !== 0) {
            for (let i = 0; i < all; i++) {
                const item = items.children[i];
                const str = item.classList;
                if (str == 'checked') {
                    done++;
                } else if (str != 'checked') {
                    notDone++;
                }
                funPrint(all, done, notDone);
            }
        } else {
            funPrint(0, 0, 0);
        }
    }

    if (forLocal) {
        let saveitem = JSON.parse(forLocal);
        for (let i = 0; i < saveitem.length; i++) {
            let value = saveitem[i].value;
            let status = saveitem[i].status;
            if (status) {
                list.insertAdjacentHTML('beforeend', `<li class="checked"><input disabled class="editInput" value=" ${value} ">
<div class="edit">EDIT</div><span class="close">X</span></li>`);
            } else if (status == "false") {
                list.insertAdjacentHTML('beforeend', `<li><input disabled class="editInput" value=" ${value} ">
<div class="edit">EDIT</div><span class="close">X</span></li>`);
            }
            filtr();
        }
    }
        function toLocal() {
            filtr();
            // const item = list.innerHTML;
            // localStorage.setItem('todolist', item);
            //

            for (let i = 0; i < list.children.length; i++) {
                let value = list.children[i].firstChild.value;
                let temp = list.children[i].classList.value
                let status = "false";
                console.warn();
                if (temp === 'checked') {
                    status = "true";
                } else if (temp !== 'checked') {
                    status = "false";
                }
                saveitem[i] = {value: value, status: status}
                localStorage.setItem('todolist', JSON.stringify(saveitem));
            }
        }

        class Task {
            constructor(title, status = false) {
                this._title = title;
                this._status = status;
            }

            createItem() {
                list.insertAdjacentHTML('beforeend', `<li><input disabled class="editInput" value=" ${this._title} ">
<div class="edit">EDIT</div><span class="close">X</span></li>`);
                toLocal();
            }
        }

        function editTask(value) {
            addBtn.classList.toggle('hide');
            editBtn.classList.toggle('hide');
            inputTask.value = value;
            thisTarget.classList.toggle('edit_this');
        }

        function showError(strError) {
            document.querySelector('.error').innerHTML = strError;
            setTimeout(() => {
                document.querySelector('.error').innerHTML = '';
            }, 1250);
        }

        list.addEventListener('click', (ev) => {
            switch (ev.target.tagName) {
                case ('INPUT'):
                    ev.target.classList.toggle('checked');
                    toLocal();
                    break;
                case ('SPAN'):
                    ev.target.parentNode.remove();
                    toLocal();
                    break;
                case ('DIV'):
                    const str = ev.target.previousSibling.previousSibling.value;
                    const value = str.slice(0, -1);
                    thisTarget = ev.target;
                    editTask(value);
                    break;
                default:
                    ev.target.classList.toggle('checked');
                    toLocal();
                    break;
            }
        });

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
                toLocal();
            }
        });

        addBtn.addEventListener('click', () => {
            const inputValue = inputTask.value;
            inputTask.value = '';
            if (inputValue === '') {
                const errorStr = 'Вы не ввели задачу, повторите попытку';
                showError(errorStr);
            } else {
                new Task(inputValue).createItem();
            }
            toLocal();
        });
    }
)
;
