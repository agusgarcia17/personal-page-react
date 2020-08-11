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

const GlobalStyle = createGlobalStyle`
  body {
    font-family: Raleway;
    }
  `

class App extends React.Component {

  
      constructor(props) {
        super(props);
  
        this.state = {
          title: 'Agustina Garcia',
          headerLinks: [
            {title: 'Home', path: '/'},
            {title: 'Sobre m&iacute;', path: '/aboutme'},
            {title: 'Contacto', path: '/contact'},
          ],
          home : {
            title: 'Agustina Garcia',
            subtitle: 'Desarrolladora Frontend Jr.',
            content: 'Abajo podes visualizar algunos de los proyectos de mi repositorio',
          },
          aboutme : {
            title: 'Sobre m&iacute;',
          },
          contact : {
            title: 'Si tenes alguna duda, consulta o sugerencia, te invito a que me envies un mensaje',
          }
  
        }
      }
  render(){

    return (

      <Router>

        <Container fluid className="p-0" >
          <NavBar/>
          <Route path='/' exact render={()=> <HomePage title={this.state.home.title} subtitle={this.state.home.subtitle} content={this.state.home.content}/>}/>
          <Route path='/aboutme' exact render={()=> <AboutPage title={this.state.aboutme.title}/>}/>
          <Route path='/contact' exact render={()=> <ContactPage title={this.state.contact.title} />}/>
          <Footer/>
        </Container>

        <GlobalStyle />
      </Router>
      
    );
    
  }
    
}

export default App;
