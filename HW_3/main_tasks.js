//  1. Создать страницу, которая спрашивает имя у пользователя и выводит его с помощью функции.

let result = prompt('Как Вас зовут?');
if (result) alert(`Привет, ${result}!`);

// 2. Перепишите код, используя конструкцию switch-case, запрашивая возраст пользователя через диалоговое окно.

let age = parseInt(prompt('Сколько Вам лет?'));
switch(age) {
    case 18:
        alert('Вы совершеннолетний, все можно!');
        break;
    case 10:
        alert('Вам надо учить уроки!');
        break;
    case 30:
        alert('Ложитесь спать, завтра на работу');
        break;
    default:
        alert('Мы не знаем, что Вам делать');
        break;
}