---
title: Upload your level
lang: en-US
author: KS62
---

# Upload your level

You’re very satisfied with your chart! Now how do I upload it to let the world play it?

It’s very simple, all you need beforehand are:
1. A Cytoid ID
2. A ```.cytoidlevel``` file

::: tip Links

If you don’t have a Cytoid ID,
Sign up [here](https://cytoid.io/session/signup).


If you don’t have a ```.cytoidlevel``` file,
read [this article](../cytoid/packing.md) to learn how to make one.

:::

After these you can log in to [cytoid.io](https://cytoid.io/session/login) and go to [https://cytoid.io/studio/levels](https://cytoid.io/studio/levels).<br>
Here you will see something like this:
 
 ![The Studio](./_sources_upload.md/1.png)

In here you can click the *Click or drag a Cytoid level to this area* and select the cytoidlevel you want to upload or just drag the ```.cytoidlevel``` file to that area.

## Upload errors

 If you have errors while uploading,<br>
here’s a quick FAQ with upload errors:

If the error is this:
 
  ![ID error](./_sources_upload.md/2.png)

This means your ID is in the wrong format, <br>
remember that ID **cannot** have capitals or spaces, and you **need** to add a ```.```, ```_``` or ```-``` in between after the first word.

If the error is this:
 
  ![File not found](./_sources_upload.md/3.png)

This could mean:
-	You didn’t zip (more than) one of the file(s) that was specified in the level.json
-	You zipped the folder and not the files
-	You have the level.json’s path(s) wrong

Check all three of them before uploading again

:::warning WARNING :

Upper-case and Lower-case letters will also mess up the paths' names, make sure they are exactly what the files are named.
This is also why we recommend you only use lower-case letters as the file’s name.
Also, **do not** use special letters ( Japanese, Unicode symbols, etc.).

:::

::: warning WARNING:

cytoid.io cannot detect if you also have the necessary resources for your **Storyboard**,<br>
and because just missing one image/file will *break* the whole storyboard, **you really should double-check when you're uploading a Storyboard chart that uses other files**

:::

If the error is this:

 ![Unauthorized](./_sources_upload.md/4.png)
 
This means your login time has expired, please reflash the page, log in, and try again.

If the error is this:

 ![Missing fields](./_sources_upload.md/5.png)

 You forgot to add some required field(s) in the level.json, learn how to add them [here](../cytoid/level.json.md)

## After upload

If your chart is uploaded successfully, you will be moved to this page:
 
  ![Edit](./_sources_upload.md/6.jpg)

In here you have:

**Analytics** : does nothing as of now.<br>
**Edit listing** : add description, add tags and set the visibility of a chart.<br>
**Edit level** : upload a new version of the chart(s) if you need to, the bottom does nothing as of now.

:::tip Notice:

As of Cytoid 2.0.2, the game cannot show the description in-game

:::

You can write anything in the description or don’t even add one as long as it’s following the rules (no NSFW, racism, etc.),

The same goes for tags but you should at least add the artist and your charter name in the tags

Finally, when everything is finished, you can click on the *PRIVATE* button and click on the *Public* button, click *SAVE* and your chart is now downloadable on cytoid.io and Cytoid’s build-in chart downloader!

::: tip Information

We used a scene of an MV illustrated by [banishment](https://www.pixiv.net/en/users/23223750) as an example image for this article. Here's the link to the [music video](
https://youtu.be/Gl8sikQ807E).

:::

