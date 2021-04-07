import React from 'react';
import '../styles/header.css';

class Header extends React.Component {
  render() {
    const imgUrl = 'https://imagepng.org/wp-content/uploads/2017/08/WhatsApp-icone.png';
    return (
      <header>
        <img src={imgUrl} alt="whats-app-icon" />
        <a href="https://www.whatsapp.com/?lang=pt_br">
          Fale conosco
        </a>
      </header>
    );
  }
}

export default Header;
