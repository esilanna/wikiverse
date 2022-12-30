import React, { useState } from 'react';
import apiURL from "../api";

export const Page = (props) => {

  //creaating state for data to be displayed
  const [currentData, setCurrentData] = useState(undefined);

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
        <h4>{currentData ?`Title: ${currentData.title}` :''}</h4>
        <h4>{currentData ?`Author: ${currentData.author.name}` :''}</h4>
        <h4>{currentData ?`Content: ${currentData.content}` :''}</h4>
        <h4>{currentData ?`Tags: ${currentData.tags.map((tag)=>" " + tag.name)}` :''}</h4>
        <h4>{currentData ?`Date: ${currentData.createdAt.slice(0, 10)}` : ''}</h4>
        <h4>{currentData ?<button onClick={() => {setCurrentData(undefined)}}>go back</button> : ''}</h4>
      </div>
  </>
} 
	