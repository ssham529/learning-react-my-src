import React from "react";
import Sample from "../components/Sample";
import { connect } from "react-redux";
import { getPost, getUsers } from "../modules/sample";

const { useEffect } = React;

// 2.
const SampleContainer = ({
  loadingPost,
  loadingUsers,
  post,
  users,
  getPost,
  getUsers,
}) => {

  // useEffect(() => {
  //   getPost(1);
  //   getUsers(1);
  // }, [getPost, getUsers]);

  useEffect(() => {
    const fn = async () => {
      try {
        await getPost(1);
        await getUsers(1);
      } catch (e) {
        console.log(e);
      }
    };
    fn();
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
//   getPost: (id) => {
//     dispatch(getPost(id));
//   },
//   getUsers: () => {
//     dispatch(getUsers());
//   },
// });

// 1.
export default connect(
  ({ sample, loading }) => ({
    post: sample.post,
    users: sample.users,
    loadingPost: loading['sample/GET_POST'],
    loadingUsers: loading['sample/GET_USERS']
  }),
//   mapDispatchToProps
  {
    getPost, // (id) => { dispatch(getPost(id)); }
    getUsers, // () => { dispatch(getUsers()); }
  }
)(SampleContainer);
