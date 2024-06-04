const { Button } = require('./Button');

class Article {
  render() {
    console.log('Article');
    const btn = new Button();
    btn.render();
  }
}

exports.Article = Article;
