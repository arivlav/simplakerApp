import { AnyAction } from 'redux'
import { 
    SHOW_MODAL, 
    CLOSE_MODAL, 
    TURN_RIGHT_BAR,
} from 'src/store/ruducers/viewReducer'
import { Identifier } from 'src/types'

export function showModal(modal_type: Number): AnyAction {
    return {
        type: SHOW_MODAL,
        modal_type: modal_type,
    }
}

export function closeModal(): AnyAction {
    return {
        type: CLOSE_MODAL,
    }
}

export function turnRightBar(rightBarContent: Number): AnyAction {
    return {
        type: TURN_RIGHT_BAR,
        rightBarContent: rightBarContent,
    }
}
