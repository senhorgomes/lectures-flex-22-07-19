//Why objects?
//Access things out of order, or by key
//Manipulate the data stored in an object

//Dogs?
//Age
//Breed
//Fur color
//Size

//Describe a dog

const dog1 = [2, "Labrador", "Grey", "Medium"]
const dog2 = [1, "Greyhound", "Grey", "Small"]
const dog3 = [4, "GoldenDoodle", "White", "Large"]
const dog4 = [4, "Pug", "Black", "Small"]
const dog5 = ["Pug", 5, "Large", "Tan"]

console.log("Dog 5s size is:", dog5[3])
//Describe properties of a certain thing, use Objects
const dog1Object = {
  age: 2,
  breed: "Labrador",
  furColor: "Grey",
  size: "Medium"
}
const dog2Object = {
  size: "small",
  breed: "Greyhound",
  age: 1,
  furColor: "Grey",
}
console.log(dog2Object["age"])

//A list of specific things, use Arrays
const arrayOfDogs = [dog1Object, dog2Object]

const emptyObject = {}
const changeObject = function(object) {
  object.age = 3
}

changeObject(emptyObject)
console.log(emptyObject)