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
const popupAddBtnClose = document.querySelector('.popupAddBtn__close')

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

