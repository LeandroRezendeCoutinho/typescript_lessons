//numbers
let first: number = 123 //number
let second: number = 0x37CF //hexadecimal
let third: number = 0o377 // octal
let fourth: number = 0b1111001 //binary

console.log(first);  // 123 
console.log(second); // 14287
console.log(third);  // 255
console.log(fourth); // 121

//arrays
let fruits: string[] = ['Apple', 'Orange', 'Banana']
let juices: Array<string> = ['Apple', 'Orange', 'Banana']
let combineds: (string | number)[] = [1, 2, 'Apple', 'Orange']
let combos: Array<string | number> = [1, 2, 'Apple', 'Orange']

for (let index = 0; index < fruits.length; index++) {
    const element = fruits[index]
    console.log(element)
}

juices.sort()
juices.forEach(element => {
    console.log(element)
})

//tuples
let person: [number, string] = [1, 'Leandro']
let seller: [number, string, boolean] = [1, 'Leandro', true]
let people: [number, string][] = [[1, 'Leandro'], [2, 'Lucas']]
let comunity: Array<[number, string]> = [[1, 'Leandro'], [2, 'Lucas']]

console.log(`Person ID ${person[0]}\nName ${person[1]}`)
console.log(`Community second person name is ${comunity[1][1]}`)

