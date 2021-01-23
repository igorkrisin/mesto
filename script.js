const popupOpen = document.querySelector('.profile__info-btn');
const popup = document.querySelector('.popup');
popupOpen.addEventListener("click", function(e) {
    popup.classList.add('popup_opened')
});

const popupClose = document.querySelector('.popup__close');
popupClose.addEventListener("click", function(e) {
    popup.classList.remove('popup_opened')
});


let profilInfoName = document.querySelector('.profile__info-name');
let containeInputName = document.querySelector('.popup__container-input-name');
containeInputName.setAttribute('value', profilInfoName.textContent);

let profileInfoDescription = document.querySelector('.profile__info-description');
let popupContainerInputDescription = document.querySelector('.popup__container-input-description')
popupContainerInputDescription.setAttribute('value', profileInfoDescription.textContent);

let formElement = document.querySelector('.popup__container-content');
let formSave = document.querySelector('.popup__container-btn');

function formSubmitHandler(e) {
    e.preventDefault();

    profilInfoName.textContent = containeInputName.value;
    profileInfoDescription.textContent = popupContainerInputDescription.value;

}

formElement.addEventListener('submit', formSubmitHandler);

formSave.addEventListener("click", function(e) {
    popup.classList.remove('popup_opened');
});

console.log(containeInputName.value, formElement.addEventListener('submit', formSubmitHandler));