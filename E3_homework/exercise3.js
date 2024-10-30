function getSumFunc(firstOperand){
    return function(secondOperand){
        return firstOperand + secondOperand;
    }
}
const sum = getSumFunc(+prompt('Введите первый операнд'));
const result = sum(+prompt("Введите второй операнд")); // Взял функцию prompt чтобы были не заранее подготовленные числа а те которые введет пользователь
console.log(`Сумма полученных чисел ${result}`);
alert(`Сумма полученных чисел ${result}`); // Выведем в консоль и на экран если проверка будет в браузере