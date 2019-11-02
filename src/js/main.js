window.onload = function () {

    let modalBtn = document.getElementById('modal-btn');
    let modal = document.getElementById('modal');
    let modalCloseBtn = document.querySelector('.modal .js-modal-close');
    let modalTitle = document.getElementById('elem-title');
    let modalDescription = document.getElementById('elem-description');
    let modalPriority = document.getElementById('elem-priority');

    modalBtn.addEventListener('click', function () {
        modalTitle.value = '';
        modalDescription.value = '';
        modal.removeAttribute('data-item');
        modal.classList.add('active');
    });

    modalCloseBtn.addEventListener('click', function () {
        modal.classList.remove('active');
    });

    document.addEventListener('click', function (e) {
        if (e.target === modal) {
            modal.classList.remove('active');
            modal.removeAttribute('data-item');
        }
    });

    let inputSearch = document.getElementById('search');

    inputSearch.onkeyup = function () {
        let inputValue = this.value;
        let items = document.getElementsByClassName('item');

        for (let h = 0; h < items.length; h++) {
            let titleValue = items[h].querySelector('.item__title').innerHTML.toLowerCase();
            let result = titleValue.indexOf(inputValue.toLowerCase());
            if (result !== -1 && inputValue.length > 0) {
                items[h].style.display = '';
            } else if (inputValue.length === 0) {
                items[h].style.display = '';
            } else {
                items[h].style.display = 'none';
            }
        }

    };

    class todoList {

        constructor() {

            this.itemArray = []
        }

        saveItem(params) {

            this.itemArray.push(params);
            console.log(this.itemArray);
        }

        initItem() {

            return this.itemArray;
        }

        updateArray(item, title, description, priority) {

            this.item = item;
            this.title = title;
            this.description = description;
            this.priority = priority;
            let thisKey = this.item;
            this.itemArray[thisKey].title = this.title;
            this.itemArray[thisKey].description = this.description;
            this.itemArray[thisKey].priority = this.priority;
        }

        cleanArray(index, array) {

            this.index = index;
            this.array = array;
            delete this.array[this.index];
        }

    }

    class todoItem {

        constructor(title, description, priority) {

            this.title = title;
            this.description = description;
            this.priority = priority;
        }

        template(wrapper, content, id) {

            this.content = content;
            this.id = id;
            let array = this.content;
            let newData = array[array.length - 1];

            wrapper.innerHTML += `<div id="${this.id}" class="item" data-status="open">
                        <div class="item__wrapper">
                            <div class="item__title">${newData.title}</div>
                            <div class="item__description">${newData.description}</div>
                            <div class="item__container">
                                <div class="item__priority">${newData.priority}</div>
                                <div class="item__button-wrapper">
                                    <button type="button" class="item__options">...</button>
                                    <ul class="item__dropdown">
                                        <li class="item__status" data-status="done">done</li>
                                        <li class="item__status" data-status="edit">edit</li>
                                        <li class="item__status" data-status="delete">delete</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>`;
        }

        setItemParams(selector) {

            this.selector = selector;
            modalTitle.value = this.selector.querySelector('.item__title').innerHTML;
            modalDescription.value = this.selector.querySelector('.item__description').innerHTML;
        }

        updateItem(elem, array) {

            this.elem = elem;
            this.array = array;
            let dataArray = this.array[this.elem];
            let updateElem = document.getElementById(this.elem);

            updateElem.querySelector('.item__title').innerHTML = dataArray.title;
            updateElem.querySelector('.item__description').innerHTML = dataArray.description;
            updateElem.querySelector('.item__priority').innerHTML = dataArray.priority;

        }
    }

    let setItem = document.getElementById('create-item');
    let itemWrapper = document.getElementById('item-wrapper');
    let getItems = new todoList();
    let countId = 0;

    setItem.addEventListener('click', function () {
        let titleValue = modalTitle.value;
        let descriptionValue = modalDescription.value;
        let priorityValue = modalPriority.innerHTML;

        let item = new todoItem(`${titleValue}`, `${descriptionValue}`, `${priorityValue}`);

        if (modal.getAttribute('data-item') === 'edit') {

            let thisItem = document.querySelector('.item.current');
            let elemId = thisItem.getAttribute('id');

            getItems.updateArray(elemId, titleValue, descriptionValue, priorityValue);
            new todoItem().updateItem(elemId, getItems.itemArray);
            thisItem.classList.remove('current');
            modal.classList.remove('active');
        } else {
            getItems.saveItem(item);
            new todoItem().template(itemWrapper, getItems.initItem(), countId);
            modal.classList.remove('active');
            modal.removeAttribute('data-item');
        }
        countId++;
    });

    document.addEventListener('mouseup', function (e) {
        let currentItem = e.target;
        if (currentItem.className === 'item__options') {
            currentItem.nextElementSibling.classList.toggle('active');
        }

        if (e.target && e.target.className === 'item__status') {

            e.target.addEventListener('click', function () {
                let statusAttr = this.getAttribute('data-status');
                let currentItem = this.closest('.item');
                this.parentNode.classList.remove('active');

                if (statusAttr === 'delete') {

                    new todoList().cleanArray(currentItem.getAttribute('id'), getItems.itemArray);
                    this.closest('.item').remove();
                } else if (statusAttr === 'done') {

                    this.closest('.item__wrapper').classList.add('active');
                    currentItem.setAttribute('data-status', 'done');
                } else if (statusAttr === 'edit') {

                    this.closest('.item').classList.add('current');

                    new todoItem().setItemParams(currentItem);
                    modal.setAttribute('data-item', 'edit');
                    modal.classList.add('active');

                }
            });
        }
    });

    class filterItem {

        constructor() {

        }

        getValue(option) {
            this.option = option;
            let item = document.getElementsByClassName('item');

            for(let i = 0; i < item.length; i++) {

                let itemAttr = item[i].getAttribute('data-status');

                if(this.option === 'done' && itemAttr === this.option && this.option !== 'all') {
                    item[i].style.display = '';
                } else if (this.option === 'all') {
                    item[i].style.display = '';
                } else {
                    item[i].style.display = 'none';
                }
                if(this.option === 'open' && itemAttr === this.option) {
                    item[i].style.display = ''
                }
            }
        }
    }

    let filter = document.getElementsByClassName('filter');
    let filterDropDown = document.getElementsByClassName('filter__dropdown');

    for (let i = 0; i < filter.length; i++) {

        filter[i].addEventListener('click', function () {

            let currentElement = this.querySelector('.filter__dropdown');
            this.classList.toggle('active');
            currentElement.classList.toggle('active');

        });
    }

    for (let b = 0; b < filterDropDown.length; b++) {
        let dropDownElem = filterDropDown[b].children;

        for (let c = 0; c < dropDownElem.length; c++) {
            dropDownElem[c].addEventListener('click', function () {
                let currentValue = this.innerHTML;

                this.parentElement.previousElementSibling.innerHTML = currentValue;
                this.parentElement.previousElementSibling.setAttribute('data-options', currentValue);
                new filterItem().getValue(currentValue, getItems.itemArray);
            });
        }
    }

};