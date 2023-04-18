// write a function that takes an array strings and returns strings wrapped in h1 tags.  i.e. -- ['header1', 'header2'] --> ['<h1>header1</h1>', '<h1>header2</h1>'] 
const header = ['header1', 'header2']

function wrap(arr) {
  const h1wrapper = arr.map(input => `<h1>${input}</h1>`)
  return h1wrapper
}

//console.log(wrap(header))

const animals = [
  { name: 'James', age: 2, species: 'giraffe' },
  { name: 'Nina', age: 5, species: 'zebra' },
  { name: 'Veronica', age: 3, species: 'elephant' },
  { name: 'Oscar', age: 6, species: 'elephant' },
  { name: 'Omar', age: 2, species: 'elephant' },
  { name: 'Lucky', age: 1, species: 'lion' },
  { name: 'Lucy', age: 2, species: 'lion' },
];



// return the objects of the animals that are elephants
function returnElephant(arr) {
  const filterElephant = arr.filter(obj => obj.species === 'elephant')
  return filterElephant
}

//console.log(returnElephant(animals))

// return an array of the names
function returnNames(arr) {
  const mapNames = arr.map(obj => obj.name)
  return mapNames
}
//console.log(returnNames(animals))

// return the sum of all the ages.  Use reduce to do this. 
/* function reduceSum(arr) {
  const mapAge = arr.map(animal => animal.age)
  console.log(mapAge);
  const reduceAge = mapAge.reduce((acc, cur) => acc+cur)
  console.log(reduceAge)
  return reduceAge
} */

//console.log(reduceSum(animals))

function reduceAge(arr) {
  const ageReduce = arr.reduce((ageTotal, animalObj) =>  {
    return ageTotal + animalObj.age
  }, 0)
  return ageReduce
}

//console.log(reduceAge(animals))


// return the object of the oldest animal.  Use reduce to do this. 
function returnOldest(arr) {
  const oldReduce = arr.reduce((oldestAnimalObj, animalObj) => {
    if (oldestAnimalObj.age < animalObj.age) {
        return animalObj
    } else {
      return oldestAnimalObj
    }
  })
  return oldReduce
}

//console.log(returnOldest(animals))

// return the age of the youngest animal.  use reduce to do this
function returnYoungestAge(arr) {
  const youngReduce = arr.reduce((youngestAnimalAge, animalObj) => {
    if (youngestAnimalAge > animalObj.age) {
      return animalObj.age
    } else {
      return youngestAnimalAge
    }
  }, Infinity)
  return youngReduce
}

console.log(returnYoungestAge(animals))

// write a function that takes an array of nested arrays, where each nested array consistes of a users name and an amail, and returns an array of objects where each object has an id that corresponds to the index of the array plus 1, a name property with the user's name, and an email property containing the user's email.
// ex: const exampleArray = [['alex', 'alex@example.com'], ['tom', 'tom@example.com']] ==> [{name: 'alex', email: 'alex@example.com', id: 1}, { name: 'tom', email: 'tom@example.com', id: 2}] etc

const exampleArray = [['alex', 'alex@example.com'], ['tom', 'tom@example.com']]

function mapUser(arr) {
  const userArrayWithId = arr.map((userArray, index) => {
    return {name: userArray[0], email: userArray[1], id: index+1 }
 })
  return userArrayWithId
} 

//console.log(mapUser(exampleArray))

// write a function that returns an object that counts the occurences of each letter in a string.  ignore any whitespaces and cases (have property be lower case).  Use reduce.
// ex: 'abbab' => {a:2, b: 3}
// ex: 'AbbaB' => {a:2, b: 3}
// ex: 'A big boat' => {a: 2, b: 2, i: 1, o: 1, g: 1} etc

function countOccurences(str) {
  const strJoin = str.split(' ').join('')
  console.log(strJoin)
  const strSplit = strJoin.toLowerCase().split('');
  console.log(strSplit)
  const strReduce = strSplit.reduce((totalLetterObj, currentLetter) => {
  console.log('Acc:' ,totalLetterObj, 'Cur:', currentLetter)
    if (totalLetterObj[currentLetter]) {
      totalLetterObj[currentLetter] = totalLetterObj[currentLetter] + 1
    } else {
      totalLetterObj[currentLetter] = 1
    }  
    console.log(currentLetter)
    return totalLetterObj
  }, {})
  return strReduce
} 

//console.log(countOccurences("A big boat"))

// write a function that takes an array of strings and returns the longest string.  use reduce.  
// ex: ['some', 'strings', 'longstring'] => 'longstring'

const exArray = ['thisisthelongeststring','some', 'strings', 'thisisactuallythelongeststring', 'longstring']

function longestStr(arr) {
  const longest = arr.reduce((aStr, bStr) => {
    if (aStr.length > bStr.length) {
      return aStr
    } else {
    return bStr
    }
  })
  return longest
}

console.log(longestStr(exArray))