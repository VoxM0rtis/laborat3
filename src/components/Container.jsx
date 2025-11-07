import React from 'react';
import './Container.css';

// Контейнер для выравнивания и ограничения ширины контента
// Props:
//  - className: дополнительные CSS-классы
//  - children: вложенный контент
const Container = ({ children, className = '' }) => {
  return <div className={`container ${className}`}>{children}</div>;
};

export default Container;