---
author: KS62
---

# Packing into a .cytoidlevel file

You have finished your chart! Now how can we play it on Cytoid?
You will need to pack your files into a `.cytoidlevel` file.

## Packing by using Cylheim

After finishing your chart, click the top-left button and look down, then click *Export to Cytoid*. You will see the following window:

![Cytoid Level Compiler](./_sources_packing.md/1.png)

Just type what it tells you to do and click on *Charts* after doing so.

In the *Charts* tab, you will see the following:

![Charts](./_sources_packing.md/2.png)

Click on *Add chart info* first then this will show up:

![Chart info](./_sources_packing.md/3.png)

You **must** add the chart file and change the difficulty from the slider (that goes from ? to 15+).

And for *Convert unsupported features in Cytoid as a storyboard (for simulation)*, you **only** have to tick the box if you have:

- Added any event type other than **Speed up / Speed down**
- Changed the Argument in *Page Manager*

If you have done it correctly, you should have the compiler looks something like this:

![Filled in metadata](./_sources_packing.md/4.png)
![Filled in charts data](./_sources_packing.md/5.png)

## Packing it manually

To do so, first make sure you have the following files:

- A [`level.json`](../cytoid/level-json.md) file
- A chart file (at least)
- Music file (`.ogg` recommended)
- Music preview file (has to be less than 30 seconds)
- Background image (`.jpg` or `.png` only)

You can also include the storyboard file(s) if you have it (them).

Now, select everything, zip it, change the `.zip` extension type to the `.cytoidlevel` type and rename the file to your ID (e.g., If your ID is `abcd.efg`, rename the zip to `abcd.efg.cytoidlevel`).

::: tip INFORMATION
We used Wanderer Zariq's *You're the Miserable* as an example for this article. Try it [here](https://cytoid.io/levels/wz.yatm).
:::
