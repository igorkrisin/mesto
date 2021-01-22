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

let formElement = document.querySelector('.popup__container-btn');
let nameInput = document.querySelector('.popup__container-input-name');
let jobInput = document.querySelector('.popup__container-input-description');
//profilInfoName.textContent = 'Жак - Ив Кусто';

// const freeLike = document.querySelectorAll('.grid-block__item-panel-like');
// if (freeLike.length > 0) {
//     for (let index = 0; index < freeLike.length; index++) {}
// }
// freeLike.addEventListener("click", function(e) {
//     freeLike.classList.add('grid-block__item-panel-like_active')

// });

console.log(profilInfoName, nameInput, nameInput.getAttribute('value'), jobInput.getAttribute('value'));

function formSubmitHandler(evt) {
    evt.preventDefault();

    nameInput.getAttribute('value');
    jobInput.getAttribute('value');
    profilInfoName.setAttribute('value', nameInput.textContent);


}
// let editFormName = document.querySelector('.profile__info-name');
// let editFormJob = document.querySelector('.profile__info-description');
console.log(profilInfoName.getAttribute('value'));