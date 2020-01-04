// 选中全部
function all_checked() {
    let checkboxes = document.getElementsByClassName('item_checkbox')
    let all_checkbox = document.getElementById('all_checkbox')
    for (let item of checkboxes) {
        item.checked = all_checkbox.checked
    }
}

// 检查所有的item_checkbox是否都选中
function item_checked(){
    let checkboxes = document.getElementsByClassName('item_checkbox')
    let all_checkbox = document.getElementById('all_checkbox')

    let flag = true; // 默认 item_checkbox 全都选中
    for (let item of checkboxes) {
        if(!item.checked){ // 其中有要一个没有选中
            flag = false;
            break;
        }
    }
    all_checkbox.checked = flag
}

// 删除
function del_item(btn){
    btn.parentNode.parentNode.remove()
}

// 多选操作
function action(choose){
    if(choose == 1){
        let checkboxes = document.getElementsByClassName('item_checkbox')
        for (let i=checkboxes.length-1; i>=0; i--) {
            if(checkboxes[i].checked){
                checkboxes[i].parentNode.parentNode.remove()
            }
        }
        document.getElementsByClassName('alert')[0].style.opacity = 1
        document.getElementsByClassName('alert-body')[0].innerText = '删除成功'
    }
}

function alert_ok(btn){
    btn.parentNode.parentNode.style.opacity=0
    let select = document.getElementsByName('actions')[0]
    select.options[0].selected = true
}