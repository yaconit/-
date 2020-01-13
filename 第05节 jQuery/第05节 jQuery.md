# js的执行顺序
## 同步与异步
- 同步永远优先于异步执行，无论顺序如何
- 只有同步执行完毕，才会去执行异步
- 所有的异步会同时执行，无法控制谁先执行完毕
- 尽量减少异步数据之间的联系
- 异步请求之间的数据有依赖关系时，将被依赖的请求设置为同步请求
## API的执行顺序
- 直属于window对象的API优先执行
- window对象的API的执行收到 js 基本逻辑结构的控制

# JSON
## 单个JSON对象
```json
{
    "属性1":"值1",
    "属性2":"值2",
    "属性3":10,
    "属性4":true,
    "属性5":object
}
```
> json 数据中不允许出现注释
## 多个JSON对象（JSON对象数组）
```json
[
    {},
    {}
]
```
## 读取/设置JSON对象中的属性
```json
let json = {"name":"张按","age":20}
let name = json.name
json.age = 30
```
## JSON数据文件
- 后缀 `*.json`
- 内容为标准JSON格式
- 一般使用异步请求来访问json文件
- 一般作为临时数据存储工具
- 一般作为配置文件

# 常用事件函数
## 页面加载完毕事件
```javascript
$(document).load(function(){
    //... 
})

$(function(){
    //...
})
```

# 原生DOM与jQuery DOM互转
```javascript
// jQuery DOM 转成 原生DOM
let js_dom = jq_dom[0]

// 原生DOM 转成 jQuery DOM
let jq_dom = $(js_dom)

// 原生字符串DOM 转成 jQuery DOM
let jq_dom = $(str_dom)
```

# DOM操作
## 选择元素
```javascript
let jq_dom = $('css选择器')
```
## 选择子元素
```javascript
let 子元素 = $('父元素').find('css选择器')
```
## 选择父元素
```javascript
// 获取直接父元素
let 父元素 = $('子元素').parent()

// 获取所有父元素
let 父元素集合 = $('子元素').parents('css选择器')
```
## 元素属性操作
```javascript
// 修改或添加属性
$('选择器').attr('属性名','值')

// 读取属性值
$('选择器').attr('属性名')

// 删除属性
$('选择器').removeAttr('属性名')
```
## 获取元素内部信息
```javascript
// 读取元素内部文本
$('选择器').text()
// 设置元素内部文本
$('选择器').text('文本')

// 读取元素内部html
$('选择器').html()
// 设置元素内部的html
$('选择器').html('html字符串')
```
# 异步请求
```javascript
// get 方式请求，res 为返回的JSON格式数据
$.getJSON('url',function(res){
    console.log(res)
})

// post 方式请求，res为响应回来的数据，res的类型受 restype的影响
$.post('url',function(res){
    console.log(res)
},'restype')

// get 方式请求，res为响应回来的数据，res的类型受 restype的影响
$.get('url',function(res){
    console.log(res)
},'restype')
```