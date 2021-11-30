import { Editor } from "src/types";
import { defaultEditor } from "src/store/states/defaultEditorState"
import { Action } from "redux";

export const editorReducer = (editor: Editor, action: Action): Editor => {
    switch (action.type) {
        case 'SAVE_PRESENTATION':
            return defaultEditor
        case 'OPEN_PRESENTATION':
            return defaultEditor
        case 'EXPORT_PRESENTATION':
            return defaultEditor
        // case 'TOGGLE_PRESENTATION_MODE':    
        //     return {
        //         ...editor, 
        //         mode: action.mode
        //     }
        // case 'CHANGE_TITLE':
        //     return {
        //         ...editor, 
        //         presentation: { 
        //             ...editor.presentation,
        //             title: action.title
        //         }
        //     }          
        default:
            return editor
    }
}