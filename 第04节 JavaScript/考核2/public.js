function add_img(){
    console.log(1)
    let ul = document.getElementsByTagName('ul')[0]
    let li = document.createElement('li')
    
    let img = '<img src="./images/'+(Math.floor(Math.random()*6)+1)+'.jpg"/>'
    let h3 = '<h3>图片</h3>'
    let i = '<i class="iconfont icon-lajixiang" onclick="remove(this.parentNode)"></i>'
    
    li.innerHTML = img + '\n' + h3 + '\n' + i
    li.style.opacity = 0
    ul.appendChild(li)
    let opacity = 0

    let st = setInterval(function(){
        opacity += 0.01
        li.style.opacity = opacity
        if(opacity >= 1){
            clearInterval(st)
        }
    },1)

    document.documentElement.scrollTop = ul.clientHeight
}

function remove(li){
    let w = li.clientWidth

    let st = setInterval(function(){
        w -= 5
        console.log(w)
        li.style.width = w + 'px'
        if(w <= 0){
            li.remove()
            clearInterval(st)
        }
    }, 1);

}