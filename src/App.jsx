import { useState } from 'react';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faHtml5,
	faCss3,
	faBootstrap,
	faReact,
} from '@fortawesome/free-brands-svg-icons';
function App() {
	return (
		<>
			<h1 className='text-3xl font-bold underline '>Hello world!</h1>
			<FontAwesomeIcon
				className='html-icon text-6xl hover:text-7xl'
				icon={faHtml5}
			/>
		</>
	);
}

export default App;
