import React from "react";
import "./end.css";
const images = [
  {
    link: "San Francisco – Oakland Bay Bridge, United States",
    imgPath:
      "https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60",
  },
  {
    link: "Bird",
    imgPath:
      "https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60",
  },
  {
    link: "Bali, Indonesia",
    imgPath:
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250",
  },
  {
    link: "Goč, Serbia",
    imgPath:
      "https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60",
  },
];
const Endslider = () => {
  return (
    <div className="container text-center my-3">
      <div className="row mx-auto my-auto justify-content-center">
        <div
          id="recipeCarousel"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner" role="listbox">
            <div className="carousel-item active" interval={1000}>
              <div className="col-md-3">
                <div className="card">
                  <div className="card-img">
                    <img
                      src="https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60"
                      className="img-fluid"
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="card">
                  <div className="card-img">
                    <img
                      src="https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60"
                      className="img-fluid"
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="card">
                  <div className="card-img">
                    <img
                      src="https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250"
                      className="img-fluid"
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="card">
                  <div className="card-img">
                    <img
                      src="https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60"
                      className="img-fluid"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="col-md-3">
                <div className="card">
                  <div className="card-img">
                    <img
                      src="//via.placeholder.com/500x400/aba?text=5"
                      className="img-fluid"
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="card">
                  <div className="card-img">
                    <img
                      src="//via.placeholder.com/500x400/fc0?text=6"
                      className="img-fluid"
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="card">
                  <div className="card-img">
                    <img
                      src="//via.placeholder.com/500x400/aba?text=7"
                      className="img-fluid"
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="card">
                  <div className="card-img">
                    <img
                      src="//via.placeholder.com/500x400/fc0?text=8"
                      className="img-fluid"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <a
            className="carousel-control-prev bg-transparent w-auto"
            href="#recipeCarousel"
            role="button"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
          </a>
          <a
            className="carousel-control-next bg-transparent w-auto"
            href="#recipeCarousel"
            role="button"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Endslider;
