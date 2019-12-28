[[TOC]]

# 编辑器 VSCode

## 常用插件
	- Chinese (Simplified) Language Pack for Visual Studio Code 简体中文语言包
	- Live Server 提供内置WEB服务器，模拟在真实服务器中打开网页
	- open in browser 在浏览器中打开网页

## 常用快捷键	
	格式化：ctrl+alt+f
	放大：ctrl++
	缩小：ctrl+-
	隐藏/显示侧边栏：ctrl+b
	资源管理器：ctrl+shift+e
	插件管理器：ctrl+shift+x
	全局搜索框：ctrl+shift+f
	页内搜索框：ctrl+f
	隐藏/显示终端：ctrl+`

# 常用 HTML 标签

## 基础结构标签
**文档说明标签** 标识该HTML文档的版本号以及校验规则
```html
<!-- 表明该网页文档的版本为 HTML5 -->
<!DOCTYPE html>
```
**网页根元素** 标识网页文档的界限
```html
<html></html>
```
**网页头部** 包含网页文档的相关信息，比如编码方式、网页标题、网页简介等
```html
<head></head>
```
**元数据标签** 定义网页本身的一些信息
```html
<!-- 设置网页的编码模式为 UTF-8 -->
<meta charset="utf-8">

<!-- 设置视口 -->
<meta name="viewport" content="width=device-width, initial-scale=1">

<!-- 网页描述 -->
<meta name="description" content="">

<!-- 网页关键字 -->
<meta name="keywords" content="">
```
**网页标题** 显示在浏览器标题栏中
```html
<title></title>
```
**网页的主体内容** 用户访问的主体部分
```html
<body></body>
```

## 文档标签
### 基础内容标签
**标题** 网页文章内容的标题，默认带有上下外边距，加粗效果，h4和普通字体大小相当，数字越大，字体越小
```html
<h1>一级标题</h1>
<h2>二级标题</h2>
<h3>三级标题</h3>
<h4>四级标题</h4>
<h5>五级标题</h5>
<h6>六级标题</h6>
```
**段落** 一般用于描述文字内容中的段落，默认带有上下外边距
```html
<p>段落文本</p>
```
**换行** 在网页中，使用回车无法进行换行，如果想要网页内容强制换行，则要使用 br 标签
```html
<br/>
```
**水平线** 贯穿父级标签的一条横线，默认带有上下外边距
```html
<hr/>
```
**注释** 解释说明一行或一段代码的作用，不会在浏览器中显示，但是可以通过查看源代码看到注释
```html
<!-- 注释内容 -->
```
### 风格样式标签
**字体加粗** 具有一定的语义，表示着重强调被包裹的内容，被包裹的内容字体会被加粗
```html
<!-- 语义标签，强调的程度比 em 更加强烈 -->
<strong>被强调的文本</strong>

<!-- 风格标签，仅仅是将字体加粗 -->
<b>被加粗的文本</b>
```
**斜体** 具有一定的语义，表示强调被包裹的内容，被包裹的内容会用斜体来展示
```html
<!-- 语义标签，强调程度比 strong 弱一些 -->
<em>被强调的文本</em>

<!-- 风格标签，仅仅是将文本用斜体展示 -->
<i>被倾斜的文本</i>
```
**大字体/小字体** 风格标签，将文本内容使用大字体/小字体展示
```html
<!-- 使用大字体展示 -->
<big>文本</big>

<!-- 使用小字体展示 -->
<small>文本</small>
```
**上标/下标** 风格标签，将文本内容以上标/下标的形式展示
```html
<!-- 上标 -->
<sup>文本</sup>

<!-- 下标 -->
<sub>文本</sub>
```
**被删除的文本** 语义标签，表示被包裹的文本已被删除，在浏览器会使用横线贯穿被包裹的文本
```html
<del>文本</del>
```
**预格式化** 将标签的文本排版格式原样输出
```html
<pre>文本</pre>
```

### 列表
**无序列表**  ul 为无序列表界限，li 为列表项。默认情况下，ul 会自带上下外边距和左内边距，li 的文本前面会带有一个黑色实心圆点，嵌套的情况下，二级 li 的文本前面会带有一个空心圆点，三级 li 的文本前面会带有一个黑色实心方块
```html
<ul>
	<li>文本</li>
</ul>
```
**有序列表** ol 为有序列表界限，li 为列表项。默认情况下，ol 会自带上下外边距和左内边距，li 的文本前面会带有阿拉伯数字
```html
<ol>
	<li>文本</li>
</ol>
```
**定义列表** dl 为定义列表界限，dt 为列表项，dd 为列表项的描述。默认情况下，dl 会自带上下外边距，dt 顶头，dd 带有左外边距
```html
<dl>
	<dt>文本</dt>
	<dd>文本</dd>
