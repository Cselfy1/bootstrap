import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

function BasicExample() {
  const [activeLink, setActiveLink] = useState('/');
  const { t, i18n } = useTranslation();
  
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  useEffect(() => {
    setActiveLink(window.location.pathname);
  }, []);

  return (
    <Navbar expand="lg" className="bg-body-tertiary" fixed='top' data-bs-theme="dark">
      <Container>
        <Navbar.Brand as={Link} to="/">TechHub</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link 
              as={Link} 
              to="/" 
              active={activeLink === '/'} 
              onClick={() => setActiveLink('/')}
            >
              {t('navbar.home')}
            </Nav.Link>
            <Nav.Link 
              as={Link} 
              to="/products" 
              active={activeLink === '/products'} 
              onClick={() => setActiveLink('/products')}
            >
              {t('navbar.products')}
            </Nav.Link>
            <Nav.Link 
              as={Link} 
              to="/contacts" 
              active={activeLink === '/contacts'} 
              onClick={() => setActiveLink('/contacts')}
            >
              {t('navbar.contacts')}
            </Nav.Link>
          </Nav>
          <Nav>
            <div className="language-selector d-flex ms-3">
              <button 
                onClick={() => changeLanguage('en')} 
                className={`btn btn-sm ${i18n.language === 'en' ? 'btn-primary' : 'btn-outline-secondary'} me-1`}
              >
                EN
              </button>
              <button 
                onClick={() => changeLanguage('ja')} 
                className={`btn btn-sm ${i18n.language === 'ja' ? 'btn-primary' : 'btn-outline-secondary'}`}
              >
                JP
              </button>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample