---
title: Game UI
lang: en-US
---

# Game UI

## Game modes

There are 5 game modes in Cytoid: Free Play, Community, Events, Training and Tiers.

### Free Play

> The classic game mode for everyone!

This mode allows you to:

- Select and play all downloaded levels even you’re offline.
- Display levels by category: All, Official, and Community
- Sort all levels by added date, played date, difficulty, title, and play count.
- Delete levels.

### Community

> The Community Area is the best way to browse and download 6000+ custom levels, all created by Cytoid players. New levels are uploaded every day, so be sure to check back daily!

This mode allows you to browse and download levels online without leaving the game. A CytoidID is required.

### Events

> We host seasonal as well as collaborative events with other independent creators/games. When that happens, they show up here.

You can play event charts, unlock event tier(s), and get character(s) in a limited time. A CytoidID is required.

### Training

> If you're just getting started and want to get better, this is the right place. Play the levels here first to get comfortable with Cytoid's gameplay.

This mode allows you to play 15 levels, ranged from Lv. 1 to Lv. 15. You also can tap the character on the left (Kaede) to get advice depending on your current rating. A CytoidID is required.

### Tiers

> The tier ranking system judges and quantifies your skill level at Cytoid; if you ever feel confident enough to take the challenge, please come anytime!

You will have to play **3 preset charts in a row** (with a HP gauge) and clear the requirements. You also **can not** pause or leaving the game while playing.

These tiers are sorted by difficulty, means higher tier, more difficult. Tier 6 is the current highest tier.

Only *Fast*, *Slow*, *No Scanner*, and *Invisible* modifiers are allowed.

## Game settings

- [ ] ### General

| Option name | Available options | Description |
|---|---|---|
| Language | | Select your preferred in-game language.|
| CDN region| International/Mainland China | CDN region.|
| Music volume | 0% ~ 100% | The volume of the music.|
| Sound effect volume | 0% ~ 100% | The volume of the sound effects. |
| Hit sound |None<br>Click 1 – 3<br>Shaker<br>Tambourine<br>Rim<br>Hat<br>Clap<br>Donk<br>8-bit<br>Quack| The hit sound. It will be played when the note is cleared. |
|Hold hit sound timing| Begin<br>End<br>Begin & End | Determines when the hit sound will be played for hold notes.<br>**Begin** – Only play the hit sound when the hold note begins.<br>**End** – Only play the hit sound when the hold note ends.<br>**Begin & End** – Play the hit sound when the hold begins and ends.|
| Hit taptic feedback | Off/On | Sets whether your device vibrates when hitting notes or not (iOS/iPadOS only).|
| Menu taptic feedback | Off/On | Sets whether your device vibrates when navigating through the menu or not (iOS/iPadOS only).|
| Graphics quality | Very low<br>Low<br>Medium<br>High<br>Ultra | Sets the game’s graphics quality. The higher quality, the higher battery and hardware requirements. |
| Storyboard effects | Off/On | Determines whether the Storyboard effects (shaders only) is on or off. |
| Skip music on completion | Off/On | Skips the remaining music when you finished the current level or not. |
| Base note offset | | Sets the device offset value (in seconds) and it will be applied on all levels while playing. |
| Headset note offset | | Sets the headset offset value (in seconds) and it will be applied on all level when you use a headset. |
| Offset setup wizard | | When you hit *Enter*, the *Offset setup wizard* will be started. It'll help you setting up the *Base note offset* easily through a test.|

### Gameplay


| Option name | Available options | Description |
|---|---|---|
| Early/Late indicators | Off/On | Sets whether the Early/Late indicators option is on or off. |
| Hitbox size (Click) | Small/Medium/Large | The hitbox size of Click notes. You don’t need to adjust unless you have some problems while trying to hit the notes.|
| Hitbox size (Drag) | Small/Medium/Large | The hitbox size of Drag/C-Drag notes.|
| Hitbox size (Hold) | Small/Medium/Large | The hitbox size of Hold/Long hold notes. |
| Hitbox size (Flick) | Small/Medium/Large | The hitbox size of Flick notes. |
| Horizontal margin | -4 ~ +4 | The left/right of play area. The higher value, the smaller play area, and contrariwise. |
| Vertical margin | -4 ~ +4 | The top/bottom of play area. The higher value, the smaller play area, and contrariwise.|

### Visual

| Option name | Available options | Description |
|---|---|---|
| Note size | 50% ~ 150% | The size of all notes. This option is not **affected** to hitbox size.|
| Clear FX size | 50% ~ 150% | The size of note clearing effect. |
| Play area boundaries | Off/On | Sets whether the play area boundaries is displayed or not.|
| Background opacity | 0% ~ 100% | The opacity of the background image. The higher value is, the brighter background is, and contrariwise. |
| Ring color | Hexadecimal RGB | The ring color. |
| Fill color (Click, up)| Hexadecimal RGB | The fill color of the Click note (up). |
| Fill color (Click, down)| Hexadecimal RGB | The fill color of the Click note (down). |
| Fill color (Drag, up)| Hexadecimal RGB | The fill color of the Drag note (up). |
| Fill color (Drag, down)| Hexadecimal RGB | The fill color of the Drag note (down). |
| Fill color (C-Drag, up)| Hexadecimal RGB | The fill color of the C-Drag note (up). |
| Fill color (C-Drag, down)| Hexadecimal RGB | The fill color of the C-Drag note (down). |
| Fill color (Hold, up)| Hexadecimal RGB | The fill color of the Hold note (up). |
| Fill color (Hold, down)| Hexadecimal RGB | The fill color of the Hold note (down). |
| Fill color (Long hold, up)| Hexadecimal RGB | The fill color of the Long hold note (up). |
| Fill color (Long hold, down)| Hexadecimal RGB | The fill color of the Long hold note (down). |
| Fill color (Flick, up)| Hexadecimal RGB | The fill color of the Flick note (up). |
| Fill color (Flick, down)| Hexadecimal RGB | The fill color of the Flick note (down). |
| Use fill color for Drag/C-drag child nodes | Off/On | Sets if the game will use fill color for Drag/C-Drag child nodes or not. |

### Advanced

| Option name | Available options | Description |
|---|---|---|
| DSP buffer size | | The buffer size of DSP (de-sampler). Lower value, lower latency but you should only adjust if the game can’t play the music properly. |
| Use Native Audio | Off/On | Sets whether the game will use Native Audio or not. **Off** – Use Unity’s audio playback API instead. It might give a high audio latency on your device but the game performance seems to be better.<br>**On** – Use Exceed7 Experiments’ Native Audio playback API. It will give a better and lower audio latency but hit sound might not play properly.|
| Profiler | Off/On | Displays the profiler (it will display game FPS, RAM usage and audio playback information).|
| Note ID | Off/On | Sets whether the game will display note ID or not, it’s really suitable if you’re testing your chart(s).|
| Development console | Off/On | Enable development console, it’s recommended to turn on to find out in-game bugs. |
| Experimental note AR | Off/On | Set whether the experimental note AR option is on or off.<br>**Off** – Using traditional note AR. <br>**On** – Using experimental note AR, the notes will fade in earlier and smaller. |
| Experimental note animations | Off/On | Set whether the experimental note animations option is on or off. |
| Judgment offset | | The offset of note's judgments (in seconds), for advanced players only.|
| APPLY LATEST LOCALIZATION | | Once clicked, the game will download and apply the latest localization temporarily. Recommended for the client translators.|
