//Methods? What are those?
//array.slice()
//array.map()
//array["map"]()
//array.forEach()
const dog1Object = {
  age: 2,
  breed: "Labrador",
  furColor: "Grey",
  size: "Medium",
  // bark: "Bark!"
  bark: function(){
    console.log("Bark!")
  }
}
// const dog5 = ["Pug", 5, "Large", "Tan"]
// dog5["map"]((element)=>{console.log(element)})
// console.log(dog1Object.bark)
// console["log"]("Hello!")
dog1Object["bark"]()
//Invoking method with dot notation
dog1Object.bark()
