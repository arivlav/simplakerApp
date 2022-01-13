import { editorReducer } from "./editorReducer"
import { viewReducer } from "./viewReducer"
import { historyReducer } from "./historyReducer"
import {defaultState, RootState} from 'src/store/store'
import { AnyAction } from "redux";

export const rootReducer = (state: RootState = defaultState, action: AnyAction): RootState => {
    let newState: RootState = historyReducer(state, action);
    return { 
        editor: editorReducer(newState.editor, action),
        view: viewReducer(state.view, action),
        history: newState.history, 
    } 
}