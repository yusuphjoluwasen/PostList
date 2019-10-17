import jsonPlaceholder from "../api/jsonPlaceholder.js"
import _ from "lodash"

export const fetchPostandUsers = () => async (dispatch, getState) => {
    await dispatch(fetchPosts());

//     const userIds = _.uniq(_.map(getState().posts, 'userId'));
//     userIds.forEach(id => dispatch(fetchUsers(id)))
// }

    _.chain(getState().posts)
        .map('userId')
        .uniq()
        .forEach(id => dispatch(fetchUsers(id)))
        .value();
};


export const fetchPosts = () => async dispatch => {
        const response = jsonPlaceholder.get("/posts");
        dispatch({
            type:"FETCH_POSTS",
            payload:response
        })
};

export const fetchUsers = id => async dispatch => {
    const response = jsonPlaceholder.get("/user/"+id);
    dispatch({
        type:"FETCH_USERS",
        payload:response
    })
};