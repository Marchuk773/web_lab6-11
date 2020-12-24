const loginReducer = (state = false, { type }) => {
    switch (type) {
        case 'LOGGED':
            return true;
        case 'SIGNEDOUT':
            return false;
        default:
            return state;
    }
}

export default loginReducer;