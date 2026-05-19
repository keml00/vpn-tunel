"use client";

import { useEffect, useState } from "react";

export default function VisitorCounter() {
  const [visitors, setVisitors] = useState({ total: 0, unique: 0 });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const trackVisit = async () => {
      try {
        // Проверяем, был ли пользователь уже на сайте
        let sessionId = localStorage.getItem('visitor_session');
        const isNewVisitor = !sessionId;

        if (isNewVisitor) {
          sessionId = `visitor_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
          localStorage.setItem('visitor_session', sessionId);
        }

        // Отправляем запрос на увеличение счетчика
        const response = await fetch('/api/visitors', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ sessionId: isNewVisitor ? sessionId : null })
        });

        if (response.ok) {
          const data = await response.json();
          setVisitors(data.visitors);
        }
      } catch (error) {
        console.error('Error tracking visit:', error);
        // Получаем текущие данные
        try {
          const response = await fetch('/api/visitors');
          if (response.ok) {
            const data = await response.json();
            setVisitors(data.visitors);
          }
        } catch (e) {
          console.error('Error fetching visitors:', e);
        }
      } finally {
        setLoading(false);
      }
    };

    trackVisit();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          <span>Загрузка...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-6 text-sm">
      <div className="flex items-center gap-2">
        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
        <span className="text-gray-600 dark:text-gray-400">
          Посетителей: <span className="font-semibold text-gray-900 dark:text-white">{visitors.total.toLocaleString()}</span>
        </span>
      </div>
      <div className="flex items-center gap-2">
        <svg className="w-4 h-4 text-indigo-600 dark:text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
        <span className="text-gray-600 dark:text-gray-400">
          Уникальных: <span className="font-semibold text-gray-900 dark:text-white">{visitors.unique.toLocaleString()}</span>
        </span>
      </div>
    </div>
  );
}
