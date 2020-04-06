import React from 'react';
import Tilt from 'react-tilt';
import Brain from './brain.png';
import './Logo.css';
const Logo = () => {
	return(
		<div className='ma4 mt0'>
			<Tilt className="Tilt" options={{ max : 90 }} style={{ height: 150, width: 150 }} >
			 <div className="Tilt-inner br2 shadow-2 pd2 color">
			 	<img style={{paddingTop: '5px'}} src={Brain} alt="logo" />
			 </div>
			</Tilt>
		</div>
	);
}

export default Logo;