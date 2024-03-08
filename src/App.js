import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <nav
        className="navbar navbar-expand-lg navbar-dark sticky-top py-lg-0 px-4 px-lg-5 wow fadeIn"
        data-wow-delay="0.1s"
      >
        <a href="index.html" className="navbar-brand p-0">
          <img className="img-fluid me-3" src="img/logo.jpg" alt="Icon" />

        </a>
        <button
          type="button"
          className="navbar-toggler"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse py-4 py-lg-0" id="navbarCollapse">
          <div className="navbar-nav ms-auto">
            <a href="index.html" className="nav-item nav-link active">Home</a>
            <a href="about.html" className="nav-item nav-link">About</a>
            <a href="service.html" className="nav-item nav-link">Services</a>
            <div className="nav-item dropdown">
              <a
                href="#"
                className="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
              >Pages</a
              >
              <div className="dropdown-menu rounded-0 rounded-bottom m-0">
                <a href="animal.html" className="dropdown-item">Our Animals</a>
                <a href="membership.html" className="dropdown-item">Membership</a>
                <a href="visiting.html" className="dropdown-item">Visiting Hours</a>
                <a href="testimonial.html" className="dropdown-item">Testimonial</a>
                <a href="404.html" className="dropdown-item">404 Page</a>
              </div>
            </div>
            <a href="contact.html" className="nav-item nav-link">Contact</a>
          </div>
          <a href="" className="btn btn-primary"
          >Buy Ticket<i className="fa fa-arrow-right ms-3"></i
          ></a>
        </div>
      </nav>

      <div className="container-fluid bg-dark p-0 mb-5">
        <div className="row g-0 flex-column-reverse flex-lg-row">
          <div className="col-lg-6 p-0 wow fadeIn" data-wow-delay="0.1s">
            <div
              className="header-bg h-100 d-flex flex-column justify-content-center p-5"
            >
              <h1 className="display-4 text-light mb-5">
