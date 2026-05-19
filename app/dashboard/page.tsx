"use client";

import Link from "next/link";
import { useState } from "react";

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <header className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <span className="text-xl font-bold text-gray-900 dark:text-white">VPN Buy & Sell</span>
            </Link>
            <div className="flex items-center gap-4">
              <span className="text-gray-700 dark:text-gray-300">user@example.com</span>
              <button className="px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
                Выйти
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <nav className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4">
              <button
                onClick={() => setActiveTab("overview")}
                className={`w-full text-left px-4 py-3 rounded-lg mb-2 transition-colors ${
                  activeTab === "overview"
                    ? "bg-indigo-600 text-white"
                    : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                }`}
              >
                Обзор
              </button>
              <button
                onClick={() => setActiveTab("config")}
                className={`w-full text-left px-4 py-3 rounded-lg mb-2 transition-colors ${
                  activeTab === "config"
                    ? "bg-indigo-600 text-white"
                    : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                }`}
              >
                Конфигурация
              </button>
              <button
                onClick={() => setActiveTab("devices")}
                className={`w-full text-left px-4 py-3 rounded-lg mb-2 transition-colors ${
                  activeTab === "devices"
                    ? "bg-indigo-600 text-white"
                    : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                }`}
              >
                Устройства
              </button>
              <button
                onClick={() => setActiveTab("settings")}
                className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${
                  activeTab === "settings"
                    ? "bg-indigo-600 text-white"
                    : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                }`}
              >
                Настройки
              </button>
            </nav>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {activeTab === "overview" && (
              <div>
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
                  Панель управления
                </h1>

                {/* Stats */}
                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-gray-600 dark:text-gray-400">Статус</span>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    <p className="text-2xl font-bold text-gray-900 dark:text-white">Активен</p>
                  </div>

                  <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
                    <span className="text-gray-600 dark:text-gray-400 block mb-2">Использовано</span>
                    <p className="text-2xl font-bold text-gray-900 dark:text-white">24.5 GB</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">из 100 GB</p>
                  </div>

                  <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
                    <span className="text-gray-600 dark:text-gray-400 block mb-2">Устройств</span>
                    <p className="text-2xl font-bold text-gray-900 dark:text-white">3 / 5</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">подключено</p>
                  </div>
                </div>

                {/* Connection Info */}
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 mb-8">
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                    Информация о подключении
                  </h2>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">IP адрес:</span>
                      <span className="text-gray-900 dark:text-white font-mono">10.8.0.2</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Сервер:</span>
                      <span className="text-gray-900 dark:text-white">Moscow-01</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Протокол:</span>
                      <span className="text-gray-900 dark:text-white">WireGuard</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Время работы:</span>
                      <span className="text-gray-900 dark:text-white">2ч 34м</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "config" && (
              <div>
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
                  Конфигурация
                </h1>

                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 mb-6">
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                    QR-код для мобильных устройств
                  </h2>
                  <div className="flex flex-col items-center">
                    <div className="w-64 h-64 bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center mb-4">
                      <span className="text-gray-500 dark:text-gray-400">QR-код</span>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
                      Отсканируйте этот код в приложении WireGuard
                    </p>
                  </div>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                    Конфигурационный файл
                  </h2>
                  <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4 font-mono text-sm overflow-x-auto mb-4">
                    <pre className="text-gray-800 dark:text-gray-200">
{`[Interface]
PrivateKey = YOUR_PRIVATE_KEY
Address = 10.8.0.2/24
DNS = 1.1.1.1

[Peer]
PublicKey = SERVER_PUBLIC_KEY
Endpoint = vpn.example.com:51820
AllowedIPs = 0.0.0.0/0
PersistentKeepalive = 25`}
                    </pre>
                  </div>
                  <button className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
                    Скачать конфигурацию
                  </button>
                </div>
              </div>
            )}

            {activeTab === "devices" && (
              <div>
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
                  Устройства
                </h1>

                <div className="space-y-4">
                  {[
                    { name: "iPhone 13", status: "online", lastSeen: "Сейчас" },
                    { name: "MacBook Pro", status: "online", lastSeen: "5 минут назад" },
                    { name: "iPad Air", status: "offline", lastSeen: "2 часа назад" },
                  ].map((device, index) => (
                    <div key={index} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900 rounded-lg flex items-center justify-center">
                            <svg className="w-6 h-6 text-indigo-600 dark:text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                            </svg>
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                              {device.name}
                            </h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                              {device.lastSeen}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center gap-4">
                          <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                            device.status === "online"
                              ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                              : "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300"
                          }`}>
                            {device.status === "online" ? "Онлайн" : "Оффлайн"}
                          </span>
                          <button className="text-red-600 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300">
                            Удалить
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <button className="mt-6 px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
                  Добавить устройство
                </button>
              </div>
            )}

            {activeTab === "settings" && (
              <div>
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
                  Настройки
                </h1>

                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 mb-6">
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                    Профиль
                  </h2>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        defaultValue="user@example.com"
                        className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Имя
                      </label>
                      <input
                        type="text"
                        defaultValue="Пользователь"
                        className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                      />
                    </div>
                  </div>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                    Безопасность
                  </h2>
                  <button className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
                    Изменить пароль
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
