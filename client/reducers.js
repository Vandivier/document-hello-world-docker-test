/**
 * Root Reducer
 */
import { combineReducers } from 'redux';

// Import Reducers
import homePage from './containers/HomePage/HomePageReducer';
import intl from './containers/Intl/IntlReducer';
import friendsList from './containers/FriendsList/FriendsListContainerReducer';
import posts from './containers/Post/PostReducer';

//console.log(posts());

// Combine all reducers into one root reducer
export default combineReducers({
  homePage,
  posts,
  intl,
  friendsList,
});
