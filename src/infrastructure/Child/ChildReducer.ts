import ChildTypes from "./ChildTypes";

import { IChildState } from '@common/interfaces';

const INITIAL_STATE: IChildState = {
    Data: [],
    IsLoading: true,
    HasError: false,
    NewChild: false,
}

export default function (state = INITIAL_STATE, action: any) {
    switch (action.type) {
        case ChildTypes.SET_CHILD_LOADING:
            return { ...state, IsLoading: true, HasError: false, NewChild: state.NewChild };
        case ChildTypes.SET_CHILD_SUCCESS:
            return { Data: action.payload, IsLoading: false, HasError: false, NewChild: state.NewChild };
        case ChildTypes.SET_CHILD_FAILURE:
            return { ...state, IsLoading: false, HasError: true };
        case ChildTypes.SET_CHILD_NEW:
            return { ...state, NewChild: action.payload };
        default:
            return state;
    }
}
