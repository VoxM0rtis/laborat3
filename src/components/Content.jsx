import React from 'react';
import Lab2 from '../labs/lab2/Lab2';
// Подключаем HTML как сырой текст, чтобы вставить его в iframe
import Lab1Html from '../labs/lab1/Lab1.html?raw';

// Компонент выводит содержимое выбранной лабораторной работы
// selected — строковый идентификатор выбранной лабораторной (например, 'lab1' или 'lab2')
function Content({ selected }) {
  return (
    // Основная область контента
    <main style={{ padding: 16, boxSizing: 'border-box', flex: 1, minHeight: 0 }}>
      {/* Если выбрана lab1 — показываем статический HTML через iframe, иначе — компонент Lab2 */}
      {selected === 'lab1' ? (
        <div style={{ height: '70vh', border: '1px solid #e5e5e5', borderRadius: 8, overflow: 'hidden' }}>
          <iframe
            title="Лабораторная 1"
            // Вставляем HTML как документ внутри iframe
            srcDoc={Lab1Html}
            // Растягиваем на весь контейнер, убираем рамки
            style={{ width: '100%', height: '100%', border: 'none' }}
          />
        </div>
      ) : (
        <Lab2 />
      )}
    </main>
  );
}

export default Content;
