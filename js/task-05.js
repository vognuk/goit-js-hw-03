// Задача 3-5
// Оператор in и метод push
// Напиши функцию getAllPropValues(arr, prop), которая получает массив объектов и имя свойства.
// Функция возвращает массив значений определенного свойства prop из каждого объекта в массиве.
// Используй 
// метод push для добавления значения в массив и 
// оператор in для проверки наличия свойства в объекте.

const getAllPropValues = (array, prop) => {
    'use strict';

    const valuesArray = [];
    for (let i = 0; i < array.length; i += 1) {
      array[i][prop] ? valuesArray.push(array[i][prop]) : "";
    }
    debugger;
    return valuesArray;
};
  
  // Объекты и ожидаемый результат
  const products = [
      { name: 'Радар', price: 1300, quantity: 4 },
      { name: 'Радар', price: 1280, quantity: 2 },
      { name: 'Радар', price: 1320, quantity: 1 },
      { name: 'Сканер', price: 2700, quantity: 1 },
      { name: 'Сканер', price: 2500, quantity: 3 },
      { name: 'Дроид', price: 400, quantity: 7 },
      { name: 'Захват', price: 1200, quantity: 2 },
  ]; 
  
//   console.log(getAllPropValues(products, 'name'));
  // ['Радар', 'Радар', 'Радар', 'Сканер', 'Сканер', 'Дроид', 'Захват']
  
//   console.log(getAllPropValues(products, 'quantity'));
  // [4, 2, 1, 1, 3, 7, 2]
  
//   console.log(getAllPropValues(products, 'category'));
  //  []
  