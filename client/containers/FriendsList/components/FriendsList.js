import React, { Component, PropTypes } from 'react';

import styles from './FriendsList.css';
import FriendsListItem from './FriendsListItem';

export default class FriendsList extends Component {
  static propTypes = {
    friends: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired,
  }

  render () {
    return (
      <ul className={styles.friendList}>
        {
          this.props.friends.map((friend) => {
            return (<FriendsListItem
              key={friend.id}
              id={friend.id}
              name={friend.name}
              starred={friend.starred}
              {...this.props.actions} />);
          })
        }
      </ul>
    );
  }
}
