import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
	root: {
		maxWidth: '100%',
	},
	media: {
		height: 400,
	},
});

export default function MediaCard(props: any) {
	const classes = useStyles();

	return (
		<Card className={classes.root}>
			<CardActionArea>
				{props.hasContent ? (
					<CardContent>
						<Typography gutterBottom variant='h5' component='h2'>
							{props.header}
						</Typography>
						<Typography variant='body2' color='textSecondary' component='p'>
							{props.content}
						</Typography>
					</CardContent>
				) : null}
				<CardMedia
					className={classes.media}
					image={props.image}
					title='Y. A Den professionelle Gulvmand'
				/>
			</CardActionArea>
			{props.hasActions ? (
				<CardActions>
					<Button size='small' color='primary'>
						Share
					</Button>
					<Button size='small' color='primary'>
						Learn More
					</Button>
				</CardActions>
			) : null}
		</Card>
	);
}
