function login(id,password) {
    return (dispatch, getState) => {
        dispatch({type: 'LOGIN_SUCCESS', payload:{id,password}})
        console.log('loginsuccess_action');
    };
}

function logout(id,password) {
    return (dispatch) => {
        dispatch({type: 'LOGOUT_SUCCESS', payload:{id, password}})
        console.log('logoutSuccess_action');
    }
}
export const authenticateAction = { login,logout };