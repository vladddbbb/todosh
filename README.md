<img align="right" src="./public/favicon.ico">

# Todosh

ToDo лист с указанным в ТЗ функционалом (По ТЗ ниже)

## Что осталось сделать (рефакторинг и улучшения функционала)

- [x] Добавить prop-types
- [x] Добавить switch на unfinished задачи
- [ ] Избавиться от moment
- [ ] Подрефачить код (редакс, нормализация стора)
  - [ ] Нормализовать стор
  - [ ] Произвести организацию сортировки и манипуляции с данными в нормализованном сторе
  - [ ] Реорганизовать селекторы
- [ ] Перейти на TS
  - [ ] Сделать новый конфиг
  - [ ] Перевести компоненты на ts
- [ ] Добавить eslint, сынтегрировать его и prettier
- [ ] Обновить конфиг prettier (свойство на новой линии итд)
- [ ] Реализовать tree-shaking модулей
- [ ] Добавить тесты (jest, cypress)
  - [ ] Сконфигурировать jest
  - [ ] Сконфигурировать cypress
  - [ ] Добавить юнит-тесты на редакс
  - [ ] Добавить юнит-тесты на компоненты
  - [ ] Добавить e2e тесты
- [ ] Добавить drag'n'drop (кастомный или react-dnd)
- [ ] Добавить lazy-loading для роутов и компонентов
- [ ] Добавить virtualized прокрутку для большого количества заданий
- [ ] Добавить страницу со статистикой (числовые критерии, графики, интеграция chart.js)

## Как запускать

Переходим в директорию проекта через консоль, `npm i` для установки зависимостей, далее:

- `npm run watch` - запуск dev версии на локальном сервере с url http://localhost:4200/
- переходим в браузере по url http://localhost:4200/

### Иные опции

- `npm run dev` - сборка проекта в папку `dist`
- `npm run build` - сборка продакшн-версии проекта в папку `dist`

## Что использовалось

Все зависимости указаны в файле package.json, devDependencies и dependencies

### Зависимости проекта

- [react 17.0.2]()
- [redux]() для стейт-менеджмента + [redux-toolkit]() для оптимизированной работы с redux'ом
- [ant-design]() для компонентной дизайн-основы
- [react-router]() для маршрутизации и взаимодействия с главной страницей + [connected-react-router]() для интеграции изменения роута с redux стором

### Дев зависимости (для билда)

- [webpack 5]() + [babel-лоадеры]() для сборки проекта и транспайлинга react-кода
- минимайзеры

## Теперь по ТЗ

Итак, задачи по ТЗ выполнены с небольшими коррективами с нашей стороны. Вам решать, как поступать в таком случае, всё будет описано в нижеупомянутых пунктах.

### Файловая структура

Файловая структура имеет следующие ключевые папки:

- src - Основная папка с файлами react-проекта
  - components - Папка с компонентами, используемыми в проекте
  - pages - папка с компонентами-страницами (todos и main)
  - store - папка с конфигурацией редакса
    - selectors - папка с функциями, которые извлекают данные из стора
    - slices - папка с функциями-составляющими данные в сторе.
  - wrappers - папка с компонентами-обертками, которые используются в `app.jsx`
  - `app.jsx` - входная точка приложения
  - `index.js` - входная точка react-проекта
- webpack (Папка с конфигами-сборщиками)

### Главная страница с меню и описанием

Главная страница выглядит так:
![main_page](./public/readme/main_page.png)
На ней находится описание, сайдбар с ссылками на другие страницы (в данном функционале - только одна доп. страница).
А страница с todos выглядит так:
![todos_page](./public/readme/todos_page.png)

### Возможность добавления todo

На странице todos в шапке имеется форма по добавлению todo со следующими полями:

- name (обязательное поле)
- description
- finishDatetime (обозначение дедлайна для задачи,)
- tags (теги, прикрепляемые)
  Связанные файлы - через pages/todos/index.jsx

### Редактирование любого задания

Редактирование задания происходит с помощью нажатия кнопки редактирования на задаче. После чего карточка принимает следующий вид:
![card_edit](./public/readme/card_edit.png)
После редактирования, для отмены следует нажать крестик, для подтверждения редактирования - галочку.
Связанные файлы - components/todoItem/index.jsx, components/todoItem/editedTodo.jsx, components/todoItem/todo.jsx

### Удаление любого задания

Для удаления следует нажать кнопку удаления, и подтвердить его в модальном окне
скрин модального окна
![delete_modal](./public/readme/delete_modal.png)
Связанные файлы: components/todoItem/deleteBtn.jsx

### Отметка о выполнении задания

Отметка выставляется в чекбоксе слева от названия todo. Отметка не может быть выполнена в режиме редактирования.
Карточка в невыполненном состоянии:
![unfin_todo](./public/readme/unfinishedTodo.png)
Карточка в выполненном состоянии:
![fin_todo](./public/readme/finishedTodo.png)
Связанные файлы: components/todoItem/todo.jsx

### Изменение порядка заданий

Для изменения порядка заданий используются кнопки справа от названия карточки.

Связанные файлы: components/todoItem/todo.jsx

### Добавление тега к заданию

Добавление тега к заданию возможно только в режиме редактирования карточки. По нажатию кнопки `Attach New Tag` вызывается select с помощью которого осуществляется добавление.

Связанные компоненты: components/todoItem/tags.jsx

### Создание тегов

Создание тегов производится через данный элемент
![create_tags](./public/readme/create_tags.png)
Всё интуитивно, анфокус с элемента/нажатие клавиши enter добавляет его на страницу

Связанные файлы: components/tagsCloud/index.jsx

### Фильтрация заданий по тегам

Фильтрация по тегам происходит с помощью следующих элементов на странице:

По нажатию на тег он добавляется в список для фильтрации. По еще одному нажатию - удаляется.
![tags_filter](./public/readme/tagsFilter.png)
Связанные компоненты: components/tagsCloud/index.jsx или components/todoItem/tags.jsx

### Респонсив-дизайн

Выполнено, но с оговоркой: меняется не на 500px, а в целом по изменению ширины экрана
![resp](./public/readme/responsive.png)

### Поиск задания по описанию

С оговоркой: поиск задания осуществляется по имени или описанию. (Но можем сделать по описанию)
Осуществляется через ввод значения в search бокс

Связанные файлы: components/search/index.jsx

### Сортировка в порядке последних модификаций

Сортировка происходит с помощью переключения кнопок `Created` и `Updated` на todos странице
Связанные файлы: components/radios/index.jsx

### Добавление таймера

Добавление таймера осуществляется с помощью поля на создание или удаление задачи. Если значение не вводится, то таймер не отображается на карточке в одном ряду с кнопками удаления/обновления

## В разрезе специфики

В разрезе специфики (финальное задание курса веб-разработки) была затронута большая часть функциональных возможностей реакта и SPA в целом, таких как: маршрутизация, использование хуков и функциональных компонентов, условный рендеринг, использование рефов, использование стейт-менеджера, написание конфига под сборку react-проекта, prop-types для типизации пропсов.
