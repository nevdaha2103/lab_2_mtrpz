# Двозв'язний список (Doubly Linked List)

## Короткий опис
Цей проект реалізує структуру даних "Двозв'язний список" з підтримкою основних операцій:
- Додавання/видалення елементів
- Вставка за індексом
- Пошук елементів
- Реверсування списку
- Клонування та очищення
- Об'єднання списків

Опис: Реалізація двозв'язного списку з методами для роботи з даними та автоматизованими тестами.

## Інструкція

1. Клонуйте репозиторій:

    ```bash
    git clone https://github.com/nevdaha2103/lab_2_mtrpz.git
    ```

2. Встановіть залежності:

    ```bash
    npm install
    ```

3. Запустіть тести:

    ```bash
    npm test
    ```

## CI/CD та тестування

### Помилки під час тестування

1. **Неправильне значення в ArrayList**

(Створена для прикладу працездатності програми) 
   [Приклад коміту з помилкою](https://github.com/nevdaha2103/lab_2_mtrpz/actions/runs/14202557056)

   Тест впав через невідповідність очікуваного ("Y") та отриманого ("X") значень після видалення елемента. Це може бути результатом помилки в реалізації методу видалення або неправильного стану списку після операцій з елементами.

2. **Проблема імпорту класу**  
   [Приклад коміту з помилкою](https://github.com/nevdaha2103/lab_2_mtrpz/actions/runs/14203117269)
   
   CI не зміг імпортувати `DoublyLinkedList`, бо клас не був експортований з модуля. Це було виправлено додаванням `export` перед класом у файлі `doublyLinkedList.ts`.

3. **Текст помилки індексу**  
   [Приклад коміту з помилкою](https://github.com/nevdaha2103/lab_2_mtrpz/actions/runs/14203252888)
   
   Тест очікував повідомлення "Invalid index", але метод викидав помилку з текстом "Index out of bounds". Це було виправлено шляхом оновлення тексту помилки, щоб він відповідав очікуваному.
