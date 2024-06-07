'use strict';

import _ from 'lodash';
import * as cowsay from 'cowsay';

// default value
import MyMath from './MyMath';


import nameForDefault, {f1} from './utils';
console.log(nameForDefault);
f1();

// import nameForDefault, * as utils from './utils';
// console.log(nameForDefault);
// utils.f1();

// import * as utils from './utils';
// console.log(utils.default);
// utils.f1();

// import { f1, f4 } from './utils';
// f1();
// f4();

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
