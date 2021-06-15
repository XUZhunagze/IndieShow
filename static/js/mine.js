var minePage = document.querySelector('.mine-page')
var goHome = minePage.getElementsByClassName('goBack')[0];
goHome.onclick = function () {
    toHidden(minePage)
    toFlex(homePage)
}

