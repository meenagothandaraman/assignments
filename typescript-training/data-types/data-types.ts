//Syntax to store data in Typescript

//declaration variable:dataType = value;

//Data types in TypeScript are divided into two different categories. 
// 1. Primitive datatypes (immutable)
// 2. Non-primitive  datatypes (mutable)

/****************************************************/
/*******PRIMITIVE DATA TYPES IN TYPESCRIPT***********/
/****************************************************/

// 1. Number ==> The data type used to store number with/without decimals
let num1:number = 10;
let num2: number = 12.23187;
var num3:number=67;
const num4:number=30;
console.log(num1);
console.log(num2);
console.log(num3)

//2.Strting ==>the data type used to store text
let name:String="Meena";
let city:string="villu'p'uram"
var num3:number=20;
console.log(name);
console.log(city);
console.log(num3);

//3. boolean ==> The data type used to store true/false values
let x: number = 10;
let y: number = 20;
let z: boolean = x > y;
console.log(z);

//4. null ==> The data type used to store null values
let n: null = null;
console.log(n);

//5.undefined ==> the data type used to store no value /undefined
let u: undefined;
console.log(u);


//union ==> Union represents more than one data type assigned to the variable. 
let empAddress: string | number | boolean = "123 Main Road";
console.log(empAddress);

empAddress = 123456;
console.log(empAddress);

empAddress = true;
console.log(empAddress);

//6.any ==> The data type used to store any type of value
let randomValue: any = "Hello";
console.log(randomValue);   

randomValue = 42;
console.log(randomValue);
randomValue = true;
console.log(randomValue);
randomValue=null;
console.log(randomValue);

/****************************************************/
/*******NON-PRIMITIVE DATA TYPES IN TYPESCRIPT***********/
/****************************************************/
