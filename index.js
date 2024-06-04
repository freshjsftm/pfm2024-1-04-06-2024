'use strict';
//import
const { MyMath } = require('./MyMath');
const { Component } = require('./Component');

console.log(MyMath.mult(2,6));
const component = new Component('new text');
console.log(component.content);

// require
// resolving -> loading -> wrapping -> evalution -> cashing
