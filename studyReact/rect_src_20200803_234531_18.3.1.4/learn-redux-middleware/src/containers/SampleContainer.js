import React from "react";
import Sample from "../components/Sample";
import { connect } from "react-redux";
import { getPost, getUsers } from "../modules/sample";

const { useEffect } = React;

const SampleContainer = ({
  loadingPost,
  loadingUsers,
  post,
  users,
  getPost,
  getUsers,
}) => {

  useEffect(() => {
    getPost(1);
    getUsers(1);
  }, [getPost, getUsers]);

  return (
    <Sample
      users={users}
      post={post}
      loadingUsers={loadingUsers}
      loadingPost={loadingPost}
    />
  );
};

// const mapDispatchToProps = (dispatch) => ({
//   getPost: () => {
//     dispatch(getPost());
//   },
//   getUsers: () => {
//     dispatch(getUsers());
//   },
// });

export default connect(
  ({ sample }) => ({
    post: sample.post,
    users: sample.users,
    loadingPost: sample.loading.GET_POST,
    loadingUsers: sample.loading.GET_USERS,
  }),
//   mapDispatchToProps
  {
    getPost,
    getUsers,
  }
)(SampleContainer);
