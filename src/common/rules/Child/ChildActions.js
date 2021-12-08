import ChildTypes from "./ChildTypes";

const ChildActions = {
    SetLoading: () => ({
        type: ChildTypes.SET_CHILD_LOADING
    }),
    SetFailure: () => ({
        type: ChildTypes.SET_CHILD_FAILURE
    }),
    SetSuccess: (payload) => ({
        type: ChildTypes.SET_CHILD_SUCCESS,
        payload
    }),
    SetNew: (payload) => ({
        type: ChildTypes.SET_CHILD_NEW,
        payload
    })
}

export default ChildActions;
