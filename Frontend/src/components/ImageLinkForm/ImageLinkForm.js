import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({onInputChange,onButtonClick}) => {
	return(
		<div>
			<p className="f3">
			{'Hello! Please put the image url and click on Detect '}
			</p>
			<div className='center'>
        		<div className='bi center pa4 br3 shadow-5'>
					<input className="f4 pa2 w-70 center" type='text' onChange={onInputChange} />
					<button className="pointer f6 grow no-underline br-pill ph3 pv2 mb2 dib white bg-light-purple w-30" onClick={onButtonClick}>Detect</button>
				</div>
			</div>
		</div>
	);
}

export default ImageLinkForm;