import React from 'react';
import * as BiIcons from "react-icons/bi";

function Search() {
    return (
        <div className="search">
            <span><BiIcons.BiSearch /></span>
            <input
                placeholder="Search"
                value=''
            /*onChange={(e) => setSearchTerm(e.target.value)}*/
            />
        </div>
        );
}

export default Search;