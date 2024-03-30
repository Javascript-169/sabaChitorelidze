class car {
    constructor(name, year) {
        this.name = name;
        this.year = year;
    }

    getCars() {
        return `I really like ${this.name} since its made in ${this.year} year`;
    };
}

const carInfo = new car("BMW", 2014);

console.log(carInfo.getCars());