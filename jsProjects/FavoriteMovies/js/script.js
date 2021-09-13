'use strict'

// =========== Задания ==========

// 1) Удалить все рекламные блоки со страницы (правая часть сайта)
/* const promo = document.querySelector('.promo .promo__adv').children
for (let el of promo) el.style.display = 'none' */

const promo = document.querySelector('.promo .promo__adv')



// 2) Изменить жанр фильма, поменять "комедия" на "драма"
document.querySelector('.promo__bg .promo__genre').textContent = 'Drama'

// 3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img. Реализовать только при помощи JS
const bgImage = document.querySelector('.promo__content .promo__bg2')

/* bgImage.style = `   background-image: url("img/bg.jpg");` */
/* bgImage.style.backgroundImage = `url("img/bg.jpg")` */

bgImage.style = `   background: url("img/bg.jpg"); 
                    background-size: cover; 
                    background-position: center`


// 4) Список фильмов на странице сформировать на основании данных из этого JS файла. Отсортировать их по алфавиту 
const movieDB = {
    movies: [
        "On the Rocks",
        "The Trip to Greece",
        "Bad Education",
        "The Nest",
        "Nomadland"
    ]
};
movieDB.movies.sort()
const moviesList = document.querySelectorAll('.promo__interactive .promo__interactive-list li')
for (let i = 0; i < moviesList.length; i++) moviesList[i].innerHTML = movieDB.movies[i]

// 5) Добавить нумерацию выведенных фильмов (Option for adding numbering)
moviesList.forEach((ele, index) => ele.innerHTML = (index + 1 + '. ') + ele.innerHTML)


console.log(moviesList)



// ============= Some tests =============
const elemLeft = document.querySelector(".promo__ratings span"),
    elemRight = document.querySelector(".promo__ratings").lastElementChild
elemLeft.style.position = 'relative'
elemRight.style.position = 'relative'

myMove(elemLeft, elemRight)
function myMove(el1, el2) {
    let pos = 0;
    const move = setInterval(frame, 40);
    function frame() {
        if (pos == 100) {
            clearInterval(move);
        } else {
            pos++;
            bgImage.style.opacity = pos / 100;
            promo.style.opacity = 1 - (pos / 100);
            el1.style.bottom = pos - 100 + 'px';
            el1.innerHTML = `IMDb: ${((pos / 20 - 5) + 8).toFixed(1)}`
            el2.style.bottom = pos - 100 + 'px';
            el2.innerHTML = `Cinema Rate: ${((pos / 20 - 5) + 7.7).toFixed(1)}`
        }
    }
}