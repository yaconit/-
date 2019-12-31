# javascript编程核心
1. 搞明白事件源 ==> 事件源
2. 弄清楚事件源触发了什么时间 ==> 事件
3. 事件出发后产生了什么动作  ==> 动作

# 点击图片播放分析思路
- 事件源 ==> 图片  ==> DOM操作
- 事件 ==> 点击 ==> 事件函数指定，事件源绑定事件
- 动作 ==> 图片隐藏，视频控件显示，视频自动播放视频  ==> 函数

# 语言基础
## 引入Javascript
**行内**
```html
<button onclick="javascript:js脚本">文本</button>
<button onclick="js脚本">文本</button>
```
**内部**
```html
<body>
    ...
    <script>
        // js脚本
    </script>
</body>
```
**外部**
```html
<script src="*.js">
```
## 输出
**控制台输出**
```javascript
// 输出日志
console.log('文本')

// 输出普通信息
console.info('文本')

// 输出错误信息
console.error('文本')
```

## 变量
**声明变量**
```javascript
var num;
var num = 1;
var num1, num2;
var num1 = 1, num2 = 2, num3;
```