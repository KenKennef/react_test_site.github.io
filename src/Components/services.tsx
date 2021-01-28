import { Button, Grid, Paper, Typography } from '@material-ui/core';

import React from 'react';
import ServiceCard from './service-card';

export default function Services(props: any) {
	return (
		<Grid container spacing={1} justify='center'>
			<Grid item lg={10}>
				<ServiceCard
					image='https://static.s123-cdn-static.com/uploads/1980551/800_5700fe9d754d9.jpg'
					heading='Duis aute irure dolor ffds'
					text='Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. '
				/>
				{/* <ServiceCard
					image='https://static.s123-cdn-static.com/uploads/1980551/800_5c843748d80b3.jpg'
					heading='Duis aute irure dolor'
					text='Duis aute irure dolor'
					buttonText='Lorum duis aute'
					variant='image-right'
				/> */}
			</Grid>
		</Grid>
	);
}
