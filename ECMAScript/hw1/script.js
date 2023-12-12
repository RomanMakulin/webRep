"use strict";

// 1) Дан массив const arr = [1, 5, 7, 9] с помощью Math.min и spread оператора, 
// найти минимальное число в массиве, решение задание должно состоять из одной строки

const arr = [1, 5, 7, 9];
console.log(Math.min(...arr));

// 2) Напишите функцию createCounter, которая создает счетчик и возвращает объект с двумя методами: increment и decrement. 
// Метод increment должен увеличивать значение счетчика на 1, а метод decrement должен уменьшать значение счетчика на 1. 
// Значение счетчика должно быть доступно только через методы объекта, а не напрямую.

// const createCounter = () => {
//     let counter = 0;
//     return {
//         increment: () => { return counter++ },
//         decrement: () => { return counter-- },
//         getNum: () => { return counter }
//     }
// }

function createCounter() {
    let counter = 0;
    return {
        increment: () => { counter++ },
        decrement: () => { counter-- },
        getNum: () => { return counter }
    }
}

const count1 = createCounter();
count1.increment();
count1.increment();
count1.increment();
count1.decrement();

console.log(count1.getNum());

// 3) Напишите рекурсивную функцию findElementByClass, которая принимает корневой элемент дерева DOM и название класса в качестве аргументов и возвращает первый найденный элемент с указанным классом в этом дереве.
// Пример
// const rootElement = document.getElementById('root');
// const targetElement = findElementByClass(rootElement, 'my-class');
// console.log(targetElement);

let serchElement = null;
const rootElement = document.getElementById('root');
const targetElement = findElementByClass(rootElement, 'my-class');

function findElementByClass(rootEl, classEl) {
    if (rootEl.hasChildNodes()) {
        for (const element of rootEl.children) {
            if (element.className === classEl) return serchElement = element;
            findElementByClass(element, classEl);
        }
    }
    return serchElement;
}

console.log(targetElement);