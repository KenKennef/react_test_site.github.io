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
					text='At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga, ignissimos ducimus qui blanditiis praesentium voluptatum.'
				/>
				<ServiceCard
					image='https://static.s123-cdn-static.com/uploads/1980551/800_5c843748d80b3.jpg'
					heading='Sed ut perspiciatis unde omnis iste natus'
					text='Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat, aut rerum necessitatibus saepe eveniet.'
					variant='image-right'
				/>
			</Grid>
		</Grid>
	);
}
