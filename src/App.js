import './App.scss';

function App() {
  return (
      <div className="App">
          <header id="header" className="header d-flex align-items-center fixed-top">
              <div className="container-fluid position-relative d-flex align-items-center justify-content-between">

                  <a href="index.html" className="logo d-flex align-items-center me-auto me-xl-0">
                      <h1 className="sitename">Laura</h1>
                  </a>

                  <nav id="navmenu" className="navmenu">
                      <ul>
                          <li><a href="#hero" className="active">Home</a></li>
                          <li><a href="#about">About</a></li>
                          <li><a href="#resume">Resume</a></li>
                          <li><a href="#services">Services</a></li>
                          <li><a href="#portfolio">Portfolio</a></li>
                          <li className="dropdown"><a href="#"><span>Dropdown</span> <i className="bi bi-chevron-down toggle-dropdown"></i></a>
                              <ul>
                                  <li><a href="#">Dropdown 1</a></li>
                                  <li className="dropdown"><a href="#"><span>Deep Dropdown</span> <i className="bi bi-chevron-down toggle-dropdown"></i></a>
                                      <ul>
                                          <li><a href="#">Deep Dropdown 1</a></li>
                                          <li><a href="#">Deep Dropdown 2</a></li>
                                          <li><a href="#">Deep Dropdown 3</a></li>
                                          <li><a href="#">Deep Dropdown 4</a></li>
                                          <li><a href="#">Deep Dropdown 5</a></li>
                                      </ul>
                                  </li>
                                  <li><a href="#">Dropdown 2</a></li>
                                  <li><a href="#">Dropdown 3</a></li>
                                  <li><a href="#">Dropdown 4</a></li>
                              </ul>
                          </li>
                          <li><a href="#contact">Contact</a></li>
                      </ul>
                      <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
                  </nav>

                  <div className="header-social-links">
                      <a href="#" className="twitter"><i className="bi bi-twitter-x"></i></a>
                      <a href="#" className="facebook"><i className="bi bi-facebook"></i></a>
                      <a href="#" className="instagram"><i className="bi bi-instagram"></i></a>
                      <a href="#" className="linkedin"><i className="bi bi-linkedin"></i></a>
                  </div>

              </div>
          </header>

          <main className="main">

              <section id="hero" className="hero section dark-background">

                  <img src="assets/img/hero-bg.jpg" alt="" data-aos="fade-in"/>

                  <div className="container text-center" data-aos="fade-up" data-aos-delay="100">
                      <h2>Laura Thomson</h2>
                      <p>I'M A PROFESSIONAL PHOTOGRAPHER IN NEW YORK CITY</p>
                      <a href="#about" className="btn-scroll" title="Scroll Down"><i className="bi bi-chevron-down"></i></a>
                  </div>

              </section>

              <section id="about" className="about section">

                  <div className="container section-title" data-aos="fade-up">
                      <span className="description-title">About me</span>
                      <h2>About Me</h2>
                      <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
                  </div>

                  <div className="container" data-aos="fade-up" data-aos-delay="100">

                      <div className="row gy-4 justify-content-center">
                          <div className="col-lg-4">
                              <img src="assets/img/profile-img.jpg" className="img-fluid" alt=""/>
                          </div>
                          <div className="col-lg-8 content">
                              <h2>UI/UX Designer &amp; Web Developer.</h2>
                              <p className="fst-italic py-3">
                                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                                  magna aliqua.
                              </p>
                              <div className="row">
                                  <div className="col-lg-6">
                                      <ul>
                                          <li><i className="bi bi-chevron-right"></i> <strong>Birthday:</strong> <span>1 May 1995</span></li>
                                          <li><i className="bi bi-chevron-right"></i> <strong>Website:</strong> <span>www.example.com</span></li>
                                          <li><i className="bi bi-chevron-right"></i> <strong>Phone:</strong> <span>+123 456 7890</span></li>
                                          <li><i className="bi bi-chevron-right"></i> <strong>City:</strong> <span>New York, USA</span></li>
                                      </ul>
                                  </div>
                                  <div className="col-lg-6">
                                      <ul>
                                          <li><i className="bi bi-chevron-right"></i> <strong>Age:</strong> <span>30</span></li>
                                          <li><i className="bi bi-chevron-right"></i> <strong>Degree:</strong> <span>Master</span></li>
                                          <li><i className="bi bi-chevron-right"></i> <strong>Email:</strong> <span>email@example.com</span></li>
                                          <li><i className="bi bi-chevron-right"></i> <strong>Freelance:</strong> <span>Available</span></li>
                                      </ul>
                                  </div>
                              </div>
                              <p className="py-3">
                                  Officiis eligendi itaque labore et dolorum mollitia officiis optio vero. Quisquam sunt adipisci omnis et ut. Nulla accusantium dolor incidunt officia tempore. Et eius
                                  omnis.
                                  Cupiditate ut dicta maxime officiis quidem quia. Sed et consectetur qui quia repellendus itaque neque.
                              </p>
                          </div>
                      </div>

                  </div>

              </section>

              
              <section id="resume" className="resume section">

                  
                  <div className="container section-title" data-aos="fade-up">
                      <span className="description-title">Muy Resume</span>
                      <h2>My Resume</h2>
                      <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
                  </div>
                  

                  <div className="container">

                      <div className="row">

                          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
                              <h3 className="resume-title">Sumary</h3>

                              <div className="resume-item pb-0">
                                  <h4>Brandon Johnson</h4>
                                  <p><em>Innovative and deadline-driven Graphic Designer with 3+ years of experience designing and developing user-centered digital/print marketing material from
                                      initial concept to final, polished deliverable.</em></p>
                                  <ul>
                                      <li>Portland par 127,Orlando, FL</li>
                                      <li>(123) 456-7891</li>
                                      <li>alice.barkley@example.com</li>
                                  </ul>
                              </div>

                              <h3 className="resume-title">Education</h3>
                              <div className="resume-item">
                                  <h4>Master of Fine Arts &amp; Graphic Design</h4>
                                  <h5>2015 - 2016</h5>
                                  <p><em>Rochester Institute of Technology, Rochester, NY</em></p>
                                  <p>Qui deserunt veniam. Et sed aliquam labore tempore sed quisquam iusto autem sit. Ea vero voluptatum qui ut dignissimos deleniti nerada porti sand markend</p>
                              </div>

                              <div className="resume-item">
                                  <h4>Bachelor of Fine Arts &amp; Graphic Design</h4>
                                  <h5>2010 - 2014</h5>
                                  <p><em>Rochester Institute of Technology, Rochester, NY</em></p>
                                  <p>Quia nobis sequi est occaecati aut. Repudiandae et iusto quae reiciendis et quis Eius vel ratione eius unde vitae rerum voluptates asperiores voluptatem Earum
                                      molestiae consequatur neque etlon sader mart dila</p>
                              </div>

                          </div>

                          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
                              <h3 className="resume-title">Professional Experience</h3>
                              <div className="resume-item">
                                  <h4>Senior graphic design specialist</h4>
                                  <h5>2019 - Present</h5>
                                  <p><em>Experion, New York, NY </em></p>
                                  <ul>
                                      <li>Lead in the design, development, and implementation of the graphic, layout, and production communication materials</li>
                                      <li>Delegate tasks to the 7 members of the design team and provide counsel on all aspects of the project.</li>
                                      <li>Supervise the assessment of all graphic materials in order to ensure quality and accuracy of the design</li>
                                      <li>Oversee the efficient use of production project budgets ranging from $2,000 - $25,000</li>
                                  </ul>
                              </div>

                              <div className="resume-item">
                                  <h4>Graphic design specialist</h4>
                                  <h5>2017 - 2018</h5>
                                  <p><em>Stepping Stone Advertising, New York, NY</em></p>
                                  <ul>
                                      <li>Developed numerous marketing programs (logos, brochures,infographics, presentations, and advertisements).</li>
                                      <li>Managed up to 5 projects or tasks at a given time while under pressure</li>
                                      <li>Recommended and consulted with clients on the most appropriate graphic design</li>
                                      <li>Created 4+ design presentations and proposals a month for clients and account managers</li>
                                  </ul>
                              </div>


                          </div>

                      </div>

                  </div>

              </section>
              

              
              <section id="services" className="services section">

                  
                  <div className="container section-title" data-aos="fade-up">
                      <span className="description-title">My Services</span>
                      <h2>My Services</h2>
                      <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
                  </div>
                  

                  <div className="container">

                      <div className="row gy-4">

                          <div className="col-xl-3 col-md-6 d-flex" data-aos="fade-up" data-aos-delay="100">
                              <div className="service-item position-relative">
                                  <div className="icon"><i className="bi bi-activity icon"></i></div>
                                  <h4><a href="" className="stretched-link">Lorem Ipsum</a></h4>
                                  <p>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi</p>
                              </div>
                          </div>
                          

                          <div className="col-xl-3 col-md-6 d-flex" data-aos="fade-up" data-aos-delay="200">
                              <div className="service-item position-relative">
                                  <div className="icon"><i className="bi bi-bounding-box-circles icon"></i></div>
                                  <h4><a href="" className="stretched-link">Sed ut perspici</a></h4>
                                  <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</p>
                              </div>
                          </div>
                          

                          <div className="col-xl-3 col-md-6 d-flex" data-aos="fade-up" data-aos-delay="300">
                              <div className="service-item position-relative">
                                  <div className="icon"><i className="bi bi-calendar4-week icon"></i></div>
                                  <h4><a href="" className="stretched-link">Magni Dolores</a></h4>
                                  <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia</p>
                              </div>
                          </div>
                          

                          <div className="col-xl-3 col-md-6 d-flex" data-aos="fade-up" data-aos-delay="400">
                              <div className="service-item position-relative">
                                  <div className="icon"><i className="bi bi-broadcast icon"></i></div>
                                  <h4><a href="" className="stretched-link">Nemo Enim</a></h4>
                                  <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis</p>
                              </div>
                          </div>
                          

                      </div>

                  </div>

              </section>
              


              <section id="testimonials" className="testimonials section dark-background">

                  <img src="assets/img/testimonials-bg.jpg" className="testimonials-bg" alt=""/>

                  <div className="container" data-aos="fade-up" data-aos-delay="100">

                      <div className="swiper init-swiper">
                          {/*<script type="application/json" className="swiper-config">
                              {
                                  "loop": true,
                                  "speed": 600,
                                  "autoplay": {
                                  "delay": 5000
                              },
                                  "slidesPerView": "auto",
                                  "pagination": {
                                  "el": ".swiper-pagination",
                                  "type": "bullets",
                                  "clickable": true
                              }
                              }
                          </script>*/}
                          <div className="swiper-wrapper">

                              <div className="swiper-slide">
                                  <div className="testimonial-item">
                                      <img src="assets/img/testimonials/testimonials-1.jpg" className="testimonial-img" alt=""/>
                                      <h3>Saul Goodman</h3>
                                      <h4>Ceo &amp; Founder</h4>
                                      <div className="stars">
                                          <i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i
                                          className="bi bi-star-fill"></i>
                                      </div>
                                      <p>
                                          <i className="bi bi-quote quote-icon-left"></i>
                                          <span>Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.</span>
                                          <i className="bi bi-quote quote-icon-right"></i>
                                      </p>
                                  </div>
                              </div>


                              <div className="swiper-slide">
                                  <div className="testimonial-item">
                                      <img src="assets/img/testimonials/testimonials-2.jpg" className="testimonial-img" alt=""/>
                                      <h3>Sara Wilsson</h3>
                                      <h4>Designer</h4>
                                      <div className="stars">
                                          <i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i
                                          className="bi bi-star-fill"></i>
                                      </div>
                                      <p>
                                          <i className="bi bi-quote quote-icon-left"></i>
                                          <span>Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.</span>
                                          <i className="bi bi-quote quote-icon-right"></i>
                                      </p>
                                  </div>
                              </div>


                              <div className="swiper-slide">
                                  <div className="testimonial-item">
                                      <img src="assets/img/testimonials/testimonials-3.jpg" className="testimonial-img" alt=""/>
                                      <h3>Jena Karlis</h3>
                                      <h4>Store Owner</h4>
                                      <div className="stars">
                                          <i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i
                                          className="bi bi-star-fill"></i>
                                      </div>
                                      <p>
                                          <i className="bi bi-quote quote-icon-left"></i>
                                          <span>Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.</span>
                                          <i className="bi bi-quote quote-icon-right"></i>
                                      </p>
                                  </div>
                              </div>


                              <div className="swiper-slide">
                                  <div className="testimonial-item">
                                      <img src="assets/img/testimonials/testimonials-4.jpg" className="testimonial-img" alt=""/>
                                      <h3>Matt Brandon</h3>
                                      <h4>Freelancer</h4>
                                      <div className="stars">
                                          <i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i
                                          className="bi bi-star-fill"></i>
                                      </div>
                                      <p>
                                          <i className="bi bi-quote quote-icon-left"></i>
                                          <span>Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.</span>
                                          <i className="bi bi-quote quote-icon-right"></i>
                                      </p>
                                  </div>
                              </div>


                              <div className="swiper-slide">
                                  <div className="testimonial-item">
                                      <img src="assets/img/testimonials/testimonials-5.jpg" className="testimonial-img" alt=""/>
                                      <h3>John Larson</h3>
                                      <h4>Entrepreneur</h4>
                                      <div className="stars">
                                          <i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i
                                          className="bi bi-star-fill"></i>
                                      </div>
                                      <p>
                                          <i className="bi bi-quote quote-icon-left"></i>
                                          <span>Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.</span>
                                          <i className="bi bi-quote quote-icon-right"></i>
                                      </p>
                                  </div>
                              </div>


                          </div>
                          <div className="swiper-pagination"></div>
                      </div>

                  </div>

              </section>



              <section id="portfolio" className="portfolio section">


                  <div className="container section-title" data-aos="fade-up">
                      <span className="description-title">Portfolio</span>
                      <h2>Portfolio</h2>
                      <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
                  </div>


                  <div className="container-fluid">

                      <div className="isotope-layout" data-default-filter="*" data-layout="masonry" data-sort="original-order">

                          <ul className="portfolio-filters isotope-filters" data-aos="fade-up" data-aos-delay="100">
                              <li data-filter="*" className="filter-active">All</li>
                              <li data-filter=".filter-app">App</li>
                              <li data-filter=".filter-product">Product</li>
                              <li data-filter=".filter-branding">Branding</li>
                              <li data-filter=".filter-books">Books</li>
                          </ul>


                          <div className="row g-0 isotope-container" data-aos="fade-up" data-aos-delay="200">

                              <div className="col-xl-3 col-lg-4 col-md-6 portfolio-item isotope-item filter-app">
                                  <div className="portfolio-content h-100">
                                      <img src="assets/img/portfolio/app-1.jpg" className="img-fluid" alt=""/>
                                      <div className="portfolio-info">
                                          <a href="assets/img/portfolio/app-1.jpg" data-gallery="portfolio-gallery-app" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                                          <a href="portfolio-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></a>
                                      </div>
                                  </div>
                              </div>


                              <div className="col-xl-3 col-lg-4 col-md-6 portfolio-item isotope-item filter-product">
                                  <div className="portfolio-content h-100">
                                      <img src="assets/img/portfolio/product-1.jpg" className="img-fluid" alt=""/>
                                      <div className="portfolio-info">
                                          <a href="assets/img/portfolio/product-1.jpg" data-gallery="portfolio-gallery-product" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                                          <a href="portfolio-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></a>
                                      </div>
                                  </div>
                              </div>


                              <div className="col-xl-3 col-lg-4 col-md-6 portfolio-item isotope-item filter-branding">
                                  <div className="portfolio-content h-100">
                                      <img src="assets/img/portfolio/branding-1.jpg" className="img-fluid" alt=""/>
                                      <div className="portfolio-info">
                                          <a href="assets/img/portfolio/branding-1.jpg" data-gallery="portfolio-gallery-branding" className="glightbox preview-link"><i
                                              className="bi bi-zoom-in"></i></a>
                                          <a href="portfolio-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></a>
                                      </div>
                                  </div>
                              </div>


                              <div className="col-xl-3 col-lg-4 col-md-6 portfolio-item isotope-item filter-books">
                                  <div className="portfolio-content h-100">
                                      <img src="assets/img/portfolio/books-1.jpg" className="img-fluid" alt=""/>
                                      <div className="portfolio-info">
                                          <a href="assets/img/portfolio/books-1.jpg" data-gallery="portfolio-gallery-book" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                                          <a href="portfolio-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></a>
                                      </div>
                                  </div>
                              </div>


                              <div className="col-xl-3 col-lg-4 col-md-6 portfolio-item isotope-item filter-app">
                                  <div className="portfolio-content h-100">
                                      <img src="assets/img/portfolio/app-2.jpg" className="img-fluid" alt=""/>
                                      <div className="portfolio-info">
                                          <a href="assets/img/portfolio/app-2.jpg" data-gallery="portfolio-gallery-app" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                                          <a href="portfolio-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></a>
                                      </div>
                                  </div>
                              </div>


                              <div className="col-xl-3 col-lg-4 col-md-6 portfolio-item isotope-item filter-product">
                                  <div className="portfolio-content h-100">
                                      <img src="assets/img/portfolio/product-2.jpg" className="img-fluid" alt=""/>
                                      <div className="portfolio-info">
                                          <a href="assets/img/portfolio/product-2.jpg" data-gallery="portfolio-gallery-product" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                                          <a href="portfolio-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></a>
                                      </div>
                                  </div>
                              </div>


                              <div className="col-xl-3 col-lg-4 col-md-6 portfolio-item isotope-item filter-branding">
                                  <div className="portfolio-content h-100">
                                      <img src="assets/img/portfolio/branding-2.jpg" className="img-fluid" alt=""/>
                                      <div className="portfolio-info">
                                          <a href="assets/img/portfolio/branding-2.jpg" data-gallery="portfolio-gallery-branding" className="glightbox preview-link"><i
                                              className="bi bi-zoom-in"></i></a>
                                          <a href="portfolio-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></a>
                                      </div>
                                  </div>
                              </div>


                              <div className="col-xl-3 col-lg-4 col-md-6 portfolio-item isotope-item filter-books">
                                  <div className="portfolio-content h-100">
                                      <img src="assets/img/portfolio/books-2.jpg" className="img-fluid" alt=""/>
                                      <div className="portfolio-info">
                                          <a href="assets/img/portfolio/books-2.jpg" data-gallery="portfolio-gallery-book" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                                          <a href="portfolio-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></a>
                                      </div>
                                  </div>
                              </div>


                              <div className="col-xl-3 col-lg-4 col-md-6 portfolio-item isotope-item filter-app">
                                  <div className="portfolio-content h-100">
                                      <img src="assets/img/portfolio/app-3.jpg" className="img-fluid" alt=""/>
                                      <div className="portfolio-info">
                                          <a href="assets/img/portfolio/app-3.jpg" data-gallery="portfolio-gallery-app" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                                          <a href="portfolio-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></a>
                                      </div>
                                  </div>
                              </div>


                              <div className="col-xl-3 col-lg-4 col-md-6 portfolio-item isotope-item filter-product">
                                  <div className="portfolio-content h-100">
                                      <img src="assets/img/portfolio/product-3.jpg" className="img-fluid" alt=""/>
                                      <div className="portfolio-info">
                                          <a href="assets/img/portfolio/product-3.jpg" data-gallery="portfolio-gallery-product" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                                          <a href="portfolio-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></a>
                                      </div>
                                  </div>
                              </div>


                              <div className="col-xl-3 col-lg-4 col-md-6 portfolio-item isotope-item filter-branding">
                                  <div className="portfolio-content h-100">
                                      <img src="assets/img/portfolio/branding-3.jpg" className="img-fluid" alt=""/>
                                      <div className="portfolio-info">
                                          <a href="assets/img/portfolio/branding-3.jpg" data-gallery="portfolio-gallery-branding" className="glightbox preview-link"><i
                                              className="bi bi-zoom-in"></i></a>
                                          <a href="portfolio-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></a>
                                      </div>
                                  </div>
                              </div>


                              <div className="col-xl-3 col-lg-4 col-md-6 portfolio-item isotope-item filter-books">
                                  <div className="portfolio-content h-100">
                                      <img src="assets/img/portfolio/books-3.jpg" className="img-fluid" alt=""/>
                                      <div className="portfolio-info">
                                          <a href="assets/img/portfolio/books-3.jpg" data-gallery="portfolio-gallery-book" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                                          <a href="portfolio-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></a>
                                      </div>
                                  </div>
                              </div>


                          </div>


                      </div>

                  </div>

              </section>



              <section id="pricing" className="pricing section">


                  <div className="container section-title" data-aos="fade-up">
                      <span className="description-title">Pricing</span>
                      <h2>Pricing</h2>
                      <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
                  </div>


                  <div className="container">

                      <div className="row gy-4">

                          <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
                              <div className="pricing-item">
                                  <h3>Free</h3>
                                  <h4><sup>$</sup>0<span> / month</span></h4>
                                  <ul>
                                      <li>Aida dere</li>
                                      <li>Nec feugiat nisl</li>
                                      <li>Nulla at volutpat dola</li>
                                      <li className="na">Pharetra massa</li>
                                      <li className="na">Massa ultricies mi</li>
                                  </ul>
                                  <div className="btn-wrap">
                                      <a href="#" className="btn-buy">Buy Now</a>
                                  </div>
                              </div>
                          </div>


                          <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="200">
                              <div className="pricing-item recommended">
                                  <span className="recommended-badge">Recommended</span>
                                  <h3>Business</h3>
                                  <h4><sup>$</sup>19<span> / month</span></h4>
                                  <ul>
                                      <li>Aida dere</li>
                                      <li>Nec feugiat nisl</li>
                                      <li>Nulla at volutpat dola</li>
                                      <li>Pharetra massa</li>
                                      <li className="na">Massa ultricies mi</li>
                                  </ul>
                                  <div className="btn-wrap">
                                      <a href="#" className="btn-buy">Buy Now</a>
                                  </div>
                              </div>
                          </div>


                          <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="300">
                              <div className="pricing-item">
                                  <h3>Developer</h3>
                                  <h4><sup>$</sup>29<span> / month</span></h4>
                                  <ul>
                                      <li>Aida dere</li>
                                      <li>Nec feugiat nisl</li>
                                      <li>Nulla at volutpat dola</li>
                                      <li>Pharetra massa</li>
                                      <li>Massa ultricies mi</li>
                                  </ul>
                                  <div className="btn-wrap">
                                      <a href="#" className="btn-buy">Buy Now</a>
                                  </div>
                              </div>
                          </div>


                      </div>

                  </div>

              </section>



              <section id="pricing-2" className="pricing-2 section">

                  <div className="container" data-aos="fade-up" data-aos-delay="100">

                      <div className="row gy-4 gx-lg-5">

                          <div className="col-lg-6">
                              <div className="pricing-item d-flex justify-content-between">
                                  <h3>Portrait Photography</h3>
                                  <h4>$160.00</h4>
                              </div>
                          </div>


                          <div className="col-lg-6">
                              <div className="pricing-item d-flex justify-content-between">
                                  <h3>Fashion Photography</h3>
                                  <h4>$300.00</h4>
                              </div>
                          </div>


                          <div className="col-lg-6">
                              <div className="pricing-item d-flex justify-content-between">
                                  <h3>Sports Photography</h3>
                                  <h4>$200.00</h4>
                              </div>
                          </div>


                          <div className="col-lg-6">
                              <div className="pricing-item d-flex justify-content-between">
                                  <h3>Still Life Photography</h3>
                                  <h4>$120.00</h4>
                              </div>
                          </div>


                          <div className="col-lg-6">
                              <div className="pricing-item d-flex justify-content-between">
                                  <h3>Wedding Photography</h3>
                                  <h4>$500.00</h4>
                              </div>
                          </div>


                          <div className="col-lg-6">
                              <div className="pricing-item d-flex justify-content-between">
                                  <h3>Photojournalism</h3>
                                  <h4>$200.00</h4>
                              </div>
                          </div>


                      </div>

                  </div>

              </section>



              <section id="gallery" className="gallery section">


                  <div className="container section-title" data-aos="fade-up">
                      <span className="description-title">Gallery</span>
                      <h2>Gallery</h2>
                      <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
                  </div>


                  <div className="container-fluid" data-aos="fade-up" data-aos-delay="100">

                      <div className="row g-0">

                          <div className="col-lg-3 col-md-4">
                              <div className="gallery-item">
                                  <a href="assets/img/gallery/gallery-1.jpg" className="glightbox" data-gallery="images-gallery">
                                      <img src="assets/img/gallery/gallery-1.jpg" alt="" className="img-fluid"/>
                                  </a>
                              </div>
                          </div>


                          <div className="col-lg-3 col-md-4">
                              <div className="gallery-item">
                                  <a href="assets/img/gallery/gallery-2.jpg" className="glightbox" data-gallery="images-gallery">
                                      <img src="assets/img/gallery/gallery-2.jpg" alt="" className="img-fluid"/>
                                  </a>
                              </div>
                          </div>


                          <div className="col-lg-3 col-md-4">
                              <div className="gallery-item">
                                  <a href="assets/img/gallery/gallery-3.jpg" className="glightbox" data-gallery="images-gallery">
                                      <img src="assets/img/gallery/gallery-3.jpg" alt="" className="img-fluid"/>
                                  </a>
                              </div>
                          </div>


                          <div className="col-lg-3 col-md-4">
                              <div className="gallery-item">
                                  <a href="assets/img/gallery/gallery-4.jpg" className="glightbox" data-gallery="images-gallery">
                                      <img src="assets/img/gallery/gallery-4.jpg" alt="" className="img-fluid"/>
                                  </a>
                              </div>
                          </div>


                          <div className="col-lg-3 col-md-4">
                              <div className="gallery-item">
                                  <a href="assets/img/gallery/gallery-5.jpg" className="glightbox" data-gallery="images-gallery">
                                      <img src="assets/img/gallery/gallery-5.jpg" alt="" className="img-fluid"/>
                                  </a>
                              </div>
                          </div>


                          <div className="col-lg-3 col-md-4">
                              <div className="gallery-item">
                                  <a href="assets/img/gallery/gallery-6.jpg" className="glightbox" data-gallery="images-gallery">
                                      <img src="assets/img/gallery/gallery-6.jpg" alt="" className="img-fluid"/>
                                  </a>
                              </div>
                          </div>


                          <div className="col-lg-3 col-md-4">
                              <div className="gallery-item">
                                  <a href="assets/img/gallery/gallery-7.jpg" className="glightbox" data-gallery="images-gallery">
                                      <img src="assets/img/gallery/gallery-7.jpg" alt="" className="img-fluid"/>
                                  </a>
                              </div>
                          </div>


                          <div className="col-lg-3 col-md-4">
                              <div className="gallery-item">
                                  <a href="assets/img/gallery/gallery-8.jpg" className="glightbox" data-gallery="images-gallery">
                                      <img src="assets/img/gallery/gallery-8.jpg" alt="" className="img-fluid"/>
                                  </a>
                              </div>
                          </div>


                      </div>

                  </div>

              </section>



              <section id="contact" className="contact section">


                  <div className="container section-title" data-aos="fade-up">
                      <span className="description-title">Contact</span>
                      <h2>Contact</h2>
                      <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
                  </div>


                  <div className="container" data-aos="fade-up" data-aos-delay="100">

                      <div className="row gy-4" data-aos="fade-up" data-aos-delay="200">

                          <div className="col-lg-4">
                              <div className="info-item d-flex flex-column justify-content-center align-items-center">
                                  <i className="bi bi-geo-alt"></i>
                                  <h3>Address</h3>
                                  <p>A108 Adam Street, New York, NY 535022</p>
                              </div>
                          </div>


                          <div className="col-lg-4">
                              <div className="info-item d-flex flex-column justify-content-center align-items-center info-item-borders">
                                  <i className="bi bi-telephone"></i>
                                  <h3>Call Us</h3>
                                  <p>+1 5589 55488 55</p>
                              </div>
                          </div>


                          <div className="col-lg-4">
                              <div className="info-item d-flex flex-column justify-content-center align-items-center">
                                  <i className="bi bi-envelope"></i>
                                  <h3>Email Us</h3>
                                  <p>info@example.com</p>
                              </div>
                          </div>


                      </div>

                      <form action="forms/contact.php" method="post" className="php-email-form" data-aos="fade-up" data-aos-delay="300">
                          <div className="row gy-4">

                              <div className="col-md-6">
                                  <input type="text" name="name" className="form-control" placeholder="Your Name" required=""/>
                              </div>

                              <div className="col-md-6 ">
                                  <input type="email" className="form-control" name="email" placeholder="Your Email" required=""/>
                              </div>

                              <div className="col-md-12">
                                  <input type="text" className="form-control" name="subject" placeholder="Subject" required=""/>
                              </div>

                              <div className="col-md-12">
                                  <textarea className="form-control" name="message" rows="6" placeholder="Message" required=""></textarea>
                              </div>

                              <div className="col-md-12 text-center">
                                  <div className="loading">Loading</div>
                                  <div className="error-message"></div>
                                  <div className="sent-message">Your message has been sent. Thank you!</div>

                                  <button type="submit">Send Message</button>
                              </div>

                          </div>
                      </form>


                  </div>

              </section>


          </main>

          <footer id="footer" className="footer position-relative dark-background">
              <div className="container">
                  <h3 className="sitename">Laura Thomson<br/></h3>
                  <p>Et aut eum quis fuga eos sunt ipsa nihil. Labore corporis magni eligendi fuga maxime saepe commodi placeat.</p>
                  <div className="social-links d-flex justify-content-center">
                      <a href=""><i className="bi bi-twitter-x"></i></a>
                      <a href=""><i className="bi bi-facebook"></i></a>
                      <a href=""><i className="bi bi-instagram"></i></a>
                      <a href=""><i className="bi bi-skype"></i></a>
                      <a href=""><i className="bi bi-linkedin"></i></a>
                  </div>
                  <div className="container">
                      <div className="copyright">
                          <span>Copyright</span> <strong className="px-1 sitename">Laura</strong> <span>All Rights Reserved</span>
                      </div>
                      <div className="credits">




                          Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
                      </div>
                  </div>
              </div>
          </footer>


          <a href="#" id="scroll-top" className="scroll-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short"></i></a>

          
          <div id="preloader"></div>
      </div>
  );
}

export default App;
