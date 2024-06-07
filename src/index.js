'use strict';
const _ = require('lodash');
// import _ from 'lodash';
const cowsay = require("cowsay");
// import cowsay from "cowsay";
const {MyMath} = require('./MyMath');
// import { MyMath } from "./MyMath";

const number = 456;
console.log('Hi!', number);

console.log(cowsay.say({
    text : "I'm a moooodule",
    e : "oO",
    T : "U "
}));

console.log(_.random(1,7));

console.log(MyMath.sum(4,6));

