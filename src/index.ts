let num: number = 12;
console.log(num);


num = 14;
// num = "a" //we'll get an error. because I'm trying to assign string in number typed variable

let str: any = "Abdul Moiz";
str = 12;
console.log(str);

// In "any" type you can assign whatever u want. but It's not recommended way

const bool: boolean = true;
console.log(bool);

const names: string[] = ["12", "42"];


type User = {
    name: string,
    address: object,
    id: number,
    email: string,
    number: number
}

const user: User = {
    name: "Abdul Moiz",
    address: {},
    id: 123,
    email: "abc@gmail.com",
    number: 12,
};


function abc(a: number, b: number): number {
    return a + b;
}

const foo = (a: number, b: number): number => {
    return a + b;
}

// optional parameter
const opt = (a: string, b?: number) => {
    console.log(a);
}

// Union Type in Typescript means the value can either a number or a string
const num1: number | string = "12";

console.log(abc(12, 32));


