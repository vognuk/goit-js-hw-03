// Поиск наибольшего значения среди свойств объекта
// Напиши функцию findBestEmployee(employees), которая 
// принимает объект сотрудников и возвращает имя самого продуктивного 
// (который выполнил больше всех задач). Сотрудники и
//  кол-во выполненных задач содержатся как свойства объекта в формате "имя":"кол-во задач".

// получить массив из обьекта
// перебрать массив только по числам
// определить наибольшее значение числа в массиве

const findBestEmployee = function (employees) {
    'use strict';
    // Write code under this line
    const arr = Object.entries(employees);
    let key;
    let tasksNumber = 0;
    let maxTasks = 0;
    let champion = '';

    if (arr.length === 0) {
        return champion;
    } else {
        for (let i = 0; i < arr.length; i++) {
            for (let j = 0; j < arr[i].length; j++) {
                key = arr[i][0];
                tasksNumber = Number(arr[i][1]);

                if (tasksNumber > maxTasks) {
                    maxTasks = tasksNumber;
                    champion = key;  
                }
            }
        }
    }
    return champion;
  };
  
  // Объекты и ожидаемый результат
  const developers = {
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
  }; 
//  console.log(findBestEmployee(developers)); 
  // 'lorence'
  
  const supports = {
    poly: 12,
    mango: 17,
    ajax: 4,
  }; 
  console.log(findBestEmployee(supports)); 
  // 'mango'
  
  const sellers = {
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38,
  }
//   console.log(findBestEmployee(sellers)); 
  // 'lux'  
