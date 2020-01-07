function add() {
    let ul = document.querySelector('ul')
    let li = document.createElement('li')
    let img = '<img src="./images/' + Math.floor((Math.random() * Math.floor(6) + 1)) + '.jpg">'
    let h3 = '<h3>图片</h3>'
    let button = '<button onclick="remove(this.parentNode)"><i class="iconfont icon-lajixiang"></i></button>'

    li.innerHTML = img + '\n' + h3 + '\n' + button
    ul.appendChild(li)

    // 添加时动画显示
    let opacity = 0
    li.style.opacity = opacity
    let st = setInterval(function () {
        opacity += 0.01
        li.style.opacity = opacity
        if (opacity >= 1) {
            clearInterval(st)
        }
    }, 1)

    // 始终显示显示最后一行
    document.documentElement.scrollTop = ul.clientHeight
}

function remove(li){
    let w = li.clientWidth
    let st = setInterval(function () {
        w -= 5
        li.style.width = w + 'px'
        if (w <= 0) {
            li.remove()
            clearInterval(st)
        }
    }, 10)
}