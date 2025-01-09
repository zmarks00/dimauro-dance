import "./App.scss";
import Homepage from "./Homepage";
import Nav from "./Nav";

function App() {
  return (
    <div className="App">
      <Nav />

      <Homepage />

      <footer id="footer" className="footer position-relative dark-background">
        <div className="container">
          {/* <h3 className="sitename">
            Jessica DiMauro Marks
            <br />
          </h3> */}
          <p></p>
          <div className="social-links d-flex justify-content-center">
            {/* <a href=""><i className="bi bi-twitter-x"></i></a> */}
            <a
              href="https://www.facebook.com/dimaurodancecompany/"
              target="_blank"
            >
              <i className="bi bi-facebook"></i>
            </a>
            <a
              href="https://www.instagram.com/dimaurodance/?hl=en"
              target="_blank"
            >
              <i className="bi bi-instagram"></i>
            </a>
            {/* <a href=""><i className="bi bi-skype"></i></a> */}
            {/* <a href=""><i className="bi bi-linkedin"></i></a> */}
          </div>
          <div className="container">
            <div className="copyright">
              <span>Copyright</span>{" "}
              <strong className="px-1 sitename">Jessica DiMauro Marks</strong>{" "}
              <span>All Rights Reserved</span>
            </div>
            <div className="credits">
              This program has been made possible in part through the
              sponsorship of{" "}
              <a
                className="donate__button-link"
                href="https://www.thefield.org/"
                target="_blank"
              >
                {" "}
                The Field
              </a>
              .
            </div>
          </div>
        </div>
      </footer>

      <a
        href="#"
        id="scroll-top"
        className="scroll-top d-flex align-items-center justify-content-center"
      >
        <i className="bi bi-arrow-up-short"></i>
      </a>

      <div id="preloader"></div>
    </div>
  );
}

export default App;
