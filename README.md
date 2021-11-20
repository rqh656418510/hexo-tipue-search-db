# hexo-tipue-search-db

Hexo plugin to generate db content for [Tipue Search 7.1 +](http://www.tipue.com/search/docs/?d=6)

## How to install

``` bash
$ npm install hexo-tipue-search-db --save
```

## How to configure (You can do your customization)

1. Download Tipue Search zip from [here](https://www.techgrow.cn/downloads/2021/04/tipuesearch-7.1.zip), unzip it, and copy `/tipuesearch` to your `${theme_dir}/source` (or some directory like this one)

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

4. Add automatic completion function of HTML5

``` html
<form>
  <div class="tipue_search_group">
    <input type="text" name="q" id="tipue_search_input" pattern=".{3,}" list="search" title="At least 3 characters" required><button type="submit" class="tipue_search_button"><div class="tipue_search_icon">&#9906;</div></button>
  </div>
</form>
<div id="tipue_search_content"></div>

<datalist id="search">
  <option>jQuery</option>
  <option>Support</option>
  <option>Tipr</option>
  <option>Tipue</option>
  <option>Tipue Search</option>
</datalist>

<script>
  $(document).ready(function() {
       $('#tipue_search_input').tipuesearch();
  });
</script>
```

5. The configuration for tipue search

``` js
$('#tipue_search_input').tipuesearch({
        'show': 10,              // Maximum number of search records displayed per page, default: 10
        'showURL': false,        // Whether to display the URL in each search result, default: true
        'newWindow': true,       // Whether to open the page in a new browser tab when clicking search results, default: false
        'footerPages': 10,       // Maximum number of page selections displayed in the footer, default: 3
        'minimumLength': 3,      // Minimum character length in search keyword, default: 3
        'wholeWords': false,     // Whether not to use languages other than English, default: true
        'showTitleCount': false  // Whether to display the number of search results in the title of the browser tab, default: true
   });
```

## Plugin config

Default posts and pages are included in generated db file, you can exclude pages by `exclude_page: true`.

``` yml
tipue_search_db:
  exclude_page: true    # default false
```

## DB file

The default db file path is: `${blog_root}/tipuesearch/tipuesearch_content.js`, you can use custom file path by params `path`

``` yml
tipue_search_db:
  path: '/tipuesearch/tipuesearch_content.js'     # file path
```

## Demo

- [Tipue Search Demo](https://www.techgrow.cn/search/)

## Blog

- [Hexo how to use tipue search](https://www.techgrow.cn/posts/47b23c66.html)

## Thanks For

- [Tipue Search](https://tipue.com/search/)
- [Hexo-Tipue-Search-Json](https://github.com/zhouhao/Hexo-Tipue-Search-Json)
