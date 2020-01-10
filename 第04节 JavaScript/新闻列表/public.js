// 选中全部
function all_checked() {
    let checkboxes = document.getElementsByClassName('item_checkbox')
    let all_checkbox = document.getElementById('all_checkbox')
    for (let item of checkboxes) {
        item.checked = all_checkbox.checked
    }
}

// 检查所有的item_checkbox是否都选中
function item_checked() {
    let checkboxes = document.getElementsByClassName('item_checkbox')
    let all_checkbox = document.getElementById('all_checkbox')

    let flag = true; // 默认 item_checkbox 全都选中
    for (let item of checkboxes) {
        if (!item.checked) { // 其中有要一个没有选中
            flag = false;
            break;
        }
    }
    all_checkbox.checked = flag
}

// 删除
function del_item(btn) {
    btn.parentNode.parentNode.remove()
}

function show_alert(msg) {
    document.getElementsByClassName('alert')[0].style.opacity = 1
    document.getElementsByClassName('alert-body')[0].innerText = msg
}

// 多选操作
function action(choose) {
    // 删除
    if (choose == 1) {
        let checkboxes = document.getElementsByClassName('item_checkbox')
        for (let i = checkboxes.length - 1; i >= 0; i--) {
            if (checkboxes[i].checked) {
                checkboxes[i].parentNode.parentNode.remove()
            }
        }
        show_alert('删除成功')
    }
    // 查看
    else if (choose == 2) {
        // let item_checkboxes = document.getElementsByClassName('item_checkbox')
        // for(let item of item_checkboxes){
        //     if(item.checked){
        //         console.log(item)
        //     }
        // }
        let panels = document.getElementsByClassName('panels')[0]
        let item_checkboxes = document.querySelectorAll('[type=checkbox]:checked.item_checkbox')
        for (let item of item_checkboxes) {
            let tr = item.parentNode.parentNode
            let tds = tr.querySelectorAll('td')
            let panel = create_panel(tds)
            panels.appendChild(panel)
        }
        panels.style.display = 'flex'
    }
}

// 关闭提示框
function alert_ok(btn) {
    btn.parentNode.parentNode.style.opacity = 0
    btn.parentNode.parentNode.remove()
    let select = document.getElementsByName('actions')[0]
    select.options[0].selected = true
}

// 显示一条项目
function show_item(tr) {
    // 将 panels 显示出来
    let panels = document.getElementsByClassName('panels')[0]
    panels.style.display = 'flex'

    // 创建 panel 并将 panel 插入到 panels
    // 数据源：tr.querySelectorAll('td')
    let panel = create_panel(tr.querySelectorAll('td'))
    panels.appendChild(panel)
}

// 关闭panels
function close_all() {
    // 隐藏 panels
    let panels = document.getElementsByClassName('panels')[0]
    panels.style.display = 'none'

    // 移除 panels 下面的所有 panel
    for (let panel of panels.querySelectorAll('.panel')) {
        panel.remove()
    }
    document.getElementsByName('actions')[0].value = 0
}

function close_panel(btn) {
    let panel = btn.parentNode.parentNode
    let panels = panel.parentNode
    panel.remove()
    if (panels.querySelectorAll('.panel').length == 0) {
        panels.style.display = 'none'
        // document.getElementsByName('actions')[0].options[0].selected = true
        document.getElementsByName('actions')[0].value = 0
    }
}

// 创建面板
function create_panel(params) {
    // 获取 template 模板中元素（字符串化）
    let panel_template = document.getElementById('panel_template')
    let str_panel = panel_template.innerHTML

    let obj_panel = createElementFromString(str_panel)

    // 给 panel 赋值
    let table = obj_panel.querySelector('table')
    table.querySelector('tr:nth-child(1) td').innerText = params[1].innerText
    table.querySelector('tr:nth-child(2) td').innerText = params[2].innerText
    table.querySelector('tr:nth-child(3) td').innerText = params[3].innerText
    table.querySelector('tr:nth-child(4) td').innerText = params[4].innerText
    table.querySelector('tr:nth-child(5) td').innerText = params[5].innerText

    // panel DOM对象
    return obj_panel
}

