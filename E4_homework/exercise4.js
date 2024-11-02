// Реализовать следующее консольное приложение подобно примеру, который разбирался в видео. Реализуйте его на прототипах.
//
// Определить иерархию электроприборов. Включить некоторые в розетку. Посчитать потребляемую мощность.
//
// Таких приборов должно быть, как минимум, два (например, настольная лампа и компьютер). Выбрав прибор, подумайте, какими свойствами он обладает.
//
// План:
//
// Определить родительскую функцию с методами, которые включают/выключают прибор из розетки.
// Создать делегирующую связь [[Prototype]] для двух конкретных приборов.
// У каждого из приборов должны быть собственные свойства и, желательно, методы, отличные от родительских методов.
// Создать экземпляры каждого прибора.
// Вывести в консоль и посмотреть результаты работы, гордиться собой. :)
// Общие требования:
//
// Имена функций, свойств и методов должны быть информативными.
// Соблюдать best practices:
// использование camelCase нотации для переменных и методов, PascalCase для названия функций-конструкторов и классов;
// информативные имена (а не a, b);
// четкая связь между классом и его экземплярами (класс описывает множество, а экземпляр конкретную реализацию);
// использование синтаксиса ES6 (кроме функции-конструкторов) и т. д.


//Создадим родительский класс для электро приборов
function ElectroDevice(name, power) {
    this.name = name; // Название прибора
    this.power = power; // Мощность в ваттах
    this.isOn = false; // Состояние прибора (включен/выключен)
}

//Метод для включения прибора
ElectroDevice.prototype.turnOn = function() {
    if (!this.isOn) {
        this.isOn = true;
        console.log(`${this.name} is on`);
    }
    else {
        console.log(`${this.name} is off`);
    }
};
//Метод выключения прибора
ElectroDevice.prototype.turnOff = function() {
    if(this.isOn) {
        this.isOn = false;
        console.log(`${this.name} is off`);
    }
    else {
        console.log(`${this.name} is on`);
    }
};
// Метод получение потребляемой мощности
ElectroDevice.prototype.getPower = function() {
    return this.isOn ? this.power: 0;
};
// Конструктор настольной лампы
function DeskLamp(name, power, brightness, color) {
    ElectroDevice.call(this, name, power);
    this.brightness = brightness; // Яркость лампы
    this.color = color; // Цвет лампы
}
// Установим прототипы
DeskLamp.prototype = Object.create(ElectroDevice.prototype);
DeskLamp.prototype.constructor = DeskLamp;
// Метод установки яркости
DeskLamp.prototype.setBrightness = function(newBrightness) {
    this.brightness = newBrightness;
    console.log(`Для ${this.name} яркость установлена на ${this.brightness}`)
};
// Метод изменения цвета
DeskLamp.prototype.setColor = function(newColor) {
    this.color = newColor;
    console.log(`Для ${this.name} цвет установлен на ${this.color}`)
};
// Конструктор для компьютера
function Computer(name, power, ram) {
    ElectroDevice.call(this, name, power);
    this.ram = ram; // Оперативная память компьютера
}
// Установка прототипов
Computer.prototype = Object.create(ElectroDevice.prototype);
Computer.prototype.constructor = Computer;
// Метод изменения оперативной памяти
Computer.prototype.upgradeRAM = function(newRAM) {
    this.ram = newRAM;
    console.log(`${this.name} обновлен до ${this.ram} ГБ ОЗУ`)
};
// Создадим экземпляры приборов
const lamp= new DeskLamp('Настольная лампа', 60, 'Яркая', 'Белый');
const computer = new Computer('Компьютер','450', '16');
// Включаем приборы
lamp.turnOn();
computer.turnOn();
// Считаем сколько энергии они потребляют
const totalPower = lamp.getPower() + computer.getPower();
console.log(`Общая потребляемая мощность приборов: ${totalPower}`);
// Применяем созданные для каждого из них методы
lamp.setBrightness('Умеренная');
lamp.setColor('Красный');
computer.upgradeRAM(32);
// Выключаем приборы
lamp.turnOff();
computer.turnOff();
