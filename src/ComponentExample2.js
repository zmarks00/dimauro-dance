function ComponentExample2(prop) {
  const { imgLinkAndSrc } = prop;

  return (
    <div className="col-lg-3 col-md-4">
      <div className="gallery-item">
        <a
          href={imgLinkAndSrc}
          className="glightbox"
          data-gallery="images-gallery"
        >
          <img src={imgLinkAndSrc} alt="" className="img-fluid" />
        </a>
      </div>
    </div>
  );
}

export default ComponentExample2;
