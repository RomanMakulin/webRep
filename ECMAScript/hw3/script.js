"use strict";

// Задание 1: ""Управление персоналом компании""

// Реализуйте класс Employee (сотрудник), который имеет следующие свойства и методы:

// Свойство name (имя) - строка, имя сотрудника.
// Метод displayInfo() - выводит информацию о сотруднике (имя).

class Employee {
    constructor(name) {
        this.name = name;
    }
    displayInfo() {
        console.log(`Name employee: ${this.name} `);
    }
}

// Реализуйте класс Manager (менеджер), который наследует класс Employee и имеет дополнительное свойство и метод:

// Свойство department (отдел) - строка, отдел, в котором работает менеджер.
// Метод displayInfo() - переопределяет метод displayInfo() родительского класса и выводит информацию о менеджере (имя и отдел).

class Manager extends Employee {
    constructor(name, department) {
        super(name);
        this.department = department;
    }

    displayInfo() {
        console.log(`Name manager: ${this.name}. Hes department: ${this.department}`);
    }
}

const employee = new Employee("Roman");
console.log(employee.displayInfo());

const manager = new Manager("Alex", "managment");
console.log(manager.displayInfo());

//

// ""Управление списком заказов""

// Реализуйте класс Order (заказ), который имеет следующие свойства и методы:

// Свойство orderNumber (номер заказа) - число, уникальный номер заказа.
// Свойство products (продукты) - массив, содержащий список продуктов в заказе.
// Метод addProduct(product) - принимает объект product и добавляет его в список продуктов заказа.
// Метод getTotalPrice() - возвращает общую стоимость заказа, основанную на ценах продуктов.

class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}

class Order {
    constructor(orderNumber) {
        this.orderNumber = orderNumber;
        this.products = [];
        this.sumPrice = 0;
    }

    addProduct(product) {
        this.products.push(product);
    }
    getTotalPrice() {
        for (let value in this.products) {
            this.sumPrice += this.products[value].price;
        }
        return this.sumPrice;
    }
}

const prod1 = new Product("ball", 100);
const prod2 = new Product("ball", 300);
const prod3 = new Product("ball", 200);
const prod4 = new Product("ball", 100);

const order = new Order(12345);
order.addProduct(prod1);
order.addProduct(prod2);
order.addProduct(prod3);
order.addProduct(prod4);
order.addProduct(prod4);

console.log(order.getTotalPrice());


// const order = new Order(12345);

// const product1 = new Product(""Phone"", 500);
// order.addProduct(product1);

// const product2 = new Product(""Headphones"", 100);
// order.addProduct(product2);

// console.log(order.getTotalPrice()); // Вывод: 600