---
title: C2 Chart Format
lang: en-US
finish: true
author: GattoKai, Teages(Translator)
---
# C2 Chart Format

Cytus II chart use [JSON](https://en.wikipedia.org/wiki/JSON) as basic format，you can edit it by any text editor. This article will explain the concepts and all the properties that appear in the chart file.

## Concepts

The following will introduce the various concepts of the chart format, and it is helpful to understand the format first.

### Baisc

- Integer numbers `int` : A finite subset of integers. The maximum value is `2147483647` and the minimum value is `-2147483648`.
- Boolean `bool` : Only two values, `true` yes and `false` no, are available.
- Double precision floating point `double` : can be interpreted as a decimal.


### 时间

- Tick ：Tick is an important unit in C2 format, all objects in Chart 
- TimeBase ：时基。表示一拍的 Tick 长度。
- Tempo ：速度。表示一拍的持续时间。
  - 需要注意要将 Tempo 与我们熟知的 BPM 区分开，BPM 的含义是每分钟小拍数。因此 Tempo 和 BPM 存在转换关系 
  $$ \text{Tempo}=60,000,000 \div \text{BPM}$$
  其中 60,000,000 指的是一分钟的微秒长度。**建议不要将 BPM 这一概念代入来理解**。
- 换算
  - Tick 不能独立决定时间尺度，它需要结合时基和速度进行计算。
  - 通过例子来理解：假设从第 0 Tick 开始，TimeBase 是 480 ，Tempo 是 500,000 ，那么我们试求第 1,200 Tick 对应的时间：
  $$ 1,200\div480 \times 500,000 = 1,250,000 \text{ μs} = 1,250 \text{ ms}$$
  结果是 1,250 毫秒。
    - 对该计算再进行解释：根据前文提到 TimeBase 含义，$1,200 \div 480 = 2.5$ ，即第 1,200 Tick 对应第 2.5 拍。再结合 Tempo 每拍时长，就能通过 $2.5\times500,000$ 求出该 Tick 求出对应时间。
  

## 文件结构
该章节会对文件结构每一个属性进行解释，并对每个属性给出的取值范围或规范，若不按照说明进行编写，谱面可能依然有效，但也有可能出现不可预估的情况。因此，请务必按照说明进行编写。

### 根结构

- `format_version` ：格式版本。
  - 取任意整型数字。无实际作用，不会对谱面造成影响。
  - 现阶段 Cytus II 官方（下文中“官方”均指 “Cytus II 官方”）对该值取 `1` 。
- `time_base` ：时基。
  - 取任意正整型数。现阶段官方从未修改该数值，保持为 `480` 。
- `start_offset_time` ：开始偏移时间。
  - 取任意非负浮点数。该值表示游玩时**谱面和音乐均**从何时开始。
  - 现阶段官方从未使用该数值，保持为 `0.0` 。
  - 该值在 Cytoid 无效，同时需要将它和 Cytoid 的特有属性 `music_offset` 区分开。
- `end_offset_time` ：提前结束时间。
  - 取任意浮点数。该值表示游玩时提前多长时间结束。
  - 现阶段官方从未使用该数值，保持为 `0.0` 。
  - 该值在 Cytoid 无效。
- `is_start_without_ui` ：以无 UI 状态开始游戏。
  - 取布尔值。该值若为 `true` ，那么开始游玩时界面不会出现任何 UI (Gameplay UI)。
  - 该值在 Cytoid 无效。
- `page_list` ：页面列表。
- `tempo_list` ：速度列表。
- `event_order_list` ：事件列表。
- `note_list` ：音符列表。

### 页面

- `start_tick` ：页面起始 Tick。
  - 取非负整型数。
- `end_tick` ：页面结束 Tick。
  - 取非负整型数。
  - 原则上，页面序列必须具有连续性，即上一页的 `end_tick` 应为下一页的 `start_tick` 。但在 Cytoid 中，会出现不连续页面的用法，也有取负数 Tick 的用法。本文将该用法视作不规范用法。
- `scan_line_direction` ：扫描线方向。
  - 取值有 `1` 表示从下往上，`-1` 表示从上往下。
  - 在 Cytoid 中，该值可以设置为 `1` 和 `-1` 以外的整型数，且有效，但 Cytus II 不支持其他数值。
- `PositionFunction` ：页面函数。
  - `Type` ：函数类型。当前只有取值 `0` 。
  - `Arguments` ：函数参数。取值为双精度浮点数数组。原则上该数组包含两个双精度浮点数。
    - 示例：`[1.0, 0]`
    - 参数 1 ：页面缩放倍率。指页面以一半的高度为中心缩放的倍率。
      - 默认值为 `1.0` ，表示 1 倍缩放。
      - 页面被缩放后，所有音符的位置会发生移动，扫描线也仅在缩放后的高度范围内运行。
      - 在官方的下落式谱面中，会将该值设置为 `0` 即 0 倍缩放，来使扫描线在下落式的页面中完全静止不动。
    - 参数 2 ：页面偏移。指页面的纵向位置偏移。
      - 该值以半个原始页面高度为一个单位。如果该值设置 `1.0` ，页面会往上偏移半个原始页面高度， `-1.0` 则往下。默认值为 `0.0` 。
    - 可以将这两个参数理解为线性方程 $y=ax+b$ 中的 $a$ 和 $b$。
    - 当有一部分页面出界时，扫线不会超出边界，转而停在边界的位置上。
  - 该值当前只出现在官方的 Alice 和 Hans 曲包带有下落式配置的谱面中。Cytoid 不支持该值。

### 速度

- `tick` ：表示该速度从第几 Tick 开始。
  - 取非负整型数。
  - 在一个有效的速度列表中，必须有至少一个速度，且第一个速度 Tick 必须为 `0` 。
- `value` ：速度值。
  - 取非负整型数。

### 音符

- `page_index` ：表示该音符在页面列表的第几个页面。
  - 该值应为不小于 `0` 的整型数，且从 0 开始计数，即 0 表示页面列表的第 1 页，1 表示页面列表的第 2 页……依此类推。
  - 音符的时间位置应当在指向页面的有效范围内。
- `type` ：音符类型。具体对应如下：
  - `0` : Click
  - `1` : Hold
  - `2` : Long hold
  - `3` : Drag
  - `4` : Drag child
  - `5` : Flick
  - `6` : Click drag
  - `7` : Click drag child
  - `8` : Drop click，Cytoid 暂不支持。
  - `9` : Drop drag，Cytoid 暂不支持。
- `id` ：音符编号。
  - 该值应为不小于 `0` 的整型数，音符列表应当按该属性从小到大，从 0 开始，以 1 为步长进行排序。
  - 该属性的意义应当为音符的唯一标识符，但实际上只影响同 Tick 音符的层序。与 `next_id` 无实际关联，下文会解释。
- `tick` ：音符的 Tick 位置。
  - 该值应为不小于 `0` 的整型数，用于时间定位或 y 轴定位。
- `x` ：音符的 x 轴位置。
  - 规范取值为 `0` 到 `1` 之间的任意双精度浮点数。实际使用可以超出该范围。
- `has_sibling` ：是否有同 Tick 音符。
  - 取值为布尔值。该值不会对音符有任何影响，仅标记意义。
- `hold_tick` ：音符的持续 Tick 长度。
  - 该值应为不小于 `0` 的整型数。
  - 只有在音符是 Hold 或者 Long hold 类型时，该值才有实际作用。其余类型音符该值应当为 `0` 。
- `next_id` ：连接的下一音符 `id` 。
  - 该值应为整型数。
  - 只有在音符是 Drag、Drag child、Click drag 或 Click drag child 类型时才有实际作用。其余类型音符该值应当为 `0` 。
  - 该值实际上指向音符列表的具体次序。例如，该值为 0 时，指向的是音符列表第 1 个音符；值为 10 时，指向第 11 个音符。因此该值与 `id` 无实际关联。若后续无连接音符，该值应当为 `-1` 。
  - 按规范，一串完整的 Drag 音符应当按时间先后依次连接，并且连接类型应该为：
    - Drag - Drag child - Drag child - Drag child - ...
    - Click drag - Click drag child - Click drag child - Click drag child ...
- `is_forward` ：是否置前页。
  - 取值为布尔值。
  - 该值如果为 `true` ，那么 `page_index` 在读取时会减 1 。该值通常使位于页头的音符变为上一页的颜色。
- `NoteDirection` ：音符位移方向。
  - 只有在音符是 Drop click 或者 Drop drag 类型时，该值才有实际作用。`0` 表示从上往下，`1` 表示从下往上。其余类型音符该值应当为 `0` 。
  - Cytoid 不支持该值。

### 事件

- `tick` ：该事件的 Tick 位置。
  - 该值应为不小于 `0` 的整型数。
- `event_list` ：此处的事件列表。
  - 可以包含多个事件。每个事件的属性如下：
  - `type` ：事件类型。对应关系如下：
    - `0` ：速度上升
    - `1` ：速度下降
    - `2` ：显示 UI
    - `3` ：隐藏 UI
    - `4` ：渐入 UI
    - `5` ：渐出 UI
    - `6` ：动画显示 UI
    - `7` ：动画隐藏 UI
    - `8` ：自定义文字
    - Cytoid 仅支持前两种类型。
  - `args` ：事件参数
    - 当事件类型为 `0` 或 `1` 时，该值通常只取 `"W"`、`"R"` 或 `"G"`，对谱面效果无影响。
      - `"W"` ：速度等于基准速度。
      - `"R"` ：速度大于基准速度。
      - `"G"` ：速度小于基准速度。
      - 此处的基准速度无硬性规定。但需要注意的是，歌曲本身变化速度以后，基准速度也应该随之改变。
    - 当事件类型为 `2` 到 `7` 时，该值为操作的目标 UI，即以下有效值的组合字符串。
      - `0` ：连击数
      - `1` ：分数
      - `2` ：曲名和图标
      - `3` ：难度
      - `4` ：扫描线
      - `5` ：边界线
      - `6` ：声音频谱
      - `7` ：进度条
      - 示例：假设目标 UI 为声音频谱、连击数和分数，那么值应该为`"0,1,6"`。
    - 当事件类型为 `8` 时，该值代表自定义消息的内容与颜色。
      - 示例：`"Custom message,#FFFFFF"`，代表该自定义文字内容是 `Custom message`，文字颜色是 `#FFFFFF` 。
      - 需要注意，由于格式限制，自定义文字内容不能够包括英文半角逗号。
  - UI 操作注意事项
    - UI 事件存在层序关系，且层序间互不影响，可同时执行。显示、隐藏、渐入与渐出在同一层，动画显示和动画隐藏在另一层。这意味着，如果 UI 被隐藏或者是渐出以后，动画操作依然会正常进行，但是由于 UI 被隐藏，因此看不到效果。
    - 当同层序事件冲突，会有不同的效果。
      - 显示、隐藏、渐入与渐出事件会依次执行，且不会重复执行，即同一个 UI 的下一个事件会等到上一个事件完成后再执行，UI 在隐藏后不会再次隐藏或是渐出。
      - 动画显示和动画隐藏会直接覆盖且可重复执行。
    - 谱面根结构中的 `is_start_without_ui` 实际是开始游戏前就隐藏全部 UI 。