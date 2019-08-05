import React, { Component } from "react";
import logo from "../logo/logo.png";

class Slider extends Component {
  render() {
    return (
      <div className="mt-3 bg-dark">
        <div
          id="carouselExampleIndicators"
          className="carousel slide"
          data-ride="carousel"
        >
          <ol className="carousel-indicators">
            <li
              data-target="#carouselExampleIndicators"
              data-slide-to="0"
              className="active"
            />
            <li data-target="#carouselExampleIndicators" data-slide-to="1" />
            <li data-target="#carouselExampleIndicators" data-slide-to="2" />
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item  active">
              <div className="container">
                <div className="row">
                  <div className="col-md-4">
                    <div className="card">
                      <h5 className="card-header">Featured</h5>
                      <div className="card-body">
                        <h5 className="card-title">Special title treatment</h5>
                        <p className="card-text">
                          With supporting text below as a natural lead-in to
                          additional content.
                        </p>
                        <a href="/wtf" className="btn btn-primary">
                          Hello
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="card">
                      <h5 className="card-header">Featured</h5>
                      <div className="card-body">
                        <h5 className="card-title">Special title treatment</h5>
                        <p className="card-text">
                          With supporting text below as a natural lead-in to
                          additional content.
                        </p>
                        <a href="/stfu" className="btn btn-primary">
                          Hello
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="card">
                      <h5 className="card-header">Featured</h5>
                      <div className="card-body">
                        <h5 className="card-title">Special title treatment</h5>
                        <p className="card-text">
                          With supporting text below as a natural lead-in to
                          additional content.
                        </p>
                        <a href="/stfu" className="btn btn-primary">
                          Hello
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item ">
              <div className="container">
                <div className="row">
                  <div className="col-md-4">
                    <div className="card">
                      <h5 className="card-header">Featured</h5>
                      <div className="card-body">
                        <h5 className="card-title">Special title treatment</h5>
                        <p className="card-text">
                          With supporting text below as a natural lead-in to
                          additional content.
                        </p>
                        <a href="/wtf" className="btn btn-primary">
                          Hello
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="card">
                      <h5 className="card-header">Featured</h5>
                      <div className="card-body">
                        <h5 className="card-title">Special title treatment</h5>
                        <p className="card-text">
                          With supporting text below as a natural lead-in to
                          additional content.
                        </p>
                        <a href="/stfu" className="btn btn-primary">
                          Hello
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="card">
                      <h5 className="card-header">Featured</h5>
                      <div className="card-body">
                        <h5 className="card-title">Special title treatment</h5>
                        <p className="card-text">
                          With supporting text below as a natural lead-in to
                          additional content.
                        </p>
                        <a href="/stfu" className="btn btn-primary">
                          Hello
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <a
            className="carousel-control-prev"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
    );
  }
}
export default Slider;
