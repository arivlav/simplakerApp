import { editorReducer } from "./editorReducer"
import { viewReducer } from "./viewReducer"
import { RootState } from 'src/store/store'
import { Action } from 'redux'

export const rootReducer = (state: RootState, action: Action): RootState => { 
    return { 
        editor: editorReducer(state.editor, action),
        view: viewReducer(state.view, action),
        //slides: slides(state.slides, action), 
    } 
}