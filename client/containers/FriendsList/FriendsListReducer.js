import * as types from './constants/ActionTypes';

const initialState = {
  friends: [1, 2, 3],
  friendsById: {
    1: {
      id: 1,
      name: 'Theodore Roosevelt'
    },
    2: {
      id: 2,
      name: 'Abraham Lincoln'
    },
    3: {
      id: 3,
      name: 'George Washington'
    }
  }
};

export default function FriendsListReducer(state = initialState, action) {
  switch (action.type) {

    case types.ADD_FRIEND:
      const newId = state.friends[state.friends.length-1] + 1;
      return {
        ...state,
        friends: state.friends.concat(newId),
        friendsById: {
          ...state.friendsById,
          [newId]: {
            id: newId,
            name: action.name
          }
        },
      }

    case types.DELETE_FRIEND:
      return {
        ...state,
        friends: state.friends.filter(id => id !== action.id),
        friendsById: state.friendsById.filter(item => item !== action.id)
      }

    case types.STAR_FRIEND:
      return {
        ...state,
        friendsById: state.friendsById.map((friend) => {
          return friend.id === action.id ?
            Object.assign({}, friend, { starred: !friend.starred }) :
            friend
        })
      }

    default:
      return state;
  }
}
