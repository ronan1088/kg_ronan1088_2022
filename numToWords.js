/* 
  - Define string equivalents for digits 0 through 9
  - Convert each number in the array to its exact form as a string (ex. 12 -> '12')
  - Define a function that converts numeric digits to their word equivalent
  - Iterate through each digit of number and convert individual digit to phonetic string, append to an empty string variable
  - return empty string variable
*/


//function to convert numbers as strings to phonetic equivalents
function numToString(x){
    if(x == '0'){
        numWord = 'Zero';
    }
    if(x == '1'){
        numWord = 'One';
    }
    if(x == '2'){
        numWord = 'Two';
    }
    if(x == '3'){
        numWord = 'Three';
    }
    if(x == '4'){
        numWord = 'Four';
    }
    if(x == '5'){
        numWord = 'Five';
    }
    if(x == '6'){
        numWord = 'Six';
    }
    if(x == '7'){
        numWord = 'Seven';
    }
    if(x == '8'){
        numWord = 'Eight';
    }
    if(x == '9'){
        numWord = 'Nine';
    }
    return numWord;
}
import { createInterface } from 'readline';

const rl = createInterface({
  input: process.stdin,
  output: process.stdout
});
var test_array = [];
var nbr = 0;

rl.on('line', (line) => {
    test_array.push(line.split(' '));
    nbr++;

    // number of lines to read
    if (nbr > 5)
        rl.close();
});

console.log(test_array);

var test_array = [12345,34,56,78,5];
var switchArray = []
var stringArray = []
//iterate through elements of the array and convert the integers to strings
for (index = 0; index < test_array.length; index++) {
    var numString = test_array[index].toString();
    switchArray.push(numString)
    var concatNums = ''
    //iterate through each digit of number as string, convert to word, concatenate into a new variable
    for (let digit of numString){
        concatNums = concatNums.concat(numToString(digit));
    }
    //console.log(concatNums)
    stringArray.push(concatNums)
}
console.log(stringArray)
//console.log(switchArray);
