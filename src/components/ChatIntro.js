import React from 'react';
import './ChatIntro.css';


// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  return (
    <div className="chatIntro">
      <img src="https://whatsapp-clone-web.netlify.app/static/media/intro-connection-light.5690d473.jpg" alt="" />
      <h1  >Mantenha seu celular conectado</h1>
      <h2  >O Whatsapp conecta ao se telefone para sincronizar seus mensagens. <br /> Para reduzir o uso de dados, conecte seu telefone a uma rede Wi-Fi. <br /> </h2>
    </div>
  );
}