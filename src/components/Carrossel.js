import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './components-css/Carrossel.css';

function Carrossel(props) {
  const settings = {
    autoplay: true,   // Habilitar autoplay
    infinite: true,   // Habilitar loop infinito
    speed: 500,       // Velocidade de transição
    slidesToShow: 1,  // Número de slides a mostrar
    slidesToScroll: 1,// Número de slides a rolar
    dots: true,       // Exibir os pontinhos de navegação
    arrows: true,     // Mostrar botões de próxima/anterior
  };

  return (
    <div className="carrossel-container">
      <Slider {...settings}>
        <div>
          <img src={props.imagem1} alt="Descrição da Imagem 1" />
        </div>
        <div>
          <img src={props.imagem2} alt="Descrição da Imagem 2" />
        </div>
        <div>
          <img src={props.imagem3} alt="Descrição da Imagem 3" />
        </div>
        <div>
          <img src={props.imagem4} alt="Descrição da Imagem 4" />
        </div>
        <div>
          <img src={props.imagem5} alt="Descrição da Imagem 5" />
        </div>
      </Slider>
    </div>
  );
}

export default Carrossel;
