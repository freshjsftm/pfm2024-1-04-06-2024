class MyMath {
  static sum = (a, b) => a + b;
  static sub = (a, b) => a - b;
  static del = (a, b) => a / b;
  static mult = (a, b) => a * b;
}
console.log('inside My Math file!!!');
//export
exports.MyMath = MyMath;