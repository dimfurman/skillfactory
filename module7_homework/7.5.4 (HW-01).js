let curentEnergy = 0;

class Pribor {
    constructor(n, e) {
        this.name = n;
        this.active = false;
        this.energy = e;
        this.model = '';
        this.brend = '';
        this.location = "room";
    }
    getInfo() {
        console.log("Устройство '" + this.name + "': " + (this.active ? "выключено" : "включено") + ". Потребляемая мощность: " + this.energy + "кВт./ч");
    }
    OnOff() {
        this.active = this.active ? false : true;
        if (this.active) {
            console.log("Устройство '" + this.name + "' включили!");
            curentEnergy += this.energy;
        } else {
            console.log("Устройство '" + this.name + "' выключили!");
            curentEnergy -= this.energy;
        }
    }
}

class PriborIT extends Pribor {

    constructor(n, e) {
        super();
        this.name = n;
        this.active = false;
        this.energy = e;
    }
    reboot() {
        super.OnOff();
        setTimeout(3000, super.OnOff());
        console.log("Устройство '" + this.name + "'перезагружено!");
    }
}

class ProborInKitchen extends Pribor {
    constructor(n, e, isClear) {
        super();
        this.name = n;
        this.active = false;
        this.energy = e;
        this.isClear = isClear ? true : false;
    }
    wash() {
        if (this.isClear) {
            console.log("Прибор '" + this.name + "' и так уже чистый!");
        } else {
            this.isClear = true;
            console.log("Прибор '" + this.name + "' помыт! Он теперь чистый!");
        }
    }
}

const vacuumCleaner = new Pribor('Пылесос', 700);
vacuumCleaner.OnOff();
vacuumCleaner.getInfo();

const computer = new PriborIT('Компьютер', 850);
computer.OnOff();
computer.getInfo();
computer.reboot();

const mixer = new ProborInKitchen("Миксер", 80);
mixer.getInfo();
mixer.wash();

const microvawe = new ProborInKitchen("Микроволновка", 100, true);
microvawe.wash();

console.log('Текущая загрузка: ' + curentEnergy + 'кВт./ч');