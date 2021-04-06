# hexo-tipue-search-db

Hexo plugin to generate db content for [Tipue Search 7.1 +](http://www.tipue.com/search/docs/?d=6), base on [Hexo-Tipue-Search-Json](https://github.com/zhouhao/Hexo-Tipue-Search-Json).

## How to install

``` bash
$ npm install hexo-tipue-search-db --save
```

## How to configure (You can do your customization)

1. Download Tipue Search zip from [here](http://www.tipue.com/search/tipuesearch.zip), unzip it, and copy `/tipuesearch` to your `${theme_dir}/source`

2. Add js code in `${theme_dir}/layout/_partial/head.ejs` (or some file like this one)

```html
<link href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css">
<script src="https://cdn.jsdelivr.net/npm/jquery@3.3.1/dist/jquery.min.js"></script>

<script src="tipuesearch/tipuesearch_content.js"></script>
<link rel="stylesheet" href="tipuesearch/tipuesearch.css">
<script src="tipuesearch/tipuesearch_set.js"></script>
<script src="tipuesearch/tipuesearch.min.js"></script>
```

3. The code below creates a search box, and can be anywhere on your page. Search results are displayed in the tipue_search_content div. You can optimize it, of course.

``` html
<form>
  <div class="tipue_search_group">
    <input type="text" name="q" id="tipue_search_input" pattern=".{3,}" title="At least 3 characters" required><button type="submit" class="tipue_search_button"><div class="tipue_search_icon">&#9906;</div></button>
  </div>
</form>
<div id="tipue_search_content"></div>

<script>
  $(document).ready(function() {
       $('#tipue_search_input').tipuesearch();
  });
</script>
```

## Plugin config

Default posts and pages are included in generated db file, you can exclude pages by `exclude_page: true`.

``` yml
tipue_search_db:
  exclude_page: true    # default false
  path: '/tipuesearch/tipuesearch_content.js'     # default file path
```

## DB file

The db file path is: `${blog_root}/tipuesearch/tipuesearch_content.js`

## Thanks For

- [Hexo-Tipue-Search-Json](https://github.com/zhouhao/Hexo-Tipue-Search-Json)
