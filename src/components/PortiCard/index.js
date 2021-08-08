import React from 'react';
import './style.css';

export default ({ name, image, setVisible, setData, rota, desc }) => {
  const handleModal = () => {
    setVisible(true);
    setData({
      name,
      image,
      rota,
      desc,
    });
  };
  return (
    <div className='containerBox' onClick={handleModal}>
      <div>
        <img className='imageBox' src={image} />
      </div>
      <div>Projeto:{name}</div>
    </div>
  );
};
