"use client";

import Link from "next/link";
import { useState } from "react";
import VisitorCounter from "../components/VisitorCounter";
import TelegramButton from "../components/TelegramButton";

const plans = [
  {
    id: "1month",
    name: "1 месяц",
    price: 200,
    period: "мес",
    features: [
      "100 GB трафика",
      "До 5 устройств",
      "Поддержка 24/7",
      "VLESS протокол",
      "Высокая скорость"
    ],
    popular: false,
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    id: "3months",
    name: "3 месяца",
    price: 550,
    period: "3 мес",
    pricePerMonth: 183,
    features: [
      "300 GB трафика",
      "До 5 устройств",
      "Поддержка 24/7",
      "VLESS протокол",
      "Высокая скорость",
      "Экономия 50₽"
    ],
    popular: true,
    gradient: "from-indigo-500 to-purple-500"
  },
  {
    id: "6months",
    name: "6 месяцев",
    price: 1000,
    period: "6 мес",
    pricePerMonth: 167,
    features: [
      "600 GB трафика",
      "До 5 устройств",
      "Поддержка 24/7",
      "VLESS протокол",
      "Высокая скорость",
      "Экономия 200₽"
    ],
    popular: false,
    gradient: "from-purple-500 to-pink-500"
  },
  {
    id: "12months",
    name: "12 месяцев",
    price: 1800,
    period: "12 мес",
    pricePerMonth: 150,
    features: [
      "1200 GB трафика",
      "До 5 устройств",
      "Поддержка 24/7",
      "VLESS протокол",
      "Высокая скорость",
      "Экономия 600₽",
      "Лучшая цена!"
    ],
    popular: false,
    gradient: "from-pink-500 to-red-500"
  }
];

export default function Pricing() {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  const handleSelectPlan = (planId: string) => {
    setSelectedPlan(planId);
    window.open('https://t.me/vpnbuysell_bot?start=' + planId, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-indigo-950 dark:to-purple-950">
      {/* Animated background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Header */}
      <header className="relative container mx-auto px-4 py-6">
        <nav className="flex items-center justify-between backdrop-blur-sm bg-white/50 dark:bg-gray-900/50 rounded-2xl px-6 py-4 shadow-lg">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg transform hover:scale-110 transition-transform">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              VPN Buy & Sell
            </span>
          </Link>
          <div className="flex gap-4">
            <Link href="/" className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors font-medium">
              Главная
            </Link>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="relative container mx-auto px-4 py-12">
        <div className="text-center mb-16">
          <div className="inline-block mb-6">
            <span className="px-4 py-2 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 border border-indigo-500/20 rounded-full text-indigo-600 dark:text-indigo-400 text-sm font-semibold">
              💎 Выгодные тарифы
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Выберите свой тариф
            </span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Безопасный VPN для вас и вашей семьи
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto mb-16">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-xl p-6 transition-all transform hover:-translate-y-2 hover:shadow-2xl border-2 ${
                plan.popular
                  ? 'border-indigo-500 scale-105'
                  : 'border-gray-200 dark:border-gray-700'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="px-4 py-1 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full text-sm font-semibold shadow-lg">
                    ⭐ Популярный
                  </span>
                </div>
              )}

              <div className="text-center mb-6">
                <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-br ${plan.gradient} rounded-2xl flex items-center justify-center shadow-lg`}>
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  {plan.name}
                </h3>
                <div className="flex items-baseline justify-center gap-1 mb-2">
                  <span className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                    {plan.price}₽
                  </span>
                  <span className="text-gray-600 dark:text-gray-400 text-sm">/{plan.period}</span>
                </div>
                {plan.pricePerMonth && (
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {plan.pricePerMonth}₽/мес
                  </p>
                )}
              </div>

              <ul className="space-y-3 mb-6">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm text-gray-700 dark:text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={() => handleSelectPlan(plan.id)}
                className={`w-full py-3 rounded-xl font-semibold transition-all transform hover:scale-105 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg hover:shadow-xl'
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-600'
                }`}
              >
                Выбрать тариф
              </button>
            </div>
          ))}
        </div>

        {/* Payment Method */}
        <div className="max-w-2xl mx-auto mb-16">
          <div className="bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl shadow-2xl p-8 text-white">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center flex-shrink-0">
                <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.295-.6.295-.002 0-.003 0-.005 0l.213-3.054 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.64-.203-.658-.64.135-.954l11.566-4.458c.538-.196 1.006.128.832.941z"/>
                </svg>
              </div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl font-bold mb-2">Оплата через Telegram</h3>
                <p className="text-white/90 mb-4">
                  Напишите боту @vpnbuysell_bot для оплаты выбранного тарифа
                </p>
                <a
                  href="https://t.me/vpnbuysell_bot"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white text-indigo-600 rounded-xl font-semibold hover:bg-gray-100 transition-all transform hover:scale-105"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.295-.6.295-.002 0-.003 0-.005 0l.213-3.054 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.64-.203-.658-.64.135-.954l11.566-4.458c.538-.196 1.006.128.832.941z"/>
                  </svg>
                  Открыть бота
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div className="max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">
            Часто задаваемые вопросы
          </h2>
          <div className="space-y-4">
            {[
              {
                q: "Как получить VPN ключ?",
                a: "Выберите тариф, напишите боту @vpnbuysell_bot, оплатите и получите персональный ключ для подключения."
              },
              {
                q: "Что делать после оплаты?",
                a: "Администратор создаст для вас персональный ключ и отправит инструкцию по настройке для вашего устройства (Android/iOS)."
              },
              {
                q: "Какие устройства поддерживаются?",
                a: "Android (v2rayNG), iOS (Shadowrocket), Windows, macOS, Linux. Один ключ работает на всех ваших устройствах (до 5 одновременно)."
              },
              {
                q: "Безопасно ли использовать VPN?",
                a: "Да, мы используем современный протокол VLESS с шифрованием. Сервис соответствует законодательству РФ."
              }
            ].map((item, index) => (
              <details key={index} className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl shadow-lg p-6 border border-gray-200 dark:border-gray-700">
                <summary className="font-semibold text-gray-900 dark:text-white cursor-pointer hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                  {item.q}
                </summary>
                <p className="mt-4 text-gray-600 dark:text-gray-300 leading-relaxed">
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </div>

        {/* Legal Notice */}
        <div className="max-w-4xl mx-auto">
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
      <footer className="relative container mx-auto px-4 py-8 mt-16 border-t border-gray-200 dark:border-gray-700">
        <div className="text-center">
          <div className="mb-4">
            <VisitorCounter />
          </div>
          <p className="text-gray-600 dark:text-gray-400 mb-2">
            © 2026 VPN Buy & Sell. Личный VPN сервис для безопасного интернета.
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Telegram: <a href="https://t.me/vpnbuysell_bot" target="_blank" rel="noopener noreferrer" className="text-indigo-600 dark:text-indigo-400 hover:underline font-medium">@vpnbuysell_bot</a>
          </p>
        </div>
      </footer>

      <TelegramButton />
    </div>
  );
}
