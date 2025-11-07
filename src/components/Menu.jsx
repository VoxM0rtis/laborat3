import React from 'react';

// Боковое меню: показывает список лабораторных и позволяет выбрать одну из них
//  - selected: id текущей выбранной лабораторной
//  - onSelect: вызывается при выборе пункта
function Menu({ selected, onSelect }) {
  const items = [
    { id: 'lab1', label: 'Лабораторная 1' },
    { id: 'lab2', label: 'Лабораторная 2' },
  ];

  return (
    // Область меню слева
    <aside style={{
      width: 240,
      borderRight: '2px solid #cec7cd9f',
      padding: 12,
      boxSizing: 'border-box'
    }}>
      <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
        {items.map(item => (
          <li key={item.id}>
            <button
              // По клику выбираем соответствующую лабораторную
              onClick={() => onSelect(item.id)}
              style={{
                width: '100%',
                textAlign: 'left',
                padding: '10px 12px',
                borderRadius: 8,
                border: '1px solid #7b5d7eff',
                background: selected === item.id ? '#a37da7ff' : '#533f55ff',
                fontWeight: selected === item.id ? 700 : 500,
                cursor: 'pointer',
                marginBottom: 8
              }}
            >
              {item.label}
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default Menu;
