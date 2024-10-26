// let amount = prompt("Enter your amount of dollars");
// const exchange_rate = 97;
// let rublesAmount = amount * exchange_rate;
// alert("You have" + rublesAmount + "rubles ");
// const inputValue = prompt("Введите число");
// const value = +inputValue;
// if (typeof(value) == "number" && !isNaN(value)) {
//     if (value === 0) {
//         console.log('ноль')
//     }
//     else if (value % 2 === 0) {
//         console.log('Четное')
//     }
//     else {
//         console.log("Нечетное")
//     }
// }
// else {
//     console.log('Упс, кажется, вы ошиблись')
// }
// let x;
//
// switch (typeof x) {
//     case "number":
//         console.log("X - число");
//         break;
//     case "string":
//         console.log("Х - строка");
//         break;
//     case "boolean":
//         console.log("Х - булево значение")
//         break;
//     default:
//         console.log('Тип не определен')
// }
// const string = 'hello'
// const reverseString = string.split("").reverse().join("")
// console.log(reverseString)
// const randomInt = Math.floor(Math.random() * 101);
// console.log(randomInt);
// const arr = [1,2,'undefined',3,4,undefined,5,6, NaN];
// console.log("Количество элементов в массиве: ", arr.length);
//
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }
// let arr = [1,2,3]
// arr.forEach(function(item, index, array) {
//     console.log(item)
// });
// const arr = [1,1,1,1];
// let isEqual = true;
// const reference = arr[0];
// for (let i of arr){
//     if (i !== reference){
//         isEqual = false;
//     }
// }
// console.log(isEqual);
// const arr = [0, null, NaN, 0, 1, 2, 4, "str"];
// let even = 0,
//     odd = 0,
//     zero = 0;
// for (let i = 0; i < arr.length; i++) {
//     if (typeof arr[i] === 'number' && !isNaN(arr[i])) {
//         if (arr[i] === 0) {
//             zero += 1;
//         } else if (arr[i] % 2 === 0) {
//             even += 1;
//         } else {
//             odd += 1;
//         }
//     }
// }
// console.log("Количество элементов в массиве: ", arr.length);
// console.log("Количество четных элементов: ", even);
// console.log("Количество нечетных элементов: ",odd);
// console.log("Количество нулей: ", zero);
// let map = new Map();
// map.set("id", 1);
// map.set(1, "name");
// map.set(2, "surname");
// const keys = map.keys();
// for (let key of keys) {
//     console.log(`Ключ - ${key}, Значение - ${map.get(key)}`);
// }
// Модуль "Функции"
// Задание 1
// function getNumsTypes(){
//     const arr = [0, null, NaN, 0, 1, 2, 4, "str"];
//     let even = 0,
//         odd = 0,
//         zero = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if (typeof arr[i] === 'number' && !isNaN(arr[i])) {
//             if (arr[i] === 0) {
//                 zero += 1;
//             } else if (arr[i] % 2 === 0) {
//                 even += 1;
//             } else {
//                 odd += 1;
//             }
//         }
//     }
//     console.log("Количество элементов в массиве: ", arr.length);
//     console.log("Количество четных чисел: ", even);
//     console.log("Количество нечетных чисел: ",odd);
//     console.log("Количество нулей: ", zero);
// }
// getNumsTypes()
// Задание 2
// function defineSimple(num){
//     let isSimple, result;
//     isSimple = true;
//
//     if (num > 1 && num <= 1000){
//         for (let i = 2; i < num; i++) {
//             if (num % i === 0){
//                 isSimple = false;
//             }
//         }
//         result = isSimple ? `Число ${num} - простое число` : `Число ${num} - составное число`;
//     }else if (num > 1000){
//         result = 'Данные неверны'
//     }
//     return result;
// }
// defineSimple(+prompt('Введите число'));
// Задание 3
// function getSumFunc(firstOperand){
//     return function(secondOperand){
//         return firstOperand + secondOperand;
//     }
// }
// const sum = getSumFunc(+prompt('Введите первый операнд'));
// const result = sum(+prompt("Введите второй операнд")); // Взял функцию prompt чтобы были не заранее подготовленные числа а те которые введет пользователь
// console.log(`Сумма полученных чисел ${result}`);
// alert(`Сумма полученных чисел ${result}`); // Выведем в консоль и на экран если проверка будет в браузере
// Задание 4
let start = +prompt("Введите стартовое число")
let stop = +prompt("Введите конечное число")
function logNum(start, stop){
    let current = start;
    let IntervalId = setInterval(function(){
        console.log(current);
        if (current === stop){
            clearInterval(IntervalId);
        }
        current++
    }, 1000);
}
logNum(start, stop);

