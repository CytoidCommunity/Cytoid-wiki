---
title: Game settings
lang: en-US
---

# {{$frontmatter.title}}

## General

<table>
  <tr>
    <th>Option name</th>
    <th>Available option(s)</th>
    <th>In-game description</th>
  </tr>
  <tr>
    <td>Language</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>CDN region</td>
    <td>International/Mainland China</td>
    <td>Choose the nearest region</td>
  </tr>
  <tr>
    <td>Music volume</td>
    <td>0% ~ 100%</td>
    <td></td>
  </tr>
  <tr>
    <td>Sound effect volume</td>
    <td>0% ~ 100%</td>
    <td></td>
  </tr>
  <tr>
    <td>Hit sound</td>
    <td>
      None<br>
      Click 1 – 3<br>
      Shaker<br>
      Tambourine<br>
      Rim<br>
      Hat<br>
      Clap<br>
      Donk<br>
      8-bit<br>
      Quack<br>
    </td>
    <td>Played when note is cleared</td>
  <tr>
    <td>Hold hit sound timing</td>
    <td>
      Begin<br>
      End<br>
      Begin & End<br>
    </td>
    <td>When to play hit sounds for hold notes</td>
  </tr>
  <tr>
    <td>Hit taptic feedback</td>
    <td>Off/On</td>
    <td>Provide taptic feedback when note is cleared</td>
  </tr>
  <tr>
    <td>Menu taptic feedback</td>
    <td>Off/On</td>
    <td>Enable taptic feedback in menus</td>
  </tr>
  <tr>
    <td>Graphics quality</td>
    <td>
      Very low<br>
      Low<br>
      Medium<br>
      High<br>
      Ultra<br>
    </td>
    <td>Lower quality saves battery and results in higher frame rates</td>
  </tr>
  <tr>
    <td>Storyboard effects</td>
    <td>Off/On</td>
    <td>Recommended for high-end devices only</td>
  </tr>
  <tr>
    <td>Skip music on completion</td>
    <td>Off/On</td>
    <td>Otherwise wait for music to finish</td>
  </tr>
  <tr>
    <td>Base note offset</td>
    <td>Floating-point number</td>
    <td>Added to each level's individual note offset</td>
  </tr>
  <tr>
    <td>Headset note offset</td>
    <td>Floating-point number</td>
    <td>
      Added to note offset when using headset<br>
      <b>Default</b>: 0.05
    </td>
  </tr>
  <tr>
    <td>Offset setup wizard</td>
    <td></td>
    <td>Easily calibrate base note offset</td>
  </tr>
</table>

## Gameplay

<table>
  <tr>
    <th>Option name</th>
    <th>Available options</th>
    <th>In-game description</th>
  </tr>
  <tr>
    <td>Early/Late indicators</td>
    <td>Off/On</td>
    <td>Displayed when notes cleared early/late</td>
  </tr>
  <tr>
    <td>Hitbox size (Click)</td>
    <td>Small/Medium/Large</td>
    <td>Larger hitboxes make notes easier to hit</td>
  </tr>
  <tr>
    <td>Hitbox size (Drag)</td>
    <td>Small/Medium/Large</td>
    <td></td>
  </tr>
  <tr>
    <td>Hitbox size (Hold)</td>
    <td>Small/Medium/Large</td>
    <td></td>
  </tr>
  <tr>
    <td>Hitbox size (Flick)</td>
    <td>Small/Medium/Large</td>
    <td></td>
  </tr>
  <tr>
    <td>Horizontal margin</td>
    <td>-4 ~ +4</td>
    <td>The left/right of play area</td>
  </tr>
  <tr>
    <td>Vertical margin</td>
    <td>-4 ~ +4</td>
    <td>The top/bottom of play area</td>
  </tr>
</table>

## Visual

| Option name                                | Available options | In-game description                         |
| ------------------------------------------ | ----------------- | ------------------------------------------- |
| Note size                                  | 50% ~ 150%        | Display size of notes (hitboxes unaffected) |
| Clear FX size                              | 50% ~ 150%        | Display size of note clear effects          |
| Play area boundaries                       | Off/On            | Display play area boundaries                |
| Background opacity                         | 0% ~ 100%         | Adjust the background brightness            |
| Ring color                                 | Hexadecimal RGB   | Change the note ring color                  |
| Fill color (Click, up)                     | Hexadecimal RGB   | Change the click note fill color            |
| Fill color (Click, down)                   | Hexadecimal RGB   |                                             |
| Fill color (Drag, up)                      | Hexadecimal RGB   | Change the drag note fill color             |
| Fill color (Drag, down)                    | Hexadecimal RGB   |                                             |
| Fill color (C-Drag, up)                    | Hexadecimal RGB   | Change the c-drag note fill color           |
| Fill color (C-Drag, down)                  | Hexadecimal RGB   |                                             |
| Fill color (Hold, up)                      | Hexadecimal RGB   | Change the hold note fill color             |
| Fill color (Hold, down)                    | Hexadecimal RGB   |                                             |
| Fill color (Long hold, up)                 | Hexadecimal RGB   | Change the long hold note fill color        |
| Fill color (Long hold, down)               | Hexadecimal RGB   |                                             |
| Fill color (Flick, up)                     | Hexadecimal RGB   | Change the flick note fill color            |
| Fill color (Flick, down)                   | Hexadecimal RGB   |                                             |
| Use fill color for Drag/C-drag child nodes | Off/On            | Turn off to use ring color instead          |

## Advanced

<table>
  <tr>
    <th>Option name</th>
    <th>Available options</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>DSP buffer size</td>
    <td></td>
    <td>Adjust only if music is not playing properly</td>
  </tr>
  <tr>
    <td>Use Native Audio</td>
    <td>Off/On</td>
    <td>Disable if hit sounds feel too late</td>
  </tr>
  <tr>
    <td>Profiler</td>
    <td>Off/On</td>
    <td>Display frame rates and RAM usage</td>
  </tr>
  <tr>
    <td>Note ID</td>
    <td>Off/On</td>
    <td>For level debugging purposes</td>
  </tr>
  <tr>
    <td>Development console</td>
    <td>Off/On</td>
    <td>Toggle development console, it’s recommended to turn on to find out in-game bugs.</td>
  </tr>
  <tr>
    <td>Experimental note AR</td>
    <td>Off/On</td>
    <td>
      Set whether the experimental note AR option is on or off.<br>
      <b>Off</b> – Uses traditional note AR.<br>
      <b>On</b> – Uses experimental note AR, the notes will fade in earlier and smaller.
    </td>
  <tr>
    <td>Experimental note animations</td>
    <td>Off/On</td>
    <td>Set whether the experimental note animations option is on or off.</td>
  </tr>
  <tr>
    <td>Judgment offset</td>
    <td>Floating-point number</td>
    <td>For advanced players only</td>
  </tr>
  <tr>
    <td>APPLY LATEST LOCALIZATION</td>
    <td></td>
    <td>Once clicked, the game will download and apply the latest localization temporarily.</td>
  </tr>
</table>
