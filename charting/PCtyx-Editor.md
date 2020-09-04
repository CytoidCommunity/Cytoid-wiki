# PCTYX编辑器 - 文档

**针对版本**：210 (原文时间2020-7-4)

请注意, 此帮助文档可能会经常更改以反映最新版本的情况. 

（即将发布的版本以=>表示）

 

本手册仅说明每个图标/按钮的控件和说明, 而不是有关如何使用PCtyx编辑器的综合指南. 如果您愿意提供指导, 请直接联系作者Discord. 

 

作者/ Discord：JCEXE#9792

译者：Teages

### 已知问题/下一个版本预期

（不适用）

## 快捷键

在应用程序文件夹中的keymaps.json, 您可以编辑某些功能的热键. 若要知道函数的作用, 请在此文档上使用Ctrl + F并找到函数名称. 

●   “_invert_mouse”是布尔值, 用于反转鼠标左键和右键单击（在文本框上下文中除外）. 0-关. 1-开

●   “_version”是按键图的版本. 请勿更改此值. 

●   “ _gamepad_click” 和 “ _gamepad_slide” 使用键码, 然后使用文字逗号. 

●   以下任何键均可用于其他功能：

\-    大写字母（A, B, C）

\-    空格键（空格键）

\-    数值（1,2,3）

\-    数字键（numpad1, numpad2）

\-    Fx键（F1〜F11.  F12**无法使用**）

\-    上面未列出的所有内容都是小写的事件代码. (equal,comma,numpaddecimal)

 

