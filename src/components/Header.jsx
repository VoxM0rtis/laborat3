// Компонент шапки страницы
import React from 'react';

function Header() {
  return (
    <header style={{
      backgroundColor: '#533f55ff',
      color: '#ffffffff',
      padding: '12px 220px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }}>
      <div style={{ fontWeight: 700 }}>Лабораторные работы</div>
    </header>
  );
}

export default Header;
