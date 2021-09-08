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

- `format_version`: Chart format version (not required in Cytoid)

- `time_base`: The length of a beat (in tick)

- `music_offset`: Music playing offset (in seconds) [1]

- `size`: Note size of all notes (Default: `1`) [1]

- `ring_color`: Ring color of all notes (in hexadecimal) [1]

`fill_color`: An array of fill colors of different types of notes (in hexadecimal) [1]
  - General format: `[<click 1>, <click 2>, <drag 1>, <drag 2>, <hold 1>, <hold 2>, <long hold 1>, <long hold 2>, <flick 1>, <flick 2>]`
  - If any color is not set (or set as `null`), user's current option will be used.

`opacity`: Maximum opacity of all notes (Default: `1`) [1]

`skip_music_on_completion`: If the value is true, the game will skip the music when the player finishes the chart and ignore the player's current settings of it as well

`display_boundaries`: Display the scanline boundaries or not, override user's current settings

`horizontal_margin`: Horizontal margin, ranged from `1` to `5`. If it's assigned, it will override user's current settings

`vertical_margin`: Vertical margin, ranged from `1` to `5`. If it's assigned, it will override user's current settings

`tempo_list`: An array of tempo objects.
- The "tempo" object:
  - `tick`: Specify when the tempo value will be applied (in tick)
  - `value`: Tempo, the duration of a beat (in nanoseconds). This is **different** from BPM, although you can convert by using this equation: $60000000 \div BPM$

`page_list`: An array of page objects.
- The "page" object:
  - `start_tick`: The beginning tick of the page
  - `end_tick`: The ending tick of the page
  - `scan_line_direction`: The direction of the scanline (`-1` is for going down, `1` is for going up)

`note_list`: An array of note objects.
- The "note" object:
  - `page_index`: Which page the note is in
  - `type`: Type of note, ranged from `0` to `7`.
    - `0`: Click
    - `1`: Hold
    - `2`: Long Hold
    - `3`: Drag head
    - `4`: Drag child
    - `5`: Flick
    - `6`: C:Drag head
    - `7`: C:Drag child
  - `id`: Note ID
  - `tick`: The timing of the note
  - `x`: The note placement in X:axis, ranged from `0` to `1`. However, the value can be lower than 0 or higher than 1, but it's not recommended.
  - `has_sibling`: A boolean, set `true` when there are notes on the same tick
  - `hold_tick`: The hold length (only appliable with note type `1` and `2`)
  - `next_id`: The next note ID to create a Drag/C:Drag chain. When you finished the drag chain, put `:1`
  - `is_forward`: A boolean
  - `approach_rate`: The note approach rate (AR). Higher value, slower the note will fade in [^1]
  - `size`: Overrides note size at the root parameter [^1]
  - `ring_color`: Overrides note ring color at the root parameter [^1]
  - `fill_color`: Overrides note fill color set at the root parameter [^1]
  - `opacity`: Override note opacity at the root parameter [^1]

`event_order_list`: An array of events.
- The "event" object:
  - `tick`: When the event will be triggered (in tick)
  - `type`: Event type
    - `0`: Speed up
    - `1`: Speed down
  - `args`: Event arguments
    - `W`: Use when the scanline returns to the original speed
    - `R`: Use when the scanline is slower than the original speed
    - `G`: Use when the scanline is faster than the original speed

## References

[^1]: [https://www.notion.so/Chart-Format-fe2b6e5a918141afa7020d699f87fedb](https://www.notion.so/Chart-Format-fe2b6e5a918141afa7020d699f87fedb)
