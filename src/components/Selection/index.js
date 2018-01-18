import React from 'react';
import { connect } from 'react-redux';
import SelectedPostsSelector from '../../selectors/selected_posts';

const SelectedPostsLists = (props) => {
  return(
    <ul>
      {
        props.posts.map(post =>{
          return <li key={post.id}>{post.serie}</li>
        })
      }
    </ul>
  );
}

function mapStateToProps(state) {
  return {
    posts: SelectedPostsSelector(state)
  };
}

export default connect(mapStateToProps)(SelectedPostsLists);