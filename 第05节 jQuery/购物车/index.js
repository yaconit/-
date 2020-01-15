/**
 * 页面加载完成后，获取数据
 */
$(function () {
    $.getJSON('data/car.json', function (res) {
        // 获取店铺模板
        let shop_template = $($('#shop').html())
        // 获取商品模板
        let good_template = $($('#good').html())

        for (let sp of res) {
            // 从店铺模板中复制一份店铺DOM
            let shop = shop_template.clone()

            // 给店铺赋值
            shop.find('header label span').text(sp.shop_name)

            for(let gd of sp.buy){
                let good = good_template.clone()
                good.find('td:nth-child(2) img')
                good.find('td').eq(1).find('img').attr('src','images/'+gd.img)
                good.find('td').eq(2).text(gd.title)
                good.find('td').eq(3).find('del span').text(gd.original)
                good.find('td').eq(3).find('strong span').text(gd.price)
                good.find('td').eq(4).find('input').val(gd.num)
                good.find('td').eq(5).find('strong').text(gd.num * gd.price)
                shop.find('table').append(good)
            }
            
            // 将店铺插入到店铺列表
            $('.shop_list').append(shop)
        }
    })
})

/**
 * 选中店铺下的所有商品
 */
function shop_good_select_all(checkbox){
    let shop = $(checkbox).parents('.shop')
    let checkboxes = shop.find('table tr td:nth-child(1) input[type="checkbox"]')
    for(let i in checkboxes){
        checkboxes[i].checked = checkbox.checked
    }

    // 是否选中全选
    $('.footer [type="checkbox"]')[0].checked = check_shop_checked()
    // 计算总价
    total_price()
    // 统计件数
    total_number()
}

/**
 * 当店铺下的所有商品都被选中时，则选中店铺
 */
function good_shop_select_all(checkbox){
    let shop = $(checkbox).parents('.shop')
    let tr_checkboxes = shop.find('table tr td [type="checkbox"]')
    let shop_checkbox = shop.find('header input')
    let flag = true
    for(let checkbox of tr_checkboxes){
        if(!checkbox.checked){
            flag = false
            break
        }
    }
    shop_checkbox[0].checked = flag

    // 是否选中全选
    $('.footer [type="checkbox"]')[0].checked = check_shop_checked()
    
    // 计算总价
    total_price()
    // 统计件数
    total_number()
}

/**
 * 点击全选复选框
 */ 
$('.footer [type="checkbox"]').change(function(){
    for(let checkbox of $('[type="checkbox"]')){
        checkbox.checked = this.checked
    }
    
    // 计算总价
    total_price()
    // 统计件数
    total_number()
})

/**
 * 检测所有的店铺复选框是否选中
 */
function check_shop_checked(){
    let flag = true
    for(let checkbox of $('.shop header [type="checkbox"]')){
        if(!checkbox.checked){
            flag = false
            break
        }
    }
    return flag
}

/**
 * 加购买量
 */
function add(a){
    // 根据点击的当前元素获取input
    let input = $(a).prev('input')
    // 取出input的值并转成int类型
    let num = parseInt(input.val())
    // 将值 +1
    num++
    // 将值更新回input
    input.val(num)

    // 小计
    good_total_price($(a).parents('tr'),num)
}

/**
 * 减购买量
 */
function sub(a){
    let input = $(a).next('input')
    // 取出input的值并转成int类型
    let num = parseInt(input.val())
    // 将值 +1
    num--
    if(num <= 0){
        num = 0
    }
    // 将值更新回input
    input.val(num)
    
    // 小计
    good_total_price($(a).parents('tr'),num)
}

/**
 * 小节
 * @param tr 要进行小计的行
 * @param num 商品购买数量
 */
function good_total_price(tr,num){
    let price = parseFloat(tr.find('td:nth-child(4) strong span').text())
    tr.find('td:nth-child(6) strong').text(price * num)

    // 计算总价
    total_price()
}

/**
 * 计算总价
 */
function total_price(){
    let prices = $('tr :checked').parents('tr').find('td:nth-child(6) strong')
    let total = 0
    prices.each(function(){
        total += parseFloat($(this).text())
    })
    $('.all_total_price').text(total)
}

/**
 * 计算总件数
 */
function total_number(){
    $('.total_number').text($('tr :checked').length)
}
