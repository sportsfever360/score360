import React, { Component } from "react";
import logo from "../logo/logo.png";

class Slider extends Component {
  render() {
    return (
      <div className="mt-3 bg-dark">
        <div
          id="carouselExampleIndicators"
          class="carousel slide"
          data-ride="carousel"
        >
          <ol class="carousel-indicators">
            <li
              data-target="#carouselExampleIndicators"
              data-slide-to="0"
              class="active"
            />
            <li data-target="#carouselExampleIndicators" data-slide-to="1" />
            <li data-target="#carouselExampleIndicators" data-slide-to="2" />
          </ol>
          <div class="carousel-inner">
            <div class="carousel-item  active">
              <div className="container">
                <div className="row">
                  <div className="col-md-4">
                    <div class="card">
                      <h5 class="card-header">Featured</h5>
                      <div class="card-body">
                        <h5 class="card-title">Special title treatment</h5>
                        <p class="card-text">
                          With supporting text below as a natural lead-in to
                          additional content.
                        </p>
                        <a href="/wtf" class="btn btn-primary">
                          Hello
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div class="card">
                      <h5 class="card-header">Featured</h5>
                      <div class="card-body">
                        <h5 class="card-title">Special title treatment</h5>
                        <p class="card-text">
                          With supporting text below as a natural lead-in to
                          additional content.
                        </p>
                        <a href="/stfu" class="btn btn-primary">
                          Hello
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div class="card">
                      <h5 class="card-header">Featured</h5>
                      <div class="card-body">
                        <h5 class="card-title">Special title treatment</h5>
                        <p class="card-text">
                          With supporting text below as a natural lead-in to
                          additional content.
                        </p>
                        <a href="/stfu" class="btn btn-primary">
                          Hello
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="carousel-item ">
              <div className="container">
                <div className="row">
                  <div className="col-md-4">
                    <div class="card">
                      <h5 class="card-header">Featured</h5>
                      <div class="card-body">
                        <h5 class="card-title">Special title treatment</h5>
                        <p class="card-text">
                          With supporting text below as a natural lead-in to
                          additional content.
                        </p>
                        <a href="/wtf" class="btn btn-primary">
                          Hello
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div class="card">
                      <h5 class="card-header">Featured</h5>
                      <div class="card-body">
                        <h5 class="card-title">Special title treatment</h5>
                        <p class="card-text">
                          With supporting text below as a natural lead-in to
                          additional content.
                        </p>
                        <a href="/stfu" class="btn btn-primary">
                          Hello
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div class="card">
                      <h5 class="card-header">Featured</h5>
                      <div class="card-body">
                        <h5 class="card-title">Special title treatment</h5>
                        <p class="card-text">
                          With supporting text below as a natural lead-in to
                          additional content.
                        </p>
                        <a href="/stfu" class="btn btn-primary">
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
            class="carousel-control-prev"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true" />
            <span class="sr-only">Previous</span>
          </a>
          <a
            class="carousel-control-next"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true" />
            <span class="sr-only">Next</span>
          </a>
        </div>
      </div>
    );
  }
}
export default Slider;
