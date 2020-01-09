var util = require('hexo-util');

hexo.extend.generator.register('generator-tipue-search-db', hexo_generator_tipue_search_db);

function hexo_generator_tipue_search_db(site) {
    var minify = function (str) {
            return util.stripHTML(str).trim().replace(/\n/g, ' ').replace(/\s+/g, ' ');
        },

        keys = {
            title: true,
            url: true,
            text: true,
            tags: true
        },

        json = {};

    var catags = function (item) {
            return item.name.replace(/\s+/g, '-').toLowerCase();
        },

        postsContent = site.posts.sort('-date').filter(function (post) {
            return post.published;
        }).map(function (post) {
            var actualPost = {};

            Object.getOwnPropertyNames(keys).forEach(function (item) {
                switch (item) {
                    case 'text':
                        return actualPost[item] = minify(post.content);

                    case 'tags':
                        return actualPost[item] = post.tags.map(catags).join(' ');

                    case 'url':
                        return actualPost[item] = hexo.config.root + post['path'];

                    default:
                        return actualPost[item] = post[item];
                }
            });

            return actualPost;
        }),

    pagesContent = site.pages.sort('-date').map(function (page) {
        var actualPage = {};

        Object.getOwnPropertyNames(keys).forEach(function (item) {
            switch (item) {
                case 'text':
                    return actualPage[item] = minify(page.content);

                case 'url':
                    return actualPage[item] = hexo.config.root + page['path'];

                default:
                    return actualPage[item] = page[item];
            }
        });
        actualPage.tags = "";
        return actualPage;
    });

    json.pages = postsContent.concat(pagesContent);
    dbContent = "var tipuesearch = " + JSON.stringify(json);

    return {
        path: '/tipuesearch/tipuesearch_content.js',
        data: dbContent
    };
}
