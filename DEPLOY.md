# Инструкция по деплою на Vercel

## Шаг 1: Перейдите на Vercel

Откройте [vercel.com](https://vercel.com) и войдите через GitHub

## Шаг 2: Импортируйте проект

1. Нажмите "Add New..." → "Project"
2. Выберите репозиторий `keml00/vpn-tunel`
3. Нажмите "Import"

## Шаг 3: Настройте переменные окружения

Добавьте следующие переменные:

```
NEXT_PUBLIC_BOT_NAME=tunnelvpnkzn_bot
TELEGRAM_BOT_TOKEN=replace_with_bot_token
PANEL_URL=https://your-panel-url.com
PANEL_USERNAME=admin
PANEL_PASSWORD=your_password
NEXT_PUBLIC_API_URL=/api
```

## Шаг 4: Деплой

1. Нажмите "Deploy"
2. Дождитесь завершения сборки (2-3 минуты)
3. Получите URL вашего сайта

## Шаг 5: Настройка 3X-UI

После деплоя обновите в коде:
- `src/app/api/vpn/create/route.ts`
- `src/app/api/vpn/refresh/route.ts`

Замените `YOUR_SERVER_IP`, `YOUR_PUBLIC_KEY`, `YOUR_SHORT_ID` на реальные значения из вашей 3X-UI панели.

## Готово!

Ваш сайт доступен по адресу: `https://vpn-tunel.vercel.app`
