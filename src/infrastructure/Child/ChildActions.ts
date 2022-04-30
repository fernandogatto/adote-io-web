import ChildTypes from "./ChildTypes";

const ChildActions = {
  SetLoading: () => ({
    type: ChildTypes.SET_CHILD_LOADING
  }),
  SetFailure: () => ({
    type: ChildTypes.SET_CHILD_FAILURE
  }),
  SetSuccess: (payload: any) => ({
    type: ChildTypes.SET_CHILD_SUCCESS,
    payload
  }),
  SetNew: (payload: any) => ({
    type: ChildTypes.SET_CHILD_NEW,
    payload
  })
}

export default ChildActions;
