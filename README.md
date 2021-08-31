1. redux-thunk :
    Middleware to helps to make request in redux application

2. 
cant not write action creator as follow, because async function is not actually 
returning an action object.
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

6. By using redux thunk, action creator dont need to always return an action object,
   we can return a function. But must manually dispatch the action.

7. _.memoize

8. ownProps in mapStateToProps( state, ownProps), to handle some logic

9. reducer takes state and action as argument. And using switch case syntax.
   Also must return a new array or object to update the state then cause rerender.