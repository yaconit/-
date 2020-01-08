function add_img(){
    // 选择 ul 元素
    let ul = document.getElementsByTagName('ul')[0]
    
    // 创建 li 元素（DOM对象）
    let li = document.createElement('li')
    // 创建 li 内部元素（DOM字符串）
    let img = '<img src="./images/'+(Math.floor(Math.random()*6)+1)+'.jpg"/>'
    let h3 = '<h3>图片</h3>'
    let i = '<i class="iconfont icon-lajixiang" onclick="remove(this.parentNode)"></i>'
    let button = '<button>查看详情</button>'
   
    // 将 li 内部元素 插入到 li 元素中
    li.innerHTML = img + '\n' + h3 + '\n' + i + '\n' + button

    // 设置 li 的透明度（隐藏）
    li.style.opacity = 0

    // 将 li 添加到 ul 中
    ul.appendChild(li)

    // 设置 li 的透明度（显示）
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