const popupOpen = document.querySelector('.profile__info-btn');
const popup = document.querySelector('.popup');
const popupClose = document.querySelector('.popup__button');
let profilInfoName = document.querySelector('.profile__info-name');
let containeInputName = document.querySelector('.popup__container-input_js_name');
let profileInfoDescription = document.querySelector('.profile__info-description');
let popupContainerInputDescription = document.querySelector('.popup__container-input_js_description')
let formElement = document.querySelector('.popup__container-content');
const popupAddBtnOpen = document.querySelector('.profile__button');
const popupAddBtn = document.querySelector('.popupAddBtn');
const popupAddBtnClose = document.querySelector('.popupAddBtn__close');
const templateEl = document.querySelector('.template');
const listContainerEl = document.querySelector('.grid-block');
const addButtonEl = document.querySelector('.popupAddBtn__container-btn');
const inputNameEl = document.querySelector('.popupAddBtn__container-input_js_name');
const inputDescriptionEl = document.querySelector('.popupAddBtn__container-input_js_description');
const popupImg = document.querySelector('.popup-img')


function
popupOpened(e) {
    popup.classList.add('popup_opened')
    popupContainerInputDescription.value = profileInfoDescription.textContent;
    containeInputName.value = profilInfoName.textContent;
}

function popupClosed(e) {
    popup.classList.remove('popup_opened')
}

function formSubmitHandler(e) {
    e.preventDefault();

    profilInfoName.textContent = containeInputName.value;
    profileInfoDescription.textContent = popupContainerInputDescription.value;
    popupClosed(e);
}

function
popupAddBtnOpened(e) {
    popupAddBtn.classList.add('popupAddBtn_opened')
}

function popupAddBtnClosed(e) {
    popupAddBtn.classList.remove('popupAddBtn_opened')
}

formElement.addEventListener('submit', formSubmitHandler);
popupOpen.addEventListener("click", popupOpened);
popupClose.addEventListener("click", popupClosed);
popupAddBtnOpen.addEventListener("click", popupAddBtnOpened);
popupAddBtnClose.addEventListener("click", popupAddBtnClosed);


const initialCards = [{
        name: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
        name: 'Челябинская область',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
        name: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
        name: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
        name: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
        name: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
];



//функция вывода маасиву на страницу//

function render() {
    const htmlEL = initialCards
        .map(getItem)
    listContainerEl.append(...htmlEL);
}



//функция добавления массива на страницу//
function getItem(item) {
    const newItem = templateEl.content.cloneNode(true);
    const nameEl = newItem.querySelector('.grid-block__item-panel-title');
    nameEl.textContent = item.name;
    const newPicture = newItem.querySelector('.grid-block__item-image');
    newPicture.src = item.link;

    //Слушатель на лайк
    const filledLike = newItem.querySelector('.grid-block__item-panel-like');
    filledLike.addEventListener("click", handleLike);

    //слушатель на удаление карточки
    const delItemUrn = newItem.querySelector('.grid-block__delet');
    delItemUrn.addEventListener('click', delElItem);

    //слушатель на открытие  попапа картинки
    newPicture.addEventListener('click', popupImgAdd);

    //слушатель на закрытие картинки
    const popupImgclose = document.querySelector('.popup-img__button');
    popupImgclose.addEventListener('click', popupImgClosed);

    return newItem;



}

//Удаление карточек функция
function delElItem(event) {
    const targetEl = event.target;
    const targetItem = targetEl.closest('.grid-block__item');
    targetItem.remove();
}

//Лайки функция
function handleLike(event) {
    const targetEl = event.target;
    targetEl.classList.toggle('grid-block__item-panel-like_active');
}
//добавление новой карточки//
function handelAdd(e) {
    e.preventDefault();
    const inputName = inputNameEl.value;
    const inputDescription = inputDescriptionEl.value;
    const listItem = getItem({ name: inputName, link: inputDescription });
    listContainerEl.prepend(listItem);
    inputNameEl.value = '';
    inputDescriptionEl.value = '';
    popupAddBtnClosed(e);
}

// слушатель для добавления новой карточки//
let FormAddBtnEL = document.querySelector('.popupAddBtn__container-content').addEventListener('submit', handelAdd);

//функция открытия попапа с картинкой//
function popupImgAdd(event) {
    const targetEl = event.target;
    const targetItem = targetEl.closest('.grid-block__item');

    popupImg.classList.add('popup-img_opened');
    const popupImage = document.querySelector('.popup-img__picture');
    const popupImgName = document.querySelector('.popup-img__name');

    popupImage.src = targetEl.src
    popupImgName.textContent = targetItem.textContent
};

//функция закрытия попапа с картинкой//
function popupImgClosed(e) {
    popupImg.classList.remove('popup-img_opened');
}

render();