// Домашнее задание:
// Задание 1: Функция, возвращающая объект, и меняющая местами ключ <-> значение.
// исходный объект должен остаться неизменным.
// Уровень 1: Работа с конкретныйм объектом и конкретными его свойствами

const firstObject = {
    'one': 'number',
};

const emptyObject = {};
const key = Object.keys(firstObject);

function resolve1( inputObject ) {
    const keysToProperty = inputObject[key];
    const [keyString] = key;
    emptyObject[keysToProperty] = keyString;
    return emptyObject
};

const result1 = resolve1(firstObject);

console.log(result1); // ожидаемый результат { 'number': 'one' }
console.log(firstObject); // ожидаемый результат { 'one': 'number' }


// Уровень 2: Работа с любым объектом БЕЗ вложенных объектов внутри
// и любым количеством свойствам
// Данный объект. Должен остаться неизменным
const secondObject = {
    'apple': 'fruit',
    'potato': 'vegetable',
    'strawberry': 'berry',
};

const secondEmptyObject = {};
const keys = Object.keys(secondObject);

function resolve2(inputObject) {
    keys.forEach(function(key) {
        const propertySecondObject = inputObject[key];
        secondEmptyObject[propertySecondObject] = key;
    });
    return secondEmptyObject;
};

const result2 = resolve2(secondObject);
console.log(secondObject);
// ожидаемый результат: { 'apple': 'fruit', 'potato': 'vegetable', 'strawberry': 'berry' }
console.log(result2);
// ожидаемый результат { 'fruit': 'apple', 'vegetable': 'potato', 'berry': 'strawberry' }


// Задание 2. Написать функцию, возвращающую век, соответствующий данному году
// Использовать Глобальный объект Math

function centuryFromYear(year) {
    const log = console.log;

    if (year >= 1 && year <= 100) {
        log('I')
    } else if (year >= 101 && year <= 200) {
        log('II')
    } else if (year >= 201 && year <= 300) {
        log('III')
    } else if (year >= 301 && year <= 400) {
        log('IV')
    } else if (year >= 401 && year <= 500) {
        log('V')
    } else if (year >= 501 && year <= 600) {
        log('VII')
    } else if (year >= 601 && year <= 700) {
        log('VII')
    } else if (year >= 701 && year <= 800) {
        log('VII')
    } else if (year >= 801 && year <= 900) {
        log('IX')
    } else if (year >= 901 && year <= 1000) {
        log('X')
    } else if (year >= 1001 && year <= 1100) {
        log('XI')
    } else if (year >= 1101 && year <= 1200) {
        log('XII')
    } else if (year >= 1201 && year <= 1300) {
        log('XII')
    } else if (year >= 1301 && year <= 1400) {
        log('XIV')
    } else if (year >= 1401 && year <= 1500) {
        log('XV')
    } else if (year >= 1501 && year <= 1600) {
        log('XVI')
    } else if (year >= 1601 && year <= 1700) {
        log('XVII')
    } else if (year >= 1701 && year <= 1800) {
        log('XVIII')
    } else if (year >= 1801 && year <= 1900) {
        log('XIX')
    } else if (year >= 1901 && year <= 2000) {
        log('XX')
    } else if (year >= 2001 && year <= 2100) {
        log('XXI')
    } else {
        console.log('We do not know what happened before our era. We do not know what will happen after 2100.')
    }
}

const year = 1905;
centuryFromYear(year); // 20 (ХХ)

const year2 = 1700;
centuryFromYear(year2); // 17 (XVII)
