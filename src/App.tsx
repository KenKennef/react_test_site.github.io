import { Grid, Paper } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Backdrop from '@material-ui/core/Backdrop';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { AddIcCall, Assignment, HomeRounded, Info } from '@material-ui/icons';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import MenuIcon from '@material-ui/icons/Menu';
import clsx from 'clsx';
import React from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import About from './Components/about';
import Home from './Components/home';
import Paralaxx from './Components/parallax';
import Services from './Components/services';

const drawerWidth = 260;

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			display: 'flex',
		},
		mainNavigation: {
			margin: 0,
			padding: 0,
			width: '100%',
			justifyContent: 'flex-end',
		},
		desktopOnly: {
			[theme.breakpoints.down('sm')]: {
				display: 'none',
			},
			[theme.breakpoints.up('md')]: {
				display: 'flex',
			},
		},
		mobileOnly: {
			[theme.breakpoints.down('sm')]: {
				display: 'flex',
			},
			[theme.breakpoints.up('md')]: {
				display: 'none',
			},
		},
		menuButton: {
			marginRight: theme.spacing(2),
		},
		hide: {
			display: 'none',
		},
		backdrop: {
			zIndex: theme.zIndex.drawer - 1,
			color: '#fff',
		},
		drawer: {
			width: drawerWidth,
			flexShrink: 0,
		},
		drawerPaper: {
			width: '100%',
		},
		drawerHeader: {
			display: 'flex',
			alignItems: 'center',
			padding: theme.spacing(0, 1),
			// necessary for content to be below app bar
			...theme.mixins.toolbar,
			justifyContent: 'flex-start',
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
		menuLink: {
			textDecoration: 'none',
			color: '#0E2F44',
			boxSizing: 'border-box',
		},
	})
);
interface NavigationItem {
	text: string;
	link: string;
	icon: string;
}
const navigationItems: NavigationItem[] = [
	{ text: 'Eenim', link: '/', icon: 'Home' },
	{ text: 'Ullamco', link: '/ullamco', icon: 'Info' },
	{ text: 'Daliquip', link: '/daliquip', icon: 'Assignment' },
	{ text: 'Aminim', link: '/aminim', icon: 'AddIcCall' },
];

export default function PersistentDrawerLeft() {
	const classes = useStyles();
	const [open, setOpen] = React.useState(false);
	const [active, setActive] = React.useState<number | null>(null);

	const handleMenuClick = (index: number) => {
		setOpen(false);
		setActive(index);
	};

	const handleDrawerOpen = () => {
		setOpen(true);
	};

	const handleDrawerClose = () => {
		setOpen(false);
	};

	React.useEffect(() => {
		const active = navigationItems
			.map((item: NavigationItem) => {
				return item.link;
			})
			.indexOf(window.location.pathname);

		setActive(active);
	}, [active]);

	const renderNavigationItems = () =>
		navigationItems.map((item, index) => (
			<Link
				to={item.link}
				className={classes.menuLink}
				key={index}
				style={
					open
						? {}
						: {
								color: '#ffffff',
								borderTop:
									index === active
										? '1px solid rgba(255, 255, 255, .5)'
										: 'none',
								borderRight: 'none',
								borderBottom:
									index === active
										? '3px solid rgba(255, 255, 255, .8)'
										: 'none',
								borderLeft: 'none',
								borderBottomRightRadius: 3,
								borderBottomLeftRadius: 3,
						  }
				}
			>
				<ListItem
					button
					onClick={() => handleMenuClick(index)}
					selected={open ? index === active : false}
				>
					<ListItemIcon
						style={
							open
								? {}
								: {
										color: '#ffffff',
										marginRight: -20,
								  }
						}
					>
						{item.icon === 'Home' ? <HomeRounded /> : null}
						{item.icon === 'Info' ? <Info /> : null}
						{item.icon === 'Assignment' ? <Assignment /> : null}
						{item.icon === 'AddIcCall' ? <AddIcCall /> : null}
					</ListItemIcon>
					<h2>{item.text}</h2>
				</ListItem>
			</Link>
		));

	return (
		<Router>
			<div className={classes.root}>
				<CssBaseline />
				<AppBar position='fixed' style={{ background: '#0E2F44' }}>
					<Toolbar>
						<IconButton
							color='inherit'
							aria-label='open drawer'
							onClick={handleDrawerOpen}
							edge='start'
							className={clsx(
								classes.menuButton,
								open && classes.hide,
								classes.mobileOnly
							)}
						>
							<MenuIcon />
						</IconButton>
						<Link
							to='/'
							className={clsx(classes.headerLink)}
							onClick={() => handleMenuClick(0)}
						>
							<Typography variant='h6' noWrap>
								Duis aute irure dolor
							</Typography>
						</Link>
						<List className={clsx(classes.mainNavigation, classes.desktopOnly)}>
							{renderNavigationItems()}
						</List>
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
					<List>{renderNavigationItems()}</List>
				</Drawer>
				<main
					className={clsx(classes.content, {
						[classes.contentShift]: open,
					})}
					style={{
						background: '#f0f0f0',
						minHeight: '100vh',
					}}
				>
					<Backdrop
						className={classes.backdrop}
						open={open}
						onClick={handleDrawerClose}
					></Backdrop>
					<div className={classes.drawerHeader} />
					<Switch>
						<Route exact path='/'>
							<Home />
						</Route>
						<Route path='/ullamco'>
							<Paralaxx />
						</Route>
						<Route path='/daliquip'>
							<Services />
						</Route>
						<Route path='/aminim'>
							<About />
						</Route>
						<Route path='*'>
							<Grid container justify='space-around'>
								<Grid item md={8}>
									<Paper
										style={{
											display: 'flex',
											flexDirection: 'column',
											alignItems: 'center',
											padding: 20,
										}}
									>
										<Typography variant='subtitle1'>Fejl 404</Typography>
										<Typography variant='subtitle1' style={{ marginTop: 50 }}>
											Siden du forsøger at hente kunne ikke findes
										</Typography>{' '}
										<Typography variant='body1' style={{ marginTop: 50 }}>
											Klik{' '}
											<Link to='/' onClick={() => handleMenuClick(0)}>
												her
											</Link>{' '}
											for at komme i sikkerhed.
										</Typography>
									</Paper>
								</Grid>
							</Grid>
						</Route>
					</Switch>
				</main>
			</div>
		</Router>
	);
}
