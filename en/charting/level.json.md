# Building level.json file

- A level.json is a file that contains information about your chart.
- This file is necessary for previewing charts in CytoidPlayer and submitting charts to Cytoid.io.

### Arguments and their values

- `schema_version`: Determines your level schema version. Its value must be: `2`.
- `version`: Determines your level version. Start with `1`, if you changed something in your chart, go up by 1. Ex.: `"version": 1`
- `id`: Determines your chart's unique ID. Its value must be a string and lowercased, we recommend you use as your chart's unique ID: `<your_name>.<chart_name>`. Ex.: `"id": "abcde.testsong"`.
- `title`: The song title, its value must be a string. Ex.: `"title": "You are the Miserable"`
- `title_localized`: The localized song title, should be localized in English. This is **unnecessary** to be in your level.json file but we recommend using it if the song title is not in English.
- `artist`: The artist's name, its value must be a string. Ex.:`artist: "t+pazolite"`.
- `artist_localized`: The localized artist name, should be localized in English. This is **unnecessary** to be in your level.json file but we recommend using it if the artist's name is not in English.
- `artist_source`: A URL to the source of the music, artist's website (owner of the song), or even the game's website (that game must have the song you charted). Ex.: `"artist_source": "http://mutra.c-h-s.me/"`
-`illustrator`: The illustrator, its value must be a string and **do not use "unknown" or something like that**. Ex.: `"illustrator": "白祈QSR"`
- `illustrator_source`: A URL to the source of the background image, artist's website (owner of the background image) or even the game's website (that game must have the background image you used). Ex: `"illustrator_source": "https://www.pixiv.net/en/artworks/69136806"`

- `charter`: The charter's name, its value must be a string. Ex.: `"charter": "abcde"`
- `storyboarder`: The storyboarder's name, its value must be a string. This is **unnecessary** to be in your level.json file but we recommend using it if your level has a storyboard. Ex: `"storyboarder": "fghij"`

- `music`:
  - Use a curly bracket to start
  - `path`: The path to your music file, its value must be a string. Ex.: `"path": "music.wav"`
  - Use curly bracket again to mark as the end of this argument.
- `music_preview`:
  - Use a curly bracket to start
  - `path`: The path to your music file, its value must be a string. Ex.: `"path": "preview.wav"`
  - Use a curly bracket again to mark as the end of this argument.
- `background`:
  - Use a curly bracket to start
  - `path`: The path to your image file, its value must be a string. Ex.: `"path": "bg.png"`
  - Use a curly bracket again to mark the end of this argument.
- `charts`:
  - Step 1: Use a square bracket to start
  - Step 2: Use a curly bracket to initialize a new difficulty
    - `type`: Determines the difficulties of the chart, value must be a string and must be classified as one of three here: `easy`, `hard` and `extreme`. Ex.: `"type": "easy"`.
    - `name`: Determines the name of the current difficulty, value must be a string. Ex.: `"type": "Easy"`.
    - `difficulty`: Determines how hard the current difficulty is, value must be an integer and rated from 0 to 16
      - **Note: Use 0 if it's a troll chart, 16 is displayed as 15+ on Cytoid**
      - Ex.: `"difficulty": 13`
    - `path`: The path to your chart in the current difficulty. Ex.: `"path": "chart.easy.txt"`
    - `music_override`: Use this in-between 2 or more difficulties if they use a different background music
      - Use a curly bracket to start
      - `path`: The path to your music file, its value must be a string. Ex.: `"path": "preview.wav"`
      - Use curly bracket again to mark the end of this value
    - `storyboard`: Use this in-between 2 or more difficulties if they use a different storyboard
      - Use a curly bracket to start
      - `path`: The path to your storyboard file, its value must be a string. Ex.: `"path": "sb.hard.json"`
      - Use curly bracket again to mark the end of this value
  - Step 3: Use a curly bracket to mark the end of the current difficulty
  - Step 4 (optional): Repeat 2 and 3 if your level has more than 1 difficulty
  - Step 5: Use a square bracket to mark the end of `charts`



### Resources

###### level.json template
- You may copy this template and fill in the blank values with information relevant to your chart.
- **Remember that if an argument requires a string value, type inside `""`; if an argument is an integer, type next to `:`.**


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
      "music_override":
      {
        "path": ""
      },
      "storyboard":
      {
        "path": ""
      },
      "path": ""
    }
  ]
}
```

`! > Authors: alxdre; Editor: Melodion`
