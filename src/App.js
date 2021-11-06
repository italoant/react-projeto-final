import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import GlobalStyle from './styles/global';

import { BrowserRouter, Switch, Route } from "react-router-dom";

import NotFound from './pages/NotFound/NotFound';
import Anime from './pages/Anime/Anime';
import Manga from './pages/Manga/Manga';
import Cadastro from './pages/Cadastro/Cadastro';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Noticias from './pages/Noticias/Noticias';
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';
import AnimePage from './pages/AnimePage/AnimePage';
import MangaPage from './pages/MangaPage/MangaPage';

import Contato from './components/Footer/pagFooter/Contato/Contato';
import Equipe from './components/Footer/pagFooter/Equipe/Equipe';
import Sobre from './components/Footer/pagFooter/Sobre/Sobre';
import ThemeProvider from './context/Theme';
import { InputProvider } from './context/Input'



function App() {
  return (
    <ThemeProvider>
      <InputProvider>
        <BrowserRouter>
          <Nav />
          <div>
            <Switch>
              <Route path="/" exact component={Home}></Route>
              <Route path="/anime" component={Anime}></Route>
              <Route path="/manga" component={Manga}></Route>
              <Route path="/noticias" component={Noticias}></Route>
              <Route path="/login" component={Login}></Route>
              <Route path="/cadastro" component={Cadastro}></Route>
              <Route path="/anime_page" component={AnimePage}></Route>
              <Route path="/manga_page" component={MangaPage}></Route>

              <Route path="/contato" component={Contato}></Route>
              <Route path="/equipe" component={Equipe}></Route>
              <Route path="/sobre" component={Sobre}></Route>
              <Route component={NotFound}></Route>
            </Switch>
          </div>
          <GlobalStyle />
          <Footer />
        </BrowserRouter>
      </InputProvider>
    </ThemeProvider>

  );
}

export default App;
