---
title: C2 chart format
lang: en-US
---

# C2 chart format

Cytus II (C2) chart format is a JSON file, that means you can edit easily in any text editor. This article will explain its concept and parameters that appears in a chart file.

## Parameters

:::warning WARNING!
This article aims at Cytoid compatibility, some tools might not be fully supported.
:::

### Root parameters

- **format_version**: chart format version (not required in Cytoid).

- **time_base**: the length of a beat (in tick).

- **music_offset**: music playing offset (in seconds).

- **size**: note size of all notes. Default: `1.0`.

- **ring_color**: ring color of all notes (in RGB hexadecimal).

- **fill_colors**: array of fill colors of **different types of notes** (in RGB hexadecimal format).
  - Format: `[<click 1>, <click 2>, <drag 1>, <drag 2>, <hold 1>, <hold 2>, <long hold 1>, <long hold 2>, <flick 1>, <flick 2>]`

- **opacity**: maximum opacity of all notes. Default: `1.0`.

- **skip_music_on_completion**: if `true`, the game will skip the music when the player finishes the chart.

- **display_boundaries**: display the scanline boundaries.

- **horizontal_margin**: the horizontal margin (ranged from `1` to `5`).

- **vertical_margin**: the vertical margin (ranged from `1` to `5`).

- **tempo_list**: array of [Tempo](./chart-json.html/#tempo) objects.

- **page_list**: array of [Page](./chart-json.html/#page) objects.

- **note_list**: array of [Note](./chart-json.html/#note) objects.

- **event_order_list**: array of [EventOrder](./chart-json.html/#order) objects.

### Objects

#### Tempo

- **tick**: Specify when the tempo will be applied.

- **value**: the duration of a beat (in nanoseconds).

:::warning NOTICE!
This is different from BPM. However, you still can convert by using this equation: $60000000 \div BPM$.
:::

#### Note

- **page_index**: which page the note is in.

- **type**: Type of note, ranged from 0 to 7.
  - `0`: Click
  - `1`: Hold
  - `2`: Long Hold
  - `3`: Drag head
  - `4`: Drag child
  - `5`: Flick
  - `6`: C-Drag head
  - `7`: C-Drag child

- **id**: the note ID

:::warning NOTICE!
When you chart, be sure that the current note ID is **different** from the others.
:::

- **tick**: the note timing (in tick).

- **x**: the note position, in X-axis.

- **has_sibling**: let the game know there is any other note in the same tick or not.

- **hold_tick**: the length of the hold note

:::warning NOTICE!
This parameter is only usable in Hold and Long Hold notes (type `1` and `2`).
:::

- **next_id**: the next note ID to make a Drag/C-Drag chain

:::warning NOTICE!
This parameter is only usable in Drag and C-Drag notes (type `3`, `4`, `6`, and `7`).
:::

:::tip TIPS
When you want to finish the Drag/C-Drag chain, set it to `-1`.
:::

- **is_forward**

#### EventOrder

- **tick**: specify when the event will be triggered.

- **event_list**: array of [ChartEvent](./chart-json.html/#chartevent) object

#### ChartEvent

- **type**: the event type

- **args**: the event arguments
  - `W`: Use when the scanline returns to the original speed
  - `R`: Use when the scanline is slower than the original speed
  - `G`: Use when the scanline is faster than the original speed
