"use strict";

/*
Необходимо реализовать четыре функции, каждая функция должна принимать по два
числа и выполнять одну из операций (каждая функция выполняет одну из них):
1. Сложение
2. Разность
3. Умножение
4. Деление
Необходимо сделать так, чтобы функция вернула число, например выражение
console.log(sum(2, 6)); должно вывести число 8 в консоль (sum - функция
сложения в данном примере, ваши названия функций могут отличаться).
Округлять значения, которые возвращают функции не нужно, однако, обратите
внимание на разность, функция должна вычесть из большего числа меньшее, либо
вернуть 0, если числа равны.
Функциям всегда передаются корректные числа, проверки на NaN, Infinity делать
не нужно.
Демонстрировать работы функций не обязательно.
*/

const num1 = Number(prompt("Введите первое число: "));
const num2 = Number(prompt("Введите второе число: "));

console.log(sum(num1, num2));
console.log(mult(num1, num2));
console.log(div(num1, num2));
console.log(minus(num1, num2));

function sum(num1, num2) {
    return num1 + num2;
}

function mult(num1, num2) {
    return num1 * num2;
}

function div(num1, num2) {
    return (num1 / num2).toFixed(3);
}

function minus(num1, num2) {
    if (num1 > num2) {
        return num1 - num2;
    } else if (num1 === num2) {
        return 0;
    }
    return num2 - num1;
}