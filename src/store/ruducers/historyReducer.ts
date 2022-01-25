import { RootState, defaultState } from "src/store/store";
import { AnyAction } from "redux";
import { Editor } from "src/types";

export const ADD_TO_HISTORY = 'ADD_TO_HISTORY';
export const UNDO = 'UNDO';
export const REDO = 'REDO';
export const CLEAR_HISTORY = 'CLEAR_HISTORY';

export const historyReducer = (state: RootState, action: AnyAction): RootState => {
    let newUndo = [...state.history.undo];
    let newRedo = [...state.history.redo];
    switch (action.type) {
        case ADD_TO_HISTORY:
            return {
                ...state,
                history: {
                    ...state.history,
                    undo: [
                        ...state.history.undo,
                        action.editor,
                    ],
                    redo: []
                }
            }
        case UNDO:
            if (newUndo.length > 1) {
                let lastAction: Editor = newUndo[newUndo.length - 1];
                newUndo.pop();
                newRedo.push(lastAction);
                lastAction = newUndo[newUndo.length - 1];
                return {
                    ...state,
                    editor: lastAction,
                    history: {
                        ...state.history,
                        undo: newUndo,
                        redo: newRedo,
                    }
                }
            }
            return state;
        case REDO:
            if (newRedo.length > 0) {
                const lastAction = newRedo[newRedo.length - 1];
                newRedo.pop();
                newUndo.push(lastAction);
                return {
                    ...state,
                    editor: lastAction,
                    history: {
                        ...state.history,
                        undo: newUndo,
                        redo: newRedo,
                    }
                }
            }
            return state;
        case CLEAR_HISTORY:
            return {
                ...state,
                history: defaultState.history, 
            }
        default:
            return state
    }
}