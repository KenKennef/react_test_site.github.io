import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import MenuIcon from '@material-ui/icons/Menu';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import React from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import clsx from 'clsx';
import Home from './Components/home';
import About from './Components/about';
import Services from './Components/services';
import { AddIcCall, Assignment, HomeRounded, Info } from '@material-ui/icons';
import Paralaxx from './Components/parallax';

const drawerWidth = 220;

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			display: 'flex',
		},
		appBar: {
			transition: theme.transitions.create(['margin', 'width'], {
				easing: theme.transitions.easing.sharp,
				duration: theme.transitions.duration.leavingScreen,
			}),
		},
		appBarShift: {
			width: `calc(100% - ${drawerWidth}px)`,
			marginLeft: drawerWidth,
			transition: theme.transitions.create(['margin', 'width'], {
				easing: theme.transitions.easing.easeOut,
				duration: theme.transitions.duration.enteringScreen,
			}),
		},
		menuButton: {
			marginRight: theme.spacing(2),
		},
		hide: {
			display: 'none',
		},
		drawer: {
			width: drawerWidth,
			flexShrink: 0,
		},
		drawerPaper: {
			width: drawerWidth,
		},
		drawerHeader: {
			display: 'flex',
			alignItems: 'center',
			padding: theme.spacing(0, 1),
			// necessary for content to be below app bar
			...theme.mixins.toolbar,
			justifyContent: 'flex-end',
		},
		content: {
			flexGrow: 1,
			padding: theme.spacing(3),
			transition: theme.transitions.create('margin', {
				easing: theme.transitions.easing.sharp,
				duration: theme.transitions.duration.leavingScreen,
			}),
			marginLeft: -drawerWidth,
			background: '#f0f0f0',
		},
		contentShift: {
			transition: theme.transitions.create('margin', {
				easing: theme.transitions.easing.easeOut,
				duration: theme.transitions.duration.enteringScreen,
			}),
			marginLeft: 0,
		},
		headerLink: {
			textDecoration: 'none',
			color: '#fff',
		},
		menuLink: { textDecoration: 'none', color: '#0E2F44' },
	})
);

export default function PersistentDrawerLeft() {
	const classes = useStyles();
	const [open, setOpen] = React.useState(false);

	const handleDrawerOpen = () => {
		setOpen(true);
	};

	const handleDrawerClose = () => {
		setOpen(false);
	};

	return (
		<Router>
			<div className={classes.root}>
				<CssBaseline />
				<AppBar
					position='fixed'
					className={clsx(classes.appBar, {
						[classes.appBarShift]: open,
					})}
					style={{ background: '#0E2F44' }}
				>
					<Toolbar>
						<IconButton
							color='inherit'
							aria-label='open drawer'
							onClick={handleDrawerOpen}
							edge='start'
							className={clsx(classes.menuButton, open && classes.hide)}
						>
							<MenuIcon />
						</IconButton>
						<Link to='/' className={classes.headerLink}>
							<Typography variant='h6' noWrap>
								Duis aute irure dolor
							</Typography>
						</Link>
					</Toolbar>
				</AppBar>
				<Drawer
					className={classes.drawer}
					variant='persistent'
					anchor='left'
					open={open}
					classes={{
						paper: classes.drawerPaper,
					}}
				>
					<div className={classes.drawerHeader}>
						<IconButton onClick={handleDrawerClose}>
							<ChevronLeftIcon />
						</IconButton>
					</div>
					<Divider />
					<List>
						{[
							{ text: 'Eenim', link: '/', icon: 'Home' },
							{ text: 'Ullamco', link: '/about', icon: 'Info' },
							{ text: 'Daliquip', link: '/services', icon: 'Assignment' },
							{ text: 'Aminim', link: '/contact', icon: 'AddIcCall' },
						].map((item, index) => (
							<Link to={item.link} className={classes.menuLink} key={index}>
								<ListItem
									button
									onClick={() => handleDrawerClose()}
									selected={window.location.pathname === item.link}
								>
									<ListItemIcon>
										{item.icon === 'Home' ? <HomeRounded /> : null}
										{item.icon === 'Info' ? <Info /> : null}
										{item.icon === 'Assignment' ? <Assignment /> : null}
										{item.icon === 'AddIcCall' ? <AddIcCall /> : null}
									</ListItemIcon>
									<h2>{item.text}</h2>
								</ListItem>
							</Link>
						))}
					</List>
				</Drawer>
				<main
					className={clsx(classes.content, {
						[classes.contentShift]: open,
					})}
					style={{ background: '#f0f0f0', minHeight: '100vh' }}
				>
					<div className={classes.drawerHeader} />

					<Switch>
						<Route exact path='/'>
							<Home />
						</Route>
						<Route path='/about'>
							<Paralaxx />
						</Route>
						<Route path='/services'>
							<Services />
						</Route>
						<Route path='/contact'>
							<About />
						</Route>
					</Switch>
				</main>
			</div>
		</Router>
	);
}
