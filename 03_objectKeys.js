//Square bracket notation and dot notation?
//Dot notation is VERY VERY specific and literal.
//Square bracket notation - isnt so specific
const dog1Object = {
  age: 2,
  breed: "Labrador",
  furColor: "Grey",
  size: "Medium",
  "bark": {
    woof: "Woof",
    bark: "Bark!"
  }
}
const dog2Object = {
  age: 1,
  breed: "Greyhound",
  furColor: "Grey",
  size: "small",
}
const typeOfBreed = "breed"

//Bracket notation
// console.log("Bracket notation", dog1Object[typeOfBreed])

//Dot notation
// console.log("Dot notation", dog1Object.typeOfBreed)

//Dot notation is clearer
// dog1Object["size"]["key"]["breed"]["age"]
// dog1Object.size.key.breed.age

console["log"](dog1Object["bark"].woof)
//Are arrays objects too?
const dog5 = ["Pug", 5, "Large", "Tan"]


//Please never do this, use the spread operator
// const dog3Object = dog2Object
//Spread operator
const dog3Object = {...dog2Object}

console.log("Dog 1:",dog2Object, "dog 2:",dog3Object)

dog2Object["age"] = 2

console.log("after",dog2Object.age)
console.log("Dog 3",dog3Object.age)