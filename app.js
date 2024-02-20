/*
Write a function called doubleValues which accepts an array and returns a new array with all the values in the array passed to the function doubled

Examples:
    doubleValues([1,2,3]) // [2,4,6]
    doubleValues([5,1,2,3,10]) // [10,2,4,6,20]

*/
const numbers = ['1','2','3','4']; //Array Example

function doubleValues(numbers){ //Declare function. Pass array though it.
    let newNumbers = [];        //Declare, name, store new empty array
    numbers.forEach(function(value){ //use forEach on array. Declare a function...
        newNumbers.push(value*2);    //...that will push a new value into the new empty array that is multiplied by 2
    });
    return newNumbers; //IT WORKS!
}

/*
Write a function called onlyEvenValues which accepts an array and returns a new array with only the even values in the array passed to the function

Examples:
    onlyEvenValues([1,2,3]) // [2]
    onlyEvenValues([5,1,2,3,10]) // [2,10]

*/
//My first attempt at writing this code returned an array telling me true or false (whether each number was even)
function onlyEvenValues(numbers){
    let newNumbers = [];
    numbers.forEach(function(value){
        if(value%2 === 0) {     //Because I didn't set this conditional
        newNumbers.push(value); 
        }
    });
    return newNumbers;
}

/*
Write a function called showFirstAndLast which accepts an array of strings and returns a new array with only the first and last character of each string.

Examples:
    showFirstAndLast(['colt','matt', 'tim', 'test']) // ["ct", "mt", "tm", "tt"]
    showFirstAndLast(['hi', 'goodbye', 'smile']) // ['hi', 'ge', 'se']

*/
const string = ['tammy', 'dad', 'brother'];

function showFirstAndLast(k){

    let newString = [];

    k.forEach(function(value){ //I also commonly spell function wrong (fucntion)
    newString.push(value[0] + value[value.length -1]); //I spelled length wrong again so it wouldn't work. Common error for me to keep in mind
    })
    return newString;  //Yay it works!
}

/*
Write a function called addKeyAndValue which accepts an array of objects, a key, and a value and returns the array passed to the function with the new key and value added for each object 

Examples:
    addKeyAndValue([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'title', 'instructor') 
    
    // [{name: 'Elie', title:'instructor'}, {name: 'Tim', title:'instructor'}, {name: 'Matt', title:'instructor'}, {name: 'Colt', title:'instructor'}]

*/

const dogBreeds = [{breed: 'pug', typeofanimal: 'dog'}, {breed: 'retriever', typeofanimal: 'dog'}]

function addKeyAndValue(arr,key,value){
    arr.forEach(function(val) {
        val[key] = value;
    });
    return arr;
}

/*
Write a function called vowelCount which accepts a string and returns an object with the keys as the vowel and the values as the number of times the vowel appears in the string. This function should be case insensitive so a lowercase letter and uppercase letter should count

Examples:
    vowelCount('Elie') // {e:2,i:1};
    vowelCount('Tim') // {i:1};
    vowelCount('Matt') // {a:1})
    vowelCount('hmmm') // {};
    vowelCount('I Am awesome and so are you') // {i: 1, a: 4, e: 3, o: 3, u: 1};
*/
//I decided to turn it into a letter counter. To see what letters are most common!
function letterCounter(string){ //declare a function. label parameter string since we will be passing a string through it
    let indLetters = string.split("");  //declare variable split each letter into individual string
    let obj = {}; //declare variable. Store an empty object
    let alphabet = "abcdefghijklmnopqrstuvwxyz"; //declare variale named vowels. Set it equal to vowels string
  
    indLetters.forEach(function(letter) { //use .forEach advanced array method on new individual strings
      let lowerCased = letter.toLowerCase()
      if (alphabet.indexOf(lowerCased) !== -1) {  
        if (obj[lowerCased]) {  //if you find the letter continue to add one
          obj[lowerCased]++;
        } else {
          obj[lowerCased] = 1; //if not its just one
        }
      }
    });
    return obj;        //Victory is ours!
}

/*
Write a function called doubleValuesWithMap which accepts an array and returns a new array with all the values in the array passed to the function doubled

Examples:
    doubleValuesWithMap([1,2,3]) // [2,4,6]
    doubleValuesWithMap([1,-2,-3]) // [2,-4,-6]
*/
const singles = [1,2,3,4,5,6,7];

function doubleValuesWithMap(singles) {
    let newString = [];
    singles.map(function(value){
        newString.push(value * 2);
    });
    return newString
}


/*
Write a function called valTimesIndex which accepts an array and returns a new array with each value multiplied by the index it is currently at in the array.

Examples:
    valTimesIndex([1,2,3]) // [0,2,6]
    valTimesIndex([1,-2,-3]) // [0,-2,-6]
*/

