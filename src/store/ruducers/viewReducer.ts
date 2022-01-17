import { View } from "src/store/store";
import { AnyAction } from "redux";
import { Identifier } from "src/types";

export const SHOW_MODAL = 'SHOW_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';
export const TURN_RIGHT_BAR = 'TURN_RIGHT_BAR';

export const viewReducer = (view: View, action: AnyAction): View => {
    switch (action.type) {
        case SHOW_MODAL:
            return {
                ...view,
                modal: {
                    ...view.modal,
                    active: true,
                    type: action.modal_type,
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
        case TURN_RIGHT_BAR:
            return {
                ...view,
                rightBarContent: action.rightBarContent,                    
            }                      
        default:
            return view
    }
}