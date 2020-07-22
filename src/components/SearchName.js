import React, { useContext } from "react";
import DataAreaContext from "../utils/DataAreaContext";
import "../styles/SearchName.css";

const SearchName = () => {
    const context = useContext(DataAreaContext);

    return (
        <div className="searchbox">
            <div className="input-group">
                <input
                    className="form-control mr-sm-2"
                    type="search"
                    placeholder="name"
                    aria-label="Search"
                    onChange={e => context.handleSearchChange(e)}
                />
            </div>
        </div>
    );
}
export default SearchName;