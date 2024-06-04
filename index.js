'use strict';
//import
const { MyMath } = require('./MyMath');
const { Component } = require('./Component');

console.log('hi!');
// console.log(MyMath);

const result = MyMath.sum(5, 7);
console.log('result = ', result);

const component = new Component('new info!');
console.log(component.content);
