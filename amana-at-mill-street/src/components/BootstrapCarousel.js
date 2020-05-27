import Carousel from "react-bootstrap/Carousel";
import React, { Component } from "react";
import livingroom1 from "../static/images/ground-living.jpeg";
import livingroom2 from "../static/images/ground-living-2.jpeg";
import upstairsLiving from "../static/images/upstairs-living.jpeg";
import upstairsLiving2 from "../static/images/upstairs-living-2.jpeg";
import upstairsLiving3 from "../static/images/upstairs-living-3.jpeg";
import kitchen from "../static/images/kitchen.jpeg";
import masterBedroom from "../static/images/master-bedroom.jpeg";
import bathroom from "../static/images/bathroom.jpeg";
import bathroom2 from "../static/images/bathroom-2.jpeg";
import ensuite from "../static/images/ensuite-bathroom.jpeg";

export class BootStrapCarousel extends Component {
  render() {
    return (
      <div>
        <div class="container-fluid">
          <div class="row">
            <div class="col d-flex justify-content-center">
              <Carousel>
                <Carousel.Item style={{ height: "400px" }}>
                  <img
                    style={{ height: "400px" }}
                    className="d-block w-100"
                    src={livingroom1}
                    alt="Living room"
                  />
                </Carousel.Item>
                <Carousel.Item style={{ height: "400px" }}>
                  <img
                    style={{ height: "400px" }}
                    className="d-block w-100"
                    src={livingroom2}
                    alt="Living room"
                  />
                </Carousel.Item>
                <Carousel.Item style={{ height: "400px" }}>
                  <img
                    style={{ height: "400px" }}
                    className="d-block w-100"
                    src={upstairsLiving}
                    alt="Upstairs living room 1"
                  />
                </Carousel.Item>
                <Carousel.Item style={{ height: "400px" }}>
                  <img
                    style={{ height: "400px" }}
                    className="d-block w-100"
                    src={upstairsLiving}
                    alt="Upstairs living room 1"
                  />
                </Carousel.Item>
                <Carousel.Item style={{ height: "400px" }}>
                  <img
                    style={{ height: "400px" }}
                    className="d-block w-100"
                    src={upstairsLiving2}
                    alt="Upstairs living room 2"
                  />
                </Carousel.Item>
                <Carousel.Item style={{ height: "400px" }}>
                  <img
                    style={{ height: "400px" }}
                    className="d-block w-100"
                    src={upstairsLiving3}
                    alt="Upstairs living room 3"
                  />
                </Carousel.Item>
                <Carousel.Item style={{ height: "400px" }}>
                  <img
                    style={{ height: "400px" }}
                    className="d-block w-100"
                    src={kitchen}
                    alt="Kitchen"
                  />
                </Carousel.Item>
                <Carousel.Item style={{ height: "400px" }}>
                  <img
                    style={{ height: "400px" }}
                    className="d-block w-100"
                    src={masterBedroom}
                    alt="Master bedroom"
                  />
                </Carousel.Item>
                <Carousel.Item style={{ height: "400px" }}>
                  <img
                    style={{ height: "400px" }}
                    className="d-block w-100"
                    src={bathroom}
                    alt="Bathroom 1"
                  />
                </Carousel.Item>
                <Carousel.Item style={{ height: "400px" }}>
                  <img
                    style={{ height: "400px" }}
                    className="d-block w-100"
                    src={bathroom2}
                    alt="Bathroom 2"
                  />
                </Carousel.Item>
                <Carousel.Item style={{ height: "400px" }}>
                  <img
                    style={{ height: "400px" }}
                    className="d-block w-100"
                    src={ensuite}
                    alt="Ensuite"
                  />
                </Carousel.Item>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BootStrapCarousel;
