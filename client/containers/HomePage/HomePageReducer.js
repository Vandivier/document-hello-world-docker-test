// Import Actions
import { TOGGLE_ADD_POST } from './HomePageActions';

// Initial State
const initialState = {
  showAddPost: false,
};

const HomePageReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_ADD_POST:
      return {
        showAddPost: !state.showAddPost,
      };

    default:
      return state;
  }
};

/* Selectors */

// Get showAddPost
export const getShowAddPost = state => state.homePage.showAddPost;

// Export Reducer
export default HomePageReducer;
