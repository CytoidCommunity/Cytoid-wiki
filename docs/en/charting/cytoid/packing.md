---
title: Packing into Cytoid
lang: en-US
author: KS62
---

# Packing into Cytoid

You have finished your chart! Now how can we play it on Cytoid?
You will need to pack your files into a Cytoidlevel.

## Packing by using Cylheim
After finishing a chart in Cylheim, Click the top-left button and look down, click *Export to Cytoid*. You will see the following window:

 ![](./_sources_packing.md/1.png)

Just type what it tells you to do and click on *Charts* after doing so. In the *Charts* tab, you will see the following:

 ![](./_sources_packing.md/2.png)

Click on *Add chart info* first then this will show up:

 ![](./_sources_packing.md/3.png)

You **must** add the chart file and change the difficulty from the slider (that goes from ? to 15+).
And for *Convert unsupported features in Cytoid as a storyboard (for simulation)*, you **only** have to tick the box if you have added/changed the following:

1. Any event type other than **Speed up / Speed down**
2. Argument changed in Page Manager

If you have done correctly, you should have the compiler looks something like this:

 ![](./_sources_packing.md/4.png)
 ![](./_sources_packing.md/5.png)

## Packing it manually

To do so, first make sure you have the following files:
- A [`level.json`](../cytoid/level.json.md) file
- A chart file (at least)
- Music file (`.ogg` recommended)
- Music preview file
- Background image (`.jpg` or `.png`)

You can also include the storyboard file(s) if you have it (them).

After that, after selecting everything, zip it (add everything to a `.zip` file). Then, change the `.zip` extension type to the `.cytoidlevel` type and rename the file to your ID (i.e., If your ID is ```abcd.efg```, rename the zip to ```abcd.efg.cytoidlevel```).

## Packing with a help of PCtyx

You can also make a level.json file on PCtyx.
After finishing your chart on PCtyx, go back to the menu and click *Cytoid Settings*, and you should then see the following:

 ![](./_sources_packing.md/6.jpg)

Just type what it tells you to do, choose the chart files, then you're finished.

::: warning WARNING!

PCtyx cannot display Japanese characters and will show them as boxes.

:::

For the *SB color*, if you didn't use any other layer (except for the Main layer) while charting, you don’t need to change them.

 ![](./_sources_packing.md/7.png)

If you have typed everything necessary, you should have something like this:

 ![](./_sources_packing.md/8.png)

Click *Create level.json*, zip the files, repeat the zipping steps (have mentioned before) and done!

::: tip INFORMATION

We used Wanderer Zariq's *You're the Miserable* as an example for this article. Try it [here](
https://cytoid.io/levels/wz.yatm).

:::