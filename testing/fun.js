function Numbers(n){
    if(n===0 || n<0){
        return "90"
    }else{
        return n*n
    }
}

console.log(Numbers(8))

function Exponential(num){
    if(num==0 || num<0){
        return "40"
    }else{
        return num*Exponential(num-1)
    }
}
console.log(Exponential(6))


console.log(Square(3))
function Square(num){
    return num**num
}

function getScore(){
    let num1 =4 ;
    let num2 =5;
    let name = "God";

    function Multiply(){
        return `${name} got ${num1+num2}`
    }
    return Multiply()
}
console.log(getScore());

function getGPA(){
    let Sub1 = 90;
    let Sub2 = 88;
    let Sub3 = 67;
    let name = "Win"
    function calGPA(){
        return `${name} got ${(Sub1+Sub2+Sub3)/100} GPA`
    }
    return calGPA()
}
console.log(getGPA())

function Recur(num){
    if(num>10){
        return num
    }
    Recur(num+1)
}
console.log(Recur(21))

function nonRecursive(x){
    if(x>0 && x<5){
        console.log(x)
        return ;
    }
    console.log(`Begin: ${x}`)
    nonRecursive(x-1)
    console.log(`End: ${x}`)
}
nonRecursive(4)

function One(first){
    return function Two(second){
        console.log("Inner",second)
        console.log("Outer", first)
    }
}
const newThree = One()
newThree("Im second")