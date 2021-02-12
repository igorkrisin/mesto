const profilePopupOpen = document.querySelector('.profile__info-btn');
const profilePopup = document.querySelector('.profile-popup');
const profilePopupClose = document.querySelector('.profile-popup__button');
const profilInfoName = document.querySelector('.profile__info-name');
const containeInputName = document.querySelector('.profile-popup__container-input_js_name');
const profileInfoDescription = document.querySelector('.profile__info-description');
const popupContainerInputDescription = document.querySelector('.profile-popup__container-input_js_description');
const formElement = document.querySelector('.profile-popup__container-content');
const openImgPopup = document.querySelector('.profile__button');
const popupAddImg = document.querySelector('.popupAddBtn');
const closeImgPopup = document.querySelector('.popupAddBtn__close');


const templateEl = document.querySelector('.template');
const listContainerEl = document.querySelector('.grid-block');
const addButtonEl = document.querySelector('.popupAddBtn__container-btn');
const inputNameEl = document.querySelector('.popupAddBtn__container-input_js_name');
const inputDescriptionEl = document.querySelector('.popupAddBtn__container-input_js_description');
const popupImg = document.querySelector('.popup-img');
const popup = document.querySelector('.popup');
const popupImage = document.querySelector('.popup-img__picture');
const popupImgName = document.querySelector('.popup-img__name');
const popupImgclose = document.querySelector('.popup-img__button');




function openPopup(popup) {

    popup.classList.add('popup_opened');
}

function closePopup(popup) {
    popup.classList.remove('popup_opened');
}

function openProfilePopup() {
    openPopup(profilePopup)

    popupContainerInputDescription.value = profileInfoDescription.textContent;
    containeInputName.value = profilInfoName.textContent;

}


function closeProfilePopup() {
    closePopup(profilePopup)

}

function formSubmitHandler(e) {
    e.preventDefault();

    profilInfoName.textContent = containeInputName.value;
    profileInfoDescription.textContent = popupContainerInputDescription.value;
    closeProfilePopup();
}

function openPopupAddImg() {
    openPopup(popupAddImg)
}

function closePopupAddImg() {
    closePopup(popupAddImg)
}


formElement.addEventListener('submit', formSubmitHandler);
profilePopupOpen.addEventListener("click", openProfilePopup);
profilePopupClose.addEventListener("click", closeProfilePopup);

openImgPopup.addEventListener("click", openPopupAddImg);
closeImgPopup.addEventListener("click", closePopupAddImg);



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
    newPicture.alt = item.name;

    //Слушатель на лайк
    const filledLike = newItem.querySelector('.grid-block__item-panel-like');
    filledLike.addEventListener("click", handleLike);

    //слушатель на удаление карточки
    const delItemUrn = newItem.querySelector('.grid-block__delet');
    delItemUrn.addEventListener('click', delElItem);
    //слушатель на открытие  попапа картинки
    newPicture.addEventListener('click', popupImgOpen);



    return newItem;



}
//слушатель на закрытие картинки
popupImgclose.addEventListener('click', popupImgClosed);

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
    closePopupAddImg(e);
}

// слушатель для добавления новой карточки//
document.querySelector('.popupAddBtn__container-content').addEventListener('submit', handelAdd);


//функция открытия попапа с картинкой//
function popupImgOpen(event) {
    const targetEl = event.target;
    const targetItem = targetEl.closest('.grid-block__item');

    openPopup(popupImg);
    popupImage.src = targetEl.src
    popupImgName.textContent = targetItem.textContent
};

//функция закрытия попапа с картинкой//
function popupImgClosed(e) {
    closePopup(popupImg);
}

render();