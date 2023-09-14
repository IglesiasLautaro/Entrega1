import './App.css';
import Navbar from './components/NavBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ContainerCardItems from './components/components item/ContainerCardItems';
import DetailsItem from './components/components item/DetailsItem';
import ProviderContextCart from './components/components item/ProviderContextCart';
import ContactForm from './components/ContactForm';

function App() {
  return (
    <ProviderContextCart>
    <BrowserRouter>
        <Navbar/>
          <Routes>
            <Route exact path='/' element={ <ContainerCardItems />} />
            <Route exact path='/item/:idItem' element={ <DetailsItem />} />
            <Route exact path='/category/:idCategory' element={ <ContainerCardItems />} />
            <Route exact path='/endPurchase' element={ <ContactForm />} />
          </Routes> 

    </BrowserRouter>
    </ProviderContextCart>
  );
}

export default App;
