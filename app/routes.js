import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Navbar, Signup, Login } from './components';
//import { me } from './store/userReducer';

class Routes extends React.Component {
  componentDidMount() {
    this.props.loadInitialData();
  }

  render() {
    const { isLoggedIn } = this.props;

    return (
      <Router>
        <Switch>
          {/*whichever is the first thing that matches show that comp */}
          {/*Routes placed here are available to all visitors */}
          <Route path="login" component={Login} />
          <Route path="signup" component={Signup} />
          {isLoggedIn && (
            <Switch>
              {/* Routes placed here are only available after logging in */}
              <Route path="/home" component={UserHome} />
            </Switch>
          )}
          {/* Displays our Login component as a fallback */}
          <Route component={Login} />
        </Switch>
      </Router>
    );
  }
}

const mapStateToProps = state => {
  console.log(state.user);
  return {
    isLoggedIn: !!state.user.id,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    loadInitialData() {
      dispatch(me());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Routes);

//checks whether we are using the right props for this component:
Routes.propTypes = {
  loadInitialData: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
};
