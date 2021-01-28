import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const useStyles = makeStyles({
	root: {
		maxWidth: '100%',
		position: 'relative',
	},
	media: {
		height: 400,
	},
	parallax: {
		/* The image used */
		// background-image: url("img_parallax.jpg");

		/* Set a specific height */
		minHeight: 500,
		/* Create the parallax scrolling effect */
		backgroundAttachment: 'fixed',
		backgroundPosition: 'center',
		backgroundRepeat: 'no-repeat',
		backgroundSize: 'cover',
	},
});

interface MediaCardProps {
	images: string[];
	hasContent: boolean;
	header?: string;
	content?: string;
	hasActions?: boolean;
	hasParallax?: boolean;
}

export default function MediaCard(props: MediaCardProps) {
	const classes = useStyles();

	const renderImages = () => {
		return props.images.map((img: string, index: number) => (
			<div key={index}>
				<img src={img} alt='#' />
			</div>
		));
	};
	return (
		<Card className={classes.root} component='div'>
			{/* <CardActionArea> */}
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
			{props.images.length > 1 ? (
				<CardMedia className={classes.media}>
					<Carousel
						autoPlay
						infiniteLoop
						showIndicators={false}
						showStatus={false}
						showThumbs={false}
					>
						{renderImages()}
					</Carousel>
				</CardMedia>
			) : (
				<CardMedia
					className={props.hasParallax ? classes.parallax : classes.media}
					image={props.images[0]}
					title='Exepteur'
				/>
			)}
			{/* </CardActionArea> */}
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
