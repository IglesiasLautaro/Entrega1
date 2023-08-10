import logo from './logo.svg';
import './App.css';

import Navbar from './components/NavBar';

import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <div className="App">
        <Navbar>
          
        </Navbar>

        <ItemListContainer title="HOLA MUNDO"></ItemListContainer>
    </div>
  );
}

export default App;
