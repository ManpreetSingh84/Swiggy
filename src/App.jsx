import "./App.css";
import LocomotiveScroll from "locomotive-scroll";
import "remixicon/fonts/remixicon.css";
import { Route, Routes } from "react-router-dom";
import Body from "./Components/Body";
import Head from "./Components/Head";
import RestaurantCard from "./Components/RestaurantCard";
import RestrauntMenu from "./Components/RestrauntMenu";
import { useEffect, useState } from "react";
import AnimatedCursor from "react-animated-cursor"

function App() {
  // locomotive
  const locomotiveScroll = new LocomotiveScroll();

  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.660882&lng=77.160885&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    )
      .then((response) => response.json())
      .then((data) =>
        setItems(
          data.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
        )
      );
  }, []);

  return (
    <>
      {/* <AnimatedCursor  color= '255, 101, 0' innerSize = {20} outerAlpha= {0.7}/> */}
      <AnimatedCursor className = "animate-bounce"
  innerSize={13}
  outerSize={35}
  innerScale={1}
  outerScale={2}
  outerAlpha={0}
  hasBlendMode={true}
  innerStyle={{
    backgroundColor: 'rgb(255,101,0)'
  }}
  outerStyle={{
    border: '3px solid rgb(255,101,0)'
  }}
/>

      <Routes>
        <Route path="/" element={<Head />}>
          <Route path="/" element={<Body />} />
          <Route
            path="restaurantMenu/:id"
            element={<RestrauntMenu items={items} />}
          />
        </Route>
      </Routes>
    </>
  );
}

export default App;
