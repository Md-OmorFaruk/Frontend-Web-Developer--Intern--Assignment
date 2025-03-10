var farukAge, marufAge, tawhidAge;
farukAge = 26;
marufAge = 19;
tawhidAge = 15;

var totalAge = farukAge + marufAge + tawhidAge;

console.log("Total Age", ":", farukAge, "+", marufAge, "+", tawhidAge, "=", totalAge);

var name = "Md Omor Faruk";
var name1 = "Maruf Islam";

var bol = true;

console.log(typeof name, typeof bol, "Big :", name, "Small :", name1);


var myAge =parseInt('26');
var myName = 'Md Omor Faruk';
var myBrother = 'Maruf';

var discount = parseFloat('33.4');

console.log(myName + " " + myBrother, myAge + " " + myName);
console.log(typeof myAge);
console.log(myAge + discount);

var float = parseFloat('0.1');
var int = parseInt('0.3');
console.log((float + float).toFixed(3));
console.log((10 / 3).toFixed(3));

var faruk = 10;

faruk += 10;
console.log(faruk)

console.log(10 > 5);


var farukAge = 26;
var marufAge = 21;
var tawhidAge = 16;

if (farukAge > marufAge) {
      console.log("Faruk is big brother of Maruf");
}
else if (farukAge == marufAge) {
      console.log("They are twins")
}
else {
      console.log("Maruf is big brother of Faruk");
}

