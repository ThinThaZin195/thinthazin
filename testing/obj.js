const person={
    firstname:"Jhon",
    lastname:"Doe",
    Eyes : "Blue",
    Age : 45,
};
console.log(person.Eyes, person.Age)

const cat={};

cat.color = "blue";
cat.name = "ShweWar";
cat.function = "Meows";

console.log(cat.color)

const dog = new Object()

dog.function = "Barks";
dog.eyes = "Brown";

//console.log(dog.eyes)

console.log(dog["eyes"])

const people = {
    firstname: "Mg",
    middlename: "Soe",
    lastname: "Thura",
    Fullname: function(){
        return this.firstname +" "+ this.middlename+" "+ this.lastname
    }

}
console.log(people.Fullname())

const baby = {
    status: "Healthy",
    color : "White",
}

let x = baby;
x.age = 5;
console.log(x.color)
//console.log(x.age)
console.log(baby.age)
delete x.status
//console.log(x.status)

const MyAsset = {
    Name: "Thin",
    Age: "25",
    Assets: {
        Home1:"Condo",
        Home2:"Apartment",
        Home3:"TownHouse",
    }
    
}
console.log(MyAsset["Assets"]["Home2"])

function Setting (A,f){
    this.Aircon= A,
    this.fan = f
}

const NewSet = new Setting("234","134")
console.log(NewSet.fan)

