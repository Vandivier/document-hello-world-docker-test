import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';

/* TODO: merge data state into the other store and then try calling <FriendListApp />
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

const reducer = combineReducers(friendsListReducers);
const friendsListStore = createStore(reducer);*/
        /*<Provider store={friendsListStore}>
          {() => <FriendListApp /> }
        </Provider>
*/

// Import Components
import FriendsListApp from '../../../FriendsList/FriendsList';
import PostList from '../../components/PostList';
import PostCreateWidget from '../../components/PostCreateWidget/PostCreateWidget';

// Import Actions
import { addPostRequest, fetchPosts, deletePostRequest } from '../../PostActions';
import { toggleAddPost } from '../../../HomePage/HomePageActions';

// Import Selectors
import { getShowAddPost } from '../../../HomePage/HomePageReducer';
import { getPosts } from '../../PostReducer';
import * as friendsListReducers from '../../../FriendsList/FriendsListReducer';

class PostListPage extends Component {
  componentDidMount() {
    this.props.dispatch(fetchPosts());
  }

  handleDeletePost = post => {
    if (confirm('Do you want to delete this post')) { // eslint-disable-line
      this.props.dispatch(deletePostRequest(post));
    }
  };

  handleAddPost = (name, title, content) => {
    this.props.dispatch(toggleAddPost());
    this.props.dispatch(addPostRequest({ name, title, content }));
  };

  render() {
    return (
      <div>
        <PostCreateWidget addPost={this.handleAddPost} showAddPost={this.props.showAddPost} />
        <PostList handleDeletePost={this.handleDeletePost} posts={this.props.posts} />
      </div>
    );
  }
}

// Actions required to provide data for this component to render in server side.
PostListPage.need = [() => { return fetchPosts(); }];

// Retrieve data from store as props
function mapStateToProps(state) {
  return {
    showAddPost: getShowAddPost(state),
    posts: getPosts(state),
  };
}

PostListPage.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  })).isRequired,
  showAddPost: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired,
};

PostListPage.contextTypes = {
  router: React.PropTypes.object,
};

export default connect(mapStateToProps)(PostListPage);
