import { useDispatch } from "react-redux"
import { bindActionCreators } from "redux"
import * as IDogsAction from "../actionCreator/actionCreator"

export const UseTypedDispatch = () => {
	const dispatch = useDispatch()
	return bindActionCreators(IDogsAction, dispatch)
}
