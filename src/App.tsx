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
import Backdrop from '@material-ui/core/Backdrop';
import React from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import clsx from 'clsx';
import Home from './Components/home';
import About from './Components/about';
import Services from './Components/services';
import { AddIcCall, Assignment, HomeRounded, Info } from '@material-ui/icons';
import Paralaxx from './Components/parallax';

const drawerWidth = 260;

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			display: 'flex',
		},
		appBar: {
			// transition: theme.transitions.create(['margin', 'width'], {
			// 	easing: theme.transitions.easing.sharp,
			// 	duration: theme.transitions.duration.leavingScreen,
			// }),
		},
		appBarShift: {
			// width: `calc(100% - ${drawerWidth}px)`,
			// marginLeft: drawerWidth,
			// transition: theme.transitions.create(['margin', 'width'], {
			// 	easing: theme.transitions.easing.easeOut,
			// 	duration: theme.transitions.duration.enteringScreen,
			// }),
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
		mainNavigationLink: {
			display: 'block',
			color: '#ffffff',
			textDecoration: 'none',
			margin: '10px 0',
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
		menuLink: { textDecoration: 'none', color: '#0E2F44' },
	})
);

export default function PersistentDrawerLeft() {
	const classes = useStyles();
	const [open, setOpen] = React.useState(false);
	const [active, setActive] = React.useState(0);

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

	const renderNavigationItems = () =>
		[
			{ text: 'Eenim', link: '/', icon: 'Home' },
			{ text: 'Ullamco', link: '/about', icon: 'Info' },
			{ text: 'Daliquip', link: '/services', icon: 'Assignment' },
			{ text: 'Aminim', link: '/contact', icon: 'AddIcCall' },
		].map((item, index) => (
			<Link to={item.link} className={classes.menuLink} key={index}>
				<ListItem
					button
					onClick={() => handleMenuClick(index)}
					selected={index === active}
					style={
						open
							? {}
							: {
									color: '#ffffff',
									textDecoration: index === active ? 'underline' : 'none',
							  }
					}
				>
					<ListItemIcon className={classes.mobileOnly}>
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
				<AppBar
					position='fixed'
					className={clsx(classes.appBar, {
						[classes.appBarShift]: open,
					})}
					style={{ background: '#0E2F44' }}
				>
					<Toolbar style={{ border: '1px solid white' }}>
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
						<Link to='/' className={clsx(classes.headerLink)}>
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
