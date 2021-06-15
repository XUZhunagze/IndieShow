var toMine = document.querySelector('.mine-icon'),
    homePage = document.querySelector('.home-page'),
    minePage = document.querySelector('.mine-page');
toMine.onclick = function () {
    toHidden(homePage)
    toShow(minePage)
}