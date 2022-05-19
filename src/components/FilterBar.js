import React, { useState } from "react";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";

function FilterBar({ isOpenFunction, priceFilterFunc, cousineFilterFunc }) {
    const [showPrice, setShowPrice] = useState(false);
    const [showCategories, setShowCategoies] = useState(false);

    const showPriceDropdown = () => {
        setShowPrice(!showPrice);
    };
    const showCategoryDropdown = () => {
        setShowCategoies(!showCategories);
    };
    const handleIsOpen = () => {
        isOpenFunction(true);
    };
    const handlePrice = (data) => {
        priceFilterFunc(data);
        setShowPrice(!showPrice);
    };
    const handleCousine = (data) => {
        cousineFilterFunc(data);
        setShowCategoies(!showCategories);
    };
    return (
        <div className="filter-container">
            <div className="filter-element-right">
                <div className="filter-by">Filter By:</div>
                <div className="open-now">
                    <input type="checkbox" onClick={handleIsOpen} />
                    <span>Open Now</span>
                </div>
                <div>
                    <span className="anchor-price" onClick={showPriceDropdown}>
                        <div>Price</div>
                        {showCategories ? <BsChevronUp /> : <BsChevronDown />}
                    </span>
                    {showPrice ? (
                        <ul className="items">
                            <li>
                                <input type="checkbox" onChange={() => handlePrice("All")} />
                                All
                            </li>
                            <li>
                                <input type="checkbox" onChange={() => handlePrice("$")} />$
                            </li>
                            <li>
                                <input type="checkbox" onChange={() => handlePrice("$$")} />
                                $$
                            </li>
                            <li>
                                <input type="checkbox" onChange={() => handlePrice("$$$")} />
                                $$$
                            </li>
                            <li>
                                <input type="checkbox" onChange={() => handlePrice("$$$$")} />
                                $$$$
                            </li>
                        </ul>
                    ) : (
                        ""
                    )}
                </div>

                <div>
                    <span className="anchor-category" onClick={showCategoryDropdown}>
                        <div>Categories</div>
                        <div>{showCategories ? <BsChevronUp /> : <BsChevronDown />}</div>
                    </span>
                    {showCategories ? (
                        <ul className="items">
                            <li>
                                <input type="checkbox" onChange={() => handleCousine("All")} />
                                All
                            </li>
                            <li>
                                <input
                                    type="checkbox"
                                    onChange={() => handleCousine("Italian")}
                                />
                                Italian
                            </li>
                            <li>
                                <input
                                    type="checkbox"
                                    onChange={() => handleCousine("Seafood")}
                                />
                                Seafood
                            </li>
                            <li>
                                <input
                                    type="checkbox"
                                    onChange={() => handleCousine("Steakhouses")}
                                />
                                Steakhouses
                            </li>
                            <li>
                                <input
                                    type="checkbox"
                                    onChange={() => handleCousine("Japanese")}
                                />
                                Japanese
                            </li>

                            <li>
                                <input
                                    type="checkbox"
                                    onChange={() => handleCousine("American")}
                                />
                                American
                            </li>

                            <li>
                                <input
                                    type="checkbox"
                                    onChange={() => handleCousine("Mexican")}
                                />
                                Mexican
                            </li>

                            <li>
                                <input type="checkbox" onChange={() => handleCousine("Thai")} />
                                Thai
                            </li>
                        </ul>
                    ) : (
                        ""
                    )}
                </div>
            </div>
            <button className="clear-button">CLEAR All</button>
        </div>
    );
}

export default FilterBar;
