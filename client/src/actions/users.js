import * as api from '../api';

//Action Creators
export const getUsers = () => async(dispatch) => {

    try {
        const { data } = await api.fetchUsers();

        dispatch ({type: 'FETCH_ALL', payload: data});
    } catch (error) {
        console.log(error.message);
    }

}

export const createUser = (post) => async (dispatch) => {
    try {
        const { data } = await api.createUser(post);

        dispatch({ type: 'CREATE', payload: data});
    } catch (error) {
        console.log(error);
    }
}