import React from "react";
import { Rating } from "react-simple-star-rating";
import { useNavigate } from "react-router-dom";

function Card({ data }) {
    const navigate = useNavigate();
    function handleClick() {
        navigate("/restaurant-review", { state: { data: data } });
    }
    return (
        <div className="card-container">
            <div className="card-image"></div>
            <div className="card-name">{data.name}</div>
            <div className="card-rating">
                {" "}
                <Rating
                    readonly
                    size={20}
                    initialValue={data.rating}
                    fillColor="#002B56"
                />
            </div>
            <div className="card-cousine-open">
                <div className="card-cousine">
                    {data.cousine.toUpperCase()}.{data.price}
                </div>
                <div className="card-open">
                    <div
                        className="indicator"
                        style={{ backgroundColor: data.isOpen ? " #00E8A4" : "#FF3548" }}
                    ></div>
                    <div>{data.isOpen ? "OPEN NOW" : "CLOSED"}</div>
                </div>
            </div>

            <div className="card-details-link" onClick={handleClick}>
                Learn more
            </div>
        </div>
    );
}

export default Card;
