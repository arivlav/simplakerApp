import { View } from "src/store/store";
import { AnyAction } from "redux";

export const SHOW_MODAL = 'SHOW_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';
export const TURN_RIGHT_BAR = 'TURN_RIGHT_BAR';
export const SET_DEFAULT_SLIDE_COLOR = 'SET_DEFAULT_SLIDE_COLOR';

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
        case SET_DEFAULT_SLIDE_COLOR:
            return {
                ...view,                
                defaultSettings: {
                    ...view.defaultSettings,
                    slideColor: action.slideColor,
                }
            }                         
        default:
            return view
    }
}