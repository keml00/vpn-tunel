import Link from "next/link";
import VisitorCounter from "./components/VisitorCounter";
import TelegramButton from "./components/TelegramButton";
import StructuredData from "./components/StructuredData";

export default function Home() {
  return (
    <>
      <StructuredData />
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-indigo-950 dark:to-purple-950">
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-indigo-400/20 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Header */}
      <header className="relative container mx-auto px-4 py-6">
        <nav className="flex items-center justify-between backdrop-blur-sm bg-white/50 dark:bg-gray-900/50 rounded-2xl px-6 py-4 shadow-lg">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg transform hover:scale-110 transition-transform">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              VPN Buy & Sell
            </span>
          </div>
          <div className="flex gap-4">
            <Link href="/pricing" className="px-6 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl hover:shadow-lg transition-all transform hover:scale-105 font-medium">
              Тарифы
            </Link>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="relative container mx-auto px-4 py-20">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-block mb-6">
            <span className="px-4 py-2 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 border border-indigo-500/20 rounded-full text-indigo-600 dark:text-indigo-400 text-sm font-semibold">
              🔒 Безопасный VPN сервис
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Защитите своё
            </span>
            <br />
            <span className="text-gray-900 dark:text-white">
              интернет-соединение
            </span>
          </h1>

          <p className="text-xl text-gray-600 dark:text-gray-300 mb-10 max-w-2xl mx-auto">
            Личный VPN сервис для безопасного доступа к сети. Шифрование трафика, защита в публичных Wi-Fi и удалённый доступ к домашней сети.
          </p>

          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/register" className="group px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-lg font-semibold rounded-xl hover:shadow-2xl transition-all transform hover:scale-105 flex items-center gap-2">
              Начать использовать
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            <Link href="/pricing" className="px-8 py-4 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm text-gray-900 dark:text-white text-lg font-semibold rounded-xl border-2 border-gray-300 dark:border-gray-600 hover:border-indigo-600 dark:hover:border-indigo-400 transition-all transform hover:scale-105">
              Посмотреть тарифы
            </Link>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-2">
                99.9%
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Uptime</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-2">
                24/7
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Поддержка</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-2">
                5+
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Устройств</div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="mt-32">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Почему выбирают нас?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Современные технологии для вашей безопасности
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="group bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 border border-gray-200 dark:border-gray-700">
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">
                Надёжное шифрование
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Современный протокол VLESS с надёжным шифрованием для максимальной защиты ваших данных.
              </p>
            </div>

            <div className="group bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 border border-gray-200 dark:border-gray-700">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">
                Высокая скорость
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Минимальная задержка и максимальная пропускная способность благодаря оптимизированной инфраструктуре.
              </p>
            </div>

            <div className="group bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 border border-gray-200 dark:border-gray-700">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-red-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">
                Простая настройка
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                QR-код для мгновенной настройки на мобильных устройствах. Готовые конфигурации для всех платформ.
              </p>
            </div>
          </div>
        </div>

        {/* Use Cases */}
        <div className="mt-32">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Сценарии использования
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              { icon: "🏠", title: "Доступ к домашней сети", desc: "Безопасное подключение к домашним устройствам и файлам из любой точки мира." },
              { icon: "☕", title: "Защита в публичных сетях", desc: "Шифрование трафика в кафе, аэропортах и других общественных местах." },
              { icon: "💼", title: "Удалённая работа", desc: "Безопасный доступ к корпоративным ресурсам для удалённых сотрудников." },
              { icon: "👨‍👩‍👧‍👦", title: "Для всей семьи", desc: "Защита интернет-соединения для всех членов семьи на всех устройствах." }
            ].map((item, index) => (
              <div key={index} className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-xl transition-all border border-gray-200 dark:border-gray-700">
                <div className="flex items-start gap-4">
                  <div className="text-4xl">{item.icon}</div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Legal Notice */}
        <div className="mt-32 max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 border-2 border-yellow-300 dark:border-yellow-700 rounded-2xl p-8 shadow-lg">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-3">
              <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
              Важная информация
            </h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Данный сервис предназначен для личного использования и защиты вашего интернет-соединения.
              Сервис не предназначен для обхода блокировок и соответствует законодательству РФ.
              Все подключения логируются в соответствии с требованиями закона.
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative container mx-auto px-4 py-8 mt-32 border-t border-gray-200 dark:border-gray-700">
        <div className="text-center">
          <div className="mb-4">
            <VisitorCounter />
          </div>
          <p className="text-gray-600 dark:text-gray-400 mb-2">
            © 2026 VPN Buy & Sell. Личный VPN сервис для безопасного интернета.
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-500 mb-2">
            Сервис соответствует законодательству РФ и предназначен для личного использования.
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Telegram: <a href="https://t.me/vpnbuysell_bot" target="_blank" rel="noopener noreferrer" className="text-indigo-600 dark:text-indigo-400 hover:underline font-medium">@vpnbuysell_bot</a>
          </p>
        </div>
      </footer>

      {/* Telegram Button */}
      <TelegramButton />
    </div>
    </>
  );
}
