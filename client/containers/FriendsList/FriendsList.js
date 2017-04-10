//TODO: rename this file FriendsListContainer
import React, { Component, PropTypes } from 'react';
import styles from './FriendsList.css';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as FriendsActions from './FriendsListActions';
import { FriendsList, AddFriendInput } from './components';

export class FriendsListContainer extends Component {

  constructor (props, context) {
    super(props, context);
    this.state = {
      friendsList: this.friendsList,
    };
  }

  render () {
    //const { friendsList: { friendsById }, dispatch } = this.props;  //TODO: rewrite to match the other components
    
    const actions = bindActionCreators(FriendsActions, this.props.dispatch);

    return (
      <div className={styles.friendsListApp}>
        <h1>The FriendsList</h1>
        <AddFriendInput addFriend={actions.addFriend} />
        <FriendsList friends={this.props.friendsList.friends} actions={actions} />
      </div>
    );
  }
}

FriendsListContainer.propTypes = {
  friendsById: PropTypes.object.isRequired,
  friendsList: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
};

// Retrieve data from store as props
function mapStateToProps(store) {
  return {
    friendsList: store.friendsList,
  };
}

export default connect(mapStateToProps)(FriendsListContainer);
