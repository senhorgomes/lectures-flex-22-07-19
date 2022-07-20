//How can we iterate(or loop) through objects?
//for of
//for in
//c style loop-> i++

const dog1Object = {
  age: 2,
  breed: "Labrador",
  furColor: "Grey",
  size: "Medium",
  bark: {value:"Bark!"}
}

for(const element in dog1Object){
  // console.log(dog1Object.key)
  console.log(element.value)
}

///Creates an array of keys from the object passed in
// const keysOfDog1Object = Object.keys(dog1Object)

///Creates an array of values from the object passed in
const valuesOfDog1Object = Object.values(dog1Object)

console.log(valuesOfDog1Object[4].value)

// for(const key of valuesOfDog1Object){
//   console.log(key)
// }
