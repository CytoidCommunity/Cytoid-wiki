---
title: Uploading your level
lang: en-US
author: KS62
---

# Uploading your level

You seem very proud of your chart! Now we'll learn how to upload it to let people play it!

You need to check these to proceed:

1. A Cytoid ID (sign up [here](https://cytoid.io/session/signup) if you don't have one)
2. A `.cytoidlevel` file (read [this article](../cytoid/packing.md) to learn how to make one)

After checking, you can log in to [CytoidIO](https://cytoid.io/session/login) and go to [https://cytoid.io/studio/levels](https://cytoid.io/studio/levels). Here you will see something like this:

![Studio](./_sources_upload.md/1.png)

Here, you can click the *Click or drag a Cytoid level to this area* and select the Cytoid level you want to upload or drag the `.cytoidlevel` file to that area.

## Uploading errors

If you have errors while uploading, here’s a quick FAQ with upload errors:

### ID error

It means your ID is in the wrong format, remember that ID **cannot** have capitals and spaces, and you **should** add a `.`, `_` or `-` in between after the first word (also, you should read the [Rules](./rules) article).

![ID error](./_sources_upload.md/2.png){.side-img}

### *File not found* error

![File not found](./_sources_upload.md/3.png){.side-img}

It could mean:

1. You haven't zipped (more than) one of the file(s) specified in the level.json
2. You zipped the folder
3. You have the file path in the `level.json` file is wrong

Check all three of them before uploading again

:::warning WARNING

Capitals or not will also mess up the problem, make sure they are exactly what the files are named. That's also why we recommend you only use lower-case letters for the file name. Also, **do not** use special characters.

CytoidIO cannot detect if you also have the necessary resources for your **storyboard**, and because just missing an image will **break** the whole storyboard, **you really should double-check when you're uploading a storyboard chart having images (sprites)**

:::

### Unauthorized error

It means your login time has expired. You can refresh the page, log in, and try again. Unless it’s a server problem, you can try uploading the level.

 ![Unauthorized](./_sources_upload.md/4.png){.side-img}

### Missing required field(s)

![File not found](./_sources_upload.md/5.png){.side-img}

It means you forgot to add the required field(s). You may have to check and fill in the required field(s) in the `level.json` file, then zip again.

## After uploading

If your chart is uploaded successfully, the website will redirect to this page:

![Edit](./_sources_upload.md/6.png)

In here you have:

**Analytics**: does nothing as of now.

**Edit listing**: add descriptions, add tags, and set the visibility of a chart.

**Edit level**: upload a new version of a chart if you need to and preview level information.

:::warning NOTICE

Currently, Cytoid can’t show the description in-game.

:::

You can write anything in the description and tags or don’t even add one as long as it’s following the rules.

Finally, click on the *PRIVATE* button and click on the *Public* button, click *SAVE* after finishing. Now, people can download your level on CytoidIO and Cytoid’s build-in chart downloader!

::: tip Information

We used an art drew by [鵜飼沙樹](https://www.pixiv.net/users/48456) as an example background image for this article. Here's the link to the [art](https://www.pixiv.net/artworks/92258191).

:::
