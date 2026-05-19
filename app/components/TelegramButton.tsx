"use client";

export default function TelegramButton() {
  return (
    <a
      href="https://t.me/keml00"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
      aria-label="Написать в Telegram"
    >
      <div className="relative">
        {/* Пульсирующий эффект */}
        <div className="absolute inset-0 bg-blue-500 rounded-full animate-ping opacity-75"></div>

        {/* Основная кнопка */}
        <div className="relative w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110">
          <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.295-.6.295-.002 0-.003 0-.005 0l.213-3.054 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.64-.203-.658-.64.135-.954l11.566-4.458c.538-.196 1.006.128.832.941z"/>
          </svg>
        </div>

        {/* Подсказка */}
        <div className="absolute right-16 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          <div className="bg-gray-900 dark:bg-gray-700 text-white px-4 py-2 rounded-lg whitespace-nowrap text-sm font-medium shadow-lg">
            Написать в Telegram
            <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 rotate-45 w-2 h-2 bg-gray-900 dark:bg-gray-700"></div>
          </div>
        </div>
      </div>
    </a>
  );
}
