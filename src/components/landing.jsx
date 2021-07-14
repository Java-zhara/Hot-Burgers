import React, { useState } from "react";
import { PropTypes } from "prop-types";

import restaurants from "../sample-restaurants";

export const Landing = (props) => {
  const [display, toogleDisplay] = useState(false);
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");

  const displayList = () => {
    toogleDisplay(!display);
  };

  const getTitle = (restaurant) => {
    const { title, url } = restaurant;
    toogleDisplay(false);
    setTitle(title);
    setUrl(url);
  };

  const goToRestaurant = () => {
    props.history.push(`/restaurant/${url}`);
  };

  return (
    <div className="restaurant-select">
      <div className="restaurant-select-top">
        <div
          onClick={displayList}
          className="restaurant-select-top-header font-effect-outline"
        >
          {title ? title : "Выберите ресторан"}
        </div>
        <div className="arrow-picker">
          <div className="arrow-picker-up"></div>
          <div className="arrow-picker-down"></div>
        </div>
      </div>
      {display ? (
        <div className="restaurant-select-bottom">
          <ul>
            {restaurants.map((restaurant) => {
              return (
                <li onClick={() => getTitle(restaurant)} key={restaurant.id}>
                  {restaurant.title}
                </li>
              );
            })}
          </ul>
        </div>
      ) : null}
      {title && !display ? (
        <button onClick={goToRestaurant}>Перейти в ресторан</button>
      ) : null}
    </div>
  );
};

Landing.propTypes = {
  history: PropTypes.object,
};
