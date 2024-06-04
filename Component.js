const { MyMath } = require('./MyMath');
function Component(content) {
  this.content = content;
}
console.log(MyMath.sum(2,6));
//export
exports.Component = Component;