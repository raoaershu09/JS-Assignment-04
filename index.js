// Quesion # 01

function sumOfEvenNumbers(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
      sum += arr[i];
    }
  }
  return sum;
}
const numbers = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
const result = sumOfEvenNumbers(numbers);
console.log(result);

// Question # 02

function countVowels(string) {
  let vowels = "aeiouAEIOU";
  let count = 0;

  for (let i = 0; i < string.length; i++) {
    for (let j = 0; j < vowels.length; j++) {
      if (string[i] == vowels[j]) {
        count++;
        break;
      }
    }
  }
  return count;
}
console.log("Vowels are " + countVowels("Rao Aershuman"));

// Question # 03

function findStringLength(strings) {
  let stringLength = strings[0].length;

  for (let i = 1; i < strings.length; i++) {
    if (strings[i].length > stringLength) {
      stringLength = strings[i].length;
    }
  }
  console.log("Max string length is " + stringLength);
}

let strings = ["cpu", "lcd", "mouse", "keyboard"];

findStringLength(strings);

// Question # 04

function average(numbers) {
  let sum = 0;

  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum / numbers.length;
}

let result = average([5, 6, 7, 8, 9, 10]);

console.log("Average is " + result);

// Question # 05

function findKeys() {
  let brother = {
    name: "Aershuman",
    age: 19,
    country: "Pakistan",
  };

  return Object.keys(brother);
}

console.log(findKeys());

// Question # 06

function objectKeyValues(brother) {
  let names = [];

  for (let index = 0; index < brother.length; index++) {
    names.push(brother[index].name);
  }

  return names;
}

let brother = [
  { name: "aershuman", age: 19 },
  { name: "izhan", age: 20 },
  { name: "wasay", age: 21 },
];

result = objectKeyValues(brother);
console.log(result);
