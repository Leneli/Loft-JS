/* ДЗ 1 - Функции */

/*
 Задание 1:

 Функция должна принимать один аргумент и возвращать его
 
function returnFirstArgument(arg) {
    return arg;
}*/

/*
 Задание 2:

 Функция должна принимать два аргумента и возвращать сумму переданных значений
 Значение по умолчанию второго аргумента должно быть 100
 
function defaultParameterValue(a, b) {
    var d = b || 100;

    return a + d;
}*/

/*
 Задание 3:

 Функция должна возвращать все переданные в нее аргументы в виде массива
 Количество переданных аргументов заранее неизвестно
 
function returnArgumentsArray() {
    return [...arguments];
}*/

/*
 Задание 4:

 Функция должна принимать другую функцию и возвращать результат вызова переданной функции
 
function returnFnResult(fn) {
    return fn();
}*/

/*
 Задание 5:

 Функция должна принимать число (значение по умолчанию - 0) и возвращать функцию (F)
 При вызове F, переданное число должно быть увеличено на единицу и возвращено из F
 
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
}*/

/*
 Задание 6 *:

 Функция должна принимать другую функцию (F) и некоторое количество дополнительных аргументов
 Функция должна привязать переданные аргументы к функции F и вернуть получившуюся функцию
 
function bindFunction(fn) {

    if (typeof fn == 'function') {
        for (let i = 1; i < arguments.length; i++) {
            fn = fn.bind(null, arguments[i]);
        }
    } else {
        return 0;
    }

    return fn; 
}*/
/*
export {
    returnFirstArgument,
    defaultParameterValue,
    returnArgumentsArray,
    returnFnResult,
    returnCounter,
    bindFunction
}
*/

/* ДЗ 3 - работа с массивами и объеектами */

/*
 Задача 1:
 Напишите аналог встроенного метода forEach для работы с массивами
 */
function forEach(array, fn) {
    if (!Array.isArray(array) || array.length === 0) throw new Error('array is not array or empty array');
    if (typeof fn !== 'function') throw new Error('fn is not a function');

    for (let i = 0; i < array.length; i++) {
        fn(array[i], i, array);
    }
}

/*
 Задача 2:
 Напишите аналог встроенного метода map для работы с массивами
 */
function map(array, fn) {
    var item;
    var newArr = [];

    if (!Array.isArray(array) || array.length === 0) throw new Error('array is not array or empty array');
    if (typeof fn !== 'function') throw new Error('fn is not a function');

    for (let i = 0; i < array.length; i++) {
        item = fn(array[i], i, array);
        newArr.push(item);
    }
    
    return newArr;
}

/*
 Задача 3:
 Напишите аналог встроенного метода reduce для работы с массивами
 */
function reduce(array, fn, initial) {
    var result = initial;
    var counter = 0;

    if (arguments.length < 3) {
        result = array[0];
        counter++;
    }

    for (let i = counter; i < array.length; i++) {
        result = fn(result, array[i], i, array);
    }

    return result;
}

/*
 Задача 4:
 Функция принимает объект и имя свойства, которое необходиом удалить из объекта
 Функция должна удалить указанное свойство из указанного объекта
 */
function deleteProperty(obj, prop) {
    var keys = Object.keys(obj);

    for (let i = 0; i < keys.length; i++) {
        if (keys[i] === prop) delete obj[prop];
    }
}

/*
 Задача 5:
 Функция принимает объект и имя свойства и возвращает true или false
 Функция должна проверить существует ли укзаанное свойство в указанном объекте
 */
function hasProperty(obj, prop) {
    var props = Object.keys(obj);
    
    for (let i = 0; i < props.length; i++) {
        if (props[i] === prop) return true;
    }	
    
    return false;
}

/*
 Задача 6:
 Функция должна получить все перечисляемые свойства объекта и вернуть их в виде массива
 */
function getEnumProps(obj) {
    var arr = [];

    for (var key in obj) {
        arr.push(key);
    }

    return arr;
}

/*
 Задача 7:
 Функция должна перебрать все свойства объекта, преобразовать их имена в верхний регистра и вернуть в виде массива
 */
function upperProps(obj) {
    var keys = Object.getOwnPropertyNames(obj);

    for (let i = 0; i < keys.length; i++) {
        keys[i] = keys[i].toUpperCase();
    }

    return keys;
}

/*
 Задача 8 *:
 Напишите аналог встроенного метода slice для работы с массивами
 */
function slice(array, from, to) {
    var newArr = [];

    from = from || 0;
    to = to || array.length;

    if (!Array.isArray(array) || array.length === 0) throw new Error('array is not array or empty array');

    if (from < 0) from = array.length + from;

    if (to < 0) to = array.length + to;

    for (let i = from; i < to; i++) {
        newArr.push(array[i]);
    }

    return newArr;
}

console.log(slice([0, 1, 2, 3, 4, 5, 6, 7], 2, -1));

/*
 Задача 9 *:
 Функция принимает объект и должна вернуть Proxy для этого объекта
 Proxy должен перехватывать все попытки записи значений свойств и возводить это значение в квадрат
 */
function createProxy(obj) {
    obj = {};

    var validator = {
        set: function(obj, prop, value) {
            obj[prop] = value * value;
    
            return true;
        }

    }
    
    return new Proxy(obj, validator);
}

export {
    forEach,
    map,
    reduce,
    deleteProperty,
    hasProperty,
    getEnumProps,
    upperProps,
    slice,
    createProxy
};
