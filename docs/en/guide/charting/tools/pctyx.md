---
prev: "../audio.html"
next: "../finish/packing.md#packing-with-a-help-of-pctyx"
---

# Charting with PCtyx

::: warning NOTICE
This article is a guide about how to set up PCtyx.
You will need to read [PCtyx’s official documentation](https://docs.google.com/document/d/1BhSrt75mdEBCJfKPf5B2WlgmuBRJ6WmWviH95-x4Sqk) later.
:::

## Getting PCtyx binaries on GitHub

1. Go to PCtyx's repository on [GitHub](https://github.com/XionUzuki/PCtyx).

2. Look at the right sidebar, click on [Releases](https://github.com/XionUzuki/PCtyx/releases).

3. Carefully read the release note to choose a suitable version for your usage.

4. On *Assets*, choose the zipped file depending on your current operating system (OS) and architecture.

5. Check your file again, the file will look like this: `pctyxeditor_<version>_<OS><architecture>.zip`. Example: `pctyxeditor_300a03_win64.zip` (means version: 300a03, OS: Windows, Architecture: x64).

6. Extract the downloaded file somewhere you want to.

## Running PCtyx

### Windows

Just go to the PCtyx folder and run `PCtyx Editor.exe`.

### MacOS

It depends on which version you're using.

::: details v210 or higher:
Just go to the PCtyx folder and run `pctyxeditor.app`.
:::

::: details v201:

Follow these steps before running:

1. Download [NW.js](https://nwjs.io/downloads/) **(using the Stable version is recommended)** and extract `nwjs.app` into a new folder.

2. Copy `keymap.json` to that new folder where you extracted `nwjs.app`.

3. Right-click `pctyxeditor.app` and select **Show Package Contents**.

4. Copy PCtyx's `Contents/Resources` folder.

5. **Right-click -->** ***Show Package Contents*** on `nwjs.app` and replace the `Contents/Resources` folder with the copied PCtyx one.

6. Download [FFmpeg](https://github.com/iteufel/nwjs-ffmpeg-prebuilt/releases) and extract `<your NW.JS version>-osx-x64.zip`, then copy `libffmpeg.dylib`.

7. Go to `nwjs.app`'s `Contents/Frameworks/nwjs Framework.framework/Versions/Current` and replace the `libffmpeg.dylib` with the copied one.

You don't need to do these again in the future.

:::

### Linux

1. Go to the PCtyx folder.

2. Now, you need to allow PCtyx to execute as a program. Run Terminal and execute this command:

```shell
chmod a+x PCtyxEditor
```

3. Run  `PCtyxEditor` file.

## Troubleshooting

### Windows

If PCtyx isn’t working, try to install DirectX 9 by running `dxwebsetup.exe` in the PCtyx folder. If it still doesn’t work, please update your graphics driver.

### MacOS

None.

### Linux

None.

::: tip
You can find more information and troubleshoot by reading the README.txt file in the PCtyx folder.
:::

Ready to go? Read PCtyx’s official documentation at [here](https://docs.google.com/document/d/1BhSrt75mdEBCJfKPf5B2WlgmuBRJ6WmWviH95-x4Sqk).
