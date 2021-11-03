import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";

import NotFound from './pages/NotFound/NotFound';
import Anime from './pages/Anime/Anime';
import Manga from './pages/Manga/Manga';
import Cadastro from './pages/Cadastro/Cadastro';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Noticias from './pages/Noticias/Noticias';
import Nav from './components/Nav/Nav';
import GlobalStyle from './styles/global';
import Footer from './components/Footer/Footer';

import Contato from './components/Footer/pagFooter/Contato/Contato';
import Equipe from './components/Footer/pagFooter/Equipe/Equipe';
import Sobre from './components/Footer/pagFooter/Sobre/Sobre';



function App() {
  return (
    <BrowserRouter>
    <Nav/>
      <div>
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/anime" component={Anime}></Route>
          <Route path="/manga" component={Manga}></Route>
          <Route path="/noticias" component={Noticias}></Route>
          <Route path="/login" component={Login}></Route>
          <Route path="/cadastro" component={Cadastro}></Route>
      
          <Route path="/contato" component={Contato}></Route>
          <Route path="/equipe" component={Equipe}></Route>
          <Route path="/sobre" component={Sobre}></Route>
          <Route component={NotFound}></Route>
        </Switch>
      </div>
     <GlobalStyle/>
     <Footer/>
    </BrowserRouter>
  );
}

export default App;
