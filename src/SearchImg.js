import React from 'react';

function SearchImg(props){
        return(
            <div className="searchRow">
                {props.imgs.map(data =>  (
                    <div className="searchColumn">
                        <img src= {data.urls.small} alt="Search"/> 
                    </div>
                ))
                }                 
            </div> 
        );
 
}

export default SearchImg;