import React from "react";
import "./App.css";
import BootstrapCarousel from "./components/BootstrapCarousel";
import Calendar from "./components/Calendar"

function App() {
  return (
    <div class="text-center">
      <div class="top container">
        <h1 class="title" id="name">
          Amana at Mill Street
        </h1>
      </div>
      <div>
        <h1>Ludlow</h1>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </div>
      <BootstrapCarousel></BootstrapCarousel>
      <div>
        <h1>Availability</h1>
        <Calendar></Calendar>
      </div>
    </div>
  );
}

export default App;
