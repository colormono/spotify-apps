// Reselect selector
// Takes a list of posts and posts Ids, and picks out
// the selected Posts

import { createSelector } from 'reselect';
import _ from 'lodash';

const postsSelector = state => state.mecanica;
const selectedPostsSelector = state => state.selectedPostsIds;

const getPosts = (posts, selectedPostsIds) => {
  console.log(posts);
  console.log(selectedPostsIds);
  const selectedPosts = _.filter(
    posts,
    post => {
      if(  
        _.includes(selectedPostsIds, post.id)
      ){
        return true;
      }
    }
  );
  console.log(selectedPosts);
  return selectedPosts;
};

export default createSelector(
  postsSelector, // pick off a pice of state
  selectedPostsSelector, // pick off a pice of state
  getPosts // last argument is the funcion that has our select logic
);