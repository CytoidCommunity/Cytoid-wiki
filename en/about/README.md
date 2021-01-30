# About 

## Contribute to the Cytoid wiki

### Format specification

If you are submitting changes (pull request) directly on GitHub, then you must follow these guidelines

1. format: use Markdown (docsify enhanced) in editing.
2. board: There should be logical and leave appropriate blank lines in the text.
3. resource citation: create a new folder `_source_article-name.md` in the same level folder (Note, this is a folder with suffix, according to docfify, cite it as `![img name] (/_source_filename.md/file)`)
4. content: use Cytoid's licensed content.
5. sign your name: Please sign your name at the end or the beginning of the article, format: `! > Author: Tiger`
6. other: article titles should not conflict with existing articles

If you choose to submit your article in an issue, you do not have to comply, we will format your article, but please send the resource with your article as a zip file when submitting.

When editing, **Display effect** is important, while uniformity comes later.

This specification is not mandatory, and is subject to revision, so you can refer to it and object to it.

[support](../site-source/part/support.md ':include')


### Special Format

!> In docsify, `/` is the folder where the article is, The upper level folder needs `../`, the upper level of the upper level folder needs `../../`

This wiki has modified part of the rendering content, for example:

~~~
![Palescreen](../../site-source/pic/backgrounds/palescreen.jpg ":class=side-img")
~~~

![Palescreen](../../site-source/pic/backgrounds/palescreen.jpg ":class=side-img")

Will be rendered as

~~~
<div class="side-img">
    <img src="/zh/about/../../site-source/pic/backgrounds/palescreen.jpg" alt="Palescreen">
    <p>Palescreen</p>
</div>
~~~
As the picture right.


