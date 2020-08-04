import React from 'react';
import Aux from '../../hoc/Aux';
import classes from './Layout.css';
import Tollbar from '../Navigation/Toolbar/Toolbar';

const layout = (props) => (
	<Aux>
		<Tollbar />
		<div>Toolbar, SideDrawer, Backdrop</div>
		<main className={classes.Content}>{props.children}</main>
	</Aux>
);

export default layout;
