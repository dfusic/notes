import React from 'react';
import Container from './components/Container';
import NotesList from './components/NotesList';

import './fonts/index.css';

const App = () => (
  <div>
    <Container>
      <NotesList />
    </Container>
  </div>
);

export default App;
