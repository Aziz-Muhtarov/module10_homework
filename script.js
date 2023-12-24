// let arr = [12,2,3];
// let result = arr.map(function(item, index, array) {

//   return item + 1

// });

// console.log(arr);
// console.log(result);


// let arr = [3211, 223, 30];
// let result = arr.reduce(function(sum,  item, index, array){

//   return sum + item

// }, 0);
// console.log(result); 

// Задание №1

// let userDigit = prompt("Введите значение:");

// let numberValue = +userDigit; // Преобразует введенное число в number

// if (!isNaN(numberValue) && typeof numberValue === 'number') {
//     // Проверяем, четное ли число
//     if (numberValue % 2 === 0) {
//         console.log("Введенное число чётное.");
//     } else {
//         console.log("Введенное число нечётное.");
//     }
// } else {
//     console.log("Упс, кажется, вы ошиблись.");
// }

// Задание №2

// let x = Object;

// if (typeof x === 'number') {
//     console.log('${x} - число');
// } else if (typeof x === 'string') {
//     console.log('${x} - строка');
// } else if (typeof x === 'boolean') {
//     console.log('${x} - логический тип');
// } else {
//     console.log('Тип x не определён');
// }


// Задание №3

// let word = 'HELLO';
// let reversedWord = word.split('').reverse().join('');

// console.log(reversedWord);


// Задание №4

// function getRandomInt(max) {
//     return Math.floor(Math.random() * max);
//   }

// console.log(getRandomInt(100));

// // или

// let randomNumber = Math.floor(Math.random() * 101);

// console.log(randomNumber)

// Задание №5

// const someArray = [12, 232, 11, 2, 943, 31, 968]

// console.log(someArray.length);

// for (let i = 0; i < someArray.length; i++) {
//     console.log( someArray[i] );
// }

// Задание №6

// function searchEqualElements(arr) {
//     // Проверяем, есть ли хотя бы один элемент в массиве
//     if (arr.length === 0) {
//         return true; // Если массив пуст, все элементы считаются одинаковыми
//     }

//     // Сравниваем каждый элемент с первым
//     let firstElement = arr[0];
//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] !== firstElement) {
//             return false; // Если найден хотя бы один отличный элемент, возвращаем false
//         }
//     }

//     return true; // Если все элементы равны, возвращаем true
// }

// // Пример использования
// let array1 = [1, 1, 1, 1, 1];
// let array2 = [1, 2, 3, 4, 5];

// console.log(searchEqualElements(array1)); // Выведет true
// console.log(searchEqualElements(array2))  // Выведет false

// Задание №7

// function countEvenOddZeroElements(arr) {
//     let evenCount = 0;
//     let oddCount = 0;
//     let zeroCount = 0;

//     for (let i = 0; i < arr.length; i++) {
//         // Проверяем, является ли элемент числом
//         if (typeof arr[i] === 'number') {
//             // Проверяем, является ли число четным, нечетным или нулем
//             if (arr[i] === 0) {
//                 zeroCount++;
//             } else if (arr[i] % 2 === 0) {
//                 evenCount++;
//             } else {
//                 oddCount++;
//             }
//         }
//     }

//     console.log(`Четные элементы: ${evenCount}`);
//     console.log(`Нечетные элементы: ${oddCount}`);
//     console.log(`Нулевые элементы: ${zeroCount}`);
// }

// // Пример использования
// let array = [1, 2, 3, 4, 0, 'text', null, 5, 6, '7'];

// countEvenOddZeroElements(array);

// Задание №8

// let myMap = new Map();

// myMap.set('name', 'Aziz')
// myMap.set('age', 29)
// myMap.set(1994, 'yes')
// myMap.set(true, 29)

// console.log(myMap);

// Модуль №11
// Задание №1

// function countEvenOddZeroElements(arr) {
//     let evenCount = 0;
//     let oddCount = 0;
//     let zeroCount = 0;

//     for (let i = 0; i < arr.length; i++) {
//         // Проверяем, является ли элемент числом и не является ли NaN
//         if (typeof arr[i] === 'number' && !isNaN(arr[i])) {
//             // Проверяем, является ли число четным, нечетным или нулем
//             if (arr[i] === 0) {
//                 zeroCount++;
//             } else if (arr[i] % 2 === 0) {
//                 evenCount++;
//             } else {
//                 oddCount++;
//             }
//         }
//     }

//     console.log(`Четные элементы: ${evenCount}`);
//     console.log(`Нечетные элементы: ${oddCount}`);
//     console.log(`Нулевые элементы: ${zeroCount}`);
// }

// // Пример использования
// let array = [1, 2, 3, 4, 0, 'text', null, 5, 6, '7'];

// countEvenOddZeroElements(array);

// Задание №2

// function isPrime(number) {
//     // Проверка на валидность входных данных
//     if (typeof number !== 'number' || isNaN(number) || number <= 1 || number > 1000) {
//         console.log('Данные неверны. Введите число от 2 до 1000.');
//         return;
//     }

//     // Проверка на простоту числа
//     for (let i = 2; i <= Math.sqrt(number); i++) {
//         if (number % i === 0) {
//             console.log(`${number} не является простым числом.`);
//             return;
//         }
//     }

//     console.log(`${number} является простым числом.`);
// }

// // Примеры использования
// isPrime(17); // Число является простым
// isPrime(4);  // Число не является простым
// isPrime(0);  // Данные неверны

// Задание №3

// function createAdder(firstNumber) {
//     return function(secondNumber) {
//         return firstNumber + secondNumber;
//     };
// }

// // Пример использования
// const adder5 = createAdder(5); // Создаем функцию, которая добавляет 5 к числу

// console.log(adder5(3)); // Выведет 8 (5 + 3)
// console.log(adder5(10)); // Выведет 15 (5 + 10)


// Задание №4

// Напишите функцию, которая принимает два числа. Каждую секунду необходимо выводить числа в 
// интервале от первого до второго принятого числа. Используйте setInterval.

// Например, пользователь ввёл числа 5 и 15. Каждую секунду в консоль должно печататься число, 
// начиная с 5 и заканчивая 15 (всего 11 чисел: 5 6 7 8 9 10 11 12 13 14 15).

// function sum(start, end) {
//     let intervalSum = start;

//     const intervalId = setInterval(function() {
//         console.log(intervalSum);

//         if (intervalSum === end) {
//             clearInterval(intervalId);
//         }

//     intervalSum++;
//     }, 1000);
// }

// sum(50, 55);


// Задание №5
// Напишите функцию, которая принимает два натуральных числа x и n и возвращает x в степени n. 
// Иначе говоря, умножает x на себя n раз и возвращает результат.

// Используйте Arrow Function синтаксис.

// Протестируйте функцию на любых значениях и выведите результат в консоль.

const  someNumber = (a, b) => {
    let finalNumber = a ** b;
    console.log (finalNumber)
    return; 
}

someNumber(5, 3);