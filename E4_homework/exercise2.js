/*
 * Задание 2.
 * Написать функцию, которая принимает в качестве аргументов строку и объект,
 * а затем проверяет есть ли у переданного объекта свойство с данным именем.
 * Функция должна возвращать true или false.
 */
// тут тоже два варианта решения в связи с тем что, не указано должно ли искомое свойство быть own или оно может быть из прототипа
const obj = {
    a: "parentalProp"
}
const secObj = Object.create(obj);

secObj.b = "ownProperty";

propName = prompt('Введите искомое свойство');

// первый вариант (если искомое свойство должно быть own)
function isOwnExist(propName, obj) {
    return obj.hasOwnProperty(propName);
}

// второй вариант (если искомое свойство может быть унаследовано от прототипа)
function isExist(propName, obj) {
    return propName in obj
}

console.log(`Результат первого варианта ${isOwnExist(propName, secObj)}`); // если мы введем "a" здесь, то получим false тк "a" свойство прототипа
console.log(`Результат второго варианта ${isExist(propName, secObj)}`); // если мы введем "a" здесь то получим true тк оно перебирает все свойства