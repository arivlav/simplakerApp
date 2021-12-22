import { AnyAction } from 'redux'
import { SHOW_MODAL, CLOSE_MODAL } from 'src/store/ruducers/viewReducer'
import { ModalStateType } from 'src/components/Modal/Modal'

export function showModal(modal: ModalStateType): AnyAction {
    return {
        type: SHOW_MODAL,
        modal: modal,
    }
}

export function closeModal(): AnyAction {
    return {
        type: CLOSE_MODAL,
    }
}