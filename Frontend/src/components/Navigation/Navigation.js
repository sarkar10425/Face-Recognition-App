import React from 'react';

const Navigation = ({onRouteChange, isSignedIn}) => {
		if(isSignedIn) {
			return(
				<nav style={{display: 'flex', justifyContent: 'flex-end'}}>
					<p className="right pa3 ma3 black link pointer hover-purple tr" onClick={() => onRouteChange('signout')}>Sign Out</p>
				</nav>
			);
		}
		else{
			return (
				<nav style={{display: 'flex', justifyContent: 'flex-end'}}>
					<p className="right pa3 ma3 black link pointer hover-purple tr" onClick={() => onRouteChange('signin')}>Sign In</p>
					<p className="right pa3 ma3 black link pointer hover-purple tr" onClick={() => onRouteChange('register')}>Register</p>
				</nav>
			);
	    }
}

export default Navigation;