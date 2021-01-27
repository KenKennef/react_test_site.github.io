import {
	Button,
	Grid,
	makeStyles,
	Paper,
	Theme,
	Typography,
	createStyles,
} from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			position: 'relative',
			display: 'flex',
			padding: 30,
			marginBottom: 20,
		},
		image: {
			height: '100%',
			width: '100%',
			maxWidth: 260,
			maxHeight: 190,
		},
		btn: {
			position: 'absolute',
			bottom: 20,
			background: 'rgb(14, 47, 68)',
			color: '#fff',
		},
	})
);

interface ServiceCardProps {
	image: string;
	heading: string;
	text: string;
	buttonText?: string;
	variant?: 'image-right' | 'image-left';
}

export default function ServiceCard(props: ServiceCardProps) {
	const classes = useStyles();
	const renderImage = () => {
		return (
			<Grid
				item
				xs={12}
				lg={3}
				container
				justify={props?.variant === 'image-right' ? 'flex-end' : 'flex-start'}
			>
				<Paper elevation={3} square>
					<img src={props.image} className={classes.image} />
				</Paper>
			</Grid>
		);
	};

	const renderContent = () => {
		const renderContentText = () => {
			return props.text.length > 400
				? `${props.text.substr(0, 400)} ...`
				: props.text;
		};
		return (
			<Grid item xs={12} lg={9}>
				<Grid item xs={12}>
					<Typography variant='h4'>{props.heading}</Typography>

					<Typography paragraph>{renderContentText()}</Typography>
				</Grid>
				<Grid
					container
					justify={props?.variant === 'image-right' ? 'flex-start' : 'flex-end'}
					item
					xs={12}
				>
					{props.buttonText ? (
						<Button variant='contained' className={classes.btn}>
							{props.buttonText}
						</Button>
					) : null}
				</Grid>
			</Grid>
		);
	};

	return (
		<Paper className={classes.root} elevation={3}>
			<Grid container justify='space-between' spacing={3}>
				{props?.variant ? (
					props.variant === 'image-right' ? (
						<React.Fragment>
							{renderContent()}
							{renderImage()}
						</React.Fragment>
					) : (
						<React.Fragment>
							{renderImage()}
							{renderContent()}
						</React.Fragment>
					)
				) : (
					<React.Fragment>
						{renderImage()}
						{renderContent()}
					</React.Fragment>
				)}
			</Grid>
		</Paper>
	);
}
