import React, { useState } from 'react';
import apiURL from "../api";

export const Page = (props) => {

  //creaating state for data to be displayed
  [currentData, setCurrentData] = useState(undefined);

  //handleClick function to fetch data and set the state above
  const handleClick = async () => {
    const response = await fetch(`${apiURL}/wiki/${props.page.slug}`);
    const data = await response.json();
    console.log(data)
    setCurrentData(data);
  }

  return <>
    <h3 onClick={ handleClick }>
      {props.page.title}
      </h3>
      <div>
        {currentData ? currentData.content : ""}
      </div>
  </>
} 
	