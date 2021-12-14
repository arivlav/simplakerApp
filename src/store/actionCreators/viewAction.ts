import { AnyAction } from 'redux'
import { SHOW_MODAL, CLOSE_MODAL } from 'src/store/ruducers/viewReducer'
import { ModalType } from 'src/store/store'; 


export function showModal(modal: ModalType): AnyAction {
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