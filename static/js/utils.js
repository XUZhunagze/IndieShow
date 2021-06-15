function toHidden(el) {
    el.style.display = 'none'
}

function toFlex(el) {
    el.style.display = 'flex'
}

function toShow(el) {
    el.style.display = 'block'
}

function getToken() {
    return window.localStorage.getItem('show-token')
}

function setToken() {
    window.localStorage.setItem('show-token', true)
}

function removeToken() {
    window.localStorage.removeItem('show-token')
}

function renderItem() {
    var recommend = document.querySelector('.recommend')
    recommendItem.forEach(item => {
        let wrap = document.createElement('div')
        wrap.setAttribute('class', 'recommend-item')
        let tit = document.createElement('p')
        let pic = document.createElement('img')

        pic.src = item.img
        tit.innerHTML = item.tit

        pic.setAttribute('data-id', item.id)
        tit.setAttribute('data-id', item.id)
        pic.onclick = function () {
            renderInfo(item.id)
        }
        tit.onclick = function () {
            renderInfo(item.id)
        }
        wrap.appendChild(pic)
        wrap.appendChild(tit)
        recommend.appendChild(wrap)
    })
}

function renderInfo(id) {
    let homePage = document.querySelector('.home-page'),
        infoPage = document.querySelector('.info-page');
    toHidden(homePage)
    let info = recommendItem.find(item => item.id == id)
    let index = recommendItem.findIndex(item => item.id == id)
    infoPage.innerHTML = `<div class="tool-bar">
            <div class="goBack">
                <img src="./static/icon/arrow.png" alt="">
            </div>
        </div>
        <div class="poster">
              <img src="${info.img}" alt="">
        </div>
        <div class="buy-area">
            <div class="price">￥${info.price}</div>
            <div class="buy">立即购票</div>
            <div class="like">
                <img src=" ${info.isLike ? './static/icon/star_full.png' : './static/icon/star_empty.png'} " alt="">
            </div>
        </div>
        <div class="time">
            ${info.time}
        </div>
        <div class="detailInfo">
            <h3 >演出详情</h3>
            <div class="place">
                演出地点: ${info.place}
            </div>
            <div class="artist">
                参演艺人：${info.artist}
            </div>
        </div>`

    let arrow = infoPage.getElementsByClassName('goBack')[0];
    let like = infoPage.getElementsByClassName('like')[0];
    let likeStar = like.getElementsByTagName('img')[0];
    like.onclick = function () {
        recommendItem[index].isLike = !recommendItem[index].isLike
        likeStar.src = recommendItem[index].isLike ? './static/icon/star_full.png' : './static/icon/star_empty.png'
    }

    arrow.onclick = function () {
        toHidden(infoPage)
        toFlex(homePage)
    }
    toShow(infoPage)
}


function renderDom() {
    let loginPageContainer = document.querySelector('.login-page-container'),
        homePage = document.querySelector('.home-page');

    if (getToken()) {
        toHidden(loginPageContainer)
        toShow(homePage)
        renderItem()
    } else {
        toHidden(homePage)
        toShow(loginPageContainer)
    }
}
