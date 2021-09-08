import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import CardPequeno from './components/CardPequeno/CardPequeno';
import ImagemButton from './components/ImagemButton/ImagemButton';

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem="https://thumbs.dreamstime.com/z/ilustra%C3%A7%C3%A3o-do-ninja-gato-um-com-uma-atadura-crian%C3%A7as-chinesas-de-kongfu-140577612.jpg" 
          nome="Glauber" 
          descricao="Olá, eu sou o Glauber, estudante Full Stack na Labenu"
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
          imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png" 
          nome="Labenu" 
          descricao="Formando desenvolvedores para o mercado de trabalho!" 
        />
        
        <CardGrande 
          imagem="https://imagens.canaltech.com.br/empresas/4418.400.jpg" 
          nome="NASA" 
          descricao="Apontando defeitos." 
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
