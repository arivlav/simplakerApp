import { editorReducer } from "./editorReducer"
import { viewReducer } from "./viewReducer"
import {defaultState, RootState} from 'src/store/store'
import { AnyAction } from "redux";

export const rootReducer = (state: RootState = defaultState, action: AnyAction): RootState => {
    return { 
        editor: editorReducer(state.editor, action),
        view: viewReducer(state.view, action),
        //slides: slides(state.slides, action), 
    } 
}