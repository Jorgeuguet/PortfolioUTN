import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ChakraProvider} from '@chakra-ui/react'
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import Portfolio from './components/Portfolio/portfolio';
import Testimonial from './components/Testimonial/Testimonial';
import Contact from './components/Contact/Contact';
import Amazing from './components/Amazing/Amazing';
import Hero from './components/Hero/Hero';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ChakraProvider>
    <Navbar/>
    <Header/>   
    <Portfolio/>
    <Hero/>
    <App /> 
    <Amazing/>
    <Testimonial/>
    <Contact/>
    <Footer/>
    </ChakraProvider>
  </React.StrictMode>
);


