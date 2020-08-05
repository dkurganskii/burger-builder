import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './SideDrawer.css';

function sideDrawer() {
	return (
		<div className={classes.SideDraver}>
			<Logo />
			<nav>
				<NavigationItems />
			</nav>
		</div>
	);
}

export default sideDrawer;
