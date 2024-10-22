// Операторы, значения, переменные
// Первое задание
// let firstName = prompt('Введите ваше имя');
// let lastName = prompt('Введите вашу фамилию');
// alert(`Привет, ${firstName} ${lastName}!`)
// Второе задание
// let celsium = prompt("Введите количество градусов по цельсию");
// let fahrenheit = celsium * 9 / 5 + 32;
// alert(`${celsium} градусов по Цельсию равны ${fahrenheit} градусам по Фаренгейту`)
// Третье задание
// x = prompt("Введите X");
// y = ((4*x**2+18-23*x)/(5/9*x+18*x**3/33*x)+(x*(15/12)))
// console.log(y)
// Четвертое задание
// a = 12;
// b = 'number';
// c = false;
// d = null;
// e = undefined;
// f = 123.34;
// g = '1' + 1;
// h = 15 / 0;
// i = -'5';
// j = 5 == '5'
//
// at = typeof a === 'number'; // true
// bt = typeof b === 'string'; // false, а нужно чтобы все были true
// ct = typeof c === 'boolean';
// dt = typeof d === 'object';
// et = typeof e === 'undefined';
// ft = typeof f === 'number';
// gt = typeof g === 'string';
// ht = typeof h === 'number';
// it = typeof i === 'number';
// jt = typeof j === 'boolean';
//
// alert(at && bt && ct && dt && et && ft && gt && ht && it && jt);
// Пятое задание
// const NDS = 0.20
// const NDFL = 0.13
// const EXCISE = 0.1
// const RENT = 40000
// const FOOD = 15000
// const OTHER = 15000
// const MY_SALARY = 120000
//
// const ndflTax = MY_SALARY * NDFL;
// const mySalaryNet = MY_SALARY - ndflTax;
// const otherTaxes = mySalaryNet * (NDS + EXCISE);
// let totalAvailable = mySalaryNet - otherTaxes;
// totalAvailable -= FOOD + OTHER + RENT
// alert('Зарплата ' + MY_SALARY + ' рублей')
// alert('Уплачено налогов на сумму ' + (ndflTax + otherTaxes) + ' рублей')
// alert('Осталось ' + totalAvailable + ' рублей')
// Условия
// Первое задание
// const A = prompt('Введите катет А')
// const B = prompt("Введите катет B")
// const C = prompt("Введите гипотенузу С")
//
// if (A ** 2 + B ** 2 === C ** 2){
//     alert('Это прямоугольный треугольник!')
// } else {
//     alert('Это не прямоугольный треугольник!')
// }
// Второе задание
// firstInt = prompt("Введите первое число");
// secondInt = prompt("Введите второе число")
// thirdInt = prompt("Введите третье число")
//
// if (firstInt > secondInt) {
//     if (firstInt > thirdInt) {
//         alert(`Максимальное число №1 ${firstInt}`)
//     } else {
//     alert(`Максимальное число №3 ${thirdInt}`)
//     }
// } else if (secondInt > thirdInt) {
//     alert(`Максимальное число № 2 ${secondInt}`)
// } else {
//     alert(`Максимальное число №3 ${thirdInt}`)
// }
// Третье задание
// const N= +prompt("Введите число")
//
// if (N === 0){
//     alert(`Число ${N} ноль!`)
// } else if (N % 2 === 0){
//     alert(`Число ${N} четное!`)
// } else {
//     alert(`Число ${N} нечетное!`)
// }
// Циклы
// Первое задание
// for (let i = 1; i <= 11; i += 2) {
//   if (i > 5) {
//     console.log(i-1)
//   } else {
//     console.log(i)
//   }
// }
// Второе задание
// let sum = 0
// let a; // noprotect
// while (a !== 0) {
//     a = +prompt("Введите число, 0 - остановить")
//     sum += a
// }
// alert(sum)
// Третье задание
// let neededNum = 10;
// let currentNum; // noprotect
// do {
//     while (currentNum !== neededNum) {
//         currentNum = +prompt(`Введите число ${neededNum}`);
//     }
//     neededNum *= 2;
// } while (currentNum < 100);
// alert("Спасибо!")
// Функции