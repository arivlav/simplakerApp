import { AnyAction } from 'redux'
import {SHOW_MODAL} from 'src/store/ruducers/viewReducer' 


export function showModal(active: boolean): AnyAction {
    return {
        type: SHOW_MODAL,
        active: active,
    }
}