New Moon Recruit              </h1>
              <div className="d-flex align-items-center pt-4 animated slideInDown">
                <a href="" className="btn btn-primary py-sm-3 px-3 px-sm-5 me-5"
                >Read More</a
                >
                <button
                  type="button"
                  className="btn-play"
                  data-bs-toggle="modal"
                  data-src="https://www.youtube.com/embed/DWRcNpR6Kdc"
                  data-bs-target="#videoModal"
                >
                  <span></span>
                </button>
                <h6 className="text-white m-0 ms-4 d-none d-sm-block">Watch Video</h6>
              </div>
            </div>
          </div>
          <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
            <div className="owl-carousel header-carousel">
              <div className="owl-carousel-item">
                <img className="img-fluid" src="img/carousel-1.jpg" alt="" />
              </div>
              <div className="owl-carousel-item">
                <img className="img-fluid" src="img/carousel-2.jpg" alt="" />
              </div>
              <div className="owl-carousel-item">
                <img className="img-fluid" src="img/carousel-3.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="modal modal-video fade"
        id="videoModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content rounded-0">
            <div className="modal-header">
              <h3 className="modal-title" id="exampleModalLabel">Youtube Video</h3>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">

              <div className="ratio ratio-16x9">
                <iframe
                  className="embed-responsive-item"
                  src=""
                  id="video"
                  allowfullscreen
                  allowscriptaccess="always"
                  allow="autoplay"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
              <p><span className="text-primary me-2">#</span>Welcome To New Moon Recruit</p>
              <h1 className="display-5 mb-4">
                Why <span className="text-primary">DiMauro Dance</span> is right for YOU!

              </h1>
              <p className="mb-4">
                Stet no et lorem dolor et diam, amet duo ut dolore vero eos. No
                stet est diam rebum amet diam ipsum. Clita clita labore, dolor duo
                nonumy clita sit at, sed sit sanctus dolor eos.
              </p>
              <h5 className="mb-3">
                <i className="far fa-check-circle text-primary me-3"></i>Free Car
                Parking
              </h5>
              <h5 className="mb-3">
                <i className="far fa-check-circle text-primary me-3"></i>Natural
                Environment
              </h5>
              <h5 className="mb-3">
                <i className="far fa-check-circle text-primary me-3"></i>Professional
                Guide & Security
              </h5>
              <h5 className="mb-3">
                <i className="far fa-check-circle text-primary me-3"></i>World Best
                Animals
              </h5>
              <a className="btn btn-primary py-3 px-5 mt-3" href="">Read More</a>
            </div>
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
              <div className="img-border">
                <img className="img-fluid" src="img/about.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="container-xxl py-5">
        <div className="container">
          <div
            className="row g-5 mb-5 align-items-end wow fadeInUp"
            data-wow-delay="0.1s"
          >
            <div className="col-lg-6">
              <h1 className="display-5 mb-0">
                Let`s <span className="text-secondary">Meet the Band</span>
              </h1>
            </div>
            <div className="col-lg-6 text-lg-end">
              <a className="btn btn-primary py-3 px-5" href=""
              >More Photos</a
              >
            </div>
          </div>
          <div className="row g-4">
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
              <div className="row g-4">
                <div className="col-12">
                  <a
                    className="animal-item"
                    href="img/adam.jpg"
                    data-lightbox="animal"
                  >
                    <div className="position-relative">
                      <img className="img-fluid" src="img/adam.jpg" alt="" />
                      <div className="animal-text p-4">
                        <p className="text-white small text-uppercase mb-0">Band Member</p>
                        <h5 className="text-white mb-0">Adam</h5>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="col-12">
                  <a
                    className="animal-item"
                    href="img/jimi.jpg"
                    data-lightbox="animal"
                  >
                    <div className="position-relative">
                      <img className="img-fluid" src="img/jimi.jpg" alt="" />
                      <div className="animal-text p-4">
                        <p className="text-white small text-uppercase mb-0">Band Member</p>
                        <h5 className="text-white mb-0">Jimi</h5>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
              <div className="row g-4">
                <div className="col-12">
                  <a
                    className="animal-item"
                    href="img/personal.jpg"
                    data-lightbox="animal"
                  >
                    <div className="position-relative">
                      <img className="img-fluid" src="img/personal.jpg" alt="" />
                      <div className="animal-text p-4">
                        <p className="text-white small text-uppercase mb-0">Animal</p>
                        <h5 className="text-white mb-0">Elephant</h5>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="col-12">
                  <a
                    className="animal-item"
                    href="img/flyer.jpg"
                    data-lightbox="animal"
                  >
                    <div className="position-relative">
                      <img className="img-fluid" src="img/flyer.jpg" alt="" />
                      <div className="animal-text p-4">
                        <p className="text-white small text-uppercase mb-0">Animal</p>
                        <h5 className="text-white mb-0">Elephant</h5>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
              <div className="row g-4">
                <div className="col-12">
                  <a
                    className="animal-item"
                    href="img/ryan.jpg"
                    data-lightbox="animal"
                  >
                    <div className="position-relative">
                      <img className="img-fluid" src="img/ryan.jpg" alt="" />
                      <div className="animal-text p-4">
                        <p className="text-white small text-uppercase mb-0">Animal</p>
                        <h5 className="text-white mb-0">Elephant</h5>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="container-xxl bg-primary visiting-hours my-5 py-5 wow fadeInUp"
        data-wow-delay="0.1s"
      >
        <div className="container py-5">
          <div className="row g-5">
            <div className="col-md-6 wow fadeIn" data-wow-delay="0.3s">
              <h1 className="display-6 text-white mb-5">Visiting Hours</h1>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <span>Monday</span>
                  <span>9:00AM - 6:00PM</span>
                </li>
                <li className="list-group-item">
                  <span>Tuesday</span>
                  <span>9:00AM - 6:00PM</span>
                </li>
                <li className="list-group-item">
                  <span>Wednesday</span>
                  <span>9:00AM - 6:00PM</span>
                </li>
                <li className="list-group-item">
                  <span>Thursday</span>
                  <span>9:00AM - 6:00PM</span>
                </li>
                <li className="list-group-item">
                  <span>Friday</span>
                  <span>9:00AM - 6:00PM</span>
                </li>
                <li className="list-group-item">
                  <span>Saturday</span>
                  <span>9:00AM - 6:00PM</span>
                </li>
                <li className="list-group-item">
                  <span>Sunday</span>
                  <span>Closed</span>
                </li>
              </ul>
            </div>
            <div className="col-md-6 text-light wow fadeIn" data-wow-delay="0.5s">
              <h1 className="display-6 text-white mb-5">Contact Info</h1>
              <table className="table">
                <tbody>
                  <tr>
                    <td>Office</td>
                    <td>123 Street, New York, USA</td>
                  </tr>
                  <tr>
                    <td>Zoo</td>
                    <td>123 Street, New York, USA</td>
                  </tr>
                  <tr>
                    <td>Ticket</td>
                    <td>
                      <p className="mb-2">+012 345 6789</p>
                      <p className="mb-0">ticket@example.com</p>
                    </td>
                  </tr>
                  <tr>
                    <td>Support</td>
                    <td>
                      <p className="mb-2">+012 345 6789</p>
                      <p className="mb-0">support@example.com</p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>


      <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Launch demo modal
      </button>
      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              ...
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary">Save changes</button>
            </div>
          </div>
        </div>
      </div>


      <div
        className="container-fluid footer bg-dark text-light footer mt-5 pt-5 wow fadeIn"
        data-wow-delay="0.1s"
      >
        <div className="container py-5">
          <div className="row g-5">
            <div className="col-lg-4 col-md-6">
              <h5 className="text-light mb-4">Address</h5>
              <p className="mb-2">
                <i className="fa fa-map-marker-alt me-3"></i>123 Street, New York, USA
              </p>
              <p className="mb-2">
                <i className="fa fa-phone-alt me-3"></i>+012 345 67890
              </p>
              <p className="mb-2">
                <i className="fa fa-envelope me-3"></i>info@example.com
              </p>
              <div className="d-flex pt-2">
                <a className="btn btn-outline-light btn-social" href=""
                ><i className="fab fa-twitter"></i
                ></a>
                <a className="btn btn-outline-light btn-social" href=""
                ><i className="fab fa-facebook-f"></i
                ></a>
                <a className="btn btn-outline-light btn-social" href=""
                ><i className="fab fa-youtube"></i
                ></a>
                <a className="btn btn-outline-light btn-social" href=""
                ><i className="fab fa-linkedin-in"></i
                ></a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <h5 className="text-light mb-4">Popular Links</h5>
              <a className="btn btn-link" href="">About Us</a>
              <a className="btn btn-link" href="">Contact Us</a>
              <a className="btn btn-link" href="">Our Services</a>
              <a className="btn btn-link" href="">Terms & Condition</a>
              <a className="btn btn-link" href="">Support</a>
            </div>
            <div className="col-lg-4 col-md-6">
              <h5 className="text-light mb-4">Newsletter</h5>
              <p>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
              <div className="position-relative mx-auto" style={{ "max-width": "400px" }}>
                <input
                  className="form-control border-0 w-100 py-3 ps-4 pe-5"
                  type="text"
                  placeholder="Your email"
                />
                <button
                  type="button"
                  className="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2"
                >
                  SignUp
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="copyright">
            <div className="row">
              <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                &copy; <a className="border-bottom" href="#">New Moon Recruit</a>, All
                Right Reserved.
              </div>
              <div className="col-md-6 text-center text-md-end">

                Designed By
                <a className="border-bottom" href="https://htmlcodex.com"
                >HTML Codex</a
                >
                <br />Distributed By:
                <a href="https://themewagon.com" target="_blank">ThemeWagon</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <a href="#" className="btn btn-lg btn-primary btn-lg-square back-to-top"
      ><i className="bi bi-arrow-up"></i
      ></a>



    </div>
  );
}

export default App;
