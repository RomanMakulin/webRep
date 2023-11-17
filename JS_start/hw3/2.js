"use strict";

/*
Необходимо попросить пользователя ввести число.
Если пользователь ввел отличное от числа значение, необходимо вывести в консоль
строку: "Значение задано неверно", иначе необходимо будет вызвать функцию 
(нужно будет ее создать), которая будет принимать введенное пользователем 
число. Функция должна вычесть из переданного ей числа 13% и вывести в консоль 
сообщение "Размер заработной платы за вычетом налогов равен N."
*/

const salary = Number(prompt("Введите число"));

if (Number.isFinite(salary)) {
    console.log(finalySalary(salary));
} else {
    console.log("Значение задано неверно");
}

function finalySalary(salary) {
    return salary - (salary * 0.13);
}