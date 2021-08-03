---
title: C2 Chart Format
lang: en-US
---

# C2 Chart Format

Cytus II (C2) chart format is a JSON file, that means you can edit easily in any text editor. This article will explain its concept and parameters that appears in a chart file.

## Basic

### Variable types

- <Badges text="int" type="tips"/>: This badge means a parameter using an integer number. Ranged from `-2147483648` to `2147483647`.
- <Badges text="boolean" type="tips"/>: This badge means a parameter using a boolean. Only 2 values, `true` and `false`.
- <Badges text="double" type="tips"/>: This badge means a parameter using a number with decimal points.
- <Badges text="array" type="tips"/>: This badge means a parameter using an array.
- <Badges text="string" type="tips"/>: This badge means a parameter using a string.

### Parameter types

- <Badges text="Cytoid-only" type="warning">: This badge means it is a Cytoid unique parameter. Only Cytoid, CytoidPlayer and a few chart editors support it.
- <Badges text="Unsupported" type="danger">: This badge means it is an unsupported parameter in Cytoid. Cytoid will ignore it.

## Units

- Tick: The most basic unit of the format, play an important role in objects of the chart.
- Time base: The length of a beat.
- Tempo: Speed. Represents the duration of a beat, in microseconds. Therefore, it is **different** from **BPM**, but you can convert by using this equation: `60000000/<BPM>`.

## File structure

### Root structure

- `format_version` <Badges text="int" type="tips"/>: Format version
  - In Cytoid, this parameter is not required. You can take any number or you can remove, too.
  - However, in Cytus II, it is `1`.

- `time_base` <Badges text="int" type="tips"/>: The time base, as explained before. We recommend using a value of `480`.

- `start_offset_time` <Badges text="double" type="tips"/> <Badges text="Unsupported" type="danger">: Start offset time

- `end_offset_time` <Badges text="double" type="tips"/> <Badges text="Unsupported" type="danger">: End offset time

- `is_start_without_ui` <Badges text="boolean" type="tips"/> <Badges text="Unsupported" type="danger">: Start the game without UI. If the value is `true`, the game UI will not appear when playing.

- `music_offset` <Badges text="int" type="tips"/> <Badges text="Cytoid-only" type="warning">: The offset of the music.

- `skip_music_on_completion` : If the value is `true`, the game will skip the music when the player finishes the chart and ignore the player's current settings of it as well.

- `display_boundaries` <Badges text="boolean" type="tips"/> <Badges text="Cytoid-only" type="warning">: Display the scanline boundaries or not, override user's current settings.

- `horizontal_margin` <Badges text="int" type="tips"/> <Badges text="Cytoid-only" type="warning">: Horizontal margin, ranged from `1` to `5`. If it's assigned, it will override user's current settings.

- `Vertical_margin` <Badges text="int" type="tips"/> <Badges text="Cytoid-only" type="warning">: Vertical margin, ranged from `1` to `5`. If it's assigned, it will override user's current settings.

- `page_list` <Badges text="array" type="tips"/>: A list of pages.

- `tempo_list` <Badges text="array" type="tips"/>: A list of tempo values.

- `event_order_list` <Badges text="array" type="tips"/>: A list of events.

- `note_list` <Badges text="array" type="tips"/>: A list of notes.

### A deeper look

#### `page_list`

- `start_tick` <Badges text="int" type="tips"/>: The begin tick of a page.

- `end_tick` <Badges text="int" type="tips"/>: The end tick of a page.

- `scan_line_direction` <Badges text="int" type="tips"/>: The direction of the scanner (scanline). `-1` means scanline going down, `1` means scanline going up.

- `PositionFunction` <Badges text="Unsupported" type="danger">: Page position function.
  - `type`: Function type, using a value of `0` currently.
  - `arguments`: Function arguments.

#### `tempo_list`

- `tick` <Badges text="int" type="tips"/>: Determines the start tick with a tempo.

- `value`: The value of the tempo, see in [Units](./Units)

#### `note_list`

- `page_index` <Badges text="int" type="tips"/>: Which page the note is in.

- `type` <Badges text="int" type="tips"/>: Note type.
  - `0`: Click
  - `1`: Hold
  - `2`: Long hold
  - `3`: Drag head
  - `4`: Drag child
  - `5`: Flick
  - `6`: C-Drag head
  - `7`: C-Drag child
  - `8` <Badges text="Unsupported" type="danger">: Falling click
  - `9` <Badges text="Unsupported" type="danger">: Falling drag

- `id` <Badges text="int" type="tips"/>: Note ID. Put it in numerical order, make sure IDs don't overlap with others.

- `tick` <Badges text="int" type="tips"/>: The timing of the note.

- `x` <Badges text="double" type="tips"/>: The X-axis position of the note. Ranged from 0 - 1, `0` is furthest left, `1` is the furthest right. However, it still can be lower than 0 or higher than 1, but it's not recommended because it might become a big mess.

- `hold_tick`<Badges text="int" type="tips"/>: The hold length of the note, only type `1` and `2` are usable.

- `next_id` <Badges text="int" type="tips"/>: Determines the next note ID will be connected to make a Drag / C-Drag chain (means only `3`,`4`,`6` and `7` are usable). To stop the drag chain, put `-1` at the last note of the drag chain.

- `is_forward` <Badges text="boolean" type="tips"/>

- `has_sibling` <Badges text="boolean" type="tips"/>

- `NoteDirection` <Badges text="int" type="tips"/> <Badges text="Unsupported" type="danger">: The direction of the falling note (only type `8` and `9`).

#### `event_order_list`

- `tick` <Badges text="int" type="tips"/>: The tick that the event will be triggered.

- `event_list` <Badges text="array" type="tips"/>: The list of the events in that tick.
  - `type` <Badges text="int" type="tips"/>: Event type.
    - `0`: Speed up
    - `1`: Speed down
    - `2` <Badges text="Unsupported" type="danger">: Show UI
    - `3` <Badges text="Unsupported" type="danger">: Hide the UI
    - `4` <Badges text="Unsupported" type="danger">: Fade into the UI
    - `5` <Badges text="Unsupported" type="danger">: Fade out of the UI
    - `6` <Badges text="Unsupported" type="danger">: The animation shows the UI
    - `7` <Badges text="Unsupported" type="danger">: Animation hides the UI
    - `8` <Badges text="Unsupported" type="danger">: Self-definning text

  - `args` <Badges text="string" type="tips"/>: Event arguments
    - Type `0` and `1`:
      - `W`: When the scanline returns to the basic speed
      - `R`: When the scanline becomes faster than the basic speed
      - `G`: When the scanline becomes slower than the basic speed
    - From type `2` to type `7` <Badges text="Unsupported" type="danger">:
      - `0`: Combo
      - `1`: Score
      - `2`: Song title
      - `3`: Difficulty
      - `4`: Scanline
      - `5`: Boundary line
      - `6`: Audio spectrum
      - `7`: Progress bar
    - Type `8` <Badges text="Unsupported" type="danger">: It will be under this structure: `<Message>,<Color>`
