import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Menu from './components/Menu';
import Content from './components/Content';

function App() {
  // Состояние выбранной лабораторной работы
  const [selectedLab, setSelectedLab] = useState('lab2');

  return (
    // Общий макет страницы: шапка, область с меню и контентом, футер
    <div className="App" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />
      <div style={{ display: 'flex', flex: 1, minHeight: 0 }}>
        {/* Передаем выбранную лабораторную и обработчик выбора в меню */}
        <Menu selected={selectedLab} onSelect={setSelectedLab} />
        {/* Передаем выбранную лабораторную в контент для отображения */}
        <Content selected={selectedLab} />
      </div>
      <Footer />
    </div>
  );
} //hg

export default App;