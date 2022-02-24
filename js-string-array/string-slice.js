const anthem = 'Amer Sonar Bangla Ami Tomai Valobashi';
const words= anthem.split(' ');
const withoutA= anthem.split('a');

// console.log(words);
console.log(withoutA);

// Slice
const smallSlice = anthem.slice(5, 13);
console.log(smallSlice);

// substr
const anotherPart = anthem.substr(5, 7);

const task = "Practice M akes a person perfect";
const quiz = task.toLowerCase().indexOf("M");
console.log(quiz);

const str1 = 'Bangladesh is a beautiful country.';
console.log(str1.endsWith("country"));

const array = ["121", "12", "1", "112", "111"];

console.log(array.sort());