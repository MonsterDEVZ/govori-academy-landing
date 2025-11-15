# Деплой на Vercel

## Быстрый деплой

### Автоматический импорт из GitHub

1. Перейдите по ссылке: https://vercel.com/new
2. Выберите "Import Git Repository"
3. Найдите репозиторий `MonsterDEVZ/govori-academy-landing`
4. Нажмите "Import"
5. Настройки проекта:
   - **Framework Preset:** Other
   - **Root Directory:** ./
   - **Build Command:** (оставьте пустым)
   - **Output Directory:** (оставьте пустым)
6. Нажмите "Deploy"

### Прямая ссылка для импорта

Используйте эту ссылку для быстрого импорта:

```
https://vercel.com/new/clone?repository-url=https://github.com/MonsterDEVZ/govori-academy-landing
```

## Альтернативный способ: Vercel CLI

### Установка и авторизация

```bash
# Если Vercel CLI еще не установлен
npm install -g vercel

# Авторизация
vercel login
```

### Развертывание

```bash
# Перейдите в директорию проекта
cd "/Users/new/Desktop/Проекты/GKIDS GOVORI"

# Первый деплой
vercel

# Production деплой
vercel --prod
```

## После развертывания

После успешного деплоя вы получите:
- **Preview URL:** временный URL для проверки
- **Production URL:** постоянный URL вашего сайта (например, `govori-academy-landing.vercel.app`)

## Автоматические деплои

Vercel автоматически настроит:
- ✅ Автоматический деплой при каждом push в `main` ветку
- ✅ Preview деплой для каждого pull request
- ✅ HTTPS сертификаты
- ✅ CDN распределение

## Кастомный домен

Если у вас есть собственный домен:

1. Зайдите в настройки проекта на Vercel
2. Перейдите в раздел "Domains"
3. Добавьте ваш домен
4. Следуйте инструкциям для настройки DNS записей

## Проверка статуса

После деплоя проверьте:
- [ ] Главная страница загружается
- [ ] CSS стили применяются корректно
- [ ] JavaScript работает (анимации, скроллинг)
- [ ] Мобильная версия отображается правильно
- [ ] Все секции на месте

## Поддержка

- Документация Vercel: https://vercel.com/docs
- GitHub репозиторий: https://github.com/MonsterDEVZ/govori-academy-landing
