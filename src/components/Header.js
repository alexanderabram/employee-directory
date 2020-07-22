import React from 'react';
import "../styles/Header.css";

function Header() {
    return (
        <div className="header">
            {/* <i class="fa fa-address-card" aria-hidden="true"></i> */}
            <h1>Employee Directory</h1>
            <p>
                Use the input box to search for employee by name.
                <br />
                Click on a column title to alternate between ascending and descending sorting by category.
            </p>
        </div>
    )
}

export default Header;