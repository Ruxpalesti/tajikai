# TajikAI.tj

Первый агрегатор вакансий, конкурсов и грантов в сфере ИИ и цифровых технологий для специалистов Таджикистана.

## Что внутри

```
tajikai/
├── index.html          ← главная страница
├── css/style.css       ← все стили
├── js/app.js           ← логика (фильтры, поиск, рендер)
└── data/content.js     ← все данные (вакансии, конкурсы, новости)
```

## Как добавить новую вакансию

Открой файл `data/content.js` и добавь объект в массив `vacancies`:

```js
{
  id: 7,                          // следующий номер
  title: "Название вакансии",
  company: "Название компании",
  location: "Душанбе",
  type: "Полная занятость",
  tags: ["Здравоохранение", "Данные"],
  remote: false,                  // true если удалённо
  isNew: true,                    // true если свежая
  date: "2026-07-01",             // дата публикации
  url: "https://ссылка-на-вакансию.com",
  icon: "ti-chart-bar",           // иконка из Tabler Icons
  color: "purple"                 // purple / teal / coral
}
```

## Как добавить конкурс или грант

В массив `contests`:

```js
{
  id: 7,
  title: "Название конкурса",
  type: "grant",                  // hackathon / fellowship / conference / grant
  typeLabel: "Грант",
  deadline: "2026-09-01",
  prize: "До $5000",
  url: "https://ссылка.com",
  online: true,
  description: "Краткое описание для кого и зачем"
}
```

## Деплой на GitHub + Render

### Шаг 1 — GitHub
1. Создай новый репозиторий на github.com (например `tajikai`)
2. Загрузи все файлы проекта
3. Убедись что `index.html` находится в корне репозитория

### Шаг 2 — Render
1. Зайди на render.com → New → Static Site
2. Подключи свой GitHub репозиторий `tajikai`
3. Build Command: оставь пустым
4. Publish Directory: `.` (точка — значит корень)
5. Нажми Deploy

Сайт будет доступен по адресу вида `tajikai.onrender.com`

### Кастомный домен tajikai.tj
После деплоя на Render:
- Settings → Custom Domains → Add Domain → введи `tajikai.tj`
- Следуй инструкциям Render по настройке DNS

## Обновление контента

Каждую неделю:
1. Открой `data/content.js`
2. Добавь новые вакансии/конкурсы
3. Удали устаревшие (с истёкшими дедлайнами)
4. Сохрани и запушь на GitHub → сайт обновится автоматически

---
Сделано в Худжанде, Таджикистан 🇹🇯
