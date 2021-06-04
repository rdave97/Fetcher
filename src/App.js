import React, { useEffect, useState } from 'react'
import AOS from 'aos';
import "aos/dist/aos.css"
import Navbar from './components/Navbar';
import Footer from './components/Footer'
import Getdata from './components/Getdata'
import Head from './components/Home'
import './App.css'


function App() {
  const [isscroll, setIsscroll] = useState(0);
  useEffect(() => {
    AOS.init({
      duration:500,
    });
  }, [])

  //listening scrll


  useEffect(() => {
    const x = () => {
      if (window.pageYOffset > 40)
        setIsscroll(1);
      else
        setIsscroll(0);
    };
    window.addEventListener("scroll", x, { passive: true });

    return () => window.removeEventListener("scroll", x);
  }, []);

  return (
    <div style={{
      backgroundColor: "#19191C",
    }}>
      
      <div style={{ height: '80vh' }}>
        <Navbar scrolled={isscroll} />
        <Head />
      </div>

      <div style={{
        backgroundColor: 'whitesmoke',
        borderRadius: '40px 40px 0px 0px',
        padding: 25
      }} >
        <div className="container">
          <div className="row justify-content-center">
            <Getdata />
          </div>
        </div>
      </div>
      

      <Footer />
    </div>
  )
}

export default App
