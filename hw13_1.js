/*Напишіть функцію, яка рекурсивно обчислює n-те число Фібоначчі.
 Числа Фібоначчі визначаються як послідовність, у якій кожне число дорівнює сумі двох попередніх чисел
  (наприклад, 0, 1, 1, 2, 3, 5, 8 і так далі). Використовуйте рекурсію для обчислення чисел Фібоначчі.
*/
function fibonacci(n) {
    if (n <= 0) {
        return 0;
    } else if (n === 1) {
        return 1;
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}

let n = 10;
console.log(`Fibonacci(${n}) = ${fibonacci(n)}`);
