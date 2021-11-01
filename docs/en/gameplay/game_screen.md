---
title: Game screen
lang: en-US
---

# {{$frontmatter.title}}

## Selection screen


### Leaderboard

![Leaderboard](./_source_game_screen.md/leaderboard.png){.side-img .icon-img}

After touching on the *Leaderboard* icon, a leaderboard of the current level is shown, and allow players to see top ranking and their current ranking (requires CytoidID).

### Level rating

![Rating](./_source_game_screen.md/rating.png){.side-img .icon-img}

This allows players to see rate count and rate a level, ranged from 0.5 ~ 5.0.

### Game options

![Game options](./_source_game_screen.md/game_option.png){.side-img .icon-img}

This allows players to enable/disable Practice mode and modifiers.

Practice Mode
: When *Practice Mode* is on, a more lenient timing windows will be used, however, scores won't be shown in the leaderboard.
: A *Practice Mode* indicator will be shown while in playing screen.


:::details Timing windows comparison
|Judging grade   | Practice mode: Off | Practice mode: On  |
|:---------------|:-------------------|:-------------------|
| Perfect        | ±40ms              | ±70ms              |
| Great          | ±70ms              | -200ms ~ 150ms     |
| Good           | -200ms ~ 150ms     | -400ms ~ 200ms     |
| Bad            | -400ms ~ 200ms     | -800ms ~ 300ms     |
| Miss           | >200ms             | >300ms             |

:::

#### Modifiers

Modifiers help players adjust gameplay experience based on their preference. For a list of modifiers, see the *Modifiers* article.

### Level and game settings

![Game settings](./_source_game_screen.md/game_settings.png){.side-img .icon-img}

This allows players to see and adjust level and game settings.

Current level settings
: This allows to adjust level note offset, by accessing to *Calibration Mode* or entering a desired number manually. These settings are just affected to current level.

Game settings
: Allows to adjust game settings, this is also affected to other level(s) and the game itself. For a list of game settings see the *Settings* article.

### Level information

![Level information](./_source_game_screen.md/level_info.png){.side-img .icon-img}

It will display some of level information -- artist, cover artist, charter, storyboarder, ID, version.

View on CytoidIO will redirect players to the level on CytoidIO
database.

## Play screen

### Pausing the game

To pause the game, press the *Pause* button, this will be shown:

- Go back: return back to the *Selection* screen.
- Retry: restart the game.
- Resume: continue the game.

### Calibration Mode

*Calibration Mode* is a special form of playing screen, allows players to adjust current level offset easily.

- Autoplay: toggle auto-playing is on or off, helps players adjust the note offset easily.
- Hit sound: enable/disable the hit sound during the calibration.
- Note offset: adjust note offset of the current level here, circle buttons allow you to go up/down by 0.1s, while the square buttons allow you to go up/down by 0.01s.

## Result screen


The result screen shows: score, accuracy and playing statics. It also shows the selected character on the left.

Players also can share by click *Share* on the bottomleft.
