---
title: Building a level.json file
lang: en-US
author: alxdre (Author), Melodion, KS62 (Editor)
---

# Building a level.json file

A level.json is a metadata file that stores crucial data of your levels. (e.g., the song’s title, the path to the background image, etc.)  
The following is a list of fields you can find in a level.json, what values you should type in them, and which ones are required to fill in before uploading to CytoidIO.

## Parameters

### Schema version, level version, and level ID

- **schema_version** <Badge text="required" type="error"/>: your level schema version.

::: danger NOTICE!
To upload to CytoidIO, its value **must** be: `2`.
::::

- **version** <Badge text="required" type="error"/>: your level version, start with `1`; if you changed something in your chart, go up by 1, e.g.: `"version": 2`.

- **id** <Badge text="required" type="error"/>: your level's unique ID, its value **must** be a string and **lowercased**.

::: warning NOTICE!
We recommend you use your chart's unique ID as: `<your_name>.<song_name>`. E.g.: `"id": "abcde.testsong"`.
:::

### Basic level information

#### Song title

- **title**: the song title in its original language
  - Its value **must** be a string, e.g.: `"title": "You are the Miserable"`

- **title_localized**: you only need to use this in case the song title has an alternative title or is not in English.

#### Artist information

- **artist**: the artist's name; its value **must** be a string. E.g.: `artist: "t+pazolite"`.

- **artist_localized**: the localized artist's name in English. You only need to use this if the artist's name is not in English.

- **artist_source**: a URL to the source of the music, artist's website (owner of the song), or even the game's website (that game **must** have the song you charted). E.g.: `"artist_source": "http://mutra.c-h-s.me/"`.

#### Illustrator information

- **illustrator**: the illustrator's name, Its value **must** be a string. E.g.: `"illustrator": "白祈QSR"`.

::: warning NOTICE!
Do not use "unknown" or something like that as the illustrator!
:::

- **illustrator_source**: a URL to the source of the background image, artist's website (owner of the background image), or even the game's website (that game **must** have the background image you used). E.g.: `"illustrator_source": "https://www.pixiv.net/en/artworks/69136806"`.

#### Charter and storyboarder

- **charter**: the charter's name. Its value **must** be a string. E.g.: `"charter": "abcde"`.

- **storyboarder**: the storyboarder's name. Its value **must** be a string. You only need to use this if your level has a storyboard. Ex: `"storyboarder": "fghij"`.

### File paths

#### Path to music, music preview, and background file

- **music** <Badge text="required" type="error"/>:
  - Start with a curly bracket: `{`.
  - **path**: the path to your music file, its value **must** be a string. E.g.:`"path": "music.ogg"`.
  - Use another curly bracket: `}` to mark as the end of this argument.

- **music_preview** <Badge text="required" type="error"/>:
  - Start with a curly bracket: `{`.
  - **path**: the path to your music file. Its value **must** be a string. E.g.:`"path": "preview.mp3"`.
  - Use another curly bracket: `}` to mark as the end of this argument.

- **background** <Badge text="required" type="error"/>:
  - Start with a curly bracket: `{`.
  - **path**: the path to your image file, its value **must** be a string. E.g.:`"path": "bg.png"`.
  - Use another curly bracket: `}` to mark the end of this argument.

#### Creating level difficulty(-ies)

In order to create level difficulty(-ies), you need to use  **charts** parameter.

First, start with a square bracket: `[`. Then, initialize a new difficulty with a curly bracket: `{`. Here are a few parameters you need to use:
- **type** <Badge text="required" type="error"/>: the difficulty type of the chart. Its value **must** be a string and classified as one of three here: `easy`, `hard`, and `extreme`. E.g.: `"type": "extreme"`.

- **name**: the name of the current difficulty, its value **must** be a string. E.g.: `"name": "Extra"`.

- **difficulty** <Badge text="required" type="error"/>: determines the difficulty of the chart, its value **must** be an integer and rated from 0 to 16. E.g.: `"difficulty": 13`.

::: warning NOTICE
Use `0` if the chart is a troll chart. `16` or higher will display as *15+* on Cytoid.
:::

- **path** <Badge text="required" type="error"/>: the path to your chart in the current difficulty, e.g.: `"path": "chart.easy.txt"`.
- **music_override**: Use this in-between two or more difficulties if they use a different song file.

  - Start with a curly bracket: `{`.
  - **path**: The path to your music file. Its value **must** be a string. E.g.:`"path": "preview.wav"`.
  - Use another curly bracket: `}` to mark as the end of this value.

- **storyboard**: Use this in-between two or more difficulties if they use a different storyboard.

  - Start with a curly bracket: `{`.
  - **path**: The path to your storyboard file. Its value **must** be a string. E.g.:`"path": "sb.hard.json"`.
  - Use another curly bracket: `}` to mark as the end of this value.

Use another curly bracket: `}` to mark the end of the current difficulty.  
If you want to create a new difficulty, use curly brackets to initialize it and repeat.

When finished, you use another square bracket: `]` to mark the end of `charts`.

## Resources

### level.json template

You may copy this template and fill in the blank values with information relevant to your chart.  
**Remember, if a parameter requires a string value, type inside `""`; if a  is an integer, type next to `:`.**

```json
{
  "schema_version": 2,
  "version": ,

  "id": "",

  "title": "",
  "title_localized": "",

  "artist": "",
  "artist_localized": "",
  "artist_source": "",

  "illustrator": "",
  "illustrator_source": "",

  "charter": "",
  "storyboarder": "",

  "music": {
    "path": ""
  },
  "music_preview": {
    "path": ""
  },
  "background": {
    "path": ""
  },

  "charts": [
    {
      "type": "",
      "name": "",
      "difficulty": ,      
      "path": "",
      "music_override":
      {
        "path": ""
      },
      "storyboard":
      {
        "path": ""
      }
    }
  ]
}
```

## Extras: Using level.json generators

### Generating a level.json with PCtyx

In the PCtyx menu, click *Cytoid Settings*. Then, type what it tells you to do and select the chart files. Now, click *Create level.json* and save the level.json file wherever you want.

![PCtyx level.json generator](./_sources_level.json.md/pctyx.jpg)

::: warning WARNING!
PCtyx cannot display some characters and will show them as white boxes.
:::

### Generating a level.json with Cylheim

After finishing a chart in Cylheim, click the top-left button and look down, then click *Export to Cytoid*. You will see the following window:

![Cylheim's Cytoid Level Compiler](./_sources_level.json.md/cyl1.png)

Type what it tells you to do and click on the *Charts* tab after doing so.

In the *Charts* tab, Click on *Add chart info*. Then select a chart file and change the difficulty from the slider.

![Charts](./_sources_level.json.md/cyl2.png)

After this, click the arrow below, select *Export metadata*, and save the level.json file.

![Export metadata](./_sources_level.json.md/export_cyl.png)

