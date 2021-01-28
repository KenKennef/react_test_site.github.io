import { Grid, Paper, Typography } from '@material-ui/core';
import React from 'react';
import MediaCard from './card';

export default function About(props: any) {
	return (
		<Grid container>
			<Grid item xs={12}>
				<Paper variant='outlined' elevation={3} style={{ padding: 30 }}>
					<Grid container spacing={3}>
						<Grid item xs={12} lg={6}>
							<Typography variant='h4'>Quis autem vel eum iure</Typography>
							<Typography paragraph>
								Sed ut perspiciatis unde omnis iste natus error sit voluptatem
								accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
								quae ab illo inventore veritatis et quasi architecto beatae
								vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
								voluptas sit aspernatur aut odit aut fugit, sed quia
								consequuntur magni dolores eos qui ratione voluptatem sequi
								nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor
								sit amet, consectetur, adipisci velit, sed quia non numquam eius
								modi tempora incidunt ut labore et dolore magnam aliquam quaerat
								voluptatem. Ut enim ad minima veniam, quis nostrum
								exercitationem ullam corporis suscipit laboriosam, nisi ut
								aliquid ex ea commodi consequatur? Quis autem vel eum iure
								reprehenderit qui in ea voluptate velit esse quam nihil
								molestiae consequatur, vel illum qui dolorem eum fugiat quo
								voluptas nulla pariatur?
							</Typography>
						</Grid>
						<Grid item xs={12} lg={6}>
							<MediaCard image='https://images.pexels.com/photos/584399/living-room-couch-interior-room-584399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' />
						</Grid>
					</Grid>
					<Grid container spacing={3}>
						<Grid item xs={12} lg={6}>
							<MediaCard image='https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' />
						</Grid>
						<Grid item xs={12} lg={6}>
							<Typography variant='h4'>
								Ut enim ad minima veniam, quis nostrum exercitationem
							</Typography>
							<Typography paragraph>
								Et harum quidem rerum facilis est et expedita distinctio. Nam
								libero tempore, cum soluta nobis est eligendi optio cumque nihil
								impedit quo minus id quod maxime placeat facere possimus, omnis
								voluptas assumenda est, omnis dolor repellendus. Temporibus
								autem quibusdam et aut officiis debitis aut rerum necessitatibus
								saepe eveniet ut et voluptates repudiandae sint et molestiae non
								recusandae. Itaque earum rerum hic tenetur a sapiente delectus,
								ut aut reiciendis voluptatibus maiores alias consequatur aut
								perferendis doloribus asperiores repellat, rerum facilis est et
								expedita distinctio. Nam libero tempore, cum soluta nobis est
								eligendi optio cumque nihil impedit quo minus id quod maxime
								placeat facere possimus, omnis voluptas assumenda est, omnis
								dolor repellendus. Temporibus autem quibusdam et aut officiis
								debitis aut rerum necessitatibus saepe eveniet ut et voluptates
								repudiandae sint et molestiae non recusandae. Itaque earum rerum
								hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus
								maiores alias consequatur aut perferendis doloribus asperiores
								repellat.
							</Typography>
						</Grid>
					</Grid>
				</Paper>
			</Grid>
		</Grid>
	);
}
