function mul(a, b) {
 return a * b;
}
let double = mul.bind(null,3);
console.log(double)
console.log( double(3) ); // = mul(2, 3) = 6
console.log( double(4) ); // = mul(2, 4) = 8
console.log( double(5) ); // = mul(2, 5) = 10