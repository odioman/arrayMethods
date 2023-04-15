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