</dl>
```
### 表格
**表格** table 表示表格的基本界限，caption 表示表格的标题，thead 表示表头部分，tbody 表示表格主体部分，tr 表示行，th 表示列头，td 表示单元格。caption 的宽度与表格宽度相同，其文本会居中显示，th 中的字体会被加粗并且居中显示
```html
<!-- 基本架构 -->
<table>
	<caption>文本</caption>
	<thead>
		<tr>
			<th>文本</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>文本</td>
		</tr>
	</tbody>
</table>

<!-- 设置表格边框，n 表示边框粗细，以像素为单位 -->
<table border="n">...</table>

<!-- 设置单元格内边距，n 表示边距，以像素为单位 -->
<table cellpadding="n">...</table>

<!-- 设置单元格外边距，n 表示边距，以像素为单位-->
<table cellspacing="n">...</table>
```
**合并单元格** 跨行合并时，是上面的单元格合并掉下面的单元格。跨列合并时，是左边的单元格合并掉右边的单元格。
```html
<!-- 跨行合并（垂直方向合并），n 表示合并几行 -->
<td rowspan="n">文本</td>

<!-- 跨列合并（水平方向合并），n 表示合并几列 -->
<td colspan="n">文本</td>
```
### 多媒体标签
**图像** 在网页中显示图像
```html
<!-- src 表示图像路径，如果该图像不存在，则显示 alt 中的文本 -->
<img src="" alt="" />

<!-- 鼠标悬浮在图像上时，会显示 title 中的文本 -->
<img title="" />

<!-- 设置图像的宽和高，当只设置其中一个尺寸时，另一个尺寸会同比进行变化，默认单位为像素，也可以配置百分比，例如 10% -->
<img width="" height="" />
```
**音频** 在网页中播放音频，音频格式只支持 *.ogg 或 *.mp3
```html
<!-- src表示音频路径，如果浏览器过于老旧无法识别 audio 标签，则在浏览器中显示 audio 标签包裹的文本 -->
<audio src="">您的浏览器不支持audio标签</audio>

<!-- 自动播放音频 -->
<audio autoplay>您的浏览器不支持audio标签</audio>

<!-- 显示控制组件 -->
<audio controls>您的浏览器不支持audio标签</audio>

<!-- 循环播放 -->
<audio loop>您的浏览器不支持audio标签</audio>

<!-- 多源音频，为了提高不同浏览器的兼容性，我们可以通过 source 标签 来配置多个音频源，如果第一个音频源可以播放则正常播放，如果不能播放则使用第二个音频源进行播放 -->
<audio>
	<source src="*.ogg" type="audio/ogg"/>
	<source src="*.mp3" type="audio/mpeg"/>
	您的浏览器不支持audio标签
</audio>
```
**视频** 在网页中播放视频，视频格式只支持 *.ogg 、 *.mp4 或 *.webm
```html
<!-- src表示视频路径，如果浏览器过于老旧无法识别 video 标签，则在浏览器中显示 video 标签包裹的文本 -->
<video src="">您的浏览器不支持video标签</video>

<!-- 自动播放视频，如果浏览器禁用了视频的自动播放功能，则需要使用脚本进行自动播放的实现，否则就无法实现自动播放功能 -->
<video autoplay>您的浏览器不支持video标签</video>

<!-- 显示控制组件 -->
<video controls>您的浏览器不支持video标签</video>

<!-- 循环播放 -->
<video loop>您的浏览器不支持video标签</video>

<!-- 设置视频控件的宽和高 -->
<video width="" height="">您的浏览器不支持video标签</video>

<!-- 静音播放 -->
<video muted>您的浏览器不支持video标签</video>

<!-- 多源视频，为了提高不同浏览器的兼容性，我们可以通过 source 标签 来配置多个视频源，如果第一个视频源可以播放则正常播放，如果不能播放则使用第二个视频源进行播放，以此类推 -->
<video>
	<source src="*.ogg" type="video/ogg"/>
	<source src="*.mp4" type="video/mp4"/>
	<source src="*.webm" type="video/webm"/>
	您的浏览器不支持video标签
</video>
```
### 超链接
**超链接** 可以跳转到其他页面或者当前页面的指定位置
```html
<!-- 跳转到其他网页，href 为其他网页地址 -->
<a href="">文本</a>

<!-- 在本窗口中打开新页面 -->
<a href="" target="_self">文本</a>
<!-- 在新窗口中打开新页面 -->
<a href="" target="_blank">文本</a>
<!-- 在置顶的内联框架中打开新页面 -->
<a href="" target="内联框架的name属性值">文本</a>

<!-- 空连接，超链接失去跳转功能 -->
<a href="javascript:void(0)">文本</a>

