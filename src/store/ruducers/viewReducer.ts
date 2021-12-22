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
                    active: true,
                    type: action.modal.type,
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