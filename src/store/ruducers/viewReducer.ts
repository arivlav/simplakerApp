import { View } from "src/store/store";
import { AnyAction } from "redux";

export const SHOW_MODAL = 'SHOW_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';

export const viewReducer = (view: View, action: AnyAction): View => {
    switch (action.type) {
        case SHOW_MODAL:
            return {
                ...view,
                modal: {
                    ...view.modal,
                    active: action.modal.active,
                    header: action.modal.header,
                    body: action.modal.body,
                    footer: action.modal.footer,
                }
            }
        case CLOSE_MODAL:
            return {
                ...view,
                modal: {
                    ...view.modal,
                    active: false
                }
            }
        default:
            return view
    }
}