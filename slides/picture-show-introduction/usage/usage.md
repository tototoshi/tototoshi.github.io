!SLIDE
# 使い方

!SLIDE
## 何を用意すれば良いの？

* conf.js
* .md

!SLIDE
## conf.js
```js
{
  "title": "some show title"
  "sections": [
    "sectiona",
    "sectionb"
  ]
}
```

!SLIDE
## *.md

![markdown](usage/markdown_small.png)

!SLIDE
## ファイル配置

<pre>
picture-show-introduction
├── conf.js
├── css
│   └── custom.css
└── intro
    ├── intro.md
    └── scalachan.png
</pre>

!SLIDE
## Customize!
* css/custom.css
* js/custom.js

!SLIDE
## 仕上げ

<br/>

```sh
 $ pshow
```

http://localhost:3000 で確認

<br/>

```sh
 $ pshow --offline -o=/path/to/output
```

でexport

!SLIDE
<br/><br/><br/><br/>

## <center><span class="red">完成<span></center>

