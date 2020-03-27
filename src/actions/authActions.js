import userConstants from '../constants/userConstants';
import userService from '../services/userService';
import alertActions from '../actions/alertActions';

function login(username, password) {

    const request = user => { type: userConstants.LOGIN_REQUEST, user };
    const success = user => { type: userConstants.LOGIN_SUCCESS, user };
    const failure = error => { type: userConstants.LOGIN_FAILURE, error };

    return dispatch => {
        dispatch(request({ username }));

        userService.login(username, password)
            .then(
                user => {
                    dispatch(success(user));
                    // go to "/"
                },
                error => {
                    dispatch(failure(error));
                    dispatch(alertActions.error(error));
                }
            );
    };

}

function logout() {
    userService.logout();
    return { type: userConstants.LOGOUT };
}

function getAll() {
    const request = () => { type: userConstants.GETALL_REQUEST };
    const success = users => { type: userConstants.GET_ALL_SUCCESS, users };
    const failure = error => { type: userConstants.GETALL_FAILURE, error };

    return dispatch => {
        dispatch(request());

        userService.getAll()
            .then(
                users => dispatch(success(users)),
                error => dispatch(failure(error))
            );
    };
}

export const userActions = {
    login,
    logout,
    getAll
};