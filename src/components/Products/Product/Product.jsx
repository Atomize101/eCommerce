import React from 'react';
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons';

import useStyles from './styles';

const Product = ({ product }) => {
	const classes = useStyles();

	return (
		<div>
			<Card className={classes.root}>
				<CardMedia classes={classes.media} image="" title={product.name} />
				<CardContent>
					<div className={classes.cardContent}>
						<Typography variant="h5" gutterBottom>
							{product.name}
						</Typography>
						<Typography variant="h5" gutterBottom>
							{product.price}
						</Typography>
						<Typography variant="body2" color="textSecondary">
							{product.description}
						</Typography>
					</div>
				</CardContent>
				<CardActions disableSpacing className={classes.cardActions}>
					<IconButton aria-label="Add to Cart">
						<AddShoppingCart />
					</IconButton>
				</CardActions>
			</Card>
		</div>
	);
};

export default Product;
