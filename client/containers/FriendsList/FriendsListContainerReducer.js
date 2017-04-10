import * as types from './constants/ActionTypes';

const initialState = {
  friends: [{
      id: 1,
      name: 'Theodore Roosevelt'
    },
    {
      id: 2,
      name: 'Abraham Lincoln'
    },
    {
      id: 3,
      name: 'George Washington'
    }]
};

export default function FriendsListReducer(state = initialState, action) {
  switch (action.type) {

    case types.ADD_FRIEND:
      const newId = state.friends.length + 1;
      state.friends.push({
            id: newId,
            name: action.name
          });
      return state;
      /*
      state.friends.concat({
            id: newId,
            name: action.name
          });

      return {
        ...state,
      }
      */

    case types.DELETE_FRIEND:
      /*
      return {
        ...state,
        friends: state.friends.filter(id => id !== action.id),
        friendsById: state.friendsById.filter(item => item !== action.id)
      }*/
      return {
        ...state,
        friends: state.friends.filter(id => id !== action.id),
      }

    case types.STAR_FRIEND:
      return {
        ...state,
        friends: state.friends.map((friend) => {
          return friend.id === action.id ?
            Object.assign({}, friend, { starred: !friend.starred }) :
            friend
        })
      }

    default:
      return state;
  }
}
