---
title: 使用 Cylheim
lang: zh-Hans
finish: true
author: GattoKai(视频), Teages(后续文案)
next: ../cytoid/packing.md
---
# 使用 Cylheim

<BilibiliPlayer
  aid="798679631"
  bvid="BV1Ly4y1m7Np"
  cid="283509706"
/>

# 完成制谱后

完成谱面后, 您可能需要亲自游玩来检查是否存在问题

## 检查文件

要继续, 请先打开谱面工程的存储位置

### 了解文件目录

您可能会看到如下的目录结构
```
.
├─ CylheimProject     // Cylheim 的缓存目录
│  ├─ AutoSave        // Cylheim 的自动保存目录
│  ├─ Backups         // Cylheim 的自动备份目录
│  └─ MediaTemps      // Cylheim 的音频缓存目录
├─ Chaos.json         // 您的谱面文件, 可能为其他文件名
├─ Hard.json          // 您的谱面文件, 可能为其他文件名
├─ Easy.json          // 您的谱面文件, 可能为其他文件名
├─ Glitch.json        // 您的谱面文件, 可能为其他文件名
├─ ******.json        // 您自定义难度的谱面文件, 可能为其他文件名
├─ Music.wav          // 您的音频文件, 可能为其他文件名, 也可能为其他格式
├─ Background.PNG     // 您的背景图片, Cylheim只支持PNG格式, 可能为其他文件名
└─ CylheimProject.cyl // Cylheim 工程文件, 可能为其他文件名
```

::: tip
为了叙述简便, 我们这里以单张谱面(即单难度)为例子. 
:::

假设有这样的文件结构
```
.
├─ CylheimProject     // Cylheim 的缓存目录(无需使用, 忽略)
├─ CylheimProject.cyl // Cylheim 工程文件
├─ Chaos.json         // 谱面文件   <- 需要
├─ Music.wav          // 音频文件   <- 需要
└─ Background.PNG     // 背景图片   <- 需要
```

::: warning
如果您的音频文件体积很大(`> 8 mb`), 或者音频格式不为 `mp3` 或 `ogg`, 那么您需要将音频文件转换为 `ogg`, 才能进行下一步
:::

::: tip
如果您没有使用过下面的参数(或者没有听说过他们), 则可以点击下一页, 开始使用Cytoid测试谱面
1. `PositionFunction`(即页面管理中的**参数**)
2. 下落式note 
3. 自定义特殊Event
:::

如果您没有使用上述功能, 请将**谱面文件**, **音频文件**和**背景文件**复制一份, 进入[下一步: 在 Cytoid 中测试谱面](../cytoid/packing.md)

如果您使用了上述功能, 请继续阅读

### 使用转换器

Cytoid 并不能直接支持 Cylheim 的这些功能

::: tip
1. `PositionFunction`(即页面管理中的**参数**)
2. 下落式note 
3. 自定义特殊Event
:::

但是, 可以将它们转换为 StoryBoard, 让 Cytoid 支持这些功能

::: tip
使用转换器不需要学习任何 StoryBoard 知识
:::

#### 下载转换器

在 [Teages/C2v3-to-StoryBoard](https://github.com/Teages/C2v3-to-StoryBoard/releases)下载最新版并解压

#### 使用转换器

解压转换器, 您可以看到如下目录结构
```
.
├─ ALPHA WARNING.txt  // 测试版警告文件
├─ DownClick.psd      // 下落式 Click 的图片PSD
├─ DownDrag.psd       // 下落式 Drag 的图片PSD
├─ README.txt         // 自述文件, 内含程序使用方法
├─ template.json      // 转换器依赖文件
├─ Settings.json      // 转换器设置
├─ DownClick.png      // 下落式 Click 图片
├─ DownDrag.png       // 下落式 Drag 图片
└─ c22sb.exe          // 转换器主程序
```

将**谱面文件**拖拽到主程序上, 转换器会自动转换

::: tip
您也可以使用以下方法转换
1. 将谱面文件重命名为Chart.json, 并且将它放置到程序的同级目录下, 直接双击主程序运行
2. 用命令行, 在程序所在的目录输入 `./c22sb.exe 你的C2V3谱面文件位置`
:::

以下是转换器转换完成的输出示例
```
Version: 3
Support Cytoid Version: 2.0.2
Author Teages
Loading template.json from: template.json
If the program stoped, please check your json file is no commnt in it
Succcessfully loaded template.json from: template.json
Succcessfully loaded chart from: D:\Cytoid\sana.flower\Chaos.json
Succcessfully loaded settings from: Settings.json
Working... Please wait...
--Finishing--
Storyboarding...
StoryBoard.Text Finished
StoryBoard.controllers Scanner Color Part.1 Finished
StoryBoard.controllers Part.2 PosFun Finished
StoryBoard.note_controllers Finished
StoryBoard.sprites Finished
StoryBoard.controllers Part.3 Scanner Hide/Show Finished
StoryBoard.controllers Part.4 UI Finished
Chart Cleaning...
Will output files to the folder: out
Succcessfully output StoryBoard file to: ./out/Storyboard.json
Succcessfully output Chart file to: ./out/Chart.json
Finished. Press enter to contiune...
```

下面是转换完成后目录结构
```
.
├─ ALPHA WARNING.txt  // 测试版警告文件
├─ DownClick.psd      // 下落式 Click 的图片PSD
├─ DownDrag.psd       // 下落式 Drag 的图片PSD
├─ README.txt         // 自述文件, 内含程序使用方法
├─ template.json      // 转换器依赖文件
├─ Settings.json      // 转换器设置
├─ DownClick.png      // 下落式 Click 图片
├─ DownDrag.png       // 下落式 Drag 图片
├─ c22sb.exe          // 转换器主程序
└─ out                // 转换器输出目录
   ├─ Storyboard.json // 转换器输出的 StoryBoard 文件  <- 需要
   └─ Chart.json      // 转换器输出的谱面文件          <- 需要
```

至此, 转换结束, 请请将**转换器输出的谱面文件**, **转换器输出的 StoryBoard 文件**, **音频文件**和**背景文件**复制一份, 进入[下一步: 在 Cytoid 中测试谱面](../cytoid/packing.md)