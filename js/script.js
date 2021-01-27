const popupOpen = document.querySelector('.profile__info-btn');
const popup = document.querySelector('.popup');
const popupClose = document.querySelector('.popup__close');
let profilInfoName = document.querySelector('.profile__info-name');
let containeInputName = document.querySelector('.popup__container-input_js_name');
let profileInfoDescription = document.querySelector('.profile__info-description');
let popupContainerInputDescription = document.querySelector('.popup__container-input_js_description')
let formElement = document.querySelector('.popup__container-content');

function popupOpened(e) {
    popup.classList.add('popup_opened')
}
popupOpen.addEventListener("click", popupOpened);

function popupClosed(e) {
    popup.classList.remove('popup_opened')
}
popupClose.addEventListener("click", popupClosed);


containeInputName.value = profilInfoName.textContent;
popupContainerInputDescription.value = profileInfoDescription.textContent;


function formSubmitHandler(e) {
    e.preventDefault();

    profilInfoName.textContent = containeInputName.value;
    profileInfoDescription.textContent = popupContainerInputDescription.value;

}

formElement.addEventListener('submit', formSubmitHandler);

document.querySelector('.popup__container-btn').addEventListener("click", popupClosed);