import React from 'react';
import {BrowserRouter as Router, Route } from 'react-router-dom';
import {Container} from 'react-bootstrap';
import './App.css';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import { createGlobalStyle } from "styled-components";
import { ProfileProvider } from './context/ProfileContext';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: Raleway;
    }
  `

function App(){

  const data = {
    
    title: 'Agustina Garcia',
    home : {
      title: 'Agustina Garcia',
      subtitle: 'Desarrolladora Frontend',
      content: 'Abajo podes visualizar algunos de los proyectos de mi repositorio',
    },
    aboutme : {
      title: 'Sobre mí',
    },
    contact : {
      title: 'Si tenes alguna duda, consulta o sugerencia, te invito a que me envies un mensaje',
    }

  }
    

      return (
        
        <ProfileProvider value={data}>
          <Router>
            <Container fluid className="p-0" >
              <NavBar/>
              <Route exact path='/'  component={HomePage}/>
              <Route exact path='/aboutme'  component={AboutPage}/>
              <Route  exact path='/contact'  component={ContactPage}/>
              <Footer/>
            </Container>
            <GlobalStyle />
          </Router>
      </ProfileProvider>
      
    );
    
  }
    

export default App;
