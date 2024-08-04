var rule = {
            title: '映播TV',
            host: 'https://www.ingbo.tv',
            url: '/vod/fypage/fyclass/0/0/0/0/0/0',
            searchUrl: '/public/auto/search1.html?keyword=**&page=fypage',
            searchable: 1,
            quickSearch: 1,
            filterable: 0,
            filter: '',
            filter_url: '',
            filter_def: {},
            headers: {
                'User-Agent': 'PC_UA',
            },
            timeout: 5000,
            class_parse: '.swiper-wrapper&&li;a&&Text;a&&href;/vod/1/(.*?)/0/0/0/0/0/0',
            cate_exclude: '',
            play_parse: true,
            lazy: `js:input = {parse: 1, url: input, js: ''}`,
            double: true,
            推荐: '.list-swiper-b;.public-list-box;a&&title;img&&data-original;.public-list-prb&&Text;a&&href',
            一级: '.public-list-box;img&&alt;img&&data-original;.public-list-prb&&Text;a&&href',
            二级: {
                title: '.this-desc-title&&Text;.focus-item-label-original&&Text',
                img: '.this-pic-bj&&style',
                desc: '主要信息;.this-desc-info&&span:eq(1)&&Text;.this-desc-info&&span:eq(2)&&Text;.this-info:eq(1)&&Text;.this-info&&Text',
                content: '.text.occlusion&&Text',
                tabs: '.title-tab.flex.switch-button&&a',
                lists: '.anthology-list-play:eq(#id)&&li',
                tab_text: 'body&&Text',
                list_text: 'body&&Text',
                list_url: 'a&&href'
            },
            搜索: '.public-list-box;img&&alt;img&&data-original;.public-list-prb&&Text;a&&href',
        }