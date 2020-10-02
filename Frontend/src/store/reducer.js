const initialState = {
    isLoggedIn : false,
    userName : null
}

const reducer = (state = initialState, action) => {
    const newState = {...state}

    if(action.type === "changeLoginState"){
        newState.userName = action.userName
        newState.isLoggedIn = true
    }
    if(action.type === "changeLoginStateTo_Logout"){
        newState.userName = null
        newState.isLoggedIn = false
    }
    return newState
}

export default reducer