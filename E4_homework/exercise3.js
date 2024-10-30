/*
 * Задание 3.
 * Написать функцию, которая создает пустой объект, но без прототипа.
 */
function objCreator() {
    return Object.create(null);
}

const noProtoObj = objCreator();

console.log(noProtoObj);

console.log(Object.getPrototypeOf(noProtoObj));