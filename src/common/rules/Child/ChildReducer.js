import ChildTypes from "./ChildTypes";

const INITIAL_STATE = {
    Data: [],
    IsLoading: true,
    HasError: false
}

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case ChildTypes.SET_CHILD_LOADING:
            return { ...state, IsLoading: true, HasError: false };
        case ChildTypes.SET_CHILD_SUCCESS:
            return { Data: action.payload, IsLoading: false, HasError: false };
        case ChildTypes.SET_CHILD_FAILURE:
            return { ...state, IsLoading: false, HasError: true };
        default:
            return state;
    }
}
