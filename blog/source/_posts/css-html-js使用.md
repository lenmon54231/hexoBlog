---
title: css+html+js使用
date: 2020-09-15 12:00:06
tags:
---

## css+html+js 使用

<!-- more -->

### 布局

#### 静态布局

1. 布局特点：不管浏览器尺寸具体是多少，网页布局始终按照最初写代码时的布局来显示。常规的 pc 的网站都是静态（定宽度）布局的，也就是设置了 min-width，这样的话，如果小于这个宽度就会出现滚动条，如果大于这个宽度则内容居中外加背景，这种设计常见与 pc 端。

2. 布局特点：不管浏览器尺寸具体是多少，网页布局始终按照最初写代码时的布局来显示。

   常规的 pc 的网站都是静态（定宽度）布局的，也就是设置了 min-width，这样的话，如果小于这个宽度就会出现滚动条，如果大于这个宽度则内容居中外加背景，这种设计常见与 pc 端。

3. - 优点：这种布局方式对设计师和 CSS 编写者来说都是最简单的，亦没有兼容性问题。
   - 缺点：显而易见，即不能根据用户的屏幕尺寸做出不同的表现。
   <!-- more -->

#### 流式布局

1. 流式布局（Liquid）的特点（也叫"Fluid") 是页面元素的宽度按照屏幕分辨率进行适配调整，但整体布局不变。代表作栅栏系统（网格系统）。
2. 网页中主要的划分区域的尺寸使用百分数（搭配 min-*、max-*属性使用），例如，设置网页主体的宽度为 80%，min-width 为 960px。图片也作类似处理（width:100%, max-width 一般设定为图片本身的尺寸，防止被拉伸而失真）。
3. 布局和设计

   - 布局特点：屏幕分辨率变化时，页面里元素的大小会变化而但布局不变。【这就导致如果屏幕太大或者太小都会导致元素无法正常显示】

   - 设计方法：使用%百分比定义宽度，高度大都是用 px 来固定住，可以根据可视区域 (viewport) 和父元素的实时尺寸进行调整，尽可能的适应各种分辨率。往往配合 max-width/min-width 等属性控制尺寸流动范围以免过大或者过小影响阅读。

4. 优点和缺点
   - 按照屏幕分辨率进行适配调整，但整体布局不变。适应早期的 web 布局，兼容性高
   - **缺点明显**：**主要的问题**是如果屏幕尺度跨度太大，那么在相对其原始设计而言过小或过大的屏幕上不能正常显示。因为宽度使用%百分比定义，但是高度和文字大小等大都是用 px 来固定，所以在大屏幕的手机下显示效果会变成有些页面元素宽度被拉的很长，但是高度、文字大小还是和原来一样（即：**这些东西无法变得“流式”**），显示非常不协调。

#### 自适应布局

1. 自适应布局的特点是分别为不同的屏幕分辨率定义布局，即创建多个静态布局，每个静态布局对应一个屏幕分辨率范围。
2. 实现方法
   - 使用 @media 媒体查询给不同尺寸和介质的设备切换不同的样式。在优秀的响应范围设计下可以给适配范围内的设备最好的体验，在同一个设备下实际还是固定的布局。
3. 特点
   - 布局特点：屏幕分辨率变化时，页面里面元素的位置会变化而大小不会变化。
4. 本质上是多个多个**_静态布局_**。

#### 响应式布局

1. **可以把响应式布局看作是流式布局和自适应布局设计理念的融合**。
2. 响应式设计的目标是确保一个页面在所有终端上（各种尺寸的 PC、手机、手表、冰箱的 Web 浏览器等等）都能显示出令人满意的效果，对 CSS 编写者而言，在实现上不拘泥于具体手法，但通常是糅合了流式布局+弹性布局，再搭配媒体查询技术使用。
3. 设计方法：
   - 媒体查询+流式布局。通常使用 @media 媒体查询 和网格系统 (Grid System) 配合相对布局单位进行布局，实际上就是综合响应式、流动等上述技术通过 CSS 给单一网页不同设备返回不同样式的技术统称。
4. 特点：
   - 每个屏幕分辨率下面会有一个布局样式，即元素位置和大小都会变。
