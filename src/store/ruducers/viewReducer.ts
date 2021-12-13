import { View } from "src/store/store";
import { AnyAction } from "redux";

export const SHOW_MODAL = 'SHOW_MODAL';

export const viewReducer = (view: View, action: AnyAction): View => {
    switch (action.type) {
        case SHOW_MODAL:
            return {
                ... view,
                modalConfirm: {
                    ... view.modalConfirm,
                    active: action.active
                }
            }          
        default:
            return view
    }
}