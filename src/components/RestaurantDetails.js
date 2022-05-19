import React from "react";
import RestaurantDetailsList from "./RestaurantDetailsList";
import { useLocation } from "react-router-dom";
import { Rating } from "react-simple-star-rating";

function RestaurantDetails(props) {
    let location = useLocation();
    let data = location?.state.data;
    console.log(data);
    return (
        <div className="detail-container">
            <div className="detail-title">{data.name}</div>
            <div className="detail-rating">
                <Rating
                    readonly
                    size={20}
                    initialValue={data.rating}
                    fillColor="#002B56"
                />
            </div>
            <div className="detail-cousine-open">
                <div className="detail-cousine">
                    {data.cousine.toUpperCase()}.{data.price}
                </div>
                <div className="detail-open">
                    <div
                        className="indicator-detail"
                        style={{ backgroundColor: data.isOpen ? " #00E8A4" : "#FF3548" }}
                    ></div>

                    <div>{data.isOpen ? "OPEN NOW" : "CLOSED"}</div>
                </div>
            </div>
            <div className="detail-location">
                <div className="maps">
                    <div className="map1"></div>
                    <div className="map2"></div>
                    <div className="map2"></div>
                </div>
                <div className="detail-address">
                    624 S La Brea Ave Los Angeles, CA 90036
                </div>
            </div>

            <div className="total-reviews">321 Reviews</div>
            {data.reviews.map((ele, index) => (
                <RestaurantDetailsList key={index} data={ele} />
            ))}
        </div>
    );
}

export default RestaurantDetails;
