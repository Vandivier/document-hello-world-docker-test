/**
 * Root Reducer
 */
import { combineReducers } from 'redux';
import store from './store';

let containers = './containers/';                      //TODO: get it from props.store.CONSTS.containers

console.log(store);

// Import Reducers
/*
import homePage from 'HomePage/HomePageReducer';
import posts from containers + 'Post/PostReducer';
import intl from containers + 'Intl/IntlReducer';
import friendsList from containers + 'FriendsList/FriendsListReducer';
*/
let homePage = require(containers + 'HomePage/HomePageReducer');
let posts = require(containers + 'Post/PostReducer');
let intl = require(containers + 'Intl/IntlReducer');
let friendsList = require(containers + 'FriendsList/FriendsListReducer');

// Combine all reducers into one root reducer
export default combineReducers({
  homePage,
  posts,
  intl,
  friendsList,
});
