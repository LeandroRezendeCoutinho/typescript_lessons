
// variable declaration
function letDeclaration() {
    let age: number = 39
    let name: string = "Leandro"
    let isUpdated: boolean = true

    console.log(`My name is ${name}, i have ${age} years old. This info is ${isUpdated} `)
}
letDeclaration()

// param declaration
function param(id: number) {
    console.log(id)
}
param(10)

// object declaration
let employee: {
    id: number
    name: string
}

employee = {
    id: 100,
    name: "leandro"
}

console.log(employee)

function scoped() {
    let num1: number = 10
    let num2: number = 20
    if (num1 < num2) {
        let num3: number = 30
        console.log(num1);
        console.log(num2);
        console.log(num3)
    }
    console.log(num1);
    console.log(num2);
    // console.log(num3)
}

scoped()

const num: number = 10
// num = 20