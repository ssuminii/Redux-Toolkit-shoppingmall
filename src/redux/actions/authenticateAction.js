function login(id,password) {
    return (dispatch, getState) => {
        dispatch({type: 'LOGIN_SUCCESS', payload:{id,password}})
        console.log('loginsuccess_action');
    };
}

export const authenticateAction = { login };