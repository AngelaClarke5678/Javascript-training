//variables
// console.log("variables lesson")
// let js = "amazing";
// console.log(40 + 8 + 23 - 10);

// console.log("jonas is a value")
// console.log(23)

// let firstName = "Jonas";
// console.log(firstName)

// let PI = 3.1415;

// let myFirstJob = "programmer" //descriptive variable names
// let myCurentJob = "Teacher"

// console.log(myFirstJob)

// Assignment 1

// let country = "Australia"
// let continent = "Australia"
// let population = 9.6

// console.log(country)
// console.log(continent)
// console.log(population + "million")

// // data types
// console.log("Data types lesson")
// 7 primitave data types.
// 1. Number, used for decimals and integers
// 2. String, sequence of characters used for text
// 3. Boolean, true or false
// 4. undefined, value take by a variable not yet defined eg let children; without the value
// 5. Null, also means empty value
// 6. Symbol, value that is unique and cant be changed
// 7. Bigint (es2020) larger integers than the number type can hold

// you do not need to define the data type, the types are determined automatically.

// let javascriptIsFun = true
// console.log(javascriptIsFun)
// console.log(typeof true);
// console.log(typeof javascriptIsFun);
// console.log(typeof 23);
// console.log(typeof "Jonas");

// javascriptIsFun = "Yes"
// console.log(typeof javascriptIsFun);

// let year;

// console.log(year);
// console.log(typeof year);

// year = 1991
// console.log(typeof year);

// let isIsland = false;
// let language

// console.log(isIsland)
// console.log(language)

// 

// console.log("Operator Episode")

// // operator allows us to transform values or combined multiple values, eg mathematical, comparison, logical, assignment
// // math operator
// const now = 2037
// const ageJonas = now - 1991;
// const ageSarah = now - 2018
// console.log(ageJonas, ageSarah)

// console.log(ageJonas * 2, ageJonas / 10, 2 ** 3)
// // 2 ** 3 meams 2 to the power of 3 eg 2 *2*2

// // + operator can be used to concat strings

// const firstName = "Jonas"
// const lastName = "Schemedtmann"
// console.log(firstName + " " + lastName)

// // type of operator, gives us the type of the value

// // Assignment operators
// let x = 10 + 5; // 15
// x += 10 // x = x + 10 = 25
// x *= 4 // x = x * 4 = 100
// x++; // x = x +1 = 1001
// x-- // x = x -1 = 98
// x--
// console.log(x)

// // Comparison operators we have > , <, >=, <= - used to produce boolean values
// console.log(ageJonas > ageSarah) // result is True

// console.log(ageSarah >= 18) // greater or equal to 18, true
// // we would generally store these results in variables
// const isFullAge = ageSarah >= 18;

// console.log(now - 1991 > now - 2018) // you can do the above like this

// console.log("Operator Precedence")

// const now = 2037
// const ageJonas = now - 1991;
// const ageSarah = now - 2018

// console.log(now - 1991 > now - 2018) // how does javascript know what to do first. JS knows it should first do left and then right and compare them. JS has a well defined order of operator precedence.

// console.log(25 - 10 - 5)

// let x, y; // we can declare 2 values at the same time

// x = y = 25 - 10 - 5

// console.log(x, y) // x and y = 10, substraction has a 14 so will be execated first and left to right // x = y = 10 and then equal operators are executed and done right to left so x = 10, y = 10

// grouping has the highest precedence like BOMDAS
// const averageAge = (ageJonas + ageSarah) / 2 // the brackets executed first and then the division
// console.log(ageJonas, ageSarah)
// console.log(averageAge)

// console.log("coding challenge")
// Mark and John are trying to compare their BMI (Body Mass Index), which is
// calculated using the formula:
// BMI = mass / height ** 2 = mass / (height * height) (mass in kg
// and height in meter).
// Your tasks:
// 1. Store Mark's and John's mass and height in variables
// 2. Calculate both their BMIs using the formula (you can even implement both
// versions)
// 3. Create a Boolean variable 'markHigherBMI' containing information about
// whether Mark has a higher BMI than John.
// Test data:
// Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95m tall.
// Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76m tall.

// console.log("Data 1")

// const markWeightOne = 78
// const markHeightOne = 1.69
// const johnWeightOne = 92
// const johnHeightOne = 1.95

// const markBMIOne = markWeightOne / markHeightOne ** 2
// const johnBMIOne = johnWeightOne / (johnHeightOne * johnHeightOne)
// console.log(markBMIOne, johnBMIOne)
// const markHigherBMI = markBMIOne > johnBMIOne
// console.log(markHigherBMI)

// function calculateBMI(weight, height) {
//   return weight / height ** 2;
// }

// let myBMI = calculateBMI(markWeightOne, markHeightOne)
// console.log(myBMI)

// console.log("template literals section")

// const firstName = "Angela"
// const job = "teacher"
// const birthYear = 1991;
// const year = 2037

// const jonas = "I'm " + firstName + ", a " + (year - birthYear) + " years old " + job
// console.log(jonas)
// // ES6 provides template liters that are easier than above

// const jonasNew = `I'm ${firstName} a ${year - birthYear} years old ${job}`

// console.log(jonasNew)

// // multi-line string
// console.log('String with \n\ new line') //old way
// console.log(`String
// with
// multiple
// line`) // new way

// console.log("Decisions, If/ELSE")
// // a program that checks if a person can get a drivers licence or not and if not eligible how many years left

// const age = 15

// if (age >= 18) {
//   console.log("Sara can start driving lessons 😄")
// } else {
//   const yearsLeft = 18 - age
//   console.log(`Sarah is too young. Wait another ${yearsLeft} years`)
// }
// called an if/else control structure as this structure allows us to have more control over how our code is executed

// const birthYear = 1993

// let century;
// if (birthYear <= 2000) {
//   century = 20
// } else {
//   century = 21
// }
// console.log(century)

// console.log(`coding challenge 2`)

// Use the BMI example from Challenge #1, and the code you already wrote, and improve it.
// Your tasks:
// 1. Print a nice output to the console, saying who has the higher BMI. The message is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
// 2. Use a template literal to include the BMI values in the outputs. Example: "Mark's BMI (28.3) is higher than John's (23.9)!"
// Hint: Use an if/else statement 

// const marksBMI = 21.3
// const johnsBMI = 23.9

// if (marksBMI >= johnsBMI) {
//   console.log(`Mark's BMI (${marksBMI}) is higher than John's (${johnsBMI})`)
// } else {
//   console.log(`John's BMI (${johnsBMI}) is higher than Marks BMI (${marksBMI})`)
// }

console.log("type conversion")
// type conversion is when we manually convert from one type to another, coercion is when JS automatically does it behind the scenes for us

const inputYear = '1991'
console.log(Number(inputYear))
console.log(Number(inputYear) + 18) // we add Number() around the input

// we can convert numbers to strings
console.log(String(23))

// we can convert to a number, to a string or to a boolean, we cannot convert to null or undefined

console.log("type coercion")
// happens whenever an operator is dealing with 2 values that have different types.
console.log('I am ' + 23 + ' years old') // the plus operator triggers a coercion to string



