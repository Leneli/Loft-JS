/* ДЗ 1 - Функции */

/*
 Задание 1:

 Функция должна принимать один аргумент и возвращать его
 */
function returnFirstArgument(arg) {
    return arg;
}

/*
 Задание 2:

 Функция должна принимать два аргумента и возвращать сумму переданных значений
 Значение по умолчанию второго аргумента должно быть 100
 */
function defaultParameterValue(a, b) {
    var d = b || 100;

    return a + d;
}

/*
 Задание 3:

 Функция должна возвращать все переданные в нее аргументы в виде массива
 Количество переданных аргументов заранее неизвестно
 */
function returnArgumentsArray() {
    return [...arguments];
}

/*
 Задание 4:

 Функция должна принимать другую функцию и возвращать результат вызова переданной функции
 */
function returnFnResult(fn) {
    return fn();
}

/*
 Задание 5:

 Функция должна принимать число (значение по умолчанию - 0) и возвращать функцию (F)
 При вызове F, переданное число должно быть увеличено на единицу и возвращено из F
 */
var numbers = [];
var counts = [];

function returnCounter(number) {
    number = number || 0;

    function F() {
        var i;
        var flag = false;

        for (let j = 0; j < numbers.length; j++) {
            if (numbers[j] === number) {
                flag = true;
                i = j;
                break;
            }
        }

        if (!flag) {
            numbers.push(number);
            counts.push(0);
            i = counts.length - 1;
        }

        counts[i]++;
        number += counts[i];

        return number;
    }

    return F;
}

/*
 Задание 6 *:

 Функция должна принимать другую функцию (F) и некоторое количество дополнительных аргументов
 Функция должна привязать переданные аргументы к функции F и вернуть получившуюся функцию
 */
function bindFunction(fn) {

    if (typeof fn == 'function') {
        for (let i = 1; i < arguments.length; i++) {
            fn = fn.bind(null, arguments[i]);
        }
    } else {
        return 0;
    }

    return fn; 
}

export {
    returnFirstArgument,
    defaultParameterValue,
    returnArgumentsArray,
    returnFnResult,
    returnCounter,
    bindFunction
}
