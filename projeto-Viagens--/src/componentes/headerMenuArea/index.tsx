import React, { useState } from 'react';
import './headerMenuArea.css';

export const HeaderMenuArea: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <>
      <img
        src='./icon-tidy-grid1.svg'
        alt="Abrir menu"
        onClick={toggleMenu}
        className="menu-icon"
      />

      <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        <button onClick={toggleMenu} className="close-btn">X</button>
        <nav>
          <ul>
            <li><a href="/inicio">Início</a></li>
            <li><a href="/aventuras">Aventuras</a></li>
            <li><a href="/cachoeiras">Cachoeiras</a></li>
            <li><a href="/trilhas">Trilhas</a></li>
            <li><a href="/praias">Praias</a></li>
            <li><a href="/sobre-nos">Sobre Nós</a></li>
          </ul>
        </nav>
      </div>
    </>
  );
};