function valTimesIndex(array){
    // let newArr = []; I don't need this do I? because .map returns an array no matter what so why have I benn putting that? 
    return array.map(function(value, index){
        return value * index;
    });
}



/*
Write a function called extractKey which accepts an array of objects and some key and returns a new array with the value of that key in each object.

Examples:
    extractKey([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'name') // ['Elie', 'Tim', 'Matt', 'Colt']
*/
const names = [{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}]

const getNames = names.map(function(get) {
    return get.name;
});


/*
Write a function called extractFullName which accepts an array of objects and returns a new array with the value of the key with a name of "first" and the value of a key with the name of  "last" in each object, concatenated together with a space. 

Examples:
    extractFullName([{first: 'Elie', last:"Schoppik"}, {first: 'Tim', last:"Garcia"}, {first: 'Matt', last:"Lane"}, {first: 'Colt', last:"Steele"}]) // ['Elie Schoppik', 'Tim Garcia', 'Matt Lane', 'Colt Steele']
*/
const theNames = [{first: 'Elie', last:"Schoppik"}, {first: 'Tim', last:"Garcia"}, {first: 'Matt', last:"Lane"}, {first: 'Colt', last:"Steele"}]
    const getFirst = theNames.map(function(get){
        return get.first;
    })
    const getLast = theNames.map(function(get){
        return get.first + " " + get.last;
    });

    //I'm sure there is a better way to write this LOL but it works! Proud that it works!
    


/*
Write a function called filterByValue which accepts an array of objects and a key and returns a new array with all the objects that contain that key.

Examples:
    filterByValue([{first: 'Elie', last:"Schoppik"}, {first: 'Tim', last:"Garcia", isCatOwner: true}, {first: 'Matt', last:"Lane"}, {first: 'Colt', last:"Steele", isCatOwner: true}], 'isCatOwner') // [{first: 'Tim', last:"Garcia", isCatOwner: true}, {first: 'Colt', last:"Steele", isCatOwner: true}]
*/

function filterByValue(arr, key) {
    return arr.filter(function(val) {
        return val[key] !== undefined;
      });
}

/*
Write a function called find which accepts an array and a value and returns the first element in the array that has the same value as the second parameter or undefined if the value is not found in the array.

Examples:
    find([1,2,3,4,5], 3) // 3
    find([1,2,3,4,5], 10) // undefined
*/

otherArray = [7,4,3,2,5];

function find(array, searchValue) {
    return array.filter(function(value) {
        return value === searchValue; 
      })[0]; //I don't understand what this index of 0 is for? When I set it to any other number the function doesn't work ... 
}           //oh it means to return undefined (void). so if search Value isn't found we need to return something. This returns undefined. Neat

/*
Write a function called findInObj which accepts an array of objects, a key, and some value to search for and returns the first found value in the array.

Examples:
    findInObj([{first: 'Elie', last:"Schoppik"}, {first: 'Tim', last:"Garcia", isCatOwner: true}, {first: 'Matt', last:"Lane"}, {first: 'Colt', last:"Steele", isCatOwner: true}], 'isCatOwner',true) // {first: 'Tim', last:"Garcia", isCatOwner: true}
*/

function findInObj(arr, key, searchValue) { //we want to find all three arr key seachValue
    return arr.filter(function(val) { //return an array
        return val[key] === searchValue; 
      })[0]; 
}

/*
Write a function called removeVowels which accepts a string and returns a new string with all of the vowels (both uppercased and lowercased) removed. Every character in the new string should be lowercased.

Examples:
    removeVowels('Elie') // ('l')
    removeVowels('TIM') // ('tm')
    removeVowels('ZZZZZZ') // ('zzzzzz')
*/

function removeVowels(string) {
    const vowels = "aeiou";
    return string
      .toLowerCase() //want returned value to be all lowercase 
      .split("") //split strings into an array of substrings so we can use (.filter) an advance array method on it
      .filter(function(value) {
        return vowels.indexOf(value) === -1; //if its not a value, return it
      })
      .join("");  //revese the split with .join
}

/*
Write a function called doubleOddNumbers which accepts an array and returns a new array with all of the odd numbers doubled (HINT - you can use map and filter to double and then filter the odd numbers).

Examples:
    doubleOddNumbers([1,2,3,4,5]) // [2,6,10]
    doubleOddNumbers([4,4,4,4,4]) // []
*/

randomArray = [1,2,3,4,5];

function doubleOddNumbers(array) {  
    return array
    .filter(function(value) {
      return value % 2 !== 0;
    })
    .map(function(value) {
      return value * 2;
    });
}
