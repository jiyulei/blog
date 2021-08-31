import jsonPlaceholder from "../apis/jsonPlaceholder";
import _ from "lodash";
//Action 1:
// Without using memoize:
export const fetchUser = (id) => async (dispatch) => {
      const response = await jsonPlaceholder.get(`/users/${id}`);

      dispatch({ type: "FETCH_USER", payload: response.data });
};

// To use _.memoize, refactor as follow: This resolves overfetching problem

// export const fetchUser = (id) => (dispatch) => _fetchUser(id, dispatch);
// // must define a new function to use memoize
// const _fetchUser = _.memoize(async (id, dispatch) => {
//   const response = await jsonPlaceholder.get(`/users/${id}`);

//   dispatch({ type: "FETCH_USER", payload: response.data });
// });

// Action 2:
// ES2015 syntax:
export const fetchPosts = () => async (dispatch) => {
  // not using getState in this case
  const response = await jsonPlaceholder.get("/posts");
  // instead of return an action, manually dispatch the action
  dispatch({ type: "FETCH_POSTS", payload: response.data });
};

// Action 3: 
// This action combines action 1 & 2, action 2 is using the result of action 1,
// need to use getState function and await the action1's result.

export const fetchPostsAndUser = () => async (dispatch, getState) => {
  // need to manually dispatch action
  await dispatch(fetchPosts());
  // some logic here for action2 to use the result from state
  const userIds = _.uniq(_.map(getState().posts, "userId"));
  // don't need to await here, and also manually dispatch
  userIds.forEach((id) => dispatch(fetchUser(id)));
};

// Refactor by lodash chain()
// this is a refactor example of above action
export const fetchPostsAndUser2 = () => async (dispatch, getState) => {
  await dispatch(fetchPosts());

  _.chain(getState().posts)
    .map("userId") // put second argument
    .uniq()
    .forEach((id) => dispatch(fetchUser(id)))
    .value(); // must call .value() to end chain
};