5. 优点和缺点：
   - 适应 pc 和移动端，如果足够耐心，效果完美
   - （1）媒体查询是有限的，也就是可以枚举出来的，只能适应主流的宽高。（2）要匹配足够多的屏幕大小，工作量不小，设计也需要多个版本。需要很多个@media。
6. 代表比如 bootstrap，element 等都是响应式的设计布局

#### 弹性布局

1. 这类布局的特点是，**包裹文字的各元素的尺寸采用 em/rem 做单位，而页面的主要划分区域的尺寸仍使用百分数或 px 做单位（同「流式布局」或「静态/固定布局」）**。**早期浏览器不支持整个页面按比例缩放**，仅支持网页内文字尺寸的放大，这种情况下。使用 em/rem 做单位，可以使包裹文字的元素随着文字的缩放而缩放。
2. **rem,em 区别**：
   - rem,em 都是顺应不同网页字体大小展现而产生的。其中，em 是相对其父元素，在实际应用中相对而言会带来很多不便；而 rem 是始终相对于 html 大小，即页面根元素。
3. 根据不同的屏幕尺寸，rem 改变的是 font-size 的大小，但是本质上，客户看到的布局是没有改变的，这一点不同于响应式布局。
4. **响应式和弹性布局之间的对比：**
   - rem 布局：改变浏览器宽度，页面所有元素的高宽都等比例缩放，也就是大屏幕下导航是横的，小屏幕下还是横的只不过变小了。
   - 响应式布局：改变浏览器宽度，“布局”会随之变化，不是一成不变的，例如导航栏在大屏幕下是横排，在小屏幕下是竖排，在超小屏幕下隐藏为菜单，也就是说如果有足够的耐心，在每一种屏幕下都应该有合理的布局，完美的效果。

#### 总结

> 1. 如果只做 pc 端，那么静态布局（定宽度）是最好的选择；
>
> 2. 如果做移动端，且设计对高度和元素间距要求不高，那么弹性布局（rem+js）是最好的选择，一份 css+一份 js 调节 font-size 搞定；
>
> 3. 如果 pc，移动要兼容，而且要求很高那么响应式布局还是最好的选择，前提是设计根据不同的高宽做不同的设计，响应式根据媒体查询做不同的布局。

#### 圣杯布局的三种实现

圣杯布局和双飞翼布局一直是前端面试的高频考点，圣杯布局的出现是来自由 Matthew Levine 在 2006 年写的一篇文章 《In Search of the Holy Grail》。 比起双飞翼布局，它的起源不是源于对页面的形象表达。在西方，圣杯是表达“渴求之物”的意思。而双飞翼布局则是源于淘宝的 UED，可以说是灵感来自于页面渲染。

#### 效果图

布局形式如下：

