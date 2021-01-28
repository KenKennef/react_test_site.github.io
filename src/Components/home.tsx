import { Paper } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import React from 'react';
import MediaCard from './card';

export default function Home(props: any) {
	return (
		<Grid container spacing={3}>
			<Grid item xs={12}>
				<MediaCard
					images={[
						'https://images.pexels.com/photos/584399/living-room-couch-interior-room-584399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
						'https://images.pexels.com/photos/1388944/floor-flooring-hand-man-1388944.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
						'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
					]}
					hasContent
					header='Duis aute irure dolor'
					content='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
          enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat
          nulla pariatur. Excepteur sint occaecat cupidatat non proident,
					sunt in culpa qui officia deserunt mollit anim id est laborum.'
				/>
			</Grid>
			<Grid item xs={12} lg={6}>
				<MediaCard
					images={[
						'https://images.pexels.com/photos/1388944/floor-flooring-hand-man-1388944.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
					]}
					hasContent
					header='Excepteur sint occaecat cupidatat'
					content='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
          enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat
          nulla pariatur. Excepteur sint occaecat cupidatat non proident,
					sunt in culpa qui officia deserunt mollit anim id est laborum.'
				/>
			</Grid>
			<Grid item xs={12} lg={6}>
				<MediaCard
					images={[
						'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
					]}
					hasContent
					header='Excepteur sint occaecat cupidatat'
					content='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
          enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat
          nulla pariatur. Excepteur sint occaecat cupidatat non proident,
          sunt in culpa qui officia deserunt mollit anim id est laborum.'
				/>
			</Grid>
		</Grid>
	);
}
