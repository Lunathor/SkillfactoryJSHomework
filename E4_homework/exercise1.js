/*
 * Задание 1
 * Написать, функцию, которая принимает в качестве аргумента объект и выводит в консоль все ключи
 * и значения только собственных свойств.
 * Данная функция не должна возвращать значение
 */


// Сделаем примерный родительский объект
const parentalObj = {
    a: "parentalProp"
}
// сделаем объект который мы будем итерировать (наследник parentalObj)
const iterObject = Object.create(parentalObj);

// Добавим в итерируемый объект собственное свойство
iterObject.b = "ownProperty";


// Первый вариант решения
function objIterator(obj) {
    // функция, которая принимает объект как аргумент
    for (let key in obj) {
        // проходим по каждому ключу объекта
        if (obj.hasOwnProperty(key)) {
            // если hasOwnProperty вернул true мы выводим ключ и значение
            console.log(`${key}: ${obj[key]}`);
        }
    }
}

objIterator(iterObject)


// Второй вариант решения
function logOwnProperties(obj) {
    // Получаем массив собственных свойств объекта, не помню чтобы об этом говорилось в модуле но .keys в данном случае
    // возвращает только own свойства объекта
    const ownKeys = Object.keys(obj);

    // Проходим по каждому собственному свойству и выводим его ключ и значение
    ownKeys.forEach(key => {
        console.log(`${key}: ${obj[key]}`);
    });
}

logOwnProperties(iterObject);
