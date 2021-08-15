---
title: C2 Chart Format
lang: en-US
---

# C2 Chart Format

Cytus II (C2) chart format is a JSON file, that means you can edit easily in any text editor. This article will explain its concept and parameters that appears in a chart file.

## Basic

### Variable types

- <Badge text="int"/>: This badge means a parameter using an integer number. Ranged from `-2147483648` to `2147483647`.
- <Badge text="boolean"/>: This badge means a parameter using a boolean. Only 2 values, `true` and `false`.
- <Badge text="double"/>: This badge means a parameter using a number with decimal points.
- <Badge text="array"/>: This badge means a parameter using an array.
- <Badge text="string"/>: This badge means a parameter using a string.

### Parameter types

- <Badge text="Cytoid-only" type="warning"/>: This badge means it is a Cytoid unique parameter. Only Cytoid, CytoidPlayer and a few chart editors support it.
- <Badge text="Unsupported" type="danger"/>: This badge means it is an unsupported parameter in Cytoid. Cytoid will ignore it.

## Units

- Tick: The most basic unit of the format, play an important role in objects of the chart.
- Time base: The length of a beat.
- Tempo: Speed. Represents the duration of a beat, in microseconds. Therefore, it is **different** from **BPM**, but you can convert by using this equation: `60000000/<BPM>`.

## File structure

### Root structure

- `format_version` <Badge text="int"/>: Format version
  - In Cytoid, this parameter is not required. You can take any number or you can remove, too.
  - However, in Cytus II, it is `1`.

- `time_base` <Badge text="int"/>: The time base, as explained before. We recommend using a value of `480`.

- `start_offset_time` <Badge text="double"/> <Badge text="Unsupported" type="danger"/>: Start offset time

- `end_offset_time` <Badge text="double"/> <Badge text="Unsupported" type="danger"/>: End offset time

- `is_start_without_ui` <Badge text="boolean"/> <Badge text="Unsupported" type="danger"/>: Start the game without UI. If the value is `true`, the game UI will not appear when playing.

- `music_offset` <Badge text="int"/> <Badge text="Cytoid-only" type="warning"/>: The offset of the music.

- `skip_music_on_completion` : If the value is `true`, the game will skip the music when the player finishes the chart and ignore the player's current settings of it as well.

- `display_boundaries` <Badge text="boolean"/> <Badge text="Cytoid-only" type="warning"/>: Display the scanline boundaries or not, override user's current settings.

- `horizontal_margin` <Badge text="int"/> <Badge text="Cytoid-only" type="warning"/>: Horizontal margin, ranged from `1` to `5`. If it's assigned, it will override user's current settings.

- `Vertical_margin` <Badge text="int"/> <Badge text="Cytoid-only" type="warning"/>: Vertical margin, ranged from `1` to `5`. If it's assigned, it will override user's current settings.

- `page_list` <Badge text="array"/>: A list of pages.

- `tempo_list` <Badge text="array"/>: A list of tempo values.

- `event_order_list` <Badge text="array"/>: A list of events.

- `note_list` <Badge text="array"/>: A list of notes.

### A deeper look

#### `page_list`

- `start_tick` <Badge text="int"/>: The begin tick of a page.

- `end_tick` <Badge text="int"/>: The end tick of a page.

- `scan_line_direction` <Badge text="int"/>: The direction of the scanner (scanline). `-1` means scanline going down, `1` means scanline going up.

- `PositionFunction` <Badge text="Unsupported" type="danger"/>: Page position function.
  - `type`: Function type, using a value of `0` currently.
  - `arguments`: Function arguments.

#### `tempo_list`

- `tick` <Badge text="int"/>: Determines the start tick with a tempo.

- `value`: The value of the tempo, see in [Units](./Units)

#### `note_list`

- `page_index` <Badge text="int"/>: Which page the note is in.

- `type` <Badge text="int"/>: Note type.
  - `0`: Click
  - `1`: Hold
  - `2`: Long hold
  - `3`: Drag head
  - `4`: Drag child
  - `5`: Flick
  - `6`: C-Drag head
  - `7`: C-Drag child
  - `8` <Badge text="Unsupported" type="danger"/>: Falling click
  - `9` <Badge text="Unsupported" type="danger"/>: Falling drag

- `id` <Badge text="int"/>: Note ID. Put it in numerical order, make sure IDs don't overlap with others.

- `tick` <Badge text="int"/>: The timing of the note.

- `x` <Badge text="double"/>: The X-axis position of the note. Ranged from 0 - 1, `0` is furthest left, `1` is the furthest right. However, it still can be lower than 0 or higher than 1, but it's not recommended because it might become a big mess.

- `hold_tick`<Badge text="int"/>: The hold length of the note, only type `1` and `2` are usable.

- `next_id` <Badge text="int"/>: Determines the next note ID will be connected to make a Drag / C-Drag chain (means only `3`,`4`,`6` and `7` are usable). To stop the drag chain, put `-1` at the last note of the drag chain.

- `is_forward` <Badge text="boolean"/>

- `has_sibling` <Badge text="boolean"/>

- `NoteDirection` <Badge text="int"/> <Badge text="Unsupported" type="danger"/>: The direction of the falling note (only type `8` and `9`).

#### `event_order_list`

- `tick` <Badge text="int"/>: The tick that the event will be triggered.

- `event_list` <Badge text="array"/>: The list of the events in that tick.
  - `type` <Badge text="int"/>: Event type.
    - `0`: Speed up
    - `1`: Speed down
    - `2` <Badge text="Unsupported" type="danger"/>: Show UI
    - `3` <Badge text="Unsupported" type="danger"/>: Hide the UI
    - `4` <Badge text="Unsupported" type="danger"/>: Fade into the UI
    - `5` <Badge text="Unsupported" type="danger"/>: Fade out of the UI
    - `6` <Badge text="Unsupported" type="danger"/>: The animation shows the UI
    - `7` <Badge text="Unsupported" type="danger"/>: Animation hides the UI
    - `8` <Badge text="Unsupported" type="danger"/>: Message

  - `args` <Badge text="string"/>: Event arguments
    - Type `0` and `1`:
      - `W`: When the scanline returns to the basic speed
      - `R`: When the scanline becomes faster than the basic speed
      - `G`: When the scanline becomes slower than the basic speed
    - From type `2` to type `7` <Badge text="Unsupported" type="danger"/>:
      - `0`: Combo
      - `1`: Score
      - `2`: Song title
      - `3`: Difficulty
      - `4`: Scanline
      - `5`: Boundary line
      - `6`: Audio spectrum
      - `7`: Progress bar
    - Type `8` <Badge text="Unsupported" type="danger"/>: It will be under this structure: `<Message>,<Color>`
