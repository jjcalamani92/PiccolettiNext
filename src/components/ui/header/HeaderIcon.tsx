import React, { useContext } from 'react';
import {
	faBars,
	faCartShopping,
	faSearch
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { UiContext } from '../../../context';


export const HeaderIcon = () => {
	const { toggleSideMenu } = useContext(UiContext);
	return (
		<div className="icons">
			<FontAwesomeIcon className="icon bars-icon" onClick={toggleSideMenu} icon={faBars} />
			<FontAwesomeIcon className="icon search-icon" icon={faSearch} />
			<a href="checkout" className="cart">
				<FontAwesomeIcon className="icon shopping-icon" icon={faCartShopping} />
				<span>0</span>
			</a>
		</div>
	);
};
