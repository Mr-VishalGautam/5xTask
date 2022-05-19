import React, { useEffect, useState } from "react";
import FilterBar from "./FilterBar";
import DataList from "./RestaurantList";
import Card from "./Card";

function Restaurants() {
  const [state, setState] = useState();
  const [items, setItems] = useState(7);
  const [isOpen, setIsOpen] = useState();
  const [priceFilter, setPriceFilter] = useState();
  const [cousineFilter, setCousineFilter] = useState();
  console.log(isOpen, priceFilter, cousineFilter);
  useEffect(() => {
    if (
      priceFilter === undefined &&
      cousineFilter === undefined &&
      isOpen === undefined
    ) {
      setState(DataList);
    } else if (priceFilter !== undefined) {
      let price = DataList.filter((d, i) => d.price === priceFilter);
      setState(price);
    } else if (isOpen !== undefined) {
      let open = DataList.filter((d, i) => d.isOpen === isOpen);
      setState(open);
    } else if (cousineFilter !== undefined) {
      let cousine = DataList.filter((d, i) => d.cousine === cousineFilter);
      setState(cousine);
    }
  }, [cousineFilter, priceFilter, isOpen]);

  const handleLoadMore = () => {
    setItems(20);
  };

  const isOpenFunc = (data) => {
    setIsOpen(data);
    setItems(20);
  };
  const filterPrice = (data) => {
    setPriceFilter(data);
    setItems(20);
  };
  const filterCousine = (data) => {
    setCousineFilter(data);
    setItems(20);
  };

  return (
    <div className="restaurant-container">
      <div className="restaurant-heading">Restaurants</div>
      <div className="restaurant-discription">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </div>
      <FilterBar
        isOpenFunction={isOpenFunc}
        priceFilterFunc={filterPrice}
        cousineFilterFunc={filterCousine}
      />

      <div className="all-restaurant">All Restaurants</div>
      <div className="restaurant-list">
        {state?.map((data, index) =>
          index <= items ? <Card key={index} data={data} /> : ""
        )}
      </div>
      {items < 20 ? (
        <div className="loading">
          <div className="load-more" onClick={handleLoadMore}>
            Load More
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default Restaurants;
