import React from 'react';
import Home from './components/Home';
import Menu from './components/Menu';

function App() {
  return (
    <>
      <Home title= "Página Inicial" />
      <Menu>
        <ul>
          <li>Home</li>
          <li>Contact</li>
          <li>About</li>
        </ul>
      </Menu>
    </>
  );
}

export default App;
