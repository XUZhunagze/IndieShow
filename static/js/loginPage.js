// 切换登录/注册页
var toR = document.querySelector('.to-register'),
    toL = document.querySelector('.to-login'),
    loginPage = document.querySelector('.login-page'),
    registerPage = document.querySelector('.register-page'),
    loginIndexPage = document.querySelector('.login-page-index'),
    pageContainer = document.querySelector('.login-page-container'),
    goBack = pageContainer.getElementsByClassName('goBack'),
    loginBtn = document.querySelector('.login-btn'),
    homePage = document.querySelector('.home-page'),
    reBtn = document.querySelector('.re-btn')
toR.onclick = function () {
    toHidden(loginPage)
    toHidden(loginIndexPage)
    toFlex(registerPage)
}

toL.onclick = function () {
    toHidden(registerPage)
    toHidden(loginIndexPage)
    toFlex(loginPage)
}

function backToIndex(arrow) {
    arrow.onclick = function () {
        toHidden(registerPage)
        toHidden(loginPage)
        toFlex(loginIndexPage)
    }
}

backToIndex(goBack[0])
backToIndex(goBack[1])


loginBtn.onclick = function () {
    setToken()
    toHidden(pageContainer)
    toFlex(homePage)
    renderItem()
}
reBtn.onclick = function () {
    toHidden(registerPage)
    toHidden(loginIndexPage)
    toFlex(loginPage)
}