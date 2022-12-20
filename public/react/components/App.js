import React, { useState, useEffect } from 'react';
import { PagesList } from './PagesList';

// import and prepend the api url to any fetch calls
import apiURL from '../api';

export const App = () => {

	const [pages, setPages] = useState([]);

	async function fetchPages(){
		try {
			const response = await fetch(`${apiURL}/wiki`);
			const pagesData = await response.json();
			setPages(pagesData);
		} catch (err) {
			console.log("Oh no an error! ", err)
		}
	}

	useEffect(() => {
		fetchPages();
	}, []);

	return (
		<main>
			<div className='heading'>
				<h1>WikiVerse</h1>
				<h2 className='subheading'>An interesting 📚</h2>
			</div>

			<h3 className="directions">Click an article title to read</h3>
			<div className='page_list'><PagesList pages={pages} /></div>
		</main>
	)
}