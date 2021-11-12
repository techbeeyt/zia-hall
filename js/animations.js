// Loaded Animation
const cardName = document.getElementById('card-name');
window.onload = function(e) {
    cardName.classList.remove('card-logo-notloaded');
    cardName.classList.add('card-logo-loaded');
}

// News Images Hover Animatons

const newsCards = document.querySelectorAll('.news-card');
const images = document.querySelectorAll('.news-card img')
const newsCardsArray = Array.from(newsCards);
const imagesArray = Array.from(images);

for (let i = 0; i < newsCardsArray.length; i++) {
    newsCardsArray[i].addEventListener('mouseover', (e) => {
        imagesArray[i].classList.add('scaled1p05');
    })

    newsCardsArray[i].addEventListener('mouseout', (e) => {
        imagesArray[i].classList.remove('scaled1p05');
    })
}

//End

//Events Image Hover Effects
const eventCards = document.querySelectorAll('.event-card');
const eventCardsArray = Array.from(eventCards);
console.log(eventCardsArray);
const eventImages = document.querySelectorAll('.event-card img');
const eImagesArray = Array.from(eventImages);
console.log(eImagesArray);
console.log(eventCardsArray.length)
for (let k = 0; k < eventCardsArray.length; k++) {
    eventCardsArray[k].addEventListener('mouseover', (e) => {
        eImagesArray[k].classList.add('scaled1p02');
    })

    eventCardsArray[k].addEventListener('mouseout', (e) => {
        eImagesArray[k].classList.remove('scaled1p02');
    })
}