<!-- 设置锚点，name 为锚点名称 -->
<a name=""></a>
<!-- 跳转到锚点 -->
<a href="#锚点名称">文本</a>

<!-- 发送邮件 -->
<a href="mailto:邮箱地址">文本</a>

<!-- 拨打电话，在手机端有效 -->
<a href="tel:电话号码">文本</a>
```
## 分区元素
### 内联框架
**内联框架** 可以将其他页面嵌入到当前页面中显示，一般用于后台页面布局或者广告显示
```html
<!-- src为打开网页的地址，name 为当前内联框架取得名称，方便 a 连接进行调用 -->
<ifram src="" name="" />

<!-- 设置宽和高 -->
<ifram width="" height="" />
```
### 通用分区
**大区块通用分区** 主要用于页面布局
```html
<div>...</div>
```
**小区快文本分区** 主要用文本样式调整
```html
<span>文本</span>
```
### 页面分区
**页头** 定义整个网页内容的头部区域，也可以定义组件的头部区域
```html
<header>...</header>
```
**主体** 定义整个网页内容的主体区域
```html
<main>...</main>
```
**页脚** 定义整个网页内容的页脚区域，也可以定义某个组件的脚部区域
```html
<footer>...</footer>
```
### 内容分区
**导航** 定义导航区域
```html
<nav>...</nav>
```
**文章内容** 文章的正文部分，论坛的评论内容部分等
```html
<article>...</article>
```
**文章章节** 一般文章正文中的小节部分，或页面独立区域，或组件的独立区域
```html
<section>...</section>
```
**文章附属区域** 一般用于与文章内容相关的侧边栏区域
```html
<aside>...</aside>
```
## 模板标签
**模板标签** 用户定义一个模板，需要配合 javascript 使用，定义在模板中的标签不会被渲染到浏览器中
```html
<template>...</template>
```

## 表单标签
**表单根元素** 表示表单的界限，action 表示表单数据的提交地址，enctype 表示表单的类型，method 表示表单的提交方式
```html
<!-- method 的值有 get 和 post -->
<form action="" method="">...</form>

<!-- 设置表单的类型 -->
<!-- 默认类型 -->
<form enctype="application/x-www-form-urlencoded">...</form>
<!-- 实体类型，常用文件上传时的表单 -->
<form enctype="multipart/form-data">...</form>
```
**单行输入框** 一般接收用户输入的内容，type 表示输入框的类型，name 表示输入框的名称，value 表示输入框的默认值
```html
<!-- 单行文本输入框 -->
<input type="text" name="" value="">

<!-- 密码框，不会显示明文 -->
<input type="password">

<!-- 数值输入框，step 为步长，min 为最小值，max 为最大值 -->
<input type="number" step="" min="" max="">

<!-- 邮件输入框，自动验证邮件格式 -->
<input type="email">

<!-- 网络地址输入框 -->
<input type="url">

<!-- 电话号码输入框 -->
<input type="tel">

<!-- 单选按钮，checked 表示为选中状态，默认没有被选中，同组单选按钮的 name 值必须一致 -->
<input type="radio" checked>

<!-- 多选按钮，checked 表示为选中状态，默认没有被选中，同组多选按钮的 name 值必须一致 -->
<input type="checkbox" checked>

<!-- 日期输入框，value 的默认值格式为：yyyy-MM-dd，max 为可以选择的最大时间，min 为可以选择的最小时间 -->
<input type="date" max="" min="">

<!-- 时间日期输入框，value 的默认值为：yyyy-MM-ddTHH:mm，max 为可以选择的最大时间，min 为可以选择的最小时间 -->
<input type="date-local" max="" min="">

<!-- 年月输入框，value 的默认值为：yyyy-MM，max 为可以选择的最大年月，min 为可以选择的最小年月，step 为步长（单位月，选选择时有效） -->
<input type="month" max="" min="" step="">

<!-- 时间输入框，value 的默认值为：HH:mm:ss或HH:mm，max 为最大时间，min 为最小时间，step 为步长(单位秒) -->
<input type="time" max="" min="" step="">

<!-- 一年第几周输入框，value 的默认值为：yyyy-W周数（例如：2017-W03），max 为最大周数，min 为最小周数，step 为步长（单位周数，选择时有效） -->
<input type="week" max="" min="" step="">

<!-- 普通按钮，需要配合 onclick 事件使用，value 为按钮显示的文本 -->
<input type="button" value="">

<!-- 提交按钮，可以提交表单，value 为按钮显示的文本 -->
<input type="submit" value="">

<!-- 重置按钮，恢复表单中的字段到初始状态，value 为按钮显示的文本 -->
<input type="reset" value="">

<!-- 图片按钮，可以提交表单，src 为图片路径 -->
<input type="image" src="">

