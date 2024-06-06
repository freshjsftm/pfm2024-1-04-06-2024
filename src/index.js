'use strict';

//const fs = require('fs/promises');
const _ = require('lodash');
const cowsay = require("cowsay");
const {MyMath} = require('./MyMath');

const number = 456;
console.log('Hi!', number);

console.log(cowsay.say({
    text : "I'm a moooodule",
    e : "oO",
    T : "U "
}));

console.log(_.random(1,7));

console.log(MyMath.sum(4,6));

