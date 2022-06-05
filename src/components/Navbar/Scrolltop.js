import React from 'react';
import './Navbar.scss';

const Scrolltop = (props) => {
  const [showBtn, setShowBtn] = React.useState(false);

  const handleScroll = () => {
    if (window.pageYOffset > 400) {
      setShowBtn(true);
    } else {
      setShowBtn(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      {showBtn && (
        <div className="toggle-btn">
          <button type="button" className="btn btn-info" onClick={scrollToTop}>
            TOP ^
          </button>
        </div>
      )}
    </>
  );
};

export default Scrolltop;
