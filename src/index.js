'use strict';
// const _ = require('lodash'); //commonJS Modules
import _ from 'lodash'; //ECMAScript modules
// const cowsay = require("cowsay");
import * as cowsay from 'cowsay'; //all method in object cowsay
// import {say} from "cowsay";
// console.log(cowsay);
// const {MyMath} = require('./MyMath');
import MyMath from './MyMath';

// import * as utils from './utils';
// console.log(utils);
// utils.f1()

import { f1, f4 } from './utils';
f1();
f4();

const number = 456;
console.log('Hi!', number);

console.log(
  cowsay.say({
    text: "I'm a moooodule",
    e: 'oO',
    T: 'U ',
  })
);

console.log(_.random(1, 7));
console.log(MyMath.sum(4, 6));
