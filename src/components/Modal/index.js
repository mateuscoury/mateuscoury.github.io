import React from 'react';
import { useLayoutEffect } from 'react';
import './style.css';
export default ({ setVisible, data }) => {
  useLayoutEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);
  return (
    <div className='ContainerModal'>
      <div className='content'>
        <div id='imagemContainer'>
          <h1>{data.name}</h1>
          <img src={data.image} />
        </div>
        <div id='desContainer'>
          <h1>DESCRIÇÃO</h1>
          <p>{data.desc}</p>
          <a href={data.rota}>IR PARA</a>
        </div>
        <div onClick={() => setVisible(false)}>[ FECHAR]</div>
      </div>
    </div>
  );
};
