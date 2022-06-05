import React from 'react';
import './style.css';
import Navbar from './components/Navbar/Navbar';
import Scrolltop from './components/Navbar/Scrolltop';
export default function App() {
  const section1Ref = React.useRef(null);
  const section2Ref = React.useRef(null);
  const section3Ref = React.useRef(null);
  const section4Ref = React.useRef(null);

  const scrollToBlk = (id) => {
    switch (id) {
      case 1:
        window.scrollTo(0, section1Ref.current.offsetTop);
        break;
      case 2:
        window.scrollTo(0, section2Ref.current.offsetTop);
        break;
      case 3:
        window.scrollTo(0, section3Ref.current.offsetTop);
        break;
      case 4:
        window.scrollTo(0, section4Ref.current.offsetTop);
        break;
    }
  };

  return (
    <div className="container">
      <Navbar clickHandler={(id) => scrollToBlk(id)} />
      <section ref={section1Ref} id="section1" className="section">
        HOME
      </section>
      <section ref={section2Ref} id="section2" className="section">
        BUSINESS
      </section>
      <section ref={section3Ref} id="section3" className="section">
        SERVICES
      </section>
      <section ref={section4Ref} id="section4" className="section">
        ABOUT
      </section>
      <Scrolltop />
    </div>
  );
}
