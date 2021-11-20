---
title: Game screen
lang: en-US
---

# {{$frontmatter.title}}

## Selection screen

### Leaderboard

![Leaderboard](./_source_game_screen.md/leaderboard.png){.side-img .icon-img}

After touching on the *Leaderboard* icon, a leaderboard of the current level shows, which allows players to see the top-ranking and their current ranking (requires CytoidID).

### Level rating

![Rating](./_source_game_screen.md/rating.png){.side-img .icon-img}

This allows players to see rate count and rate a level. Ranging from 0.5 ~ 5.0.

### Game options

![Game options](./_source_game_screen.md/game_option.png){.side-img .icon-img}

This allows players to enable/disable Practice mode and modifiers.

Practice Mode
: When *Practice Mode* is on, more lenient timing windows will be used. However, scores won't show on the leaderboard.
: A *Practice Mode* indicator will show while on the playing screen.

::: details Timing windows comparison
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
: This allows adjusting level note offset. By accessing to *Calibration Mode* or entering a desired number manually. These settings only affect the current level.

Game settings
: Allows adjusting game settings. This also affects other levels and the game itself. For a list of game settings, see the *Settings* article.

### Level information

![Level information](./_source_game_screen.md/level_info.png){.side-img .icon-img}

It will display the level information: artist, cover artist, charter, storyboarder, ID, version.

*View on CytoidIO* will redirect players to the level on the CytoidIO database.

## Play screen

### Pausing the game

To pause the game, press the *Pause* button, and the following will show up:

- Go back: return to the *Selection* screen.
- Retry: restart the game.
- Resume: continue the game.

### Calibration Mode

*Calibration Mode* is a special form of playing screen, allows players to adjust current level offset easily.

- Autoplay: toggle auto-playing is on or off, helps players adjust the note offset easily.
- Hit sound: enable/disable the hit sound during the calibration.
- Note offset: adjust note offset of the current level here. The circle buttons allow you to go up/down by 0.1s, while the square buttons allow you to go up/down by 0.01s.

## Result screen

The result screen shows your score, accuracy, and playing statics. It also shows the selected character on the left.

Players also can share by clicking *Share* on the bottom-left.

<style type="text/css">
.icon-img {
    max-width: 150px;
}
</style>
