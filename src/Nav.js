import { useEffect, useState } from 'react';


function Nav() {
    const [scrollPosition, setScrollPosition] = useState(0);
    const handleScroll = () => {
        const position = window.pageYOffset;
        setScrollPosition(position);
        // console.log('My scroll position is: ', position);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // let navBGColor = '#000';
    // if (scrollPosition > 1000 && scrollPosition < 2000) {
    //     navBGColor = '#333';
    // }
    // else if (scrollPosition > 2000 && scrollPosition < 4000) {
    //     navBGColor = '#f00';
    // }
    // else if (scrollPosition > 4000) {
    //     navBGColor = '#999';
    // }

  return (
      <header id="header" className="header d-flex align-items-center fixed-top" style={{
          // backgroundColor: navBGColor,
      }}>
          <div className="container-fluid position-relative d-flex align-items-center justify-content-between">

              <a href="index.html" className="logo d-flex align-items-center me-auto me-xl-0">
                  <h1 className="sitename">JESSICA DiMAURO MARKS</h1>
              </a>

              <nav id="navmenu" className="navmenu">
                  <ul>
                      <li><a href="#about">DiMauro Dance</a></li>
                      <li><a href="#resume">Choreography</a></li>
                      <li><a href="#services">Yoga</a></li>
                      <li><a href="#portfolio">Educator</a></li>
                      <li><a href="#contact">Contact</a></li>
                      <li><a href="https://www.facebook.com/dimaurodancecompany/" target="_blank" className="facebook"><i className="bi bi-facebook"></i></a></li>
                      <li><a href="https://www.instagram.com/dimaurodance/?hl=en" target="_blank" className="instagram"><i className="bi bi-instagram"></i></a></li>
                  </ul>
                  <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
              </nav>
          </div>
      </header>
  );
}

export default Nav;
