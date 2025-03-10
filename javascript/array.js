const number = [10, 20, 30, 40, 50];
const brothers = ['omorFaruk', 'marufHossain', 'tawhidHossain']
console.log(brothers.length)
console.log(number[4])
number.push(60, 70, 80, 90, 100);
brothers.push('akterHossain', 'fathemaBegum');  

console.log(brothers)
console.log(number)

const popNumber = number.pop();
const popBrothers = brothers.pop();
console.log(popNumber);
console.log(popBrothers);

number.shift();
brothers.shift();  

console.log(brothers);
console.log(number);

number.unshift(10);
brothers.unshift('webDev');
console.log(number);
console.log(brothers);