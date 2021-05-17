let number = prompt("enter a number")
let num = number%2
let result = num == 0 ? "this num is even" :   "this num is odd"
 
alert(result)


const div = () => {
let g = 30
let q = 5
return g / q
}
console.log(div())

const mul = () => {
    let g = 30
    let q = 5
    return g * q
    }
    console.log(mul())

    const sqrt = () => {
        let g = 30
        return g**(1/2)
        }
        console.log(sqrt())

const cap = () => {
    let cap = prompt("input should be turned to upper case")
    return  cap.toUpperCase()
}
alert(cap())