- header 和 footer 各自占领屏幕所有宽度，高度固定。
- 中间的 container 是一个三栏布局。
- 三栏布局两侧宽度固定不变，中间部分自动填充整个区域。
- 中间部分的高度是三栏中最高的区域的高度。
  ![shengbie](https://img-blog.csdnimg.cn/20190118092113972.png)
  三种实现形式

1. **浮动**

   1. 设置 header，footer 高度

   2. #container 内部子元素有 float 浮动，所以会导致一些问题，所以添加了 overflow：hidden；实际上也可以使用 overflow：auto；

   3. container 左右两边需要留出左右对应的位置，padding-left: 200px;padding-right: 150px;

   4. 给左右元素设置浮动后，脱离文档流。使用 margin-left：-100%；和 margin-right：-150px 定位到对应的位置。

      > 清除浮动参考:清除浮动

   ```html
   <body>
     <div id="header">#header</div>
     <div id="container">
       <div id="center" class="column">#center</div>
       <div id="left" class="column">#left</div>
       <div id="right" class="column">#right</div>
     </div>
     <div id="footer">#footer</div>
   </body>
   ```

   ```css
     body {
       min-width: 550px;  /* 2x leftContent width + rightContent width */
       font-weight: bold;
       font-size: 20px;
     }

     #header, #footer {
       background: rgba(29, 27, 27, 0.726);
       text-align: center;
       height: 60px;
       line-height: 60px;
     }

     #container {
       padding-left: 200px;   /* leftContent width */
       padding-right: 150px;  /* rightContent width */
       overflow: hidden;
     }

     #container .column {
       position: relative;
       float: left;
       text-align: center;
       height: 300px;
       line-height: 300px;
     }

     #center {
       width: 100%;
       background: rgb(206, 201, 201);
     }

     #left {
       width: 200px;           /* leftContent width */
       right: 200px;           /* leftContent width */
       margin-left: -100%;
       background: rgba(95, 179, 235, 0.972);
     }

     #right {
       width: 150px;           /* rightContent width */
       margin-right: -150px;   /* rightContent width */
       background: rgb(231, 105, 2);
   ```

2. **flex 布局**

   - header 和 footer 设置样式，横向撑满。

   - container 中的 left、center、right 依次排布即可

   - 给 container 设置弹性布局 `display: flex;`

   - left 和 right 区域定宽，center 设置 `flex: 1;` 即可

     ```html
     <body>
       <div id="header">#header</div>
       <div id="container">
         <div id="left" class="column">#left</div>
         <div id="center" class="column">#center</div>
         <div id="right" class="column">#right</div>
       </div>
       <div id="footer">#footer</div>
     </body>
     ```

     ```css
     body {
       min-width: 550px;
       font-weight: bold;
       font-size: 20px;
     }
     #header,
     #footer {
       background: rgba(29, 27, 27, 0.726);
       text-align: center;
       height: 60px;
       line-height: 60px;
     }
     #container {
       display: flex;
     }
     #container .column {
       text-align: center;
       height: 300px;
       line-height: 300px;
     }
     #center {
       flex: 1;
       background: rgb(206, 201, 201);
     }
     #left {
       width: 200px;
       background: rgba(95, 179, 235, 0.972);
     }
     #right {
       width: 150px;
       background: rgb(231, 105, 2);
     }
     ```

3. **grid 布局**

   如上图所示，我们把 body 划分成三行四列的网格，其中有 5 条列网格线

   给 body 元素添加 display: grid;属性变成一个 grid(网格)
   给 header 元素设置 grid-row: 1; 和 grid-column: 1/5; 意思是占据第一行网格的从第一条列网格线开始到第五条列网格线结束
   给 footer 元素设置 grid-row: 1; 和 grid-column: 1/5; 意思是占据第三行网格的从第一条列网格线开始到第五条列网格线结束
   给 left 元素设置 grid-row: 2; 和 grid-column: 1/2; 意思是占据第二行网格的从第一条列网格线开始到第二条列网格线结束
   给 center 元素设置 grid-row: 2; 和 grid-column: 2/4; 意思是占据第二行网格的从第二条列网格线开始到第四条列网格线结束
   给 right 元素设置 grid-row: 2; 和 grid-column: 4/5; 意思是占据第二行网格的从第四条列网格线开始到第五条列网格线结束

   ```html
   <body>
     <div id="header">#header</div>
     <div id="left" class="column">#left</div>
     <div id="center" class="column">#center</div>
     <div id="right" class="column">#right</div>
     <div id="footer">#footer</div>
   </body>
   ```

   ```css
   body {
     min-width: 550px;
     font-weight: bold;
     font-size: 20px;
     display: grid;
   }
   #header,
   #footer {
     background: rgba(29, 27, 27, 0.726);
     text-align: center;
     height: 60px;
     line-height: 60px;
   }
   #header {
     grid-row: 1;
     grid-column: 1/5;
   }
   #footer {
     grid-row: 3;
     grid-column: 1/5;
   }
   .column {
     text-align: center;
     height: 300px;
     line-height: 300px;
   }
   #left {
     grid-row: 2;
     grid-column: 1/2;
     background: rgba(95, 179, 235, 0.972);
   }
   #center {
     grid-row: 2;
     grid-column: 2/4;
     background: rgb(206, 201, 201);
   }
   #right {
     grid-row: 2;
     grid-column: 4/5;
     background: rgb(231, 105, 2);
   }
   ```

4. 三种实现形式

   三种实现形式内，不考虑兼容性的情况下，**_flex 布局_**是使用比较广的，浮动的布局相对比较麻烦，需要设定各种 margin 和 padding 和 position 的定位，grid 布局属于二维布局，就兼容性来说，还是比 flex 要差一些。

### CSS 实现文字和图片的水平垂直居中

居中是一开始学习使用 css 遇到比较多的情况，不同的情况有不同的居中方式，随着前端的规范和写法的进步，有各种各样的方法实现，现在来记录一下。
主要有文字、div 块级元素和图片的居中，以下分几种情况说明。

#### 文字居中

1. 单行文字（多行文字）

   - 水平居中

   ```css
   text-align：center
   ```

   - 垂直居中
     只要 height 值等于 line-height 值就 ok

   ```css
   .son {
     height: 100px;
     line-height: 100px;
   }
   ```

   <!-- more -->

2. 多行文字

   - 垂直居中

     1. 高度固定
        **关键属性：**display:tabel-cell; vertical-align:middle;

     ```css
     <style>
     div{height:300px;
     width:200px;
     vertical-align:middle;
     display:table-cell;
     word-break:break-all;
     }
     </style>
     ```

     2. 父级元素高度固定，子元素为行内元素
        **关键属性：**父级:diaplay:tabel; 子集：display:tabel-cell; vertical-align:middle;

     ```css
     <style>div{height:300px;width:200px;display:table;word-break:break-all;background:#666;
     }
     span{display:table-cell;vertical-align:middle;
     }
     </style>
     <div>
     <span>some things</span>
     </div>
     ```

     3. 父级元素高度固定，子元素为块元素且高度固定
        **关键属性：**定位 + margin-top：负值；

     ```css
     <style type="text/css">
     *{margin:0;padding:0;}
     div{height:300px;width:200px;position:relative;word-break:break-all;background:#666;}
     p{position:absolute;top:50%;left:0;height:80px;margin-top:-40px;background:red;}
     </style>
     <div>
     <p>some things</p>
     </div>
     ```

     4. 父级元素高度固定，子元素为块元素且高度不固定
        **关键属性：**定位 + transform：translateY(-50%);

     ```css
     <style>
     *{margin:0;padding:0;}  /*不加的话会被p或其他标签默认样式影响*/
     div{height:300px;width:200px;position:relative; word-break:break-all;background:#666;}
     p{position:absolute;top:50%;left:0;transform:translateY(-50%);}/*个人建议，被包裹的块标签就不要height，用内容将高度撑开就好*/
     </style>
     <div>
     <p>some things</p>
     </div>
     ```

     5. 父子元素高度均固定
        **关键属性：**定位 + margin：auto；

     ```css
     <style>
     *{margin:0;padding:0;}
     div{height:300px;width:400px;position:relative;word-break:break-all;background:#666;}
     p{position:absolute;top:0;bottom:0;right:0;left:0;margin:auto;height:80px;width:200px;background:red;}
     </style>
     <div>
     <p>some things</p>
     </div>
     ```

#### 块级元素居中

- 水平居中

  1. 行内元素(inline 或 inline-\* 元素)
     此类元素需要水平居中，则父级元素必须是块级元素(block level)，且父级元素上需要这样设置样式：

  ```css
  .parent {
    text-align: center;
  }
  ```

  2. 块级元素
     块级元素水平居中，需要设置 margin-left 和 margin-right 为 auto，且需要显示设置宽度，不然就占满整行，就无所谓水平居中了。

  ```css
  .block {
    width: 300px;
    margin: 0 auto;
  }
  ```

  3. 同一行多个块级元素
     如果是在同一行里需要居中多个块级元素，可以尝试下面的两种方法：

  ```css
  /* 方法一 */
  .parent {
    text-align: center;
  }
  .parent div {
    display: inline-block;
  }
  /* 方法二 */
  .parent {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
  }
  ```

- 垂直居中

  1. 元素高度已知
     知道块元素的高度，那么使用绝对定位和负的 margin 即可实现垂直居中：

  ```css
  .parent {
    position: relative;
  }
  .parent div {
    position: absolute;
    top: 50%;
    height: 50px;
    margin-top: -25px;
  }
  ```

  2. 块级元素高度是可变的
     这个时候就需要用 transform 的 Y 轴平移来实现了：

  ```css
  .parent {
    position: relative;
  }
  .parent div {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }
  ```

  3. flexbox 布局
     flex 主要是考虑布局问题

  ```css
  .parent {
    display: flexbox;
    justify-content: center;
    flex-direction: column;
  }
  ```

  4. 块级元素高度不是固定的，且不由内容决定

  ```css
  .parent {
    position: relative;
  }
  .parent div {
    position: absolute;
    top: 30%;
    bottom: 30%;
  }
  ```

- 水平垂直居中

  1. 知道宽高的盒子

  ```css
  .parent {
    position: realtive;
  }
  .parent div {
    width: 300px;
    height: 300px;
    posotion: absoltue;
    left: 50%;
    top: 50%;
    margin-left: -150px;
    margin-top: -150px;
  }
  ```

  2. 不知道宽高的盒子

  ```css
  .parent {
    position: realtive;
  }
  .parent div {
    posotion: absoltue;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
  ```

  3. flex 布局

  ```css
  .parent {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  ```

<meta name="referrer" content="no-referrer"/>

### flex 设置成 1 和 auto 有什么区别

#### flex 的取值

首先明确一点是， `flex` 是 `flex-grow`、`flex-shrink`、`flex-basis`的缩写。`flex` 的默认值是以上三个属性值的组合。

那么，flex：1；和 flex：auto；有对应的全写如下：

```html
.item {flex: auto;}
```

> ```html
> .item { flex-grow: 1; flex-shrink: 1; flex-basis: auto; }
> ```

```html
.item {flex: 1;}
```

> ```html
> .item { flex-grow: 1; flex-shrink: 1; flex-basis: 0%; }
> ```

这三个缩写代表什么意思呢？

<!-- more -->

- flex-shrink 属性指定了 flex 元素的收缩规则。flex 元素仅在交替宽度之和大于容器的时候才会发生收缩，其收缩的大小是依据 flex-shrink 的值。
- flex-grow 属性用于设置或检索弹性盒子的扩展比率。
- `flex-basis` 规定的是子元素的基准值。所以是否溢出的计算与此属性息息相关。`flex-basis` 规定的范围取决于 `box-sizing`。这里主要讨论以下 `flex-basis` 的取值情况：
  1. `auto`：首先检索该子元素的主尺寸，如果主尺寸不为 `auto`，则使用值采取主尺寸之值；如果也是 `auto`，则使用值为 `content`。
  2. `content`：指根据该子元素的内容自动布局。有的用户代理没有实现取 `content` 值，等效的替代方案是 `flex-basis` 和主尺寸都取 `auto`。
  3. 百分比：根据其包含块（即伸缩父容器）的主尺寸计算。如果包含块的主尺寸未定义（即父容器的主尺寸取决于子元素），则计算结果和设为 `auto` 一样。

#### 举个例子

```html
<div class="parent">
  <div class="item-1"></div>
  <div class="item-2"></div>
  <div class="item-3"></div>
</div>
```

```css
<style type="text/css">
    .parent {
        display: flex;
        width: 600px;
    }
    .parent > div {
        height: 100px;
    }
    .item-1 {
        width: 140px;
        flex: 2 1 0%;
        background: blue;
    }
    .item-2 {
        width: 100px;
        flex: 2 1 auto;
        background: darkblue;
    }
    .item-3 {
        flex: 1 1 200px;
        background: lightblue;
    }
</style>
```

子元素的总基准值是：.item-1:0% + item-2:auto + .item-3:200px = 300px，其中

```
- 0% 即 0 宽度
- auto 对应取主尺寸即 100px
```

故剩余空间为 600px - 300px = 300px

有剩余空间，需要分配剩余空间，需要 flex-grow，就是 flex:2,lex:2,lex:1;

剩余空间分配如下：

```
- item-1 和 item-2 各分配 2/5，各得 120px
- item-3 分配 1/5，得 60px
```

各项目最终宽度为：

```
- item-1 = 0% + 120px = 120px
- item-2 = auto + 120px = 220px
- item-3 = 200px + 60px = 260px
```

**_注意_**

- 当 item-1 基准值取 0% 的时候，是把该项目视为零尺寸的，故即便声明其尺寸为 140px，也并没有什么用，形同虚设
- 而 item-2 基准值取 `auto` 的时候，根据规则基准值使用值是主尺寸值即 100px，故这 100px 不会纳入剩余空间

#### 全部设置

```
.item {flex: 2333 3222 234px;}
.item {
    flex-grow: 2333;
    flex-shrink: 3222;
    flex-basis: 234px;
}
```

当 `flex` 取值为 `none`，则计算值为 0 0 auto，如下是等同的：

```
.item {flex: none;}
.item {
    flex-grow: 0;
    flex-shrink: 0;
    flex-basis: auto;
}
```

当 `flex` 取值为 `auto`，则计算值为 1 1 auto，如下是等同的：

```
.item {flex: auto;}
.item {
    flex-grow: 1;
    flex-shrink: 1;
    flex-basis: auto;
}
```

当 `flex` 取值为一个非负数字，则该数字为 `flex-grow` 值，`flex-shrink` 取 1，`flex-basis` 取 0%，如下是等同的：

```
.item {flex: 1;}
.item {
    flex-grow: 1;
    flex-shrink: 1;
    flex-basis: 0%;
}
```

当 `flex` 取值为一个长度或百分比，则视为 `flex-basis` 值，`flex-grow` 取 1，`flex-shrink` 取 1，有如下等同情况（注意 0% 是一个百分比而不是一个非负数字）：

```
.item-1 {flex: 0%;}
.item-1 {
    flex-grow: 1;
    flex-shrink: 1;
    flex-basis: 0%;
}
.item-2 {flex: 24px;}
.item-1 {
    flex-grow: 1;
    flex-shrink: 1;
    flex-basis: 24px;
}
```

当 `flex` 取值为两个非负数字，则分别视为 `flex-grow` 和 `flex-shrink` 的值，`flex-basis` 取 0%，如下是等同的：

```
.item {flex: 2 3;}
.item {
    flex-grow: 2;
    flex-shrink: 3;
    flex-basis: 0%;
}
```

当 `flex` 取值为一个非负数字和一个长度或百分比，则分别视为 `flex-grow` 和 `flex-basis` 的值，`flex-shrink` 取 1，如下是等同的：

```
.item {flex: 2333 3222px;}
.item {
    flex-grow: 2333;
    flex-shrink: 1;
    flex-basis: 3222px;
}
```

<meta name="referrer" content="no-referrer"/>

### 移动端优先和桌面端优先

#### **什么是“移动端优先”和“桌面优先”方法**

构建响应式网站是如今前端开发者的必备技能，当我们谈到响应式网站时，“移动端优先”这个词立刻就会出现在脑海中。

我们知道从“移动端优先”这个角度开始设计很重要，但我们很少谈到使用“移动端优先”的方法来写代码。

今天，我想与你分享“移动端优先”添加样式的方法，为什么这种方法更好，以及如何发挥它的魔力。

<!-- more -->

#### 移动端优先和桌面端优先 区别

“移动端优先”添加样式的方法指的是首先在移动设备上应用样式，然后通过媒体查询在样式表中加入应用于大屏幕的高级样式和其他覆盖样式。

这个方法使用 min-width 媒体查询。

```js
// 这个样式在0px到600px应用
body { background: red; }

// 这个样式在大于600px时应用
@media (min-width: 600px) {
    body { background: green; }
}
```

另一方面，“桌面优先”添加样式的方法指的是首先在桌面设备上应用样式，然后通过媒体查询在样式表中加入应用于小屏幕的高级样式和其他覆盖样式。

这个方法使用 max-width 媒体查询。

```js
// 这个样式在大于600px时应用
body { background: green; }

// 这个样式在0px到600px应用
@media (max-width: 600px) {
    body { background: red; }
}
```

#### 为什么是移动端优先？

- 为大屏幕编写的代码通常会比为小屏幕编写的代码更复杂，所以编写“移动端优先”代码可以简化你的代码。

- 设想这样一个场景，你的网站有一个“内容-边栏”布局，.content 在移动端占会 100%的宽度，在桌面则占 60%的宽度。

  ![](https://zellwk.com/images/2014/12/mw-5.png)

移动端代码为：

```js
.content {
    // 为小屏幕设置属性
    // 这里不需要设置任何属性，因为我们可以使用默认样式

    // 为大屏幕设置属性
    @media (min-width: 800px) {
        float: left;
        width: 60%;
    }
}
```

桌面端代码：

```js
.content {
    // 为大屏幕设置属性
    float: left;
    width: 60%;

    // 为小屏幕设置属性
    // 注意我们需要重写两个默认属性才能使这个布局正常显示
    @media (max-width: 800px) {
        float: none;
        width: 100%;
    }
}
```

- **这里的主要区别就是移动端的布局更多的情况是占用屏幕较大的布局，比如都是 100%的占用，可以通过继承直接生成对应的布局。**

#### 结合 max-width 去使用

- 当你的样式再不同的尺寸下都都不同的显示效果时，也可以通过 max-width 去终止之前尺寸的布局，节省后续布局的操作。

  ![](https://zellwk.com/images/2014/12/mw-4.png)

```js
.gallery__item {
    float: left;
    margin-right: 5%;
    margin-bottom: 5%;
    @media (max-width: 800px) {
        width: 30%;
        &:nth-child(3n) {
            margin-right: 0;
        }
    }

    // min-width和max-width查询结合使用
    @media (min-width: 800px) and (max-width: 1200px) {
        width: 21.25%; // (100% - 15%) / 4
        &:nth-child(4n) {
            margin-right: 0;
        }
    }

    @media (min-width: 1200px) {
        width: 16%; // (100% - 20%) / 5
        &:nth-child(5n) {
            margin-right: 0;
        }
    }
}
```

#### 总结

建立响应式网站时，min-width 媒体查询非常有用，因为它减低了代码复杂度。不过，从上面的例子中可以看出，min-width 查询并非所有问题的解决方案，有时在样式表中使用 max-width 查询也是有益的，它能帮助你保持代码更 DRY。

<meta name="referrer" content="no-referrer"/>

### 移动端常用的 meta 标签

#### meta 标签记录

记录一下常用的 meta 标签

<!-- more -->

```html
<!DOCTYPE html>
<!-- 使用 HTML5 doctype，不区分大小写 -->
<html lang="zh-cmn-Hans">
  <!-- 更加标准的 lang 属性写法 http://zhi.hu/XyIa -->
  <head>
    <!-- 声明文档使用的字符编码 -->
    <meta charset="utf-8" />
    <!-- 优先使用 IE 最新版本和 Chrome -->
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
    <!-- 页面描述 -->
    <meta name="description" content="不超过150个字符" />
    <!-- 页面关键词 -->
    <meta name="keywords" content="" />
    <!-- 网页作者 -->
    <meta name="author" content="name, email@gmail.com" />
    <!-- 搜索引擎抓取 -->
    <meta name="robots" content="index,follow" />
    <!-- 为移动设备添加 viewport -->
    <meta
      name="viewport"
      content="initial-scale=1, maximum-scale=3, minimum-scale=1, user-scalable=no"
    />
    <!-- `width=device-width` 会导致 iPhone 5 添加到主屏后以 WebApp 全屏模式打开页面时出现黑边 http://bigc.at/ios-webapp-viewport-meta.orz -->

    <!-- iOS 设备 begin -->
    <meta name="apple-mobile-web-app-title" content="标题" />
    <!-- 添加到主屏后的标题（iOS 6 新增） -->
    <meta name="apple-mobile-web-app-capable" content="yes" />
    <!-- 是否启用 WebApp 全屏模式，删除苹果默认的工具栏和菜单栏 -->

    <meta
      name="apple-itunes-app"
      content="app-id=myAppStoreID, affiliate-data=myAffiliateData, app-argument=myURL"
    />
    <!-- 添加智能 App 广告条 Smart App Banner（iOS 6+ Safari） -->
    <meta name="apple-mobile-web-app-status-bar-style" content="black" />
    <!-- 设置苹果工具栏颜色 -->
    <meta name="format-detection" content="telphone=no, email=no" />
    <!-- 忽略页面中的数字识别为电话，忽略email识别 -->
    <!-- 启用360浏览器的极速模式(webkit) -->
    <meta name="renderer" content="webkit" />
    <!-- 避免IE使用兼容模式 -->
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <!-- 不让百度转码 -->
    <meta http-equiv="Cache-Control" content="no-siteapp" />
    <!-- 针对手持设备优化，主要是针对一些老的不识别viewport的浏览器，比如黑莓 -->
    <meta name="HandheldFriendly" content="true" />
    <!-- 微软的老式浏览器 -->
    <meta name="MobileOptimized" content="320" />
    <!-- uc强制竖屏 -->
    <meta name="screen-orientation" content="portrait" />
    <!-- QQ强制竖屏 -->
    <meta name="x5-orientation" content="portrait" />
    <!-- UC强制全屏 -->
    <meta name="full-screen" content="yes" />
    <!-- QQ强制全屏 -->
    <meta name="x5-fullscreen" content="true" />
    <!-- UC应用模式 -->
    <meta name="browsermode" content="application" />
    <!-- QQ应用模式 -->
    <meta name="x5-page-mode" content="app" />
    <!-- windows phone 点击无高光 -->
    <meta name="msapplication-tap-highlight" content="no" />
    <!-- iOS 图标 begin -->
    <link
      rel="apple-touch-icon-precomposed"
      href="/apple-touch-icon-57x57-precomposed.png"
    />
    <!-- iPhone 和 iTouch，默认 57x57 像素，必须有 -->
    <link
      rel="apple-touch-icon-precomposed"
      sizes="114x114"
      href="/apple-touch-icon-114x114-precomposed.png"
    />
    <!-- Retina iPhone 和 Retina iTouch，114x114 像素，可以没有，但推荐有 -->
    <link
      rel="apple-touch-icon-precomposed"
      sizes="144x144"
      href="/apple-touch-icon-144x144-precomposed.png"
    />
    <!-- Retina iPad，144x144 像素，可以没有，但推荐有 -->
    <!-- iOS 图标 end -->

    <!-- iOS 启动画面 begin -->
    <link
      rel="apple-touch-startup-image"
      sizes="768x1004"
      href="/splash-screen-768x1004.png"
    />
    <!-- iPad 竖屏 768 x 1004（标准分辨率） -->
    <link
      rel="apple-touch-startup-image"
      sizes="1536x2008"
      href="/splash-screen-1536x2008.png"
    />
    <!-- iPad 竖屏 1536x2008（Retina） -->
    <link
      rel="apple-touch-startup-image"
      sizes="1024x748"
      href="/Default-Portrait-1024x748.png"
    />
    <!-- iPad 横屏 1024x748（标准分辨率） -->
    <link
      rel="apple-touch-startup-image"
      sizes="2048x1496"
      href="/splash-screen-2048x1496.png"
    />
    <!-- iPad 横屏 2048x1496（Retina） -->

    <link rel="apple-touch-startup-image" href="/splash-screen-320x480.png" />
    <!-- iPhone/iPod Touch 竖屏 320x480 (标准分辨率) -->
    <link
      rel="apple-touch-startup-image"
      sizes="640x960"
      href="/splash-screen-640x960.png"
    />
    <!-- iPhone/iPod Touch 竖屏 640x960 (Retina) -->
    <link
      rel="apple-touch-startup-image"
      sizes="640x1136"
      href="/splash-screen-640x1136.png"
    />
    <!-- iPhone 5/iPod Touch 5 竖屏 640x1136 (Retina) -->
    <!-- iOS 启动画面 end -->

    <!-- iOS 设备 end -->
    <meta name="msapplication-TileColor" content="#000" />
    <!-- Windows 8 磁贴颜色 -->
    <meta name="msapplication-TileImage" content="icon.png" />
    <!-- Windows 8 磁贴图标 -->

    <link
      rel="alternate"
      type="application/rss+xml"
      title="RSS"
      href="/rss.xml"
    />
    <!-- 添加 RSS 订阅 -->
    <link rel="shortcut icon" type="image/ico" href="/favicon.ico" />
    <!-- 添加 favicon icon -->

    <!-- sns 社交标签 begin -->
    <!-- 参考微博API -->
    <meta property="og:type" content="类型" />
    <meta property="og:url" content="URL地址" />
    <meta property="og:title" content="标题" />
    <meta property="og:image" content="图片" />
    <meta property="og:description" content="描述" />
    <!-- sns 社交标签 end -->

    <title>标题</title>
  </head>
</html>
```
