import React from 'react';
import GlobalStyles from './styles/GlobalStyles';
import Resume from './components/Resume';
import Projects from './components/Projects';
import Art from './components/Art';
import styled from 'styled-components';
import { Link, Element } from 'react-scroll';

const App = () => {
  return (
    <div className="App">
      <GlobalStyles />
      <Header>
        <h1>Liam Cooney Portfolio</h1>
        <Nav>
          <ul>
            <li><Link to="resume" smooth={true} duration={500}>Resume</Link></li>
            <li><Link to="projects" smooth={true} duration={500}>Projects</Link></li>
            <li><Link to="art" smooth={true} duration={500}>Art</Link></li>
          </ul>
        </Nav>
      </Header>
      <Main>
        <Element name="resume">
          <Section>
            <div className="container">
              <Resume />
            </div>
          </Section>
        </Element>
        <Element name="projects">
          <Section>
            <div className="container">
              <Projects />
            </div>
          </Section>
        </Element>
      </Main>
    </div>
  );
};

const Header = styled.header`
  position: fixed;
  width: 100%;
  background-color: #1e1e1e;
  z-index: 10; /* Ensure header is above other content */
`;

const Nav = styled.nav`
  ul {
    display: flex;
    gap: 20px;
    list-style: none;
    padding: 0;
    margin: 0;
  }

  ul li {
    padding: 10px 0;
  }

  a {
    color: #00ff00;
    text-decoration: none;
    cursor: pointer;
  }

  a:hover {
    text-decoration: underline;
  }
`;

const Main = styled.main`
  width: 100%;
  padding-top: 80px; /* Add padding to prevent content from being hidden behind fixed header */
`;

const Section = styled.section`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default App;
