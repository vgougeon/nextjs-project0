const initialState = {
    user: false
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_AUTH":
            return {...state, user: action.user};
        default:
            return state;
    }
};

export default authReducer;