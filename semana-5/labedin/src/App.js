import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import CardPequeno from './components/CardPequeno/CardPequeno';
import ImagemButton from './components/ImagemButton/ImagemButton';
import styled from 'styled-components';



function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem="https://avatars.githubusercontent.com/u/88291122?s=400&u=753d63db4eb32c7148917a269e46f9fdc98b5543&v=4" 
          nome="Glauber" 
          descricao="Olá, eu sou o Glauber, estudante Full Stack na Labenu e do curso de Jogos Digitais na Estácio de Sá."
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>

      <div className="page-section-container" >
        <CardPequeno
          imagem="https://image.flaticon.com/icons/png/512/725/725643.png"
          dados="glauber.apolinario@yahoo.com.br"
          tipo_dado="E-mail:"
          />
      </div>
      <div className="page-section-container" >
        <CardPequeno
          imagem="https://img-premium.flaticon.com/png/512/1009/premium/1009850.png?token=exp=1631139664~hmac=69c92ec0720b901b04f92853a7c2239d"
          dados="Rua Paulo do Couto e Silva 285 apto 201, Heliópolis Belo Horizonte MG"
          tipo_dado="Endereço:"
          />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="data:image/png;base64,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" 
          nome="AttPs Informática" 
          descricao="Analista Desenvolvedor Jr. de 05/2013 a 04/2015" 
        />
        
        
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
