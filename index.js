'use strict';

const { Article } = require('./components/Article');
const { Button } = require('./components/Button');

const article = new Article();
article.render();

const btn = new Button();
btn.render();

//require
//resolving
// 1 - core modules
// 2 - file  *.js | *.json
// 3 - dir   package.json-> "main" | index.js | index.json
// 4 - node_modules
// 5 - throw new Error()