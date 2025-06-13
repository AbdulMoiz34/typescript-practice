// number
// string
// Boolean
// any
// tuple
// []
// unKnown: unknow is similar to any.
// void: when function doesn't return anything. so we can use this type
// null and undefined.

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


// optional parameter
const opt = (a: string, b?: number) => {
    console.log(a);
}

// Union Type in Typescript means the value can either a number or a string
const num1: number | string = "12";

console.log(abc(12, 32));


// this function will not return anything. so that's why I've used void here.
const func = (): void => {
    console.log("Hello world");
}

// there are two ways to define types
// first by type keyword
// second by interface

// type Student = {
//     name: string,
//     course: string,
//     phone: number,
//     enroll: true,
// };

interface Student {
    name: string,
    course: string,
    phone: number,
    enroll: boolean,
};
const student: Student = {
    name: "Moiz",
    course: "Web and App Development",
    phone: 1234567890,
    enroll: true,
};


