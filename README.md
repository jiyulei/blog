1. redux-thunk :
    Middleware to helps to make request in redux application

2. 
<!-- import jsonPlaceholder from "../apis/jsonPlaceholder";

export const fetchPosts = async () => {
    const response = await jsonPlaceholder.get('/posts');
    return {
        type: "FETCH_POSTS",
        payload: response
    }
} -->

Above is a bad approach because it breaks redux rule. Actions must be an plain object,
anytime we wanna use async actions, we need to use custom middleware

3. Action Creator --> Action --> dispatch ---> Middleware ---> reducers ---> state

4. Middleware in Redux:
    1. function that gets called with every action we dispatch
    2. has the ability to STOP,MODIFY or doing something with actions

5. Rules for Normal action creator:       Rules for Redux Thunk:
   1. must return an action objects       1. Action creator can return objects OR functions
   2. must have a 'type' property         2. must have a 'type' property 
   3. optional have a 'payload'           3. optional have a 'payload'