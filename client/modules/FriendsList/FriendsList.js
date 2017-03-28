import React, { Component, PropTypes } from 'react';
import styles from './FriendListApp.css';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as FriendsActions from '../../actions/FriendsActions';
import { FriendList, AddFriendInput } from '../../components';

/*
//TODO: is the @connect pattern cool or nah?
//  For now I say nah bc decorators require an additional babel dependency, but maybe change.
//  Alternative state interaction pattern based on MERN seed AddFriendInput.js
//  Note to self: I don't understand the overuse of commas inside JSON in the MERN app (eg comma after last key-val pair.)
@connect(state => ({
  friendlist: state.friendlist
}))
*/

export default class FriendListApp extends Component {

  static propTypes = {
    friendsById: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired
  }

  constructor (props, context) {
    super(props, context);
    this.state = {
      friendlist: this.friendlist,
    };
  }

  render () {
    const { friendlist: { friendsById }, dispatch } = this.props;
    const actions = bindActionCreators(FriendsActions, dispatch);

    return (
      <div className={styles.friendListApp}>
        <h1>The FriendList</h1>
        <AddFriendInput addFriend={actions.addFriend} />
        <FriendList friends={friendsById} actions={actions} />
      </div>
    );
  }
}
