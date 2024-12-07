let num1 = 4;
let num2 = 5;

function Add(num1,num2){
    return num1+num2
}
console.log(Add(4,5))


function Divi(one,two){
    return one/two
}
console.log(Divi(9,3))

function Str(){
    return "Pass"
}
console.log(Str())

let car ={
    Name: "Mercedes",
    Model: "Y2024",
    Color: "Grey",
}

function CarModel(theCar){
    theCar.Model = "Y2025"
}
console.log(car.Model)
CarModel(car)
console.log(car.Model)

const cat = {
    color : "Orange",
    Eyes : "Brown",
    Type : "Partain"
}

function MyCat(animal){
    animal.Type = "Burmese"
}

console.log(cat.Type)
MyCat(cat)
console.log(cat.Type)

const myArr = [30]

function Arr (arr){
    arr[0]= 40
}
console.log(myArr[0])
Arr(myArr)
console.log(myArr[0])

const Num = function(number){
    return number*number
}

console.log(Num(3))




const factorial = function fac(n) {
    return n < 2 ? 1 : n * fac(n - 1);
  };
  
  console.log(factorial(3)); // 6
