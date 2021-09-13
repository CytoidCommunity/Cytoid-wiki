---
title: Chart with PCtyx
lang: en-US
prev: "../audio.md"
next: "../cytoid/packing.md#packing-with-a-help-of-pctyx"
---

# Chart with PCtyx

::: warning NOTICE
This is a guide about how to set up PCtyx.  
You will need to read [PCtyx’s official documentation](https://docs.google.com/document/d/1BhSrt75mdEBCJfKPf5B2WlgmuBRJ6WmWviH95-x4Sqk) later.
:::

## Getting PCtyx binaries on GitHub

1. Go to PCtyx repository on [GitHub](https://github.com/XionUzuki/PCtyx)

2. Look at the right sidebar, click on **Releases**

3. Carefully read the release note to choose a suitable version for your usage

4. On *Assets*, choose the zipped file depending on your current operating system (OS) and architecture

5. Check your file again, the file will look like this: `pctyxeditor_<version>_<OS><architecture>.zip`. Example: `pctyxeditor_300a03_win64.zip` (means version: 300a03, OS: Windows, Architecture: x64)

6. Extract the downloaded file somewhere you wanted

## Running PCtyx

### Windows

Just go to the PCtyx folder and run PCtyxEditor.exe

### MacOS

It depends on which version you're using.

**If you're using v210 or higher:**

Just go to the PCtyx folder and run pctyxeditor.app

**If you're using v201:**

Follow these steps before running:

1. Download [NW.js](https://nwjs.io/downloads/) (using the Stable version is recommended) and extract `nwjs.app` into a new folder, called as New Project below.
2. Copy `keymap.json` to that new folder where you extracted New Project.
3. Right-click `pctyxeditor.app` and select "Show Package Contents".
4. Copy PCtyx's `Contents/Resources` folder.
5. Right-click --> "Show Package Contents" on `nwjs.app` and replace the `Contents/Resources` folder with the copied PCtyx one.
6. Download [FFmpeg](https://github.com/iteufel/nwjs-ffmpeg-prebuilt/releases) and extract `<your NW.JS version>-osx-x64.zip`, then copy `libffmpeg.dylib`.
7. Go to `nwjs.app`'s `Contents/Frameworks/nwjs Framework.framework/Versions/Current` and replace the `libffmpeg.dylib` with the copied one.

You don't need to do these again in the future.

### Linux

1. Go to the PCtyx folder

2. Allow PCtyx to execute as a program. If you don't know how follow one of these methods

- Method 1: Allowing by using Terminal

Run Terminal and execute this command:

```shell
chmod a+x PCtyxEditor
```

- Method 2: Allowing without using Terminal

Right-click on PCtyxEditor file, choose Properties → Permissions, check the Allow executing file as program box

::: warning Warning!
Depending on your current distro and desktop environment, this method might not work or be different from the instruction.
:::

3. Run PCtyxEditor file

## Troubleshooting

### Windows

If PCtyx isn’t working, try to install DirectX 9 by running dxwebsetup.exe in the PCtyx folder. If it still doesn’t work, please update your graphics driver.

### Mac

None.

### Linux

None.

::: tip

You can find more information and troubleshoot by reading the README.txt file in the PCtyx folder.

:::

Ready to go? Read PCtyx’s official documentation at [here](https://docs.google.com/document/d/1BhSrt75mdEBCJfKPf5B2WlgmuBRJ6WmWviH95-x4Sqk)
