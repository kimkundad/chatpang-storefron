import { setLoadingOff, setLoadingOn } from "../redux/globalRedux/action"

export const test = () => {
    return dispatch => {
        dispatch(setLoadingOn())
        dispatch(setLoadingOff())
    }
}