import React, { Component } from "react";
import Slider from "react-slick";
import SliderComponent from "./SliderComponent";
import { Consumer } from "../Context";

class Responsive extends Component {
  render() {
    var settings = {
      dots: false,
      infinite: true,
      speed: 1000,
      slidesToShow: 4,
      slidesToScroll: 1,
      initialSlide: 0,
      autoplay: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <Consumer>
        {value => {
          const { matches } = value;
          return (
            <div>
              <Slider {...settings}>
                {matches.map(matches => (
                  <div>
                    <h3>
                      <SliderComponent
                        key={matches.matchId}
                        matches={matches}
                      />
                    </h3>
                  </div>
                ))}
              </Slider>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default Responsive;

/* <div>
            <h3>
              <SliderComponent />
            </h3>
          </div>
          <div>
            <h3>
              <SliderComponent />
            </h3>
          </div>
          <div>
            <h3>
              <SliderComponent />
            </h3>
          </div>
          <div>
            <h3>
              <SliderComponent />
            </h3>
          </div>
          <div>
            <h3>
              <SliderComponent />
            </h3>
          </div>
          <div>
            <h3>
              <SliderComponent />
            </h3>
          </div>
          <div>
            <h3>
              <SliderComponent />
            </h3>
          </div> */
