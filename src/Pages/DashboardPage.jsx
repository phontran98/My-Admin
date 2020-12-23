import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Category, HomeRounded, Phonelink, PowerSettingsNew, Settings, ShoppingCart } from '@material-ui/icons';
import React from 'react';
import HomeFragment from '../Fragments/HomeFragment';



const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerContainer: {
    overflow: 'auto',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

export default function DashboardPage() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h4" noWrap>
           My Mall Admin
          </Typography>
        </Toolbar>
      </AppBar>

        {/*Side bar*/}
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
          
        <Toolbar />
        <div className={classes.drawerContainer}>
            <List>
            {/* Home*/}  
            <ListItem button >
                <ListItemIcon><HomeRounded/></ListItemIcon>
                <ListItemText primary="Home" />
            </ListItem>
            {/* Categories*/}  
            <ListItem button >
                <ListItemIcon><Category/></ListItemIcon>
                <ListItemText primary="Categories" />
            </ListItem>
            {/* Products*/}  
            <ListItem button >
                <ListItemIcon><Phonelink/></ListItemIcon>
                <ListItemText primary="Products" />
            </ListItem>
            {/* Orders*/}  
            <ListItem button >
                <ListItemIcon><ShoppingCart/></ListItemIcon>
                <ListItemText primary="Orders" />
            </ListItem>
            {/* Settings*/}  
            <ListItem button >
                <ListItemIcon><Settings/></ListItemIcon>
                <ListItemText primary="Settings" />
            </ListItem>
            {/* Logout*/}  
            <ListItem button >
                <ListItemIcon><PowerSettingsNew/></ListItemIcon>
                <ListItemText primary="Logout" />
            </ListItem>
            </List>                 
        </div>
      </Drawer>
    <main className={classes.content}>
        <Toolbar>
        <HomeFragment/>
        </Toolbar>
       
    </main>
    </div>
  );
}
