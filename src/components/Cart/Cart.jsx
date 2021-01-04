import React from 'react';
import { Container, Typography, Button, Grid } from '@material-ui/core';

import useStyles from './styles';

const Cart = ({ cart }) => {
	const classes = useStyles();

	const isEmpty = true;

	const EmptyCart = () => {
		return <Typography variant="subtitle1">You have no items in your shopping cart, start adding some</Typography>;
	};

	const FilledCart = () => {
		<>
			<Grid container spacing={3}></Grid>
		</>;
	};

	return (
		<Container>
			<div className={classes.toolbar} />
			<Typography className={classes.title} variant="h3">
				Your shopping cart
			</Typography>
			{isEmpty ? <EmptyCart /> : <FilledCart />}
		</Container>
	);
};

export default Cart;