// 使用字符串创建DOM
function createElementFromString(str_dom) {
    // 将 字符串化的 DOM 转成 DOM 对象
    let div = document.createElement('div')
    div.innerHTML = str_dom
    let obj_panel = div.querySelector('.panel').cloneNode(true)
    div.remove()
    return obj_panel
}


function add_item(tr) {
    let title = tr.querySelector('td:nth-child(3) input').value
    let datetime = tr.querySelector('td:nth-child(4) input').value
    let author = tr.querySelector('td:nth-child(5) select').value
    let hits = tr.querySelector('td:nth-child(6) input').value

    if (title.length == 0) {
        show_alert('请填写标题')
        return
    }

    let index = document.querySelector('tbody tr:last-child td:nth-child(2)').innerText
    index = parseInt(index) + 1
    console.log(index)

    let new_tr = document.createElement('tr')
    let td1 = document.createElement('td')
    let td2 = document.createElement('td')
    let td3 = document.createElement('td')
    let td4 = document.createElement('td')
    let td5 = document.createElement('td')
    let td6 = document.createElement('td')
    let td7 = document.createElement('td')

    td1.innerHTML = '<input type="checkbox" class="item_checkbox" onchange="item_checked()">'
    td2.innerText = index
    td3.innerText = title
    td4.innerText = datetime
    td5.innerText = author
    td6.innerText = hits
    td7.innerHTML = '<button onclick="show_item(this.parentNode.parentNode)">查看</button><button>修改</button><button onclick="del_item(this)">删除</button>'

    new_tr.appendChild(td1)
    new_tr.appendChild(td2)
    new_tr.appendChild(td3)
    new_tr.appendChild(td4)
    new_tr.appendChild(td5)
    new_tr.appendChild(td6)
    new_tr.appendChild(td7)

    document.querySelector('tbody').appendChild(new_tr)
    show_alert('添加成功')
    clear_input()
}

function clear_input() {
    document.querySelector('tfoot tr td:nth-child(3) input').value = ''
    document.querySelector('tfoot tr td:nth-child(4) input').value = ''
    document.querySelector('tfoot tr td:nth-child(5) select').options[0].selected = true
    document.querySelector('tfoot tr td:nth-child(6) input').value = ''
}


function edit_text(td) {
    // 防止生成多个 input
    if(td.querySelectorAll('input').length > 0){
        return
    }

    let span = td.querySelector('span')
    span.style.display = 'none'

    // 获取 td 原来的文本
    let text = span.innerText

    // 创建 input 对象
    let input = document.createElement('input')
    // 设置 input 的属性
    input.setAttribute('type', 'text')
    input.value = text

    // 将 input 追加到 td 中
    td.appendChild(input)

    input.focus() // 给 input 设置焦点
    input.select() // 选中 input 中的文本

    // 给 input 设置 keydown 事件
    // input.addEventListener('keydown',function(event){
    //     if(event.key == 'Enter'){
    //         span.innerText = input.value
    //         input.remove()
    //         span.style.display = 'inline'
    //     }
    // })

    input.onkeydown = function (event) {
        if (event.key == 'Enter') {
            span.innerText = input.value
            input.remove()
            span.style.display = 'inline'
        }
    }

}

// 面板移动
function move_panel(event,panel){
    // 将所有的 .panel 的 z 轴设为1
    for(let p of panel.parentNode.querySelectorAll('.panel')){
        p.style.zIndex = 1
    }
    // 将点击的 .panel 的 z 轴设为999
    panel.style.zIndex = 999

    // 鼠标按下时的坐标
    let down_x = event.x, down_y = event.y
    // 鼠标移动时的坐标
    let move_x,move_y
    // 鼠标移动后所产生的距离差
    let left = panel.style.left,top = panel.style.top
    // 是否移动
    let flag = true
    
    left = left ? parseFloat(left.replace('px','')) : 0
    top = top ? parseFloat(top.replace('px','')) : 0

    // 鼠标移动事件
    panel.parentNode.onmousemove = function(event){
        if(flag){
            move_x = event.x
            move_y = event.y
            panel.style.left = move_x - down_x + left + 'px'
            panel.style.top = move_y - down_y + top + 'px'
        }
    }

    // 鼠标弹起事件
    panel.parentNode.onmouseup = function(){
        flag = false
    }
}