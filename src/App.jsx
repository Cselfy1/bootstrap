import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import BasicExample from './components/navbar/navBar';
import Footer from './components/footer/footer';
import Contacts from './pages/Contacts';
import Products from './pages/Products';
import Home from './pages/Home'; 

function App() {
  return (
    <Fragment>
      <BasicExample />
      <div className='container mt-5 pt-5'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="*" element={<div className="text-center text-danger">404 Not Found</div>} />
        </Routes>
      </div>
      <div className='footer'>
        <Footer />
      </div>
    </Fragment>
  );
}

export default App;
