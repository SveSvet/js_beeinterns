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

const centuryFromYear = year =>  console.log(Math.ceil(year / 100));
const year = 1905;
centuryFromYear(year); // 20 (ХХ)

const year2 = 1700;
centuryFromYear(year2); // 17 (XVII)
