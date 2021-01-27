const popupOpen = document.querySelector('.profile__info-btn');
const popup = document.querySelector('.popup');
const popupClose = document.querySelector('.popup__button');
let profilInfoName = document.querySelector('.profile__info-name');
let containeInputName = document.querySelector('.popup__container-input_js_name');
let profileInfoDescription = document.querySelector('.profile__info-description');
let popupContainerInputDescription = document.querySelector('.popup__container-input_js_description')
let formElement = document.querySelector('.popup__container-content');

function popupOpened(e) {
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

formElement.addEventListener('submit', formSubmitHandler);
popupOpen.addEventListener("click", popupOpened);
popupClose.addEventListener("click", popupClosed);
