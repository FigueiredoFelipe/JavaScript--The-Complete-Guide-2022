class Course {
    #title;
    #length;
    #price;

    constructor(title, length, price) {
        this.#title = title;
        this.#length = length;
        this.#price = price;
    }

    get price() {
        return `$${this.#price}`;
    }

    set price(value) {
        if (value > 0) {
            this.#price = value;
        } else {
            throw new Error('Price must be a positive value');
        }
    }

    getLengthPriceRatio() {
        const lengthInWeeks = parseFloat(this.#length);
        const ratio = lengthInWeeks / this.#price;
        return `You get ${ratio.toFixed(2)} weeks of course length per dollar.`;
    }

    getSummary() {
        return `${this.#title} (${this.#length}): ${this.price}`;
    }
}

class PracticalCourse extends Course {
    #numOfExercises;

    constructor(title, length, price, numOfExercises) {
        super(title, length, price);
        this.#numOfExercises = numOfExercises;
    }
}

class TheoreticalCourse extends Course {
    publish() {
        console.log("This course is published.");
    }
}

const course1 = new PracticalCourse("Introduction to JavaScript", "6 weeks", 99.99, 50);
const course2 = new TheoreticalCourse("Web Development with React", "8 weeks", 149.99);

console.log(course1);
console.log(course2);

console.log(course1.getLengthPriceRatio());
console.log(course1.getSummary());

console.log(course2.getLengthPriceRatio());
console.log(course2.getSummary());

course2.publish();
