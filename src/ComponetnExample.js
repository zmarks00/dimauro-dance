function ComponentExample(props) {
  const { filter, imgURL } = props;

  // Line 2 is equivalent to:
  // const filter = props.filter;
  // const imgURL = props.imgURL;

  return (
    <div
      className={`col-xl-3 col-lg-4 col-md-6 portfolio-item isotope-item filter-${filter}`}
    >
      <div className="portfolio-content h-100">
        <img src={imgURL} className="img-fluid" alt="" />
        <div className="portfolio-info">
          <a
            href={imgURL}
            data-gallery={`portfolio-gallery-${filter}`}
            className="glightbox preview-link"
          >
            <i className="bi bi-zoom-in"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default ComponentExample;
