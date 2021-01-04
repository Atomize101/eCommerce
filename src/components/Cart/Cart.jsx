import React from 'react';
import { Container, Typography, Button, Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';

import useStyles from './styles';

const Cart = ({ cart }) => {
	const classes = useStyles();

	if (!cart.line_items) return 'Loading';

	const renderEmptyCart = () => (
		<Typography variant="subtitle1">
			You have no items in your shopping cart,
			<Link className={classes.link} to="/">
				start adding some
			</Link>
			!
		</Typography>
	);

	const FilledCart = () => {
		return (
			<>
				<Grid container spacing={3}>
					{cart.line_items.map((lineItem) => (
						<Grid item xs={12} sm={4} key={lineItem.id}>
							<div>{lineItem.name}</div>
						</Grid>
					))}
				</Grid>
				<div className={classes.cartDetails}>
					<Typography varian="h4">Subotal: {cart.subtotal.formatted_with_symbol}</Typography>
					<div>
						<Button
							className={classes.emptyButton}
							size="large"
							type="button"
							variant="contained"
							color="secondary"
						>
							Empty Cart
						</Button>
						<Button
							className={classes.checkoutButton}
							size="large"
							type="button"
							variant="contained"
							color="primary"
						>
							Checkout
						</Button>
					</div>
				</div>
			</>
		);
	};

	return (
		<Container>
			<div className={classes.toolbar} />
			<Typography className={classes.title} variant="h3">
				Your shopping cart
			</Typography>
			{!cart.line_items.length ? renderEmptyCart() : FilledCart()}
		</Container>
	);
};

export default Cart;
