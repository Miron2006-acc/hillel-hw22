"use strict"

function padString(str, length, char, left = false) {
    // Перевірка на наявність аргументів
    if (!str || typeof length !== 'number' || typeof char !== 'string' || char.length !== 1 || typeof left !== 'boolean') {
        return 'some error';
    }

    // Якщо задовільняємо умову, що число менше довжини рядка,
    // то використовуємо метод substr для обрізання рядка
    if (length < str.length) {
        return str.substr(0, length);
    }

    // Визначаємо, скільки символів потрібно додати
    const padLength = length - str.length;
    const padding = char.repeat(padLength);

    // Додаємо символи ліворуч або праворуч в залежності від параметру "left"
    if (left) {
        return padding + str;
    } else {
        return str + padding;
    }
}

// Приклади використання:
console.log(padString('hello', 8, '*')); // hello***
console.log(padString('hello', 6, '*', false)); // *hello
console.log(padString('hello', 2)); // he
