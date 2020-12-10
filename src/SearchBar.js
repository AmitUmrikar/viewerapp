import React from 'react';

function SearchBar(props){
    return (
        <div className="searchbar">
            <div className="searchContainer">
                <input className="searchBox" type='text' value={props.value} onChange={props.handleChange}/>
                <button className="searchButton" onClick={props.handleClick}><i class="fa fa-search"></i></button>
            </div>
        </div>
    );
}

export default SearchBar;