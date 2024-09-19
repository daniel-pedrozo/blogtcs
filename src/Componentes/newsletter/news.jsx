import React from 'react';
import './news.css';

function NewsL() {



  return (
    <div className="news">
      <div>
        <div className='titulo'>
          <h1>Newsleter TCS</h1>
        </div>

        <p>Fique por dentro de todas as novidades
          Junto a comunidade tired clubs security</p>

        <input type="email" placeholder="Seu melhor email" class="email-input" />

        <p>Sua privacidade é importante para nós.</p>

        <button className='botao' onClick={() => {
          const email = document.querySelector('.email-input').value;
          console.log('e-mail:', email);
        }} >Assinar agora</button>
      </div>

    </div>
  );
}

export default NewsL;