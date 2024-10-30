// Задание 2
function defineSimple(num){
    let isSimple, result;
    isSimple = true;

    if (num > 1 && num <= 1000){
        for (let i = 2; i < num; i++) {
            if (num % i === 0){
                isSimple = false;
            }
        }
        result = isSimple ? `Число ${num} - простое число` : `Число ${num} - составное число`;
    }else if (num > 1000){
        result = 'Данные неверны'
    }
    return result;
}
defineSimple(+prompt('Введите число'));