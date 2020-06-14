import React from "react";
import "./App.css";
import BootstrapCarousel from "./components/BootstrapCarousel";
import FontAwesome from "react-fontawesome";
import { faAirbnb } from "@fortawesome/free-brands-svg-icons";

function App() {
  return (
    <div>
      <div class="text-center">
        <div class="top container">
          <h1 class="title" id="name">
            Amana at Mill Street
          </h1>
        </div>
        <div class="text-center">
          <h1>Ludlow</h1>
          <p>
            A charming 17th century Grade 2 town house in the heart of Ludlow's
            old town a few minutes from its wonderful 11th century castle and
            wealth of shops, market, pubs and restaurants.
          </p>
        </div>
        <div>
          <p>
            Situated on three floors the property is full of character with
            exposed beams, wooden floors, an inglenook fireplace and wood
            burner. The award winning courtyard area is perfect for enjoying
            that glass of wine or dining al fresco.
          </p>
        </div>
        <div>
          <p>
            It's a great location for exploring the Shropshire Hills and
            Ironbridge Gorge.
          </p>
        </div>
        <div>
          <p>
            <b>Other things to note</b>
          </p>
        </div>
        <div>
          <p>Parking is an issue</p>
        </div>
        <div>
          <p>
            Ludlow was not designed for the motor car. There is on street car
            parking at £1.80 per hour from 8am-6pm. Traffic wardens are
            enthusiastic in Ludlow. There are two car parks about 500m away on
            Lower Galdeford and a little bit further on Station Road. These cost
            £2:20 for 24 hours. Most guests drop off their things and then move
            their car to the car park.
          </p>
        </div>
        <div>
          <p>
            If you are on holiday with children and would like an evening out on
            your own I am happy to babysit. I was a primary school teacher and
            am DBS checked. I charge £10 per hour.
          </p>
        </div>
        <h1>Pictures</h1>
        <BootstrapCarousel></BootstrapCarousel>
        <div>
          <h1>Contact</h1>
        </div>
        <div>
          <FontAwesome icon={faAirbnb} />
        </div>
      </div>
    </div>
  );
}

export default App;
