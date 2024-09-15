// Створюємо елементи для сторінки
const body = document.body;

// Створюємо поле введення для першого числа
const input1 = document.createElement("input");
input1.type = "number";
input1.placeholder = "Enter first number";
body.appendChild(input1);

// Створюємо поле введення для другого числа
const input2 = document.createElement("input");
input2.type = "number";
input2.placeholder = "Enter second number";
body.appendChild(input2);

// Створюємо кнопку для обчислення суми
const button = document.createElement("button");
button.textContent = "Calculate Sum";
body.appendChild(button);

// Створюємо елемент для виведення результату
const result = document.createElement("div");
body.appendChild(result);

// Додаємо обробник події для кнопки
button.addEventListener("click", function() {
    // Отримуємо значення з полів введення
    const num1 = parseFloat(input1.value);
    const num2 = parseFloat(input2.value);

    // Перевіряємо, чи обидва значення є числами
    if (!isNaN(num1) && !isNaN(num2)) {
        // Обчислюємо суму і виводимо результат
        result.textContent = "Sum: " + (num1 + num2);
    } else {
        // Виводимо повідомлення, якщо введені значення некоректні
        result.textContent = "Please enter valid numbers.";
    }
});
