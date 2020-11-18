import { SET_NUMBER, ADDITION } from '../constants/actions';

const stateInit = {
    number1: 0,
    number2: 0,
    result: 0,
    message: 'Welcome'
}

const reducer = (state = stateInit, action = {}) => {
    switch (action.type) {
        case SET_NUMBER:
            const { value, name } = action.payload;
            console.log(action);
            return {
                ...state,
                [name]: parseFloat(value),
            };
        case ADDITION:
            return {
                ...state,
                result: state.number1 + state.number2,
            };

        default:
            return state;
    }
}

export default reducer;