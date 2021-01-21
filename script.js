const popupOpen = document.querySelector('.profile__info-btn');
const popup = document.querySelector('.popup');
popupOpen.addEventListener("click", function(e) {
    popup.classList.add('popup_opened')
});

const popupClose = document.querySelector('.popup__close');
popupClose.addEventListener("click", function(e){ 
    popup.classList.remove('popup_opened')
});

const freeLike = document.querySelector('.grid-block__item-panel-like');
if (freeLike.length > 0) {
    for (let index = 0; index < freeLike.length; index++) {
    }
}
freeLike.addEventListener("click", function(e){
    freeLike.classList.add('grid-block__item-panel-like_active')

});

console.log(freeLike);