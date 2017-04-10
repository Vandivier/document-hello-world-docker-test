import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

// Import Style
import styles from './HomePage.css';

// Import Components
import Helmet from 'react-helmet';
import DevTools from '../../util/DevTools';
import FriendsListContainer from '../FriendsList/FriendsListContainer';

import Header from './private-subcomponents/Header/Header';
import Footer from './private-subcomponents/Footer/Footer';

// Import Actions
import { toggleAddPost } from './HomePageActions';
import { switchLanguage } from '../../containers/Intl/IntlActions';

// Import Selectors
import { getShowAddPost } from './HomePageReducer';

export class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = { isMounted: false };
  }

  componentDidMount() {
    this.setState({isMounted: true}); // eslint-disable-line
  }

  toggleAddPostSection = () => {
    this.props.dispatch(toggleAddPost());
  };

  render() {
    return (
      <div>
        {this.state.isMounted && !window.devToolsExtension && process.env.NODE_ENV === 'development' && <DevTools />}
        <div>

          <Helmet
            title="MERN Starter - Blog HomePage"
            titleTemplate="%s - Blog HomePage"
            meta={[
              { charset: 'utf-8' },
              { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge', },
              { name: 'viewport', content: 'width=device-width, initial-scale=1', },
            ]}
          />

          <Header
            switchLanguage={lang => this.props.dispatch(switchLanguage(lang))}
            intl={this.props.intl}
            showAddPost={this.props.showAddPost}
            toggleAddPost={this.toggleAddPostSection}
          />

          <FriendsListContainer
            friendsById={this.props.friendsList.friendsById}
            dispatch={this.props.dispatch}
          />

          <div className={styles.container}>
            {this.props.children}
          </div>

          <Footer />

        </div>
      </div>
    );
  }
}

HomePage.propTypes = {
  children: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
  friendsList: PropTypes.object.isRequired,
  intl: PropTypes.object.isRequired,
};

// Retrieve data from store as props
function mapStateToProps(store) {
  console.log(store);
  return {
    friendsList: store.friendsList,
    intl: store.intl,
    showAddPost: getShowAddPost(store),
  };
}

export default connect(mapStateToProps)(HomePage);
