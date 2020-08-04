// 3. JS: кликаем по кнопке - видим в alert-е то, что введено в поле поиска. Не использовать onclick атрибут в разметке кода.
// 4. Если ввести в поиск слово google и нажать кнопку НАЙТИ, то нужно показать в алерте “Yandex круче. Но это не точно”
// 5. Создать массив объектов. 3-4 объекта, каждый имеет свойства name и age. При нажатии на кнопку НАЙТИ также вывести ещё и св-во name первого объекта в массиве

const mainInput = document.querySelector("input");
const mainButton = document.querySelector("button");
const objectsInArray = [
  { name: "Andrei", age: 31 },
  { name: "Dmitry", age: 32 },
  { name: "Pavel", age: 30 },
  { name: "Sveta", age: 20 },
];

mainButton.onclick = () => {
  (mainInput.value == "google") |
  (mainInput.value == "GOOGLE") |
  (mainInput.value == "Google")
    ? // 10. показать alert с результатом поиска не сразу, а через 3 секунды после нажатия (всё то же самое, как и работало, в частности с “яндекс круче всех”, но с задержкой в 3 секунды)
      setTimeout(
        () =>
          alert(
            `Yandex круче. Но это не точно. --- Cв-во name первого объекта в массиве: ${objectsInArray[0].name}`
          ),
        3000
      )
    : alert(
        `${mainInput.value} --- Cв-во name первого объекта в массиве: ${objectsInArray[0].name}`
      );
  mainInput.value = "";
};

// 6.Создать функцию superSum, которая будет в алерте показывать сумму ЛЮБЫХ двух чисел, переданных этой функции через параметры

const superSum = (num1, num2) => {
  return num1 + num2;
};

alert(superSum(-56, 200));

// 7. Создать массив из чисел в перемешку (не отсортированы). С помощью цикла for найти максимальный и минимальный элементы в массиве.

const randomArr = [1000, 207, 3089, 436, 222666, 40033, 4533, -10];

const forLoopMinMax = () => {
  let min = randomArr[0],
    max = randomArr[0];

  for (let i = 1; i < randomArr.length; i++) {
    let value = randomArr[i];
    min = value < min ? value : min;
    max = value > max ? value : max;
  }

  return [min, max];
};
const [forLoopMin, forLoopMax] = forLoopMinMax();
console.log(`Minimum: ${forLoopMin}, Maximum: ${forLoopMax}`);

// 8. Создать 2 переменные a и b… присвоить им любые значения. Потом программно поменять эти значения местами, не используя значения напрямую
let a = "Hello";
let b = "World";
console.log(a, b);

[a, b] = [b, a];
console.log(a, b);

// 9. Оформить алгоритм поиска максимального числа в массиве как функцию findMax (чтобы можно было передавать в неё любой массив чисел, а на выходе она возвращала нам максимальное число из массива)
let numArray = [5, -2, 100, 278, 934, 66, 897]

const findMax = (maxNumberInArray) => {
  maxNumberInArray = numArray;
  return Math.max.apply(null, numArray);
};

console.log(`Max number: ${findMax()}`);
