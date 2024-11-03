/*
Переписать консольное приложение из предыдущего юнита на классы.
 */
// Создадим родительский класс для электро приборов
class ElectroDevice {
    constructor(name, power){
        this.name = name; // Название прибора
        this.power = power; // Мощность в ваттах
        this.isOn = false; // Состояние прибора (включен/выключен)
    };

    // Метод для включения прибора

    turnOn(){
        if (!this.isOn) {
            this.isOn = true;
            console.log(`${this.name} is on`);
        }
        else {
        console.log(`${this.name} is off`);
        }
    };
    // Метод для выключения прибора

    turnOff(){
        if(this.isOn) {
            this.isOn = false;
            console.log(`${this.name} is off`);
        }
        else {
            console.log(`${this.name} is on`);
        }
    };

    // Метод получения потребляемой мощности

    getPower(){
        return this.isOn ? this.power : 0;
    };
}

// Делаем класс настольной лампы расширяя класс электро прибора
class DeskLamp extends ElectroDevice {
    constructor(name, power, brightness, color) {
        super(name, power);
        this.brightness = brightness; // Яркость лампы
        this.color = color; // Цвет лампы
    };

    // Метод установки яркости

    setBrightness(newBrightness) {
        this.brightness = newBrightness;
        console.log(`Для ${this.name} яркость установлена на ${this.brightness}`)
    };

    // Метод изменения цвета

    setColor(newColor) {
        this.color = newColor;
        console.log(`Для ${this.name} цвет установлен на ${this.color}`)
    };
}

// Создаем класс для компьютера

class Computer extends ElectroDevice {
    constructor(name, power, ram) {
        super(name, power);
        this.ram = ram; // Оперативная память компьютера
    };

    // Метод изменения оперативной памяти

    upgradeRAM(newRAM) {
        this.ram = newRAM;
        console.log(`${this.name} обновлен до ${this.ram} ГБ ОЗУ`)
    };
}

// Создадим для приборов экземпляры

const lamp= new DeskLamp('Настольная лампа', 60, 'Яркая', 'Белый');
const computer = new Computer('Компьютер','450', '16');

// Включаем приборы

lamp.turnOn();
computer.turnOn();

// Считаем сколько энергии они потребляют

const totalPower = lamp.getPower() + computer.getPower();
console.log(`Общая потребляемая мощность приборов: ${totalPower}`);

// Применяем созданные для каждого из приборов методы

lamp.setBrightness('Умеренная');
lamp.setColor('Красный');
computer.upgradeRAM(32);

// Выключаем приборы

lamp.turnOff();
computer.turnOff();

