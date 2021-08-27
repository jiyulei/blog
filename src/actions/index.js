import jsonPlaceholder from "../apis/jsonPlaceholder";

// export const fetchPosts = () => {
//   return async function (dispatch, getState) {
//     const response = await jsonPlaceholder.get("/posts");

//     dispatch({ type: "FETCH_POSTS", payload: response });
//   };
// };

// ES2015 syntax: 
export const fetchPosts = () => async dispatch => { // not using getState in this case
      const response = await jsonPlaceholder.get("/posts");
      // instead of return an action, manually dispatch the action
      dispatch({ type: "FETCH_POSTS", payload: response });
};
