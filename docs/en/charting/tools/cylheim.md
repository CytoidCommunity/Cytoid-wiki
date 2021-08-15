---
title: Charting with Cylheim
lang: en
finish: true
author: Thanh9356(translate), Teages(Article), GattoKai(Video)
next: ../cytoid/packing.md
---

# Getting binaries and running Cylheim 

1. Go to Cylheim repository on GitHub at [*here*](https://github.com/Horiztar/Cylheim-Windows/)

2. Look at the right sidebar, click on [*Releases*](https://github.com/Horiztar/Cylheim-Windows/releases)

3. Download the zipped file or **the installer(Recommend)** depending on your architecture

::: tip Quick Setup
We recommend you to download the installer, then you can install Cylheim like other software. 
:::

::: warning Notice
Please choose the correct architecture (if you don't know, take a look at Settings or Control Panel). If not, Cylheim might not work properly.
:::

If you downloaded the zipped file, follow from the step 4. If not, you can find the shortcut of Cylheim on you desktop, then follow from the step 6. 

4. Extract the zipped file to the folder you wanted, if you can't open and extract the file, download [*7-Zip*](https://www.7-zip.org/)

5. Go to the Cylheim folder, run *Cylheim.exe.* 

6. If this is your first time running Cylheim, this screen will be shown up, just click *I accept*.

![Terms of use agreement screen](./_sources_cylheim.md/welcome.jpg)

However, if there is a message appearing like the image below, please install .NET 6 Desktop Runtime at [here](https://dotnet.microsoft.com/download/dotnet/6.0).

![.NET not installed error](./_sources_cylheim.md/dotnet_error.png)

# Using Cylheim

Before we start, you should prepare an edited audio file (we have mentioned how to do it in previous article). For this tutorial, we'll use Yunomi\'s track: [夢色パレード (w/ 桃箱 & miko)](https://iamyunomi.bandcamp.com/track/w-miko-6) (CC BY-NC-SA 3.0 licensed).

For easier chart management, we recommend that you should put in a separate folder for each track, like this:

![Chart management](./_sources_cylheim.md/folder1.jpg)

When you're finished, you can move to the next section.

## Start charting

After opening Cylheim (or accepting Cylheim's terms of use in the first run), you can see the welcome screen

![Welcome screen](./_sources_cylheim.md/welcome2.jpg)

Next, click *New Project* and create the project file in the folder

![Creating a new project](_sources_cylheim.md/new_project.jpg)

### A look of the UI

Now, we will take a look of Cylheim's UI

![Basic UI](./_sources_cylheim.md/editor_ui.jpg)

1. Toolbar & Title bar: You can hover the
    icons to know their function.

2. Chart list: This will help manage each chart in your current chart project, click the *+* button to create a new chart in the project.

3. Designing view: The main area for you to create notes and see note placement in a page.

4. Sidebar: Use it to perform advanced operations in the chart.

5. Status bar: From left to right: Cylheim status, total note count, selected note count, previewing aspect ratio, note size controller, audio / tap FX volume, notifications.

### Creating a new chart

Click the + button in the chart list, a window will be appeared

![New Chart](./_sources_cylheim.md/new_chart.jpg)

The UI has break into four parts by lines, from up to down their
function are: **import chart file**, **basic information of the chart**, **editor appearance** and **presets for the appearance**.

We only need to enter the basic information of the chart here, which are: **chart file's name**, **path to music file** and **initial BPM**

> Duration will be automatically detected and filled in after music file chosen, no need to manually type them

We are going to make an Easy difficulty for the song, so the chart name should be `Easy.json`, choose the music file, and type in the BPM of the song, which is `160`.

Click **Create** and you're done

### Basic usage

> Cylheim's controls are very simple to learn!

#### Understanding the Shortcuts

You can also go to **Settings --> Shortcut** to edit the Shortcut for your own preference.

|Default shortcut             |Function                            |
|-----------------------------|------------------------------------|
|Space                        |Start/stop the chart playback       |
|Ctrl+Space                   |Stop and stay at that page          |
|Ctrl+Z                       |Undo                                |
|Ctrl+Y                       |Redo                                |
|Ctrl+C                       |Copy                                |
|Ctrl+V                       |Paste                               |
|Ctrl+X                       |Cut                                 |
|Ctrl+A                       |Select all notes in the current page|
|Ctrl+Shift+A                 |Select all notes                    |
|Scroll wheel up / Page Up    |Go to previous page                 |
|Scroll wheel down / Page Down|Go to the next page                 |

#### Add notes

Cylheim is designed to add all kinds of notes with your mouse easily (excluding Click-Drag).

##### Add Click

Move your cursor to where you want to add the note, then **left click**

##### Add Hold / Long Hold

At where the hold note starts, **left click** and hold, then move your cursor to where the hold ends and release the click.

::: tip Tips: Long holds
While holding, you can use Shortcuts and go to next page, which also
extends the hold to the next page

Hold will turn into Long Hold when the Hold is longer than one page
::::

##### Add Flick

**Left click and hold** on where the flick should be, then drag left / right until you see the click image becomes Flick, here you can release your **left click**

##### Add Drag

**Right click and hold** on where the drag starts, move the cursor to where more drags should be added and **left click,** you may continue holding the **right click** button and repeat to add more drags

::: tip Tips
Connecting and Disconnecting drags: Select the drags you want to connect and click the **Connect** button from the toolbar.Same do if you want to disconnect, select the drags and click the **Disconnect** button.

Extending drags: Select then **Right click and hold** the drag you want to extend and **Left click** on where to extend.

Cross pages drag: Use the shortcut to switch pages while holding **Right click** to make your drags cross page

Click-drag (C-Drag): While adding, hold **shift** and the drag will become a C-Drag
:::

#### Scanline speed

Cylheim is designed to use C2's format, so for speed changes, you will two options

##### Change page's size

Cylheim has two buttons just for this
![Page size](_sources_cylheim.md/half_page_button.jpg)

You can also change the size to exactly what you want by opening
**Sidebar --> Page manager**

::: tip Tips: Still don't understand why?
[Try reading C2's chart format artcle](./chart-json)
:::

##### Changing BPM

::: warning Warning!
**Only** change the BPM when:

1. Changing Page size doesn't give you the result you wanted, or
2. When the song itself changes its' BPM

You may do so by opening **Sidebar --> Tempo Manager**
:::

:::tip Tips
Changing existing BPM: Find out that the start BPM is wrong? Need to change an existing BPM? You can add an BPM on the same tick to override them.

Keeping where things are while changing BPM: Changing BPM may off-sync existing stuffs on the chart (Notes, Event, Chart/Page duration), *Tempo Manager* have an option to keep these in-sync.
:::

#### Generating events

You need to add *Speed up / Speed down* warnings while scanline speed changes.

You can use the shortcut **Ctrl + E** to let Cylheim do it automatically for you

#### Playback speed

Playback speed may need to change to get more accurate sounds

Tip: you can increase the accuracy of slow playback by turning on **Alter audio sampling rate for playback speed adaptation** in **Settings --> Audio**

The drawback is this will also pitch down the song you're playing

## Sharing and packing your chart

### Record a chart preview of your chart

Cylheim has a built-in player, activate it by clicking the **Playback window** button on the toolbar

Use recording software to record the video, we recommend [OBS Studio](https://obsproject.com/download)

::: tip Tips
If you need to record with a low-end computer due to different reasons, we have the following ways to lower the lags:

1. Record with lower resolution
2. Slowdown playback and speed it up with video editors
3. Turn off all unused apps to save some CPU usage (Cylheim uses CPU for the playback window)

If these tips is not helpful, try using Xbox Game Bar or using another video recorder
:::

### Packing into a Cytoidlevel file

Cylheim has a build-in Cytoid level packer, which export your chart into a Cytoid level

Click the top left button and in the menu, click **Export to Cytoid**

Follow the tips, fill in the metadata and chart and you're done

::: tip Tip: adding Storyboard?
You can also include storyboard files and resources while packing
:::

# Video Tutorial (in Chinese, outdated)

<BilibiliPlayer
  aid="798679631"
  bvid="BV1Ly4y1m7Np"
  cid="283509706"
/>
