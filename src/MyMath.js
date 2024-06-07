import { f1 } from "./utils";

class MyMath {
  static sum = (a, b) => a + b;
  static sub = (a, b) => a - b;
  static del = (a, b) => a / b;
  static mult = (a, b) => a * b;
}
f1();
console.log('inside My Math file!!!');

//export commonJS 
// exports.MyMath = MyMath;

// export ECMAScript modules
export default MyMath;