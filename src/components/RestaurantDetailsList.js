import React from "react";

import { Rating } from "react-simple-star-rating";

function RestaurantDetailsList({ data }) {
  return (
    <div className="list-container">
      <div className="review-detail-card">
        <div className="reviewer-details">
          <div className="review-image"></div>
          <div>
            <div className="reviewer-name">{data.reviewBy}</div>
            <div className="review-date">{data.date}</div>
          </div>
        </div>
        <div className="review-data">
          <div className="review-rating">
          <Rating
                    readonly
                    size={20}
                    initialValue={data.reviewRating}
                    fillColor="#002B56"
                />
          </div>
          <div className="review-detail">{data.reviewDetail}</div>
        </div>
      </div>
    </div>
  );
}

export default RestaurantDetailsList;
