import React, { lazy } from 'react';
import { compose } from 'recompose';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import DrawerLeft from '../components/DrawerLeft';
import AppBar from '../components/AppBar';
import { connect } from 'react-redux'
import { logoutUser } from '../views/Login/Login.Action'

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import * as ROUTES from '../constants/routes'
import lazyComponent from '../components/LazyComponent'
import { isLogged } from '../components/Auth'
import withAuthorization from '../components/Auth/withAuthorization';

const HomePage = lazyComponent("../views/HomePage");

const styles = theme => ({
  root: {
    display: 'flex',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
    height: '100vh',
    overflow: 'auto',
  },
});

class Dashboard extends React.Component {
  state = {
    open: true,
  };

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes, logoutUser, authUser } = this.props;
    const { open } = this.state;

    return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar open={open} handleDrawerOpen={this.handleDrawerOpen} onLogout={logoutUser} username={authUser.username}/>
        <DrawerLeft open={open} handleDrawerClose={this.handleDrawerClose}/>
        <main className={classes.content}>
           <div className={classes.drawerHeader} />
           <Router>
             <Switch>
               <Route path={ROUTES.HOME} exact component={HomePage} />
             </Switch>
           </Router>
        </main>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  authUser: state.authReducer.authUser
})

const mapDispatchToProps = { logoutUser }
export default compose(
  withAuthorization(isLogged),
  withStyles(styles, { withTheme: true }),
  connect(
    null,
    mapDispatchToProps,
  ),
)(Dashboard);