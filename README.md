# Tunnel VPN Website

Современный веб-сайт для VPN-сервиса с интеграцией Telegram бота.

## Особенности

- 🔒 Защита данных и безопасное подключение
- 📱 Адаптивный дизайн для всех устройств
- 🌙 Темная тема
- ⚡ Быстрая загрузка благодаря Next.js 16
- 🎨 Современный UI с Tailwind CSS
- 🤖 Интеграция с Telegram ботом
- 🔑 Автоматическая выдача VPN ключей
- 📊 Личный кабинет пользователя

## Технологии

- **Framework**: Next.js 16.2.4 (App Router)
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **HTTP Client**: Axios
- **Deployment**: Vercel

## Структура проекта

```
vpn-website/
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   ├── user/[telegramId]/route.ts  # Get user data
│   │   │   └── vpn/
│   │   │       ├── create/route.ts          # Create VPN key
│   │   │       └── refresh/route.ts         # Refresh VPN key
│   │   ├── dashboard/
│   │   │   └── page.tsx                     # User dashboard
│   │   ├── layout.tsx                       # Root layout
│   │   ├── page.tsx                         # Landing page
│   │   └── globals.css                      # Global styles
│   ├── components/
│   │   └── TelegramLogin.tsx                # Telegram auth widget
│   ├── lib/
│   │   └── api.ts                           # API client
│   └── types/
│       └── index.ts                         # TypeScript types
├── public/                                   # Static files
└── vercel.json                              # Vercel config
```

## Локальная разработка

1. Установите зависимости:
```bash
npm install
```

2. Создайте файл `.env.local` (скопируйте из `.env.example`):
```bash
cp .env.example .env.local
```

Заполните переменные окружения своими данными.

3. Запустите dev сервер:
```bash
npm run dev
```

4. Откройте [http://localhost:3000](http://localhost:3000)

## Деплой на Vercel

### Вариант 1: Через Vercel CLI (рекомендуется)

1. Установите Vercel CLI:
```bash
npm install -g vercel
```

2. Войдите в аккаунт:
```bash
vercel login
```

3. Разверните проект:
```bash
cd vpn-website
vercel
```

4. Для production деплоя:
```bash
vercel --prod
```

### Вариант 2: Через GitHub + Vercel Dashboard

1. Создайте репозиторий на GitHub:
```bash
git remote add origin https://github.com/YOUR_USERNAME/vpn-website.git
git branch -M main
git push -u origin main
```

2. Перейдите на [vercel.com](https://vercel.com)

3. Нажмите "New Project"

4. Импортируйте ваш GitHub репозиторий

5. Vercel автоматически определит Next.js и настроит деплой

6. Нажмите "Deploy"

### Вариант 3: Через Vercel Dashboard (без Git)

1. Перейдите на [vercel.com](https://vercel.com)

2. Нажмите "Add New..." → "Project"

3. Выберите "Deploy from a Git repository" или загрузите папку напрямую

4. Следуйте инструкциям на экране

## Настройка домена

После деплоя вы можете:

1. Использовать бесплатный домен Vercel: `your-project.vercel.app`

2. Подключить свой домен:
   - Перейдите в настройки проекта на Vercel
   - Выберите "Domains"
   - Добавьте свой домен и настройте DNS записи

## Переменные окружения

### Обязательные переменные

Создайте файл `.env.local` в корне проекта (см. `.env.example`):

```env
# Telegram Bot
NEXT_PUBLIC_BOT_NAME=your_bot_name
TELEGRAM_BOT_TOKEN=your_bot_token

# 3X-UI Panel
PANEL_URL=https://your-panel-url.com
PANEL_USERNAME=your_username
PANEL_PASSWORD=your_password

# API
NEXT_PUBLIC_API_URL=/api
```

### Добавление переменных в Vercel

1. Перейдите в настройки проекта на Vercel
2. Выберите "Environment Variables"
3. Добавьте все переменные из `.env.local`
4. Сохраните и передеплойте проект

## Настройка 3X-UI панели

1. Войдите в панель 3X-UI
2. Создайте inbound с ID = 1
3. Настройте Reality/VLESS протокол
4. Скопируйте параметры:
   - Server IP
   - Public Key
   - Short ID

5. Обновите в `src/app/api/vpn/create/route.ts`:
```typescript
const vpnKey = `vless://tg-${telegramId}@YOUR_SERVER_IP:443?type=tcp&security=reality&pbk=YOUR_PUBLIC_KEY&fp=chrome&sni=www.google.com&sid=YOUR_SHORT_ID#TunnelVPN_${telegramId}`;
```

6. Также обновите в `src/app/api/vpn/refresh/route.ts`

## Функционал

### Главная страница (`/`)
- Описание сервиса VPN
- Преимущества: защита данных, высокая скорость, стабильность, простое подключение
- CTA кнопки для перехода в Telegram бот
- Адаптивный дизайн

### Личный кабинет (`/dashboard`)
- Отображение статуса подписки (активна/истекла/нет)
- Показ VPN ключа
- Дата истечения подписки
- Кнопка обновления ключа
- Выход из аккаунта

### API Endpoints

#### `GET /api/user/[telegramId]`
Получить данные пользователя по Telegram ID

#### `POST /api/vpn/create`
Создать новый VPN ключ для пользователя

#### `POST /api/vpn/refresh`
Обновить существующий VPN ключ

## Интеграция с Telegram ботом

Бот должен отправлять пользователей на сайт с параметром:
```
https://your-site.vercel.app/?tg_id=USER_TELEGRAM_ID
```

Или использовать кнопку с Web App:
```python
from telegram import InlineKeyboardButton, InlineKeyboardMarkup

keyboard = [[
    InlineKeyboardButton("Открыть личный кабинет", url="https://your-site.vercel.app/dashboard")
]]
reply_markup = InlineKeyboardMarkup(keyboard)
```

## Дальнейшая разработка

### TODO

- [ ] Добавить базу данных (PostgreSQL/SQLite)
- [ ] Реализовать полную интеграцию с 3X-UI API
- [ ] Добавить систему оплаты (ЮKassa)
- [ ] Добавить уведомления об истечении подписки
- [ ] Добавить инструкции по подключению VPN
- [ ] Добавить страницу с FAQ
- [ ] Добавить статистику использования трафика
- [ ] Добавить поддержку нескольких устройств

### Рекомендации по улучшению

1. **База данных**: Замените mock storage на реальную БД
2. **Безопасность**: Добавьте валидацию Telegram auth hash
3. **Мониторинг**: Интегрируйте логирование и аналитику
4. **Кэширование**: Используйте Redis для сессий
5. **Тесты**: Добавьте unit и integration тесты

## Лицензия

ISC
