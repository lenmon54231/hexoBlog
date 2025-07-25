---
title: 本地端MCP Server + Blender生成模型
date: 2025-04-29 17:33:04
tags: [MCP,Blender,AI]
---


## 通过自然语言让Blender生成模型

正常如果我们需要展示一个模型，都需要让建模师进行建模，并导出一个OBJ模型，最终展示到客户端。

那么，我们有可能通过简单的语言描述就生成一些基础的模型么？甚至当业务需求对模型质量要求不高的情况下，我们可不可以使用自然语言生成的模型来完成整个模型需求，从而直接跳过建模师建模这个步骤！？

使用MCP+BLender尝试一下！

<!-- more -->


### 示例视频

[演示Demo](https://www.youtube.com/watch?v=DqgKuLYUv00&ab_channel=ahujasid)

[演示Demo](https://www.youtube.com/watch?v=I29rn92gkC4&ab_channel=ahujasid)

[演示Demo](https://www.youtube.com/watch?v=FDRb03XPiRo&ab_channel=ahujasid)

[演示Demo](https://www.youtube.com/watch?v=jxbNI5L7AH8&ab_channel=ahujasid)

### 安装和配置

#### 安装软件

需要先安装以下四个模块：

> Blender 3.0 或更新版本（[blender](https://www.blender.org/)）

> Claude桌面版（部分地区有限制访问，需要挂全局代理）（[Claude](https://Claude.ai/download)）或者 Cursor 编辑器（[Cursor](https://www.cursor.com/cn)）

> Python 3.10 或更高版本（[Python](https://www.python.org/downloads/)）

> uv 包管理器（[uv安装](https://docs.astral.sh/uv/getting-started/installation/?spm=5176.28197581.d_mcp.5.11e95a9eH3z9te)）
>
> 如果你使用的是 Mac，请将 uv 安装为
>```js
>brew install uv
>```
>如果你使用的是 Windows 
>```js
>powershell -c "irm https://astral.sh/uv/install.ps1 | iex" 
>```
>配置PATH环境变量（这一命令在我的window上略有不同，无妨，命令行会给出提示）
>
>```js
>set Path=C:\Users\nntra\.local\bin;%Path%
>```

#### 配置软件


##### 配置Claude(当然你也可以选择使用Cursor)

* 转到 Claude > setting > Developer > Edit Config > Claude_desktop_config.json 修改成以下内容：

```js
{
    "mcpServers": {
        "blender": {
            "command": "uvx",
            "args": [
                "blender-mcp"
            ]
        }
    }
}
```

* 重新启动Claude

* 等待一下，应该有个更新的过程，可以看到搜索框下面有一个小锤子图标即可

![Claude配置成功](https://limengtupian.oss-cn-beijing.aliyuncs.com/%E5%8D%9A%E5%AE%A2BLOG%E4%B8%93%E7%94%A8%E5%9B%BE%E5%BA%93/Claude.png)

##### 配置Cursor(当然你也可以选择使用Claude)

* 转到File > Preferences > Cursor Setting > MCP > Add new global MCP server

* 填写如下配置

```js
{
  "mcpServers": {
      "blender": {
          "command": "cmd",
          "args": [
              "/c",
              "uvx",
              "blender-mcp"
          ]
      }
  }
}
```

保存配置后，生成有blender配置项即可

![MCP配置](https://limengtupian.oss-cn-beijing.aliyuncs.com/%E5%8D%9A%E5%AE%A2BLOG%E4%B8%93%E7%94%A8%E5%9B%BE%E5%BA%93/cursor.png)


* 必要时，重新启动下Cursor

* Ctrl + L，打开chat窗口，即可对话

##### 配置Blender

* 下载addon.py配置文件（[blender-mcp](https://github.com/ahujasid/blender-mcp/blob/main/addon.py)）

* 打开 Blender

* 前往edit > Preferences > add-ons > install from disk

![Preferences配置](https://limengtupian.oss-cn-beijing.aliyuncs.com/%E5%8D%9A%E5%AE%A2BLOG%E4%B8%93%E7%94%A8%E5%9B%BE%E5%BA%93/preferences.png)

* 单击“install from disk”并选择addon.py文件

* 安装完成后，应该是已经默认勾选了MCP

![勾选了MCP](https://limengtupian.oss-cn-beijing.aliyuncs.com/%E5%8D%9A%E5%AE%A2BLOG%E4%B8%93%E7%94%A8%E5%9B%BE%E5%BA%93/start.png)

* 回到Blender主界面，右边有个小箭头，打开即可看到MCP工具栏

![MCP工具栏](https://limengtupian.oss-cn-beijing.aliyuncs.com/%E5%8D%9A%E5%AE%A2BLOG%E4%B8%93%E7%94%A8%E5%9B%BE%E5%BA%93/arrow.png)

* 开启MCP服务

![开启MCP服务](https://limengtupian.oss-cn-beijing.aliyuncs.com/%E5%8D%9A%E5%AE%A2BLOG%E4%B8%93%E7%94%A8%E5%9B%BE%E5%BA%93/startBlender.png)


* 当你需要使用ai生成3d模型时，需要勾选Hyper3D服务；需要使用素材时，需要勾选Poly Haven

![开启MCP服务](https://limengtupian.oss-cn-beijing.aliyuncs.com/%E5%8D%9A%E5%AE%A2BLOG%E4%B8%93%E7%94%A8%E5%9B%BE%E5%BA%93/sethyper3d.png)


### 使用

#### 回到Claude界面，输入以下文字：

> create a sphere for me in the center of the scene in Blender

等待Claude执行完成，即可看到Blender在场景中心位置生成了一个球体

![生成了一个球体](https://limengtupian.oss-cn-beijing.aliyuncs.com/%E5%8D%9A%E5%AE%A2BLOG%E4%B8%93%E7%94%A8%E5%9B%BE%E5%BA%93/create.png)

#### 或者使用Cursor

进入Cursor界面，Ctrl + L 打开chat对话框，输入以下文字：

> create a sphere for me in the center of the scene in Blender

需要手动点击，执行tool按钮，等待Cursor执行完成，即可看到Blender在场景中心位置生成了一个球体

![chat对话](https://limengtupian.oss-cn-beijing.aliyuncs.com/%E5%8D%9A%E5%AE%A2BLOG%E4%B8%93%E7%94%A8%E5%9B%BE%E5%BA%93/cursor_chat.png)

### 探索（待验证）

根据[GitHub](https://github.com/ahujasid/blender-mcp)上的文档，blender-mcp目前提供了如下特性：

* 双向通信：通过基于 socket-based 服务器连接 Claude AI 和 Blender
* 物体操作：创建、修改和删除 Blender 中的 3D 对象
* 材质控制：应用和修改材质与颜色
* 场景检查：获取当前 Blender 场景的详细信息
* 代码执行：直接从 Claude 在 Blender 中运行 Python 代码

那么我们可以尝试做以下的探索：

#### 生成简单几何模型

#### 给几何模型添加材质、颜色、贴图

#### 生成常见的简单模型

#### 生成常见的复杂模型

#### 通过图片生成模型

 

> 目前没有看到本质上的提升。

> 图生模型还是使用的Hyper3D AI生成模型，然后加载到场景中，加载的模型依然无法单独对模型的局部进行修改，也就是说，我们拿到的依旧不是模型的工程文件，而是导出的一整个模型文件。

![模型文件](https://limengtupian.oss-cn-beijing.aliyuncs.com/%E5%8D%9A%E5%AE%A2BLOG%E4%B8%93%E7%94%A8%E5%9B%BE%E5%BA%93/buddha/file.png)


-----------------------TODO：测试用--------------

![原始图片](https://limengtupian.oss-cn-beijing.aliyuncs.com/%E5%8D%9A%E5%AE%A2BLOG%E4%B8%93%E7%94%A8%E5%9B%BE%E5%BA%93/buddha/buddha.png)

![buddhahead1](https://limengtupian.oss-cn-beijing.aliyuncs.com/%E5%8D%9A%E5%AE%A2BLOG%E4%B8%93%E7%94%A8%E5%9B%BE%E5%BA%93/buddha/buddhahead1.png)

![buddhahead2](https://limengtupian.oss-cn-beijing.aliyuncs.com/%E5%8D%9A%E5%AE%A2BLOG%E4%B8%93%E7%94%A8%E5%9B%BE%E5%BA%93/buddha/buddhahead2.png)

![buddhahead3](https://limengtupian.oss-cn-beijing.aliyuncs.com/%E5%8D%9A%E5%AE%A2BLOG%E4%B8%93%E7%94%A8%E5%9B%BE%E5%BA%93/buddha/buddhahead3.png)

后脑勺多了诡异的一部分，需要重新设计下提示词

**** 

![正面效果](https://limengtupian.oss-cn-beijing.aliyuncs.com/%E5%8D%9A%E5%AE%A2BLOG%E4%B8%93%E7%94%A8%E5%9B%BE%E5%BA%93/buddha/fianl_1.png)


![侧面效果](https://limengtupian.oss-cn-beijing.aliyuncs.com/%E5%8D%9A%E5%AE%A2BLOG%E4%B8%93%E7%94%A8%E5%9B%BE%E5%BA%93/buddha/final_2.png)

> **这次模型完成度较高**

但是模型依旧跟图片差距较大(跟使用Hyper3D的测试key有关?),后续更新

#### 加载模型并修改模型

#### 修改部分材质

#### 修改部分贴图

#### 设计灯光

#### 设计shader

#### 设计运镜

### 结论（待续）


### 一些MCP上有意思的点

#### 关于MCP的安全性质疑

一开始我无法理解MCP会泄露使用者敏感信息或者放大提示注入攻击的可能性，我会想所有的操作不都是“使用者”自身设计好的么？直到我生成模型时做了以下这种操作，才明白MCP理论上可以将电脑上所有数据资源都泄露出去：

![代码读取本地文件](https://limengtupian.oss-cn-beijing.aliyuncs.com/%E5%8D%9A%E5%AE%A2BLOG%E4%B8%93%E7%94%A8%E5%9B%BE%E5%BA%93/buddha/safe.png)


### 暂停MCP的学习（现阶段MCP+Blender所提供的功能或者叫API太少了，仅能完成某些固定功能，无法执行如：1、绘制曲面；2、将模型某些部分做成单独的mesh；3、将模型的某些部分材质进行替换等功能，那么，我们可以等待后续更新）
