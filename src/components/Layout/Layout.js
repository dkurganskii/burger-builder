import React from 'react';
import Aux from '../../hoc/Aux';
import classes from './Layout.css';
import Tollbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

const layout = (props) => (
	<Aux>
		<Tollbar />
		<SideDrawer />
		<div>Toolbar, SideDrawer, Backdrop</div>
		<main className={classes.Content}>{props.children}</main>
	</Aux>
);

export default layout;
