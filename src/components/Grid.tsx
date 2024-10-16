'use client'
import React, { useState } from 'react';
import Modal from 'react-modal';

// Certifique-se de que esta linha está fora de qualquer componente.
//Modal.setAppElement('#__next'); 

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

const ImageGrid: React.FC = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');

  const openModal = (image: string) => {
    setSelectedImage(image);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div id='projetos'>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-12 lg:w-[1200px]">
        <div className="bg-white shadow-md rounded-lg overflow-hidden transition-transform hover:scale-105">
          <div onClick={() => openModal("https://imgur.com/sOiz87d.jpg")}>
            <img src="https://imgur.com/sOiz87d.jpg" alt="Descrição da Foto 1" className="w-full h-64 object-cover"/>
          </div>
          <div className="p-4">
            <p className="text-gray-700">Descrição da Foto 1</p>
          </div>
        </div>
        <div className="bg-white shadow-md rounded-lg overflow-hidden transition-transform hover:scale-105">
          <div onClick={() => openModal("https://imgur.com/E3DRgTh.jpg")}>
            <img src="https://imgur.com/E3DRgTh.jpg" alt="Descrição da Foto 2" className="w-full h-64 object-cover"/>
          </div>
          <div className="p-4">
            <p className="text-gray-700">Descrição da Foto 2</p>
          </div>
        </div>
        <div className="bg-white shadow-md rounded-lg overflow-hidden transition-transform hover:scale-105">
          <div onClick={() => openModal("https://imgur.com/8FfNqev.jpg")}>
            <img src="https://imgur.com/8FfNqev.jpg" alt="Descrição da Foto 3" className="w-full h-64 object-cover"/>
          </div>
          <div className="p-4">
            <p className="text-gray-700">Descrição da Foto 3</p>
          </div>
        </div>
        <div className="bg-white shadow-md rounded-lg overflow-hidden transition-transform hover:scale-105">
          <div onClick={() => openModal("https://imgur.com/UJeOZG6.jpg")}>
            <img src="https://imgur.com/UJeOZG6.jpg" alt="Descrição da Foto 4" className="w-full h-64 object-cover"/>
          </div>
          <div className="p-4">
            <p className="text-gray-700">Descrição da Foto 4</p>
          </div>
        </div>
        <div className="bg-white shadow-md rounded-lg overflow-hidden transition-transform hover:scale-105">
          <div onClick={() => openModal("https://imgur.com/csBCQOI.jpg")}>
            <img src="https://imgur.com/csBCQOI.jpg" alt="Descrição da Foto 4" className="w-full h-64 object-cover"/>
          </div>
          <div className="p-4">
            <p className="text-gray-700">Descrição da Foto 5</p>
          </div>
        </div>
        <div className="bg-white shadow-md rounded-lg overflow-hidden transition-transform hover:scale-105">
          <div onClick={() => openModal("https://imgur.com/5Nnkb2c.jpg")}>
            <img src="https://imgur.com/5Nnkb2c.jpg" alt="Descrição da Foto 4" className="w-full h-64 object-cover"/>
          </div>
          <div className="p-4">
            <p className="text-gray-700">Descrição da Foto 6</p>
          </div>
        </div>
        <div className="bg-white shadow-md rounded-lg overflow-hidden transition-transform hover:scale-105">
          <div onClick={() => openModal("https://imgur.com/r0TxOEK.jpg")}>
            <img src="https://imgur.com/r0TxOEK.jpg" alt="Descrição da Foto 4" className="w-full h-64 object-cover"/>
          </div>
          <div className="p-4">
            <p className="text-gray-700">Descrição da Foto 7</p>
          </div>
        </div>
        <div className="bg-white shadow-md rounded-lg overflow-hidden transition-transform hover:scale-105">
          <div onClick={() => openModal("https://imgur.com/wio5h4H.jpg")}>
            <img src="https://imgur.com/wio5h4H.jpg" alt="Descrição da Foto 4" className="w-full h-64 object-cover"/>
          </div>
          <div className="p-4">
            <p className="text-gray-700">Descrição da Foto 8</p>
          </div>
        </div>
        <div className="bg-white shadow-md rounded-lg overflow-hidden transition-transform hover:scale-105">
          <div onClick={() => openModal("https://imgur.com/MDASgGk.jpg")}>
            <img src="https://imgur.com/MDASgGk.jpg" alt="Descrição da Foto 4" className="w-full h-64 object-cover"/>
          </div>
          <div className="p-4">
            <p className="text-gray-700">Descrição da Foto 9</p>
          </div>
        </div>
        <div className="bg-white shadow-md rounded-lg overflow-hidden transition-transform hover:scale-105">
          <div onClick={() => openModal("https://imgur.com/DDPA8nn.jpg")}>
            <img src="https://imgur.com/DDPA8nn.jpg" alt="Descrição da Foto 4" className="w-full h-64 object-cover"/>
          </div>
          <div className="p-4">
            <p className="text-gray-700">Descrição da Foto 10</p>
          </div>
        </div>
        <div className="bg-white shadow-md rounded-lg overflow-hidden transition-transform hover:scale-105">
          <div onClick={() => openModal("https://imgur.com/NZxT87t.jpg")}>
            <img src="https://imgur.com/NZxT87t.jpg" alt="Descrição da Foto 4" className="w-full h-64 object-cover"/>
          </div>
          <div className="p-4">
            <p className="text-gray-700">Descrição da Foto 11</p>
          </div>
        </div>
        <div className="bg-white shadow-md rounded-lg overflow-hidden transition-transform hover:scale-105">
          <div onClick={() => openModal("https://imgur.com/46dbkRn.jpg")}>
            <img src="https://imgur.com/46dbkRn.jpg" alt="Descrição da Foto 4" className="w-full h-64 object-cover"/>
          </div>
          <div className="p-4">
            <p className="text-gray-700">Descrição da Foto 12</p>
          </div>
        </div>
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Imagem Ampliada"
      >
        <button onClick={closeModal} className="absolute top-0 right-0 m-4 text-white bg-black p-2 rounded-full">Fechar</button>
        <img src={selectedImage} alt="Imagem Ampliada" className="w-full h-auto"/>
      </Modal>
    </div>
  );
};

const Projetos: React.FC = () => {
  return (
    <div>
      <h1>Projetos de Pintura</h1>
      <ImageGrid />
    </div>
  );
};

export default Projetos;