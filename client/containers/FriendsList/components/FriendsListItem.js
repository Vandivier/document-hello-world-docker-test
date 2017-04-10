import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import styles from './FriendsListItem.css';

export default class FriendsListItem extends Component {
  static propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    starred: PropTypes.boolean,
    starFriend: PropTypes.func.isRequired,
    onTrashClick: PropTypes.func.isRequired
  }

  render () {
    return (
      <li className={styles.friendsListItem}>
        <div className={styles.friendInfos}>
          <div><span>{this.props.name}</span></div>
        </div>
        <div className={styles.friendActions}>
          <button className={`${styles.btnStar}`} onClick={() => this.props.starFriend(this.props.id)}>
          </button>
          <button className={`${styles.btnTrash}`} onClick={() => this.props.deleteFriend(this.props.id)}>
          </button>
        </div>
      </li>
    );
  }

}