除了 “ _gamepad_click” 和 “ _gamepad_slide”, 可以通过先包含“ ctrl +”, “ alt +”或“ shift +”来使用修饰键（Ctrl, Alt和Shift）. 您可以使用一个半角逗号来分隔单个功能的多个快捷键. 不要留任何空格. 


 **按键代码** 可以在 [**这里**](https://keycode.info/) 查询. （请确保您在Chrome中打开链接, 因为其他浏览器中的按键代码不同）

## <img src="/charting/_source_PCtyx-Editor.md/clip_image002.gif" alt="img" style="zoom:45%;" />菜单

![img](/_source_PCtyx-Editor.md/clip_image004.gif)

 

| 图标/按钮                                              | 描述                                                         |
| ------------------------------------------------------ | ------------------------------------------------------------ |
| 一般                                                   | 按 全屏（F11） 切换全屏. 这在![img](/_source_PCtyx-Editor.md/clip_image006.gif)编辑也可以用<br>  按 F12 进入调试文本框<br>(当前, 这些只对最终用户有用. ) <br>**“Reset”-** 重置/清除已保存的配置数据（单击FX, 音乐音量, 网格预设, 剪贴板数据等）为默认值.  <br>**注意**：这也会删除备份谱面数据！<br>**“Restart”-** 重新加载应用程序. <br>**注意**：您的进度可能会丢失！  <br>将文本框留空返回  **![img](/_source_PCtyx-Editor.md/clip_image007.gif)**菜单. |
| ![img](/_source_PCtyx-Editor.md/clip_image009.gif)**新谱面**         | 选择要加载的音乐文件, 然后会有弹出窗口询问您初始扫描线的BPM和开始时间<br>**支持的音乐文件：**  <br>●     .ogg（Ogg Vorbis）  <br>●     .m4a（MPEG-4 AAC）  <br>●     .flac（FLAC） <br>●     .wav（PCM或PCM float）     <br>音乐长度必须超过5秒. 没有上限[译者: 实际上梁祝都撑不住], 但是长度较长的歌曲可能会影响加载时间以及编辑扫描线后的重新同步过程<br>  由于MP3的编码特性, 我们不再支持MP3, MP3将数据存储在块中, 并在开始时引起静音长度不一致. 对于节奏游戏, 上述编解码器具有更好的准确性<br>  您也可以多选一个图像或视频文件来更改背景图像或视频. 支持的视频/图像文件：<br>●     .ogv  <br>●     .mp4 <br>●     .webm  <br>●     .jpg / .png（图片）     <br>视频文件越大, 加载时间越长. <br>删除视频文件的音频以使其更小. <br>视频在播放过程中也可能会延迟.<br>PCtyx仅在从第一页开始并且播放模式未设置为“Compose”的情况下播放视频. |
| ![img](/_source_PCtyx-Editor.md/clip_image011.gif)**加载...**    | 行为类似于上方的![img](/_source_PCtyx-Editor.md/clip_image012.gif)新谱面. 您可以选择同时加载现有谱面文件和上述文件, 或选择仅加载音乐/图像/视频文件以恢复自动备份<br>  **支持的谱面文件：**  <br>●     **.csv** （默认的PCtyx格式, 请参见 [CSV](https://en.wikipedia.org/wiki/Comma-separated_values) 及其下面用于PCtyx的数据结构）  <br>●     **.txt,** **文件名带有“ -c2”****后缀**  （Cytus 2谱面格式. 例如：mychart-c2.txt）  目前, c2格式严格按照顺序读取谱面文件. 如果您手动修改page_list的end_tick, 并且刻度之间缺少空白和/或无序, 则谱面将无法正确加载. 一个正常的C2谱面应该这样开头:   {“ format_version”：0, “  time_base”：480, “ start_offset_time”：0, ...  <br>●     **.txt** （C1v2 /Cytunity.txt谱面格式）  VERSION 2  BPM 290.030211  PAGE_SHIFT 1.319500  PAGE_SIZE 0.827500  NOTE    0  16.083859  0.100000  0.000000  …  <br>●     **.pton** （重命名自Legacy Project Thrinos json格式[.ptv2.json]和早期PCtyx版本json文件[.ctyx, .pctyx]扩展名）, 例如:    {"c2array":true,"size":[126,2,1],"data":[[["VERSION2"],[..<br>**恢复自动备份：**   每次编辑谱面时, 您所做的任何更改都会在您点击![img](/_source_PCtyx-Editor.md/clip_image014.gif)播放谱面 时自动保存<br>要从上次加载的地方加载备份, 只需使用它仅加载音乐文件即可. **不要**手动加载任何谱面文件<br>如果您加载另一张谱面, 对其进行编辑然后再播放, 则备份将丢失. 如果您手动保存了谱面, 备份将会被删除. |
| ![img](/_source_PCtyx-Editor.md/clip_image016.gif)**保存谱面**   | 将谱面另存为.csv格式<br>保存后, 应用程序中存储的备份数据将被删除<br>  保存谱面还将生成具有相同名称但扩展名不同的以下文件：  <br>●     **-c2.txt** （Cytus 2谱面格式）  <br>●     **-sb.json** （Cytoid故事板）     **注意**：保存为.txt谱面(C2谱面)时, 以下NOTE将发生变化：  <br>●     Damage=>Click  <br>●     D-DRAG=> C-DRAG  <br>●     未连接的DRAG / C-DRAG/ D-DRAG头=>单击     如果您的Cytoid的关卡数据中未包含.sb.json, 以下机制将发生变化：  <br>●     下落式扫描线（下落式NOTE）=>冻结扫描线  <br>●     页面中间的冻结/下落式扫描线=>冻结/下落式扫描线最近从页面的顶部/底部开始, 如果下一个移动的扫描线也位于页面中间, 则提前结束<br><br>●     冻结/下落式扫描线中的NOTE显示在其假定位置, 而不是出现/下落式在扫描线的位置<br>如果您的谱面没有任何“冻结/下落式”扫描线, 或者没有中间页“冻结”, 则可以完全忽略生成的storyboard文件<br>  此外, 生成的.txt专门用于  ![img](/_source_PCtyx-Editor.md/clip_image018.gif)Cytoid, 只有2个参数, Cytoid和PCtyx可以读取. 因此, 如果您使用其他种类的Cy2us谱面播放器, 则需要编辑音乐文件以在开头添加静默, 该静默等于文件中的music_offset. |
| ![img](/_source_PCtyx-Editor.md/clip_image019.gif)**生成level.json** | Cytoid的level.json是要把谱面上传到社区的必要文件, 包含了音频位置, 图片位置, 以及艺术家信息等. 更多有关如何将您的关卡上传到Cytoid的更多信息, 请访问[这里](https://sites.google.com/site/cytoidcommunity/guides/charting/playing-it-on-cytoid) |
| ![img](/_source_PCtyx-Editor.md/clip_image021.gif) **播放模式**   | 调整![img](/_source_PCtyx-Editor.md/clip_image014.gif)播放谱面的模式<br>  **Auto**-自动播放谱面<br>  **撰写**-允许使用 _gamepad_click（D, F, J, K） 要么 _gamepad_slide, （A, S, L, 分号）在播放期间. 单击键构成左侧的NOTE；滑动键在右侧组成. 不建议将其用作制作谱面的可靠方法；学习歌曲的拍号并使用任何音乐编辑程序（例如：Audacity）找到第一个节拍是一种确保每个NOTE的音调正确的更可靠方法<br>  **玩**-允许与NOTE互动 _gamepad_click 要么 _gamepad_slide. 控制类似于Cytus  Alpha的控制器模式<br><br>●     **Click** 按下设置中的任何键可激活NOTE _gamepad_click<br><br>●     **Flick** 按下设置中的任何键可激活NOTE _gamepad_slide<br>与C2版本不同, 它们具有与Clicks相同的判断时间<br><br>●     **Drags** 通过按任何设置的键激活  _gamepad_slide.  按住所有滑键以激活其子级<br><br>●     **C-DRAGs** 按住任何设置的键激活  _gamepad_slide.  C-Drag头与Clicks具有相同的判断时间<br><br>●     **Hold** 按住任何设置的键激活NOTE _gamepad_click  在紧迫的时机. 与任何Cytus同类产品不同, 无论按多长时间/多长时间按住一次便笺, 判断时机都只考虑多长时间按住便笺. 但是, 根据按下HOLD的早/晚时间, 将应用额外的HOLD时间. 他们在混合NOTE模式中的输入优先级略高<br>[译者: 请不要使用下面两种note,所以保留机翻,总的就是打了得BAD,Cytoid不支持]  <br>●     **Damage** NOTE是PCtyx独有的. 按下任何设置的键(_gamepad_click)即可激活它们. 但是, 如果这样做, **BAD**总是会给出时间的. 在混合NOTE模式中, 它们的输入优先级最低<br><br>●     **D-Drag** NOTE是PCtyx独有的. 按下任何设置的键(_gamepad_slide)即可激活它们. 但是, 如果这样做, **BAD** 定时将始终给出, 并且其子项的其余部分也将自动激活 **BAD**也一样 在混合NOTE模式中, 它们的输入优先级最低. |
| **音频偏移**                                           | 通常, PCtyx根据您计算机的当前音频时钟时间播放音频. 如果您的计算机出现一些硬件问题（尽管更新了音频驱动程序）, 即使音频时钟也无法解决, 请尝试逐步测试并增加该值以延迟音频播放的时间<br>**如果您计算机的音频硬件没有任何问题,** **请将此值保持**为0**<br>**这不是谱面的音频偏移量. |
| ![img](/_source_PCtyx-Editor.md/clip_image022.gif)                   | 转到编辑界面<br>                                             |

 

## <img src="/charting/_source_PCtyx-Editor.md/clip_image024.gif" alt="img" style="zoom:45%;" />编辑

![img](/_source_PCtyx-Editor.md/clip_image026.gif)

 

 

| 图标/按钮                                                    | 快捷键                                       | 描述                                                         |
| ------------------------------------------------------------ | -------------------------------------------- | ------------------------------------------------------------ |
| **一般**                                                     |                                              |                                                              |
|                                                              |                                              | 左击在未选中的NOTE上将其选中. （自动取消选择其他NOTE）      Ctrl 并且 点击在NOTE上切换以选择它们. （不能多选扫描线）     HOLD Shift 并且 点击 Drag / CDrag / Damage Drag /  Chain自动选择同一根锁链<br>  按 Modify_link_id（Q, E） 或者滚动 鼠标中键 （取决于当前页面的方向）在网格区域上以增加/减少每个选定NOTE的“链接号”或“HOLD长度”<br>  按 select_all_notes（Ctrl + A） 选择所有NOTE（扫描线, 上一页的长NOTE以及网格外部的NOTE除外）<br>  按 copy_notes（Ctrl + C, Ctrl  + 1, Ctrl + 2, Ctrl + 3, Ctrl + 4, Ctrl + 5）  将所有选定的NOTE组在网格中的位置作为布局复制到剪贴板. （不复制扫描线和前一页的长NOTE）     按 paste_notes（Ctrl + V, Shift + 1, Shift + 2, Shift + 3, Shift + 4, Shift  + 5） 从剪贴板粘贴NOTE组<br>  按 flip_notes（Ctrl + F） 翻转所选NOTE的X坐标<br>  按 clear_notes（退格键） 删除选定的NOTE<br>  按 next_pages（Home, PageDown,  PageUp, End） 或点击  ![img](/_source_PCtyx-Editor.md/clip_image028.gif) ![img](/_source_PCtyx-Editor.md/clip_image029.gif)在音乐滑块旁边可以分别返回到8页, 返回1页, 向前1页或向前8页. 在时间滑块上滚动 鼠标中键 跳到特定页面<br>  切换 snapto_grid（L） 让移动后的NOTE组在移动后吸附到网格上. 这在添加NOTE/扫描线时也适用<br>  切换 show_grid（G） 显示或隐藏网格 |
| **工具类**                                                   |                                              |                                                              |
| **![img](/_source_PCtyx-Editor.md/clip_image031.gif)**  **![img](/_source_PCtyx-Editor.md/clip_image032.gif)** | tool_move_x（A, D）  tool_move_y（W, S）     | **移动NOTE X / Y****轴**  拖放所选NOTE的水平或垂直位置<br>  如果选择了Long Hold, 则无法移动NOTE组的垂直位置<br>  如果选择了扫描线, 则无法移动其水平位置<br>  如果选择了至少一个NOTE, 请按 tool_note_x / tool_note_y 再次, 或按 nudge_x / nudge_y  （不更改所选工具）以微移所选NOTE组的水平或垂直位置. |
| **![img](/_source_PCtyx-Editor.md/clip_image034.gif)** | tool_selection（F）                          | **选择**   左击 在便笺上切换以选择它们, 就像您按住 Ctrl一样<br>右键点击  在空的地方上用鼠标缩放 ![img](/_source_PCtyx-Editor.md/clip_image036.gif)选择. 再次单击以选择![img](/_source_PCtyx-Editor.md/clip_image036.gif)其中的所有NOTE（扫描线和上一页中的长NOTE除外）. |
| **![img](/_source_PCtyx-Editor.md/clip_image038.gif)** | Tool_edit_notes（Z）                         | **编辑NOTE**  左击  要么 右键点击 在选定NOTE上增加/减少每个选定NOTE的“链接号”或“Hold长度”. |
| **![img](/_source_PCtyx-Editor.md/clip_image040.gif)** | tool_add_note（X）                           | **添加NOTE**  右键点击 将您在任务栏中选择的NOTE添加到指定位置<br>  添加后 **![img](/_source_PCtyx-Editor.md/clip_image042.gif)![img](/_source_PCtyx-Editor.md/clip_image044.gif)![img](/_source_PCtyx-Editor.md/clip_image046.gif)![img](/_source_PCtyx-Editor.md/clip_image048.gif)**, 或者如果已经选择了这几种NOTE中的任何一种, 则随后的添加的**![img](/_source_PCtyx-Editor.md/clip_image049.gif)**具有相同的链接号. ** **  在空白区域 左击 以添加新的父级Drag<br>  如果未选择任何NOTE, 则可以按  Modify_link_id（Q, E） 要么 鼠标中键 （取决于当前页面的方向）在网格区域上以增加/减少添加NOTE的链接号. |
| **![img](/_source_PCtyx-Editor.md/clip_image051.gif)** | tool_add_scanline（C）                       | **添加扫描线(Scanline)**  **注意**：当您在更改了扫描线的情况下切换页面时, 您将停留在该页面上以刷新时间滑块并在此页面之后根据以下内容和**![img](/_source_PCtyx-Editor.md/clip_image053.gif)****重新同步设定** 中的设置调整NOTE/扫描线<br>  特性：  <br>★    **BPM**：此扫描线的滚动速度. 速度限制为0.1BPM至60,000,000BPM（使用高于7200的值可能会影响CPU性能）. 您可以输入公式, 以使应用自动为您计算. （例如：“ 120/2”会将120BPM减半至60BPM. ）     **注意**：请小心使用过高/过低的BPM值, 因为它将极大地影响时间滑块的页面数量和NOTE的位置<br>   <br>★    **ÿ**：此扫描线的Y坐标. （480 = 1页）. 如果这是第一条扫描线, 则最多可以放置479个单位<br>     <br>★    **位置/****滚动模式****：** 该扫描线的位置和滚动模式.  仅当这是第一条扫描线或未将扫描线放置在中间（Y不为0或480）时, 才应用位置<br>左击 改变它的位置<br>右键点击 更改其滚动模式：     <br>●     **Rebound** -Cytus主要扫线模式；扫描线来回反弹<br><br>●     **Sweep**-沿相同方向反复扫描线<br><br>●     **Freeze(****冻结)** -将扫描线冻结到位；NOTE出现在扫描线上. **胞状情节提要**：  Cytus II的冻结只能发生在最高/最低位置；所有页面中间的冻结都会延迟到其各自起始页面的末尾. 如果下一条扫描线在页面中间并且正在移动,  则该扫描线将提前结束<br>  扫描线中的NOTE将位于其预期的Y坐标中, 而不是PCtyx / Cytoid(使用故事版) 显示的扫描线上<br><br>●     **Fall(****下落式)**-将扫描线冻结到位；NOTE从其相反的位置落向扫描线. **胞状情节提要**：  这与在生成的.txt文件中冻结相同<br><br>●     **End**-提前结束谱面. 播放过程中将跳过此扫描行之后的NOTE<br>  <br>★    **时间（仅第一条扫描线）**：此扫描线以秒为单位. 您可以使用负值作为要计算为其等效开始时间的偏移量<br>  在输入开始时间值之前**首先改变扫描线速度****(BPM)**. 可以输入负值作为偏移量. 输入结果将根据此扫描线的BPM速度重新计算为等效的开始时间<br>  启动时间超过BPM速度的两倍也将取等效值<br>  **注意**：对于第一条扫描线：NOTE不能放置也不能开始于  0.333333秒. 这样做是为了防止您的谱面开始得太早, 并使玩家措手不及. 黄色的网格线会告诉您, 这个区域不能放置除了扫描线NOTE以外的NOTE<br>  对于初学者, 请使用诸如Audacity之类的音乐编辑程序来查找和输入第一拍的时机（可能不是您想要的第一NOTE的时间；您需要了解歌曲的拍号）. 如果音乐开始太早, 请在开始时添加一些静音. |
| **![img](/_source_PCtyx-Editor.md/clip_image055.gif)** | edit_approach_rate（T）                      | **编辑NOTE****出现速度**  更改所选NOTE组的出现速度<br>     1是默认的出现速度.0.5使NOTE出现速度为原来的1/2(提早出现, 动画变慢); 2使NOTE出现速度为原来的2倍(推迟出现, 动画变快)<br>           可以输入公式到文本框中<br>  PCtyx的播放谱面将使NOTE出现速度大约在0.17到3.72之间. |
| **NOTE**                                                     |                                              |                                                              |
| **![img](/_source_PCtyx-Editor.md/clip_image057.gif)** | note_click（数字键1）                        | **Click**  特性：  <br>★   X：此NOTE的水平位置, 从最左0到最右1<br><br>★   Y：该NOTE的垂直位置和时间. （480 = 1页）  <br>★   AR：本NOTE的出现速度. |
| **![img](/_source_PCtyx-Editor.md/clip_image059.gif)** | note_hold（数字键2）                         | **Hold**  特性：  <br>★   X：此NOTE的水平位置, 从最左0到最右1<br><br>★   Y：该NOTE的垂直位置和时间. （480 = 1页）如果这是上一页中的长NOTE, 则无法修改其Y<br><br>★   L：保留票据的长度, 以Y为单位（480 = 1页）. 如果长度超出了本页区域, 它将变成长NOTE<br><br>★   AR：本NOTE的出现速度. |
| **![img](/_source_PCtyx-Editor.md/clip_image060.gif)![img](/_source_PCtyx-Editor.md/clip_image061.gif)** | note_drag（数字键3）  note_chain（数字键4）  | **Drag****头/****锁链**  特性：  <br>★   X：此NOTE的水平位置, 从最左0到最右1<br><br>★   Y：该NOTE的垂直位置和时间. （480 = 1页）  <br>★   L：NOTE的链接号；请参阅下面的“DRAG(锁链)连接规则”<br><br>★   AR：本NOTE的出现速度. |
| **![img](/_source_PCtyx-Editor.md/clip_image063.gif)** | note_flick（数字键6）                        | **Flick**  特性：  <br>★   X：此NOTE的水平位置, 从最左0到最右1<br><br>★   Y：该NOTE的垂直位置和时间. （480 = 1页）  <br>★   AR：本NOTE的出现速度. |
| **![img](/_source_PCtyx-Editor.md/clip_image064.gif)** | note_clickdrag（数字键6）                    | **C-Drag**  特性：  <br>★   X：此NOTE的水平位置, 从最左0到最右1<br><br>★   Y：该NOTE的垂直位置和时间. （480 = 1页）  <br>★   L：NOTE的链接号；请参阅下面的“DRAG(锁链)连接规则”<br><br>★   AR：本NOTE的出现速度. |
| **![img](/_source_PCtyx-Editor.md/clip_image066.gif)**  **![img](/_source_PCtyx-Editor.md/clip_image067.gif)** | note_dmg（数字键7）  note_dmgdrag（数字键8） | **Damage/  D-DRAG**  特性：  <br>★    X：此NOTE的水平位置,  从最左0到最右1<br><br>★    Y：该NOTE的垂直位置和时间. （480 = 1页）  <br>★    L（仅D-Drag）：NOTE的链接号；请参阅下面的“DRAG(锁链)连接规则”<br><br>★    AR：本NOTE的出现速度<br><br>★    **PC****tyx**  **特****性**： 在C2导出中, 这被视为“Click”（Damage）或“ C-DRAG”（D-DRAG）. |
| **MISC.**                                                    |                                              |                                                              |
| ![img](/_source_PCtyx-Editor.md/clip_image068.gif) |                                              | 进入菜单<br>                                                |
| ![img](/_source_PCtyx-Editor.md/clip_image069.gif) | start_player（Ctrl + P）                     | **开始播放**  启动播放<br>这还将尝试备份谱面文件(CSV)<br>有关备份的更多请看**![img](/_source_PCtyx-Editor.md/clip_image070.gif)****加载…** 条目. |
| **![img](/_source_PCtyx-Editor.md/clip_image072.gif)** |                                              | **编辑网格预设**  按 grid_preset（F1, F2, F3, F4, F5, F6, F7, F8, F9, F10） 切换网格预设. 同时刷新编辑列<br>  修改当前网格预设的属性<br>  <br>●     **Row**-此预设的行数. 上限为1到96. 如果值大于32, 则仅显示除数行. 对于初学者, 请为¾NOTE速度使用16行和/或12行<br><br>●     **Column**-此预设的列数. 上限为2到40. 其他任何数字都更改为100列<br><br>●     **Divisor** -将第一行再将其后的1 + n行作为红线除数<br><br>●     **Grid BPM**-根据当前页面的初始BPM的BPM（不计算页面中间非第一条扫描线）的BPM与行距之间的偏移/乘以行间距. 除非要制作Cytus 1谱面, 否则将其HOLD为0<br><br>●     **Shift** -根据时间（以秒为单位）偏移前面的行. 除非要制作Cytus 1谱面, 否则将其HOLD为0. |
| **![img](/_source_PCtyx-Editor.md/clip_image073.gif)** |                                              | **重新同步**  设置在此页面之后如何重新同步NOTE/扫描线的位置. 您还可以在每次编辑/添加新的扫描线时启用提醒, 并选择是否要同步当前页面上的NOTE或不想保存编辑的NOTE<br>  有2种同步方法：  <br>★    **Time****：** 此页面后的每个NOTE, 其HOLD长度（HOLD符）和扫描线将重新调整其Y位置, 以与它们应该处于的时间有关.  使用这个可能导致扫描线和NOTE偏离, 如果发生了这样的事情, 请勾选“**Clear all other scanlines(**清除所有其他扫描线)”选项, 然后按页面升序重新添加扫描线<br><br>★    **Y-Position****：**在此页面后, 将所有NOTE, 其HOLD长度和扫描线HOLD在其Y位置. 但是, 这将更改新的页面上限, 并删除该页面之后的所有其他扫描线和NOTE. 如果您后面有变速, 则不建议使用此功能. |
| **![img](/_source_PCtyx-Editor.md/clip_image075.gif)** | reset_page（Ctrl + Z）                       | **重设页面**  将您在此页面上所做的所有修改重置为以前的状态.  |

 

## DRAG(锁链)连接规则

**译者注:** **父NOTE** **指各种锁链头,** **子NOTE****指各种锁链**

| ![img](/_source_PCtyx-Editor.md/clip_image077.gif) | 只要拖动/ C-DRAG/  D-DRAG（父）和链子（子）NOTE连接在一起, 只要它们使用相同的链接号并以升序和Y位置顺序连接<br>   单独的子NOTE（在其之前没有任何相同序号的父NOTE）在播放期间或在c2导出中将被忽略. |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| ![img](/_source_PCtyx-Editor.md/clip_image079.gif) | **仅父/****子NOTE****会连接到其他子NOTE**. 您可以在上一个拖动序列结束后再次循环使用该数字. |
| ![img](/_source_PCtyx-Editor.md/clip_image081.gif) | 如果同时有多条锁链, 或者长锁链中还有另一个锁链,  请确保它们不共享相同的链接号. |
| ![img](/_source_PCtyx-Editor.md/clip_image083.gif) | 右侧的锁链可能会或可能不会正确连接, 因为它们共享相同的Y位置<br>确保所有父子NOTE按升序和Y位置顺序连接；如果它们共享相同的链接号, 请勿将它们放在相同的Y位置<br>ゴー [译者:?] |

 

![img](/_source_PCtyx-Editor.md/clip_image084.gif)**谱面预览**

| 图标                                                         | 快捷键                  |                                                              |
| ------------------------------------------------------------ | ----------------------- | ------------------------------------------------------------ |
| ![img](/_source_PCtyx-Editor.md/clip_image086.gif) | stop_player（escape）   | 停止播放；返回开始播放的页面<br>                            |
| ![img](/_source_PCtyx-Editor.md/clip_image088.gif) | 播放速度（逗号, 句号）  | 在播放期间调整播放速度. （0.25倍, 0.5倍, 1倍）               |
| ![img](/_source_PCtyx-Editor.md/clip_image090.gif) | pause_player（引号）    | 停止播放器；跳至播放器正在播放的页面<br>                    |
| ![img](/_source_PCtyx-Editor.md/clip_image091.gif) | compose_player（enter） | 如果 **![img](/_source_PCtyx-Editor.md/clip_image092.gif)**设置为“Compose”模式时, 可以放置NOTE在所有已确认位置<br>停止播放；并且返回开始播放的页面. |

 

## NOTE皮肤

您可以通过将带有该组件正确命名约定的图形添加到应用程序文件夹/皮肤中来自定义NOTE皮肤. （仅接受.png格式）

请注意, 在启动时需要花费一些时间来检查/加载所有NOTE皮肤. 如果您不想加载notekins, 只需将skins文件夹重命名为其他名称即可. 您可以从GitHub页面下载example_skins.zip作为参考. 

 

所有图形必须遵循与基本NOTE相同的图像尺寸（Hold除外）. 例如, 如果您的基本NOTE的图像尺寸为128x128, 则其他大多数图片也必须为128x128. 

 

以下是NOTE组件说明：

| 组件                 | 描述                                                         | X                                             | ÿ                                                            |
| -------------------- | ------------------------------------------------------------ | --------------------------------------------- | ------------------------------------------------------------ |
| x_y.png（基础）      | NOTE的基本图形<br><br>●   CHAIN图形仅适用于标准DRAG；C-Drag / D-Drag子级以较小的比例尺使用其父图形. | CLICK  DRAG  CHAIN  FLICK  LONG  HOLD  DAMAGE | 0-向下  1-向上                                               |
| x_HEAD_y.png  （头） | 该组件用于：  -      拖动箭头  -      无效的HOLD条<br><br>●   拖动箭头必须指向右侧<br><br>●   HOLD条必须向下. | DRAG  HOLD  LONG                              | **HOLD/****长**   0/1-无效, 深色条  2/3-编辑器和下落式 scanline中使用的非活动栏<br>  **拖动**  0/1-DRAG  2/3-C-DRAG  4/5-D-DRAG     奇数-向下  偶数-向上 |
| x_TAIL_y.png  （尾） | 该组件用于：  <br>-      拖线<br>-      填充HOLD条<br>-      轻弹箭头<br><br>●     拖线必须指向右侧<br><br>●     HOLD条必须向下. | DRAG  HOLD  LONG  FLICK                       | 0-向下（拖曳线仅使用0）  1-向上                              |

 

以下是杂项组件. 它们都使用Component_yy.png作为命名约定. 

| 组件                            | 描述                                                         | y                                                            |
| ------------------------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| NOTE_ACTIVE  FLICK_ACTIVE       | NOTE处于最佳点击（播放）范围内或作为所选NOTE（编辑）的突出显示的指示器. | 0-标准<br>1-同级/同步NOTE<br>                               |
| NOTE_HOLDING                    | 按住HOLD时显示的HOLD圆圈/叠加层<br>                         | 0/1-HOLD, 并且整个活动HOLD圈<br>2/3-无效HOLD圈的右半部分<br>4/5-有效HOLD圈的右半部分<br>  奇数-向下  偶数-向上 |
| PERFECT  GREAT  GOOD  BAD  MISS | 判定结果<br>                                                | 0-突发帧1. 没有文字<br>1-突发帧2. 带文字<br>2-用于下落式扫描线. |
| BURST                           | 击中NOTE时的特效<br>                                        | 0-向下  1-向上  2-向下（BAD/MISS）  3-向上（BAD/MISS）       |
| COMPOSE                         | 在COMPOSE模式下显示的NOTE<br>                               | 0                                                            |
| NOTESCAN                        | 编辑器中可编辑的扫描线<br>                                  | 0                                                            |
| SCANLINE                        | 扫描线的颜色<br>                                            | 0-普通  1-慢速  2-快速                                       |



## CSV格式结构

具有较旧CSV版本兼容性的行将突出显示. 

译者注: 手动修改CSV可能会导致一些问题, 本处翻译仅作参考

| A                                        | B                         | C                            | D     | E                                                            | F        |
| ---------------------------------------- | ------------------------- | ---------------------------- | ----- | ------------------------------------------------------------ | -------- |
| VERSION                                  | 253（请勿手动更改这些值） | --                           | --    | --                                                           | --       |
| SECTION                                  | 页码                      | 时间（仅适用于第一条扫描线） | 速度  | 位置/滚动模式<br>0 - T/Rebound<br>1 - B/Rebound<br>2 - T/Sweep<br>3 - B/Sweep<br>4 - T/Freeze<br>5 - B/Freeze  6 - T/Fall<br>7 - B/Fall<br>8 - T/End<br>9 - B/End | --       |
| 点击                                     | 页码                      | --                           | X坐标 | 0-独立  1+-链接ID                                            | 出现速度 |
| 拖动                                     | 页码                      | --                           | X坐标 | 链接ID                                                       | 出现速度 |
| 链                                       | 页码                      | --                           | X坐标 | 链接ID                                                       | 出现速度 |
| HOLD                                     | 页码                      | --                           | X坐标 | HOLD长度（页单位）  **HOLD长度（cv150〜249）**               | 出现速度 |
| 轻弹                                     | 页码                      | --                           | X坐标 | --                                                           | 出现速度 |
| 损伤                                     | 页码                      | --                           | X坐标 | 0-独立  1+-链接ID                                            | 出现速度 |
| **EXTEND  HOLD（cv1〜149, cv250〜251）** | **页码**                  | **--**                       | X坐标 | **链接ID**                                                   | --       |

 