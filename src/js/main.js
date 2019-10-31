window.onload = function () {

    // let filter = document.getElementsByClassName('filter');
    // let filterDropDown = document.getElementsByClassName('filter__dropdown');
    //
    // for (let i = 0; i < filter.length; i++) {
    //
    //     filter[i].addEventListener('click', function () {
    //
    //         let currentElement = this.querySelector('.filter__dropdown');
    //         this.classList.toggle('active');
    //         currentElement.classList.toggle('active');
    //
    //     });
    // }
    //
    // for (let b = 0; b < filterDropDown.length; b++) {
    //     let dropDownElem = filterDropDown[b].children;
    //
    //     for (let c = 0; c < dropDownElem.length; c++) {
    //         dropDownElem[c].addEventListener('click', function () {
    //             let currentValue = this.innerHTML;
    //
    //             this.parentElement.previousElementSibling.innerHTML = currentValue;
    //             this.parentElement.previousElementSibling.setAttribute('data-options', currentValue);
    //
    //             let sortStatus = document.getElementById('sort-status');
    //             let sortItems = document.getElementsByClassName('item');
    //
    //             if (sortStatus.getAttribute('data-options') === 'open') {
    //
    //                 for (let n = 0; n < sortItems.length; n++) {
    //                     let statusAttr = sortItems[n].getAttribute('data-status');
    //
    //                     if (statusAttr === 'open') {
    //                         sortItems[n].style.display = ''
    //                     } else {
    //                         sortItems[n].style.display = 'none'
    //                     }
    //                 }
    //             }
    //
    //             if (sortStatus.getAttribute('data-options') === 'done') {
    //
    //                 for (let l = 0; l < sortItems.length; l++) {
    //                     let statusAttrDone = sortItems[l].getAttribute('data-status');
    //                     if (statusAttrDone === 'done') {
    //                         sortItems[l].style.display = ''
    //                     } else {
    //                         sortItems[l].style.display = 'none'
    //                     }
    //                 }
    //             }
    //
    //             if (sortStatus.getAttribute('data-options') === 'all') {
    //
    //                 for (let r = 0; r < sortItems.length; r++) {
    //                     sortItems[r].style.display = ''
    //                 }
    //             }
    //         })
    //     }
    // }
    //
    //
    // let modalBtn = document.getElementById('modal-btn');
    // let modal = document.getElementById('modal');
    // let modalCloseBtn = document.querySelector('.modal .js-modal-close');
    //
    // modalBtn.addEventListener('click', function () {
    //     modal.classList.add('active');
    // });
    //
    // modalCloseBtn.addEventListener('click', function () {
    //     modal.classList.remove('active');
    // });
    //
    // document.addEventListener('click', function (e) {
    //     if (e.target === modal) {
    //         modal.classList.remove('active');
    //     }
    // });
    //
    //
    // let setItem = document.getElementById('create-item');
    // let countItem = 0;
    //
    // setItem.addEventListener('click', function () {
    //
    //     document.getElementById('elem-title').onfocus = function () {
    //         this.value = '';
    //     };
    //
    //     document.getElementById('elem-description').onfocus = function () {
    //         this.value = '';
    //     };
    //
    //     let titleValue = document.getElementById('elem-title').value;
    //     let descriptionValue = document.getElementById('elem-description').value;
    //     let priorityValue = document.getElementById('elem-priority').innerHTML;
    //     let itemWrapper = document.getElementById('item-wrapper');
    //     let itemId = document.getElementById('item-id');
    //
    //     const template =
    //         `<div class="item" data-item="item${countItem}" data-status="open">
    //         <div class="item__wrapper">
    //             <div class="item__title">${titleValue}</div>
    //             <div class="item__description">${descriptionValue}</div>
    //             <div class="item__container">
    //                 <div class="item__priority">${priorityValue}</div>
    //                 <div class="item__button-wrapper">
    //                 <button type="button" class="item__options">...</button>
    //                 <ul class="item__dropdown">
    //                     <li class="item__status" data-status="done">done</li>
    //                     <li class="item__status" data-status="edit">edit</li>
    //                     <li class="item__status" data-status="delete">delete</li>
    //                </ul>
    //             </div>
    //         </div>
    //         </div>
    //         </div>`;
    //
    //     if (itemId.value.length > 0) {
    //         let itemIdValue = itemId.value;
    //         let items = document.getElementsByClassName('item');
    //
    //         for (let j = 0; j < items.length; j++) {
    //             if (itemIdValue === items[j].getAttribute('data-item')) {
    //
    //                 let currentItem = items[j];
    //                 let currentItemTitle = currentItem.querySelector('.item__title');
    //                 let currentItemDescription = currentItem.querySelector('.item__description');
    //                 let currentItemPriority = currentItem.querySelector('.item__priority');
    //                 currentItemTitle.innerHTML = titleValue;
    //                 currentItemDescription.innerHTML = descriptionValue;
    //                 currentItemPriority.innerHTML = priorityValue;
    //
    //             }
    //         }
    //
    //     } else {
    //         itemWrapper.insertAdjacentHTML('beforeend', template);
    //     }
    //
    //     countItem++;
    //     itemId.value = '';
    // });
    //
    // document.addEventListener('mouseup', function (e) {
    //     if (e.target && e.target.className === 'item__options') {
    //         let currentItem = e.target;
    //         currentItem.nextElementSibling.classList.toggle('active');
    //     }
    //
    //     if (e.target && e.target.className === 'item__status') {
    //         e.target.addEventListener('click', function () {
    //             let statusAttr = this.getAttribute('data-status');
    //             this.parentNode.classList.remove('active');
    //
    //             if (statusAttr === 'delete') {
    //                 this.closest('.item').remove();
    //             } else if (statusAttr === 'done') {
    //                 this.closest('.item__wrapper').classList.add('active');
    //                 this.closest('.item').setAttribute('data-status', 'done');
    //             } else if (statusAttr === 'edit') {
    //                 modal.classList.add('active');
    //                 let currentTitleValue = this.closest('.item__wrapper').querySelector('.item__title').textContent;
    //                 let currentDescriptionValue = this.closest('.item__wrapper').querySelector('.item__description').textContent;
    //                 let currentPriorityValue = this.closest('.item__wrapper').querySelector('.item__priority').textContent;
    //                 let currentItemId = this.closest('.item').getAttribute('data-item');
    //
    //                 document.getElementById('elem-title').value = currentTitleValue;
    //                 document.getElementById('elem-description').value = currentDescriptionValue;
    //                 document.getElementById('elem-priority').innerHTML = currentPriorityValue;
    //                 document.getElementById('item-id').value = currentItemId;
    //
    //             }
    //         });
    //     }
    // });
    //
    // let inputSearch = document.getElementById('search');
    //
    // inputSearch.onkeyup = function () {
    //     let inputValue = this.value;
    //     let items = document.getElementsByClassName('item');
    //
    //     for (let h = 0; h < items.length; h++) {
    //         let titleValue = items[h].querySelector('.item__title').innerHTML.toLowerCase();
    //         let result = titleValue.indexOf(inputValue.toLowerCase());
    //         if (result !== -1 && inputValue.length > 0) {
    //             items[h].style.display = '';
    //         } else if (inputValue.length === 0) {
    //             items[h].style.display = '';
    //         } else {
    //             items[h].style.display = 'none';
    //         }
    //     }
    //
    // };


    ////////////////////////////////////////////////////////////

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

            this.itemArray = [];
        }

        saveItem(params) {

            this.itemArray.push(params);
            return this.itemArray;
        }

    }


    class todoItem {

        constructor(title, description, priority) {
            this.title = title;
            this.description = description;
            this.priority = priority;
        }

        render() {
            return {
                title: this.title,
                description: this.description,
                priority: this.priority
            }
        }

        template() {

            let render = this.render();

            return `<div class="item" data-status="open">
                        <div class="item__wrapper">
                            <div class="item__title">${render.title}</div>
                            <div class="item__description">${render.description}</div>
                            <div class="item__container">
                                <div class="item__priority">${render.priority}</div>
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

        setItemParams() {

            modalTitle.value = this.title;
            modalDescription.value = this.description;
            modalPriority.innerHTML = this.priority;
        }

        updateItem(item) {

            this.item = item;
            this.item.querySelector('.item__title').innerHTML = this.title;
            this.item.querySelector('.item__description').innerHTML = this.description;
            this.item.querySelector('.item__priority').innerHTML = this.priority;
        }
    }

    class filterItem {

        constructor(attr) {
            this.attr = attr;
            console.log(this.attr);
        }

        getValue() {
            return this.attr;
        }
    }

    let setItem = document.getElementById('create-item');
    let itemWrapper = document.getElementById('item-wrapper');

    let getItems = new todoList();
    setItem.addEventListener('click', function () {
        let titleValue = modalTitle.value;
        let descriptionValue = modalDescription.value;
        let priorityValue = modalPriority.innerHTML;

        let item = new todoItem(`${titleValue}`, `${descriptionValue}`, `${priorityValue}`);

        if (modal.getAttribute('data-item') === 'edit') {
            let editItem = document.querySelector('.item.edit');
            new todoItem(titleValue, descriptionValue, priorityValue).updateItem(editItem);
            editItem.classList.remove('edit');
            modal.classList.remove('active');
        } else {
            itemWrapper.insertAdjacentHTML('beforeend', item.template());
            getItems.saveItem(item);
            modal.classList.remove('active');
            modal.removeAttribute('data-item');
        }
    });

    document.addEventListener('mouseup', function (e) {
        let currentItem = e.target;
        if (currentItem.className === 'item__options') {
            currentItem.nextElementSibling.classList.toggle('active');
        }

        if (e.target && e.target.className === 'item__status') {

            e.target.addEventListener('click', function () {
                let statusAttr = this.getAttribute('data-status');
                this.parentNode.classList.remove('active');

                if (statusAttr === 'delete') {

                    this.closest('.item').remove();
                } else if (statusAttr === 'done') {

                    this.closest('.item__wrapper').classList.add('active');
                    this.closest('.item').setAttribute('data-status', 'done');
                } else if (statusAttr === 'edit') {

                    this.closest('.item').classList.add('edit');
                    let itemTitle = this.closest('.item').querySelector('.item__title').textContent;
                    let itemDescription = this.closest('.item').querySelector('.item__description').textContent;
                    let itemPriority = this.closest('.item').querySelector('.item__priority').textContent;

                    new todoItem(itemTitle, itemDescription, itemPriority).setItemParams();
                    modal.setAttribute('data-item', 'edit');
                    modal.classList.add('active');

                }
            });
        }
    });

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
                new filterItem(currentValue).getValue();

            })
        }
    }

};