<!-- 隐藏域，不会在浏览器中显示，必须设置 name 和 value 属性 -->
<input type="hidden">

<!-- 文件域，用于文件上传，无法设置初始值，表单中出现该字段时，表单的 enctype 属性值应该为 multipart/form-data -->
<input type="file">

<!-- 颜色选择框，value 的默认值为：#000000 -->
<input type="color">

<!-- 滑块选择框，value 的默认值为数值，max 为最大数值，min 为最小数值，step 为步长 -->
<input type="range" max="" min="" step="">

<!-- 占位符，用户没有输入时提示用户的信息 -->
<input placeholder="">

<!-- 只读状态，该状态下用户无法操作该元素，但是表单提交时会提交此元素的值 -->
<input readonly>

<!-- 禁用状态，该状态下用户无法操作该元素，并且表单提交时也不会提交此元素的值 -->
<input disabled>

<!-- 必填项，如果用户不输入值，则会导致表单无法正常提交 -->
<input required>

<!-- 正则验证，pattern 为正则表达式，用于规定输入框值的格式 -->
<input pattern="">
```
**多行文本域** 可以接收用户输入的大量文本，name 为文本域的名称
```html
<!-- 基本文本域 -->
<textarea name=""></textarea>

<!-- 设置显示的列数和显示的行数，cols 为列数，rows 为行数 -->
<textarea cols="" rows=""></textarea>

<!-- 设置默认值 -->
<textarea>默认文本</textarea>

<!-- 占位符，用户没有输入时提示用户的信息 -->
<input placeholder="">

<!-- 只读状态，该状态下用户无法操作该元素，但是表单提交时会提交此元素的值 -->
<input readonly>

<!-- 禁用状态，该状态下用户无法操作该元素，并且表单提交时也不会提交此元素的值 -->
<input disabled>

<!-- 必填项，如果用户不输入值，则会导致表单无法正常提交 -->
<input required>
```
**下拉列表框** 让用户选择，select 为下拉列表框的界限，option 为下拉列表框的选项，optgroup 为下拉列表框选项的分组
```html
<!-- 基本下拉列表框，有些浏览器默认选中第一项，默认为单选模式 -->
<select name="">
	<option value="">文本</option>
</select>

<!-- 选中指定的选项 -->
<select name="">
	<option value="" selected>文本</option>
</select>

<!-- 选项分组，label 为组名，disabled 为禁止选择该组的选项 -->
<select name="">
	<optgroup label="" disabled>
		<option value="">文本</option>
	</optgroup>
</select>

<!-- 多选模式 -->
<select multiple>...</select>

<!-- 控制选项的显示条数，size 为显示选项的条目数，单选模式默认1条，多选模式默认4条 -->
<select size="">...</select>

<!-- 必填项，如果用户不输入值，则会导致表单无法正常提交 -->
<select require>...</select>

<!-- 只读状态，该状态下用户无法操作该元素，但是表单提交时会提交此元素的值 -->
<select readonly>...</select>

<!-- 禁用状态，该状态下用户无法操作该元素，并且表单提交时也不会提交此元素的值 -->
<select disabled>...</select>
```
**标签** 用于对表单元素进行说明
```html
<!-- for 的值应该为要解释的表单元素的 id 值 -->
<label for="">文本</label>
```
**字段域** 用于对表单元素进行区块划分，fieldset 为字段域的界限，legend 为字段域的文本说明
```html
<fieldset>
	<legend>文本</legend>
	...
</fieldset>
```

# 常用实体
实体|说明
-|-
&amp;nbsp;|空格
&amp;copy;|版权符号（©）
&amp;amp;|与符号（&）
&amp;lt;|小于号（<）
&amp;gt;|大于号（>)

# 带默认风格的标签
**h1 ~ h6**
```
上下外边距
字体加粗
h1~h3 较普通文本大
h4 和普通文本差不多大小
h5~h6 较普通文本小
```
**p,dl,hr**
```
上下外边距
```
**ul,ol**
```
上下外边距
左内边距
```
**dd**
```
左外边距
```
**li**
```
一级，带有黑色实心圆点
二级，带有空心圆点
三级，带有实心方块
```

# FAQ
**无法使用 ! 快速创建 HTML 模板**
```
1. `ctrl`+`,` 调出设置窗口
2. 在搜索框中搜索 `emmet` 
3. 找到 `Emmet:Show Abbreviation Suggestions`，把下面的复选框取消勾选
```

**常用的编码模式**
```
1. GBK(国内站)
2. GB2312(国内站)
3. UTF-8(国际站)
```

**乱码现象产生的原因**
```
网页文件的编码使用的字符集与浏览器解码使用的字符集不一致就会导致中文乱码现象
```