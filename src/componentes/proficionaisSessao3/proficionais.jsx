import React, { useState } from "react";
import Modal from "react-modal";
import { ModalStyled, StyleProficionais } from "./profiStyle";
import { data } from "../data";

export default function Proficionais() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedProfissional, setSelectedProfissional] = useState(null);

  const openModal = (profissional) => {
    setSelectedProfissional(profissional);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setSelectedProfissional(null);
    setModalIsOpen(false);
  };

  return (
    <StyleProficionais>
      <div className="time">
        <span>{data.proficionais.texto1}</span>
        <h2>{data.proficionais.titulo}</h2>
        <p>{data.proficionais.texto}</p>
      </div>
      <ul>
        <li onClick={() => openModal(data.proficionais.prodicional1)}>
          <img src={data.proficionais.prodicional1.foto} alt="" />
          <div className="timeDescricao">
            <h3>{data.proficionais.prodicional1.nome}</h3>
            <p>{data.proficionais.prodicional1.especialidade}</p>
            <span className="textoProficional">{data.proficionais.prodicional1.texto}</span>
          </div>
        </li>
        <li onClick={() => openModal(data.proficionais.prodicional2)}>
          <img src={data.proficionais.prodicional2.foto} alt="" />
          <div className="timeDescricao">
            <h3>{data.proficionais.prodicional2.nome}</h3>
            <p>{data.proficionais.prodicional2.especialidade}</p>
            <span className="textoProficional">{data.proficionais.prodicional2.texto}</span>
          </div>
        </li>
        <li onClick={() => openModal(data.proficionais.prodicional3)}>
          <img src={data.proficionais.prodicional3.foto} alt="" />
          <div className="timeDescricao">
            <h3>{data.proficionais.prodicional3.nome}</h3>
            <p>{data.proficionais.prodicional3.especialidade}</p>
            <span className="textoProficional">{data.proficionais.prodicional3.texto}</span>
          </div>
        </li>
        <li onClick={() => openModal(data.proficionais.prodicional4)}>
          <img src={data.proficionais.prodicional4.foto} alt="" />
          <div className="timeDescricao">
            <h3>{data.proficionais.prodicional4.nome}</h3>
            <p>{data.proficionais.prodicional4.especialidade}</p>
            <span className="textoProficional">{data.proficionais.prodicional4.texto}</span>
          </div>
        </li>
      </ul>

      {selectedProfissional && (
  <Modal isOpen={modalIsOpen} onRequestClose={closeModal} style={{
    content: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      top: '10%',
      width: '70%',  
      height: '100%',
      left: '10%',
      textAlign: "center",
    }
  }}>
    <ModalStyled>
      <img className="modal-image" src={selectedProfissional.foto} alt="" />
  
      <div className="textosModal">
        <h2>{selectedProfissional.nome}</h2>
        <p>{selectedProfissional.especialidade}</p>
        <p>{selectedProfissional.texto}</p> {/* Adicionando o texto do profissional */}
        <ul className="imagensRedesSociais">
          <li><img src={data.topoMenu.imagemInsta} alt="" /></li>
          <li><img src={data.topoMenu.imagemLinkedin} alt="" /></li>
          <li><img src={data.topoMenu.imagemYoutube} alt="" /></li>
          <li><img src={data.topoMenu.imagemfacebook} alt="" /></li>
        </ul>
     
   
      </div>
      <button className="modal-close" onClick={closeModal}> </button>
      
    </ModalStyled>
    
  </Modal>
)}

    </StyleProficionais>
  );
}
