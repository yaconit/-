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
        document.getElementsByClassName('alert')[0].style.opacity = 1
        document.getElementsByClassName('alert-body')[0].innerText = '删除成功'
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






