# StoryBoard 完整规格

**版本: 2.0.2**

!> 作者: TigerHix, 翻译&重排版: Teages_L

本说明详细讲解了StoryBoard的相关规格; 您可以以此为参考, 但我们强烈建议您在开始制作StoryBoard前**阅读整个文档**, 以了解StoryBoard的功能和局限性.

***在下方下载Cytoid Player!***

[CytoidPlayer 2.0.2.zip](https://drive.google.com/file/d/1skBP8u_LTDloTxXr3cVl8YdJzmgMkywi/view?usp=drivesdk)

## 🌟 坐标系

- 在我们开始制作 StoryBoard 前, 让我们先了解游戏中的不同画布和坐标系:
    - 在**StoryBoard** 中, **sprites**, **texts** 和 **stage**会使用一个 800 (宽) * 600 (高) 的直角坐标系. 如图, 这个坐标系的中心是(0, 0), 右上角是 (400, 300), 左下角是 (-400, -300).
        - 这个坐标系的 X 轴和 Y 轴 被称为 `stageX` 和 `stageY`.
    - **notes** 的坐标系和谱面相同. 如图, X/Y的坐标范围应为 [0, 1], 其中, (0, 0) 是该坐标系的左下角.
        - 这个坐标系的 X 轴和 Y 轴 被称为 `noteX` 和 `noteY`.

    ![_source_StoryBoard.md/dia_(3).png](_source_StoryBoard.md/dia_(3).png)

    - 游戏内的 **camera**(相机) 有他自己基于 [orthographic size(正交尺寸)](https://docs.unity3d.com/ScriptReference/Camera-orthographicSize.html) 的坐标系. 默认情况下, 相机位于 (0, 0).
        - 这个坐标系的 X 轴和 Y 轴 被称为 `cameraX` 和 `cameraY`.

        ![_source_StoryBoard.md/Copy_of_dia.png](_source_StoryBoard.md/Copy_of_dia.png)

        ![_source_StoryBoard.md/Copy_of_dia_(1).png](_source_StoryBoard.md/Copy_of_dia_(1).png)

    - 最后, 游戏中还有一个 **Z 轴**, 用于处理3D坐标中的深度. 您无需关注这个坐标轴, 除非您在 `scene controller` 中,将 **perspective** 选项调至 `true`.
        
        - 请注意, 相机默认朝 Z 轴的正方向观察, 它的默认位置为 Z = -10. 设置一个像 Z = -8 的值会使相机靠近 notes, 设置一个像 Z = -15 的值会使相机远离 notes.
- 你可以像这样 **进行坐标系之间的转换**: `[coordinate system(原坐标系)]:[value(值)]`.
    - 例如, 您创建了一个 sprite, 想让它显示在note区域的最左侧底部, 正好位于在note 坐标系中的(0, 0). 但是, 这里需要的 `x` 和 `y` 是基于 stageX 和 stageY 的坐标系的, 这时就需要转换坐标系.
        - 在 Cytoid 2.0.0 引入坐标系转换之前, 通常计算屏幕宽高比来判断note区域的对应坐标. 这就要求 StoryBoard制作者要面向不同的屏幕比例创建不同的谱面 (就像 [这个谱](https://cytoid.io/levels/tigertiger.deadsoul)), 也没有考虑到玩家可以修改游玩区域大小 (通过相应设置).
        - 从 Cytoid 2.0.0 开始, 我们可以使用坐标系转换来表示实际坐标, 如下所示:

            ```json
            {
              ...
              Sprite 定义
              ...
              "x": "noteX:0",
              "y": "noteY:0"
            }
            ```

            StoryBoard在游戏中加载以后, Cytoid 会自动计算实际的 `x` 和 `y` 的值--无需探究无聊的技术细节, 你只需要知道 sprite 会显示在note坐标系中的 (0, 0)! (如你所愿!)

    - 一个更实际的问题: 如何将sprite拉伸为正方形, 并且使其顶部和底部与屏幕边界对齐?
        - 一个天真~~naive~~的尝试:

            ```json
            {
              ...
              Sprite 定义
              ...
              "preserve_aspect": false, // 允许 sprite 变形
              "width": 600,
              "height": 600
            }
            ```

            不幸的是, 这可能不会像想象中那样运行: 它不一定会渲染成一个正方形. 实际上, 只有屏幕比例为 4:3 的设备才会将其渲染为正方形. 回想一下,在**任何设备**上, stage 的坐标系大小均为 800 * 600, 因此 stageX 中的一个单位不一定等于 stageX 中的一个单位.

            - 简而言之, 当我们将一个 sprite 的 `width` 和 `height` 都设置为 600, 实际上 sprite 占据了屏幕宽度的 600/800 = 3/4, 屏幕高度的600/600 = 全部. 因此, 要使其成为正方形, 屏幕宽度的3/4必须等于屏幕高度, 这样就能强制实现 4:3 的屏幕比例. 
        - 为了使正方形与屏幕的上下边界对齐, `height` 的值必须为 `600`; 问题是我们该如何给 `width` 赋值. 因此, 我们 **只需要将 `stageX` 转换为实际长度相同的 `stageY`**. 怎么做? 只需像下面这样使用坐标转换...

            ```json
            {
              ...
              Sprite 定义
              ...
              "preserve_aspect": false,
              "width": "stageY:600",
              "height": 600
            }
            ```

            就是这样! 我们委托 Cytoid 计算 `stageY:600` 的实际长度, 并将这个实际长度转换为 `stageX` 的值. 无论实际长度是多少, sprite 总是被渲染成一个正方形.

    - 最后, 您不太可能需要转换深度(Z 轴)坐标, 因为这没有数学意义. 但是您随时可以尝试! 😇

## 基本对象

- **texts**: 文本对象组.
- **sprites**: sprite 对象组.
- 🌟 **lines**: line 对象组.
- 🌟 **videos**: 视频对象组. **试验性!**
- **controllers**: 场景控制器对象组.
    - 通常只需要一个控制器来控制整个场景, 但是如果您需要定义动画状态重叠的效果, 则多个控制器会派上用场. 对于初学者, 建议只使用一个控制器. 
- 🌟 **note_controllers**: note控制器对象组.
- **templates**: **模板**对象组.


## 对象状态

> 译者: 编写StoryBoard, 实际上就是创建一个个对象, 让他们各司所职, 完成谱面演出. 为了控制各个对象的行为, 系统全面且详细的了解Cytoid StoryBoard中的对象, 是编写StoryBoard前必不可少的. 

### 基本状态 (所有对象的默认状态)

- 🌟 在故事板中, 我们一般把对象划分为两类: 出现在场景中的**sprites** (例如文本, 素材, 线条和视频), 和无场景内实体的**controllers** (场景控制器和音符控制器)
- 状态控制着对象在不同时间的行为。撰写状态时, 不需要在物体实例化的每一帧都添加状态, 只需要在关键帧写状态即可。
- 假设需要做一个在第0秒到第3秒从场景底部飞到屏幕中央的标题文字。逻辑上讲, 在这个区间里面的标题场景对象有无穷多的状态, 因为每个瞬间的位置都不一样。但是, 关键状态只有两个: 1. time为0时标题场景对象在底部; 2. time为3时标题场景对象在中央。故事板会自动根据你所填写的关键状态进行补间动画。
- 每个被声明的对象都至少有一个状态, 即初始状态。你可以在`states`集合中自定义额外的状态。

- **id**: 对象的唯一识别码(字符串). 如果没有被手动定义, 则将会被自动分配随机的数字与字母混合的ID. 支持使用`$note`的占位符 (见音符控制器部分).
- 🌟 **target_id**: *只可使用于场景对象。* 当 `target_id` 被设置为任何对象的id时, 这个对象不会拥有自己的实体但会控制`target_id`所指向的目标实体。支持使用`$note`的占位符 (见音符控制器部分).
    - 这有助于您 **创建状态重叠的动画**. 例如, 如果您想要以弧线为轨迹移动sprite, 使用单个场景对象几乎不可能做到这一点. 但现在, 您只需要以两个不同的缓动状态叠加, 首先以一种缓动状态 (例如`linear`) 让精灵沿着 X 方向运动, 并且让他沿着 Y 轴以另一种方法缓动 (例如`easeOutQuad`). 如下所示:

        ```json
        {
        	"id": "sprite",
        	"path": "dot.png",
        	"time": 0,
        	"x": 0,
        	"easing": "linear",
        	"states": [
        		{
        			"time": 5,
        			"x": 200
        		}
        	]
        },
        {
        	"target_id": "sprite",
        	"time": 0,
        	"y": 0,
        	"easing": "easeOutQuad",
        	"states": [
        		{
        			"time": 5,
        			"y": 200,
        		}
        	]
        }
        ```

    - 还有另外一种用法: 简化复杂状态. 假如您要将一个text的状态进行如下修改: `t=0` 到 `t=5` 执行位移, 并在 `t=2.5` 到 `t=7.5` 修改透明度, 以前您需要手动计算四个关键帧的状态. 
    - 请注意, target_id 所指对象必须与其属于同一种对象. 例如, 您不能将 sprite 的 target_id 设置为 text 的 id.
- 🌟 **parent_id**: *仅适用于 texts和 sprites.* 当 `parent_id` 设置为某个其他对象的 ID 时, 前者成为后者的子对象, 子对象的坐标系将会以父对象为原点(参考系), 即子对象将会跟随父对象进行运动. 支持使用 `$note` 占位符 (详情请参阅 note 控制器部分).
    - 例如, 您可以设置 sprite A 的 parent_id 为 sprite B 的id, 这样就能让 sprite A 跟随 sprite B 移动. sprite A 的任何运动都以 sprite B 的坐标为原点.
    - 另一个有趣的实验是将 sprite 的 parent_id 设置为一个 note controller 的 id. 由于 note controller 的位置为 note 的实际位置, 因此这个 sprite 会跟随 note 移动.
        - *但是, 您还不能用它创建自定义 note 皮肤.* 更多详情请见 "note controller" 部分.
- **time**: 该对象的基准时间, 以秒为单位. 要注意的是, 这个时间可能不等于实际时间, 请阅读下文查看计算对象确切时间的方法.
    - **如果一个场景对象 *(例如 text 和 sprite)* 没有设置 `time`, 这个场景对象将不会被启用, 除非这个场景对象被 trigger 启用.** *~~可是trigger被删了~~*
    - 如果值为以下格式之一, 则将自动进行替换. 请注意引号是必需的. `<Note ID>` 支持以 `$note` 在 note_controller中表示当前note (详情请见 note controller 部分).
        - `"start:<Note ID>"`: 选中 note 的时刻(如果是Hold/Long Hold, 则为其开始时刻)
        - `"end:<Note ID>"`: 选中 note 的结束时刻(用于Hold/Long Hold, 如果用于其他note效果同start)
        - `"intro:<Note ID>"`: 指定 note 出现时刻 (即 note 开始淡入的时刻)
        - `"start:<Note ID>:<Offset>"`: 选中 note 的时刻 + `<Offset>` (以秒为单位, 可以为负数)
        - `"end:<Note ID>:<Offset>"`: 选中 note 的结束时刻 + `<Offset>` (以秒为单位, 可以为负数)
        - `"intro:<Note ID>:<Offset>"`: 指定 note 开始淡入的时刻 + `<Offset>` (以秒为单位, 可以为负数)
        - 🌟 `"at:<Note ID>:<Percentage>"`: *仅用于Hold/Long Hold.* 选中note的开始时刻 + (选中 note 的结束时刻 - 选中note的开始时刻) * `<Percentage>`*(用于选取 hold 在某个百分比下的状态)*
            - 当 `<Percentage>` 为 `0`, 等同于 `start`
            - 当 `<Percentage>` 为 `1`, 等同于 `end`
    - 可以用列表来创建多个相同的状态. 例如:

        ```json
        "states": [
        	{
        		"template": "pulse",
        		"time": ["start:57", "start:123", "start:153"]
        	}
        ]
        ```

        会自动编译成

        ```json
        "states": [
        	{
        		"template": "pulse",
        		"time": "start:57"
        	},
        	{
        		"template": "pulse",
        		"time": "start:123"
        	},
        	{
        		"template": "pulse",
        		"time": "start:153"
        	}
        ]
        ```

- **relative_time**: 相对于父状态的相对时间. 例如,

    ```json
    {
    	"time": 5,
    	"states": [
    		{
    			// State A
    			"relative_time": 2.5
    		}
    	]
    }
    ```

    状态 A 的时间为 `5` + `2.5` = `7.5`.

- **add_time**: 到最后一个状态的相对时间. 例如,

    ```json
    {
    	"time": 5,
    	"states": [
    		{
    			"relative_time": 2.5
    		},
    		{
    			// State B
    			"add_time": 3
    		}
    	]
    }
    ```

    状态 B 的时间为 (`5` + `2.5`) + `3` = `10.5`.

- 计算对象准确时间的运算顺序:
    - 如果定义了 `add_time`: 最后定义的姿态的时间 + `add_time`
    - 如果定义了 `relative_time` ,同时也定义了 `time`: `time` + `relative_time`
    - 如果定义了 `relative_time` ,同时存在一个父状态: 父状态的时间 + `relative_time`
    - 如果定义了 `relative_time`, 但是没有父状态: 当前游戏时间 + `relative_time` **(注意: 仅用于 trigger)**
    - 如果 `add_time` 和 `relative_time` 都没有定义: `time`
- **easing**: 在状态的动画中使用缓动调整加速度. 访问 [https://easings.net/](https://easings.net/) 了解更多. 默认为` `linear` (线性).
- **destroy**: 如果设置为 `true`, **当对象完全过渡到本状态时**, 将会销毁这个对象. 为了提高性能, ***强烈建议*** 您销毁不再需要使用的对象.
    - 下面是一个触发器的使用示例, 当点击id为4的note时,将会生成并显示 `Hello world!` 文本, 并淡出消失*(不透明度为0)*, 最后文本被销毁.

        ```json
        ...	
        	"texts": [
        		{
        			"id": "hello_world",
        			"text": "Hello world!",
        			"size": 80,
        			"opacity": 1,
        			"states": [
        				{
        					"opacity": 0,
        					"relative_time": 0.5,
        					"destroy": true
        				}
        			]
        		}
        	],
        	"triggers": [
        		{
        			"type": "noteClear",
        			"notes": [4],
        			"spawn": ["hello_world"]
        		}
        	],
        ...
        ```

- **states**: 存储对象额外状态的列表.
    - 您可以在列表内再次定义状态, 该状态将被附加到父对象. 例如:

        ```json
        {
            ...
        	定义对象(省略)
        	...

        	"states": [ // 父对象定义的状态
        		{
            	"template": "stateA",
        		},
        		{
        			"states": [ // 内部状态中定义的状态
        				{
        					"template": "stateB"
        				},
        				{
        					"template": "stateC"
        				}
        			]
        		},
        		{
        			"template": "stateD"
        		}
        	]
        }
        ```

        等同于

        ```json
        {
            ...
        	定义对象
        	...

        	"states": [
        		{
        			"template": "stateA",
        		},
        		{
        			"template": "stateB"
        		},
        		{
        			"template": "stateC"
        		},
        		{
        			"template": "stateD"
        		}
        	]
        }
        ```

        这对一次使用多个状态很有用. 请参阅后文中的 `pulse` 模板.

### 场景对象状态

> 译者: 场景对象, 有text, sprite(image sprite), video 和 line. 实际上, 他们都可以看做是sprite的变体, 都是向游戏中插入内容, 只不过对于插入内容的不同(文本, 图像, 视频, 矢量线), 要使用不同的场景对象. 这些不同的场景对象有不同的要求和默认行为, 请读者认真阅读, 注意其中的差异.

#### 基本场景对象状态 (适用于 text, sprite, video 和 line)

- **x**: 对象的 X 坐标. 默认为` `0`. 默认坐标系为 stageX.
- **y**: 对象的 Y 坐标. 默认为` `0`. 默认坐标系为 stageY.
- 🌟 **z**: 对象的 Z 坐标. 默认为` `0`. 默认坐标系为系统深度坐标.
    - 仅在 perspective camera(透视相机) 启用时有效.
- **rot_x**: 对象在 X 轴上的旋转度数. 默认为` `0`.
- **rot_y**: 对象在 Y 轴上的旋转度数. 默认为` `0`.
- **rot_z**: 对象在 Z 轴上的旋转度数. 默认为` `0`.
- **scale_x**: 对象在 X 轴上的比例. 默认为` `1`.
- **scale_y**: 对象在 Y 轴上的比例. 默认为` `1`.
- **scale**: 对象在 X 和 Y 轴上的比例. 一旦启用, 将覆盖 `scale_x` 和 `scale_y` 的值.
- **pivot_x**: 对象旋转/缩放时, 在 X 轴的中心. `0` 为最左端, `1` 为最右段. 默认为` `0.5` (中心).
- **pivot_y**: 对象旋转/缩放时, 在 Y 轴的中心. `0` 为最底端, `1` 为最顶段. 默认为` `0.5` (中心).
- **opacity**: 对象的不透明度. `0` 为完全透明(完全不可见), `1` 为完全不透明. 默认为` `0`.
    - 这意味着 **所有的项目默认都是不可见的**, 除非你将 `opacity` 的值调整到一个比 `0` 大的值.
- **width**: 项目的宽度. 默认坐标系为 stageX.
- **height**: 项目的高度. 默认坐标系为 stageY.
    - 🌟 从 Cytoid 2.0.0 开始, **文本会根据其内容自适应大小** (`text`). 因此为 text 设置参数 `width` 或 `height` 什么都不会发生.
    - 对于 sprites, 默认大小为 `200 (宽) * 200 (高)`.
- **layer:** 对象的图层位置. 默认为` `0`.
    - `0`: 默认图层. 在背景之上, 其他所有游戏元素之下.
    - `1`: 在note之下, UI 和 背景 之上.
    - `2`: 在所有游戏元素之上.
- **order**: 对象在 ***同一图层*** 的顺序. 例如, 一个 `order` 设置为 `3` 的对象将会显示在 `order` 设置为 `2` 的对象之上 (如果这两个对象的 `layer`相同). 如果两个对象 `order` 和 `layer` 都相同, 则后定义的将渲染在之前渲染的元素之上.
    - 🌟 永远不要忘记为每个 sprite 设置正确的 `order`! 否则, 即使在 CytoidPlayer 正确显示, 也有可能会在实际游戏中出错. 如果你不确定它的值, 可以设置为 `0`.
- **fill_width**: 如果为 `true`, 则会忽略 `width` 和 `height` 的值, 并且该对象的宽度将被设置为屏幕宽度, 高度设置为 `10000`.
    - 这有助于您制作一个充满屏幕的画面 (如替换背景图像).

#### Text 对象状态

- **text**: 要显示的文本. 请注意, text中的文字支持 [富文本](https://docs.unity3d.com/Manual/StyledText.html), 但是只支持 **bold(加粗)**, *italic(倾斜)*, <font size=5>inline size(字体大小)</font>, <font color=red>inline color(字体颜色)</font>.
- **color**: 字体颜色, 使用十六进制颜色 (例如 "#fff" 或 "#4568dc"). 默认值为 `"#fff"` (白色).
- **size**: 字体大小, 默认值为 `20`.
    - 要设置字体大小改变的动画, 请使用 `scale` 设置这种动画. 而不是使用 `size` 设置, `size` 只能为整数并且将消耗大量运行资源(可能造成卡顿).
- **align**: 文本对齐. 支持 `upperLeft`, `upperCenter`, `upperRight`, `middleLeft`, `middleCenter`, `middleRight`, `lowerLeft`, `lowerCenter`, `lowerRight`. 默认为` `middleCenter`.
- 🌟 **letter_spacing**: 行内字母间距. 默认为` `0`.
- 🌟 **font_weight**: 字体粗细(字重). 支持 `regular`, `extraLight`, `bold`, `extraBold`. 默认为` `regular`.

#### Sprite 对象状态

- **path**: 图像文件的相对路径. 例如, 如果路径为 `"sprite.png"`, 这个文件应该跟 `StoryBoard.json` 在同一级目录下, 并且被命名为 `sprite.png`. 只支持 `.jpg` 和 `.png`. **受性能限制, 请保证图片大小不超过 1920*1080, 如果您不需要图片的透明像素, 请将 `PNG` 转换为 `JPG` 格式.**
- **preserve_aspect**: 如果为 `true`, 无论怎么改变图像大小都不影响图片比例. 默认为` `true`.
- **color**: sprite 对象的颜色, 使用十六进制颜色. 默认为`#fff` (白色), `#fff` (白色) 等同于无色.

#### 🌟 Video 对象状态 *实验性!*

- **path**: 视频文件的目录. **由于不同的设备支持的视频格式和视频解码性能有所不同, 强烈建议使用 `H.264` 编码的 `.mp4` 文件, 最好为 720p 以下画质.**
    - Video 在游戏中 **不会暂停**(即使是在暂停界面). 这是已知问题.
- **color**: video 对象的颜色, 使用十六进制颜色. 默认为`#fff` (白色), `#fff` (白色) 等同于无色.

#### 🌟 Line 对象状态

- "Line" 其实不太能准确描述这个对象. line 对象能轻松地制作出各种由线段组成的形状. 你可以用它模仿扫描线, 或者绘制任何您能想到的, 由线段组成的图形, 例如三角形.
- 尽管 line 继承了场景的状态, 但是支持*非常*有限, 只有这些能够使用: `opacity`, `layer` 和 `order`.
- **pos**: 线的端点.
    - 每一个端点都是一个有着如下属性的 JSON 对象:
        - **x**: 顶点的 X 坐标. 默认坐标系为 `noteX`.
        - **y**: 顶点的 Y 坐标. 默认坐标系为 `noteY`.
        - **z**: 顶点的 Z 坐标. 默认坐标系为 `noteZ`.
- **width**: 线段的宽度. 默认为`0.05`.
- **color**: 线段的颜色, 使用十六进制颜色. 默认为`"#fff"` (白色).
- 使用两个 line 对象建立三角形的示例:

    ```json
    {
      "time": 0,
      "opacity": 1,
      "pos": [
        {
          "x": 0,
          "y": 0
        },
        {
          "x": 1,
          "y": 0
        },
        {
          "x": 0,
          "y": 1
        },
        {
          "x": 0,
          "y": 0
        }
      ],
      "states": [
        {
          "time": 20,
          "pos": [
            {
              "x": 0,
              "y": 1
            },
            {
              "x": 1,
              "y": 0
            },
            {
              "x": 1,
              "y": 1
            },
            {
              "x": 0,
              "y": 1
            }
          ]
        }
      ]
    }
    ```

    不如自己尝试一下, 看看为什么三角形会有这样的动画! 😉

### Scene controller(场景控制器) 对象状态

- **StoryBoard_opacity**:  所有StoryBoard对象的 `opacity`. 默认为`1`.
- **ui_opacity**: 游戏 UI 的不透明度 (得分, 歌曲信息, 暂停键...). 默认为`1`.
- **scanline_opacity**: 扫描线的不透明度. 默认为`1`.
- **background_dim**: 背景遮罩的不透明度. 默认为`0.85`.
- **note_opacity_multiplier**: 所有note的 `opacity` 的倍率. 默认为`1`.
- **scanline_color**: 覆盖扫描线颜色. 默认 (或者被设置为 `null`时), 一般情况为 `#ffffff`, 发生扫描线加速事件时为 `#d25669`, 发生扫描线减速事件时为 `#a0c8bf`. (加减速事件由谱面文件中`event_list`决定)
- **note_ring_color**: 覆盖 note 的外圈颜色. 默认 (或者设置为 `null`), 会使用用户设置.
- 🌟 **note_fill_colors**: 覆盖 **不同种类 note** 的颜色.
    - 格式: `[click 1, click 2, drag 1, drag 2, hold 1, hold 2, long hold 1, long hold 2, flick 1, flick 2, c-drag 1, c-drag 2]`
    - 下面的示例中, click 的颜色都被设置为 `#4568dc` flick 的颜色都被设置为 `#000000`, 其余使用用户设置:

        ```json
        ...
        "note_fill_colors": ["#4568dc", "#4568dc", 
        											null, null, 
        											null, null, 
        											null, null,
        											"#000000", "#000000",
        											null, null],
        ...
        ```

    - 注意: 如果没有设置任何颜色 (或者都设置为 `null`), 会使用用户设置的颜色.
- **override_scanline_pos**: 如果为 `true`, 则允许覆盖扫描线的Y坐标, 参见 `scanline_pos`. 默认为`false`.
- **scanline_pos**: 覆盖扫描线的y坐标. 默认情况下, 最小值为 `0`, 最大值为 `1`, 但允许越界. 默认坐标系为 `noteY`.(如果`override_scanline_pos`的值不为true, 则不生效)
- **perspective**: 如果为 `true`, 则使用perspective camera(透视相机, 用于渲染3D场景); 如果为 `false`, 则使用 orthographic camera (正交相机, 用于渲染2D场景). 默认为`true`.
- **size**: 仅在 `perspective` 为 `false` 时生效. 控制正交相机的视图大小. 值越大, 场景越小. 默认为`5`.
- **fov**: 仅在 `perspective` 为 `true` 时生效. 控制透视相机的视野 (基本与 `size` 效果相同, 但仅用于透视相机). 视野越大, 场景越小. 默认为`53.2`.
    - 提示: 要创造脉冲效果(pulsing effect), 请将此值从 `53.2` 提升至 `59.2` (或者任意比 `53.2` 大的值), 然后再降回 `53.2`.
    - `53.2` 是一个有趣的值, 在这个值下, 透视相机的 note 大小与正交相机的 note 大小相同.
- **x**: 相机的 X 坐标. 较大的值会使整个场景向左移动, 反之亦然. 值为 `1` 时等同于移动半个屏幕. 默认为`0`. 默认坐标系为 cameraX.
- **y**: 相机的 Y 坐标. 较大的值会使整个场景向下移动, 反之亦然. 值为 `1` 时等同于移动半个屏幕. 默认为`0`. 默认坐标系为 cameraY.
- 🌟 **z**: 相机的 Z 坐标. 较大的值会使相机靠近场景, 反之亦然. 默认为`-10`. 默认坐标系为系统深度.
- **rot_x**, **rot_y**, **rot_z**: 相机的旋转角度. 默认为`0`.
    
    - 提示: 如果沿着 x 轴或 y 轴选择, 可能无法看到部分场景; 您必须相应地调整相机的坐标. 修改了 `rot_x` 则移动 `y`; 修改了 `rot_y` 则移动 `x`.

- **chromatical**: 开启 chromatical(色度) 滤镜, `true` 或`false`. 默认为`false`.
    - 这个效果可以模仿真实摄像机在镜头无法将所有颜色融合到同一点时产生的效果. 产生的效果沿着图像明暗分隔边界出现"条纹".
    - **chromatical_fade**: 色度效果的透明度. 范围从 `0` 到 `1`.
    - **chromatical_intensity**: 色度效果的强度. 范围从 `0` 到 `1`.
    - **chromatical_speed**: 色度效果的速度. 范围从 `0` 到 `3`.

- **bloom**: 开启 bloom(泛光) 滤镜. 默认为`false`.
    - **bloom_intensity**: 范围从 `0` 到 `5`.

- **radial_blur**: 开启 blur(模糊) 滤镜, `true` 或 `false`. 默认为`false`.
    - **radial_blur_intensity**: 范围从 `-0.5` 到 `0.5`. 默认为`0.025`.

- **color_adjustment**: 开启 color adjustment 滤镜. 默认为`false`.
    - **brightness**: 范围从 `0` 到 `10`. 默认为`1`.
    - **saturation**: 范围从 `0` 到 `10`. 默认为`1`.
    - **contrast**: 范围从 `0` 到 `10`. 默认为`1`.

- **color_filter**: 开启 screen color filter 滤镜. 默认为`false`.
    - **color_filter_color**: screen filter 的颜色, 采用16进制颜色.

- **gray_scale**: 开启 gray scale 滤镜. 默认为`false`.
    - **gray_scale_intensity**: 范围从 `0` 到 `1`.

- **noise**: 开启 noise 滤镜. 默认为`false`.
    - **noise_intensity**: 范围从 `0` 到 `1`. 默认为`0.235`.

- **sepia**: 开启 sepia 滤镜. 默认为`false`.
    - **sepia_intensity**: 范围从 `0` 到 `1`.

- **dream**: 开启 dream 滤镜. 默认为`false`.
    - **dream_intensity**: 范围从 `0` 到 `1`.

- **fisheye**: 开启 fisheye 滤镜. 默认为`false`.
    - **fisheye_intensity**: 范围从 `0` 到 `1`. 默认为`0.5`.

- **shockwave**: 开启 the shockwave 滤镜. 默认为`false`.
    - **shockwave_speed**: 范围从 `0` 到 `10`.  默认为`1`.

- **focus**: 开启 the focus (manga focus lines) 滤镜. 默认为`false`.
    - **focus_size**: 范围从 `1` 到 `10`.  默认为`1`.
    - **focus_color**: 焦点线的颜色, 采用十六进制颜色.
    - **focus_speed**: 范围从 `0` 到 `30`. 默认为`5`.
    - **focus_intensity**: 范围从 `0` 到 `1`. 默认为`0.25`.

- **glitch**: 开启 glitch 滤镜. 默认为`false`.
    - **glitch_intensity**: 范围从 `0` 到 `1`.

- **arcade**: 开启 the focus (manga focus lines) 滤镜. 默认为`false`.
    - **arcade_intensity**: 范围从 `0` 到 `1`.  默认为`1`.
    - **arcade_interference_size**: 范围从 `0` 到 `10`. 默认为`1`.
    - **arcade_interference_speed**: 范围从 `0` 到 `10`. 默认为`0.5`.
    - **arcade_contrast**: 范围从 `0` 到 `10`. 默认为`1`.

- **tape**: 开启 the tape (screen flipping) 滤镜.

- 🌟 **在Cytoid 2.0.0 中被移除.** ~~**vignette**: boolean to toggle the vignette effect. 默认为`false`.~~
    - ~~**vignette_intensity**: the intensity of the vignette effect. 范围从 `0` 到 `1`.~~
    - ~~**vignette_color**: the color of the vignette effect , 采用16进制颜色.~~
    - ~~**vignette_start, vignette_end**: just play around with these values because no one knows what they exactly mean. 范围从 `0` 到 `1`.~~
- 🌟 **在Cytoid 2.0.0 中被移除.** ~~**chromatic**: boolean to toggle the chromatic aberration effect. 默认为`false`.~~
    - ~~**chromatic_intensity**: the intensity of the chromatic effect. Typically ranged `0` to `0.15`, although larger values can be set for distorting effects.~~
    - ~~**chromatic_start, chromatic_end**: just play around with these values because no one knows what they exactly mean. 范围从 `0` 到 `1`.~~

### 🌟 Note controller(Note 控制器) 对象状态

- note 控制器能将谱面中的单个或多个note动画化, 使其成为StoryBoard的一部分. 这是目前为止最强大的StoryBoard技术. **您可以使用 Note 控制器, 在 Cytoid 中实现任何需要的游戏玩法!**
- **note**: 需要控制的 note 的 ID, 由谱面文件定义(note_list列表中的单个对象的"id"的值).

- **override_x**: 如果为 `true`, 被选中的 note 的 X 轴坐标将允许被覆盖. 详见 `x`, `x_multiplier` 和 `dx` 词条. 默认为`false`.
- **x**: 覆盖被选中的 note 的 X 轴坐标. 默认坐标系为 noteX.
    - 注意: 您可将这个值设置为 `null` 取消设置这个值.
- **x_multiplier**: 选中note的 X 轴数值的倍率. 默认为`1`. 如果已经设置了 `x`, 则这个值无效.
- **dx**: 使 note 沿着 X 轴偏移该距离. 默认为`0`. 默认坐标系为 noteX. 如果已经设置了 `x`, 则这个值无效.

- **override_y**: 如果为 `true`, 被选中的 note 的 Y 轴坐标将允许被覆盖. 详见 `y`, `y_multiplier` 和 `dy` 词条. 默认为`false`.
- **y**: 覆盖被选中的 note 的 Y 轴坐标. 默认坐标系为 noteY.
    - 注意: 您可将这个值设置为 `null` 取消设置这个值.
- **y_multiplier**: 选中note的 Y 轴数值的倍率. 默认为`1`. 如果已经设置了 `y`, 则这个值无效.
- **dy**: 使 note 沿着 Y 轴偏移该距离. 默认为`0`. 默认坐标系为 noteY. 如果已经设置了 `y`, 则这个值无效.
    - **BUG 警告! 在 Cytoid 2.0.2 中, 这个效果可能存在错误, 如果出现了错误, 您需要在所有扫线方向为 `-1` 的页面中, 往您想要的值的基础上加 `1`.**
        - 在未来的某个版本中, `dx` 和 `dy` 将被替换为 `x_offset` 和 `y_offset`. 与此同时, 您仍然能使用 `dy`—但是要非常小心. 如果 note 的位置与您期望的不符, 请在其基础上加 `1`.
- 如何根据优先级, 从高到低计算 note 的 X 轴坐标:
    - 如果将 `override_x` 设置为 `true` 并且为 `x` 设置了值: `x`
    - 如果将 `override_x` 设置为 `true` 并且没有为 `x` 设置值 (或者为 `null`): 原始的 X 坐标(由谱面本身定义) * `x_multiplier` + `dx`
    - 否则: 原始的 X 坐标
    - Y 轴坐标按照同样的方法计算.

- **override_z**: 如果为 `true`, 会覆盖note的 Z 轴坐标. 详情请见 `z` 词条. 默认为`false`.
- **z**: 覆盖被选中的 note 的 Z 轴坐标. 默认坐标系为 系统深度.
- **override_rot_x**: 如果为 `true`, 则允许覆盖 note 的 X 坐标. 详情请见 `rot_x`. 默认为`false`.
- **rot_x**: 覆盖被选中的 note 的 X 坐标. 默认为`0`.
- **override_rot_y**: 如果为 `true`, 则允许覆盖 note 的 Y 坐标. 详情请见 `rot_y`. 默认为`false`.
- **rot_y**: 覆盖被选中的 note 的 Y 坐标. 默认为`0`.
- **override_rot_z**: 如果为 `true`, 则允许覆盖 note 的 Z 坐标. 详情请见 `rot_z`. 默认为`false`.
- **rot_z**: 覆盖被选中的 note 的 Z 坐标. 默认为`0`.
- **override_ring_color**: 如果为 `true`, 则允许覆盖 note 的 外环颜色. 详情请见 `ring_color`. 默认为`false`.
- **ring_color**: 要覆盖的外环颜色. 设置为 `null` 时, 将使用用户设置. 默认为`null`.
- **override_fill_color**: 如果为 `true`, 则允许覆盖 note 的填充颜色. 详情请见 `fill_color`. 默认为`false`.
- **fill_color**: 要覆盖 note 的填充颜色. 设置为 `null` 时, 将使用用户设置. 默认为`null`.
- **opacity_multiplier**: note 不透明度的倍率. 默认为`1`.
- **size_multiplier**: note 大小的倍率. 默认为`1`.
    - **BUG 警告! 在 Cytoid 2.0.2 中, 这个仅适用于 click 和 flick.**

- **hold_direction**: Hold 尾部的方向; 仅对 Hold 有效果(不含Long Hold). 值为 `1` 时向上, 值为 `-1` 时向下. 设置为 `null` 时, 将采用原本的 Hold 方向. 默认为`null`.
- **style**: 为 note 设置特定样式; 目前仅对 Hold(含Long Hold) 有效. 允许的值为 `1` 和 `2`. 默认为`1`.
    - `1`: 默认样式.
    - `2`: 隐藏 Hold 与扫描线连接的三角形特效; Hold 尾的长度会逐渐变短; Hold 的按键特效将在 Hold 头播放(而不是扫描线处). (用于模拟下落式玩法)

- 觉得对每一个note逐个添加 note 控制器很乏味? 要怎么做才能批量选择所有的 flick, 或者 ID 300 到 500 的全部 note? **Note selectors(note 选择器)** 能助您一臂之力!
- note 选择器是一个 JSON 对象 (即内容被 `{}` 所括起来), 其有如下属性:
    - **type**: 要选择的 note 类型. 例如, 用 `[3,4,6,7]` 选择 drag 和 c-drags(包括父子锁链).
    - **start**: 选择范围的最小 ID.
    - **end**: 选择范围的最大 ID.
    - **direction**: 选择处于某个扫线方向的 note. `1` 表示将选中位于扫线方向向上的页面的note, `-1` 表示将选中位于扫线方向向下的页面的note.
    - **min_x**: 选择范围的最小 X 坐标.
    - **max_x**: 选择范围的最大 X 坐标.
- Note 选择器可视作为 note 的 "过滤器", 只要不符合其中的一个条件, 这个 note 就不会被选中. 下面是一些使用示例:
    - 选中 ID 为 250-275 的所有 Click:

        ```json
        {
        	"type": [0],
        	"start": 250,
        	"end": 275
        }
        ```

    - 选中在屏幕左半边的所有 note:

        ```json
        {
          "min_x": 0,
          "max_x": 0.5
        }
        ```

    - 选中所有处于扫描线向下扫描的页面的 note:

        ```json
        {
        	"direction": -1
        }
        ```

    - 选中全部nite (等效于不使用任何过滤器):

        ```json
        {}
        ```

- 要调用 note 选择器, 只需要将 note 选择器作为 `note` 的值:

    ```json
    {
      "note": {
        "start": 7,
    		"end": 9
      },
      "override_x": true,
      "x": 0.25
    }
    ```

    载入游戏时, Cytoid 会根据 note 选择器的值过滤 note. 在这个案例中, 我们清楚地知道要选中哪 3 个 note. 原本的 note 控制器会根据结果自动展开为 3 个 note 控制器:

    ```json
    {
      "note": 7,
      "override_x": true,
      "x": 0.25
    },
    {
      "note": 8,
      "override_x": true,
      "x": 0.25
    },
    {
      "note": 9,
      "override_x": true,
      "x": 0.25
    }
    ```

    如你所愿, 这 3 个note 都会被移动到 x = 0.25 的位置.

- **(高级)** 有趣的细节: 在其他的场景对象中也可以使用 note, 例如 sprite 和 text. 这里有个例子:

    ```json
    {
    ...
    	"sprites": [
    		{
    			"note": {},
    			"path": "image.jpg"
    		}
    	]
    ...
    }
    ```

    这将为每个 note 都生成一个 sprite. 觉得没用?—在后文中, 您将会看见 `$note` 占位符如何化腐朽为神奇.

- 对于 note 控制器工具的介绍已接近尾声, 最后压轴出场的是 **`$note` 占位符**. 它可被用于 `id`, `parent_id`, `target_id` 甚至是 `time`; 它会自动调用上下文中的 note. 感到困惑? 没关系, 请听我娓娓道来.
    - 让我们先理解为什么需要 `$note` 占位符. 想象一下, 如果我们需要让 note 出现后立即淡出 (与 [osu 中的 "hidden" mod](https://osu.ppy.sh/help/wiki/Game_modifier/Hidden) 相似). 假设这个 note 的 ID 为 100. 要实现这个效果自然需要用到 note 控制器:

        ```json
        {
        	"note": 100,
          "opacity": 1,
        	"time": "intro:100",
        	"states": [
        		{
        			"opacity": 0,
        			"time": "intro:100:0.2"
        		}
        	]
        }
        ```

        note 一出现, note 控制器立即生效, 并在 0.2 秒后使 note 完全淡出. 效果完美! 但似乎有些问题?

    - 如果note很多, 那这种办法太繁琐了! 如果我们要让所有的 note 都带这个效果呢? 你决定继续使用 note 控制器, 但...

        ```json
        {
        	"note": {},
          "opacity": 1,
        	"time": "intro:???", // 要填哪个 note ID?
        	"states": [
        		{
        			"opacity": 0,
        			"time": "intro:???:0.2" // 要填哪个 note ID?
        		}
        	]
        }
        ```

        回想一下前面所学的知识, note 控制器只是一个 "通用的方法", 可视为多个子控制器的合集, 游戏运行时会为每一个子控制器都分配*相同的参数*. 实际上我们需要对每一个 note 控制器单独设置*不同的参数*. `time` 的值需要按照 *不同的 note* 设置*不同的值*. 就像下面这样:

        ```json
        {
        	"note": 1,
          "opacity": 1,
        	"time": "intro:1",
        	"states": [
        		{
        			"opacity": 0,
        			"time": "intro:1:0.2"
        		}
        	]
        },
        {
        	"note": 2,
          "opacity": 1,
        	"time": "intro:2", // Different from the first note controller!
        	"states": [
        		{
        			"opacity": 0,
        			"time": "intro:2:0.2" // Different from the first note controller!
        		}
        	]
        },
        ...
        ```

        这正是 `$note` 占位符大展拳脚的地方. 回想一下, 如果用 `$note` 代替 `id`, `parent_id`, `target_id` 或 `time` 中上下文出现的 note ID, 或者更简单地说, 让它代替每个子控制器的实际 note ID, 可以这样使用:

        ```json
        {
        	"note": {},
          "opacity": 1,
        	"time": "intro:$note",
        	"states": [
        		{
        			"opacity": 0,
        			"time": "intro:$note:0.2"
        		}
        	]
        }
        ```

        游戏首先将其扩展为:

        ```json
        {
        	"note": 1,
          "opacity": 1,
        	"time": "intro:$note",
        	"states": [
        		{
        			"opacity": 0,
        			"time": "intro:$note:0.2"
        		}
        	]
        },
        {
        	"note": 2,
          "opacity": 1,
        	"time": "intro:$note",
        	"states": [
        		{
        			"opacity": 0,
        			"time": "intro:$note:0.2"
        		}
        	]
        },
        ...
        ```

        再自动以上下文中出现的的 note ID 取代 `$note`:

        ```json
        { 
          // 在这个 note 控制器中, $note 始终为 1
        	"note": 1,
          "opacity": 1,
        	"time": "intro:1", // 以 1 替换 $note
        	"states": [
        		{
        			"opacity": 0,
        			"time": "intro:1:0.2" // 以 1 替换 $note
        		}
        	]
        },
        {
          // 在这个 note 控制器中, $note 始终为 2
        	"note": 2,
          "opacity": 1,
        	"time": "intro:2", // 以 2 替换 $note
        	"states": [
        		{
        			"opacity": 0,
        			"time": "intro:2:0.2" // 以 2 替换 $note
        		}
        	]
        },
        ...
        ```

        这正是我们想要的, 简洁又易懂的代码! 

    - **(高级)** 特别提示: 我们演示了如何在 `time` 中使用 `$note`, 那在 `id`, `parent_id` 甚至是 `target_id` 中如何使用呢? 实际上, 就想使用 note 选择器一样, `$note` 占位符可在任何其他场景对象就使用. 刚刚我们展示了任何为每个 note 生成sprite, 那让我们看看如何让它跟 note (或者说, 自定义 note 皮肤!) 一起出现.

        ```json
        {
        ...
        	"note_controllers": [
        		{
        			"note": {},
        			"id": "note_controller_$note",
        			"time": 0,
        			"opacity_multiplier": 0
        		} // 为每个 note 创建一个 note 控制器，每个 note 都有不同的 ID，并使该 note 不可见
        	],
        	"sprites": [
        		{
        			"path": "image.jpg",
        			"note": {}, // 为每个 note 生成图片...
        			"parent_id": "note_controller_$note", // ...相对于 note 进行定位或移动 (即跟随 note 运动)
        			"opacity": 0,			
        			"time": "intro:$note", // ...直到 note 出现才隐藏
        			"states": [
        				{
        					"opacity": 1,
        					"time": "start:$note" // ...点击 note 时, 使 note 完全可见
        				},
        				{
        					"add_time": 0.5,
        					"destroy": true // 点击的 0.5 秒后销毁
        				}
        			]
        		}
        	]
        ...
        }
        ```

        不幸的是, 这一切有些理想化. 如果您过早的点击了 note, note 控制器将失去有效位置, 因此作为 note 皮肤的 sprite 的位置将被重置, 并闪现至屏幕中心. 未来我们将推出 StoryBoard 事件, 使用 StoryBoard 事件, 我们可以在点击 note 的同时销毁 sprite, 使 note 皮肤更加真实.

        - 有一点需要特别留意, 尽管 note 控制器没有出现在游戏中, 反它们实际上有个"隐性位置", 这个位置与 **对应 note 的位置重合**! 因此, 如果您需要将某个场景对象与一个 note 对齐, 只需要为这个 note 定义一个 note 控制器, 然后将场景对象的 `parent_id` 设置为 note 控制器的 ID 即可.
- 常用技巧:
    - 要创建下落式玩法, 只需将 `override_y` 设置为 `true`, 并让 note 按照 `time` = `intro:$note` 且 `y` = `2`(或者任意超出屏幕边缘的值), 到 `time` = `intro:$note` 且 `y` = `0` 的始末状态运动.
        - 在 [Interference: Finale](https://cytoid.io/levels/io.cytoid.interference3) EX 难度的 StoryBoard 中, 出现了下落式和扫描线式两种玩法混合. 这是因为在谱面中, 需要下落式的note都被放置在了 X = 4 上, 因此只需在 StoryBoard 中选择所有 X = 4 的 note, 重新安排它们的 X 坐标, 并让它们按照下落式的方式处理, 使得其他的 note 保持"正常".
            - 注意: 由于小数存在精度损失, 请不要像这样选择位于 X = 0.4 的note:

                ```json
                {
                	"min_x": 0.4,
                	"max_x": 0.4
                }
                ```

                最好这样做:

                ```json
                {
                	"min_x": 0.39999,
                	"max_x": 0.40001
                }
                ```

    - 要按照曲线移动 note, 请使用两个 note 控制器. 一个控制 `x` 坐标运动, 一个控制 `y` 坐标运动, 并为它们设置不同的 `easing`(缓动) (例如, 分别设置为 `easeInCirc` 和 `easeOutCirc`, 使 note 按照 1/4 圆的轨迹运动).
    - 固定 `y` 坐标, 以模仿 osu! 的游戏玩法.

**以下为过时内容. 请勿使用, 未来将会被StoryBoard事件取代.**

### ~~Trigger State *(Experimental)*~~ *被移除*

- ~~Note that triggers are currently poorly optimized. Spawning high-resolution sprites may result in lag spikes.~~
- ~~**type**: type of the trigger.~~
    - ~~`noteClear`: If any note in `notes` is cleared, this trigger is fired.~~
    - ~~`combo`: If the combo amount reachs `combo`, this trigger is fired.~~
    - ~~`score`: If the score amount reaches `score`, this trigger is fired **and destroyed, regardless of `uses`**.~~
- ~~**uses**: maximum amount of times this trigger is allowed to fire. If set to `0`, this trigger is allowed to fire indefinitely. 默认为`0`.~~
- ~~**notes**: (only when `type` equals `noteClear`) a list of note ids.~~
    - ~~Example: if set to `[352, 353, 390]` and `type` is set to `noteClear`, this trigger will fire when anys 352, 353, and 390 is cleared.~~
- ~~**combo**: (only when `type` equals `combo`) an integer.~~
- ~~**score**: (only when `type` equals `score`) an integer.~~
- ~~**spawn**: a list of object ids to spawn.~~
- ~~**destroy**: a list of object ids to destroy. (Destroyed objects can be spawned again by another trigger.)~~