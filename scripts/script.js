/*
Алгоритм без сховища
    1. отримати посилання на всі дом елементи
    2. повісити обробники подій на кнопку едд(по кліку) і на список ul(для делегування по кліку)
    3. функціонал додавання нової замітки
        3.1. зчитати текст з інпуту
        3.2. перевірка на пусте значення(повідомляти користувача)
        3.3. створення нової лішки
        3.4. додавання лішки у список
        3.5. очистити поле вводу
    4. функціонал виконаної задачі (ф-ція яка додає клас чекд або прибирає його)
    5. при натисканні на крестик - видалити елемент

Алгоритм зі сховищем
    1. створити ключ для сховища
    2. зберігати задачі у форматі: масив з обʼєктів вигляду: {
        text: string,
        isDone: boolean,
        id: number
    }
    3. створимо змінну для ID
    4. після натискання на кнопку едд викликати ф-цію, яка буде створювати обʼєкт задачі і потім додавати його в масив з локал стореджу
    5. створимо дата-айді у кожної лішки при створенні
    6. при кліку на лішку змінити статус в локалстореджі
    7. при кліку на крестик видалити обʼєкт з локалстореджу
    8. написати ф-цію, яка буде зчитувати задачі з локалстореджу і показувати їх користувачу на екрані

*/
import {addNewTask, handleTaskBehaviour, fullTasksList} from "./functions.js";
import refs from "./refs.js";



refs.addBtn.addEventListener("click", addNewTask)
refs.myUL.addEventListener("click", handleTaskBehaviour);
window.addEventListener("DOMContentLoaded", fullTasksList)