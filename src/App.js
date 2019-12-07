/** @jsx jsx */

import { jsx } from '@emotion/core'
import {
  Container
} from 'react-bootstrap'
import Header from './components/Header';
import AboutMe from './components/AboutMe'
import Title from './components/Title'

function App() {
  return (
    <Container
      fluid={true}
      css={{
        '& h1, h2, h3, h4, h5, h6': {
          textAlign: 'center'
        }
      }}
    >
      <Title></Title>
      <Header></Header>
      <AboutMe></AboutMe>
    </Container>
  );
}

export default App;
