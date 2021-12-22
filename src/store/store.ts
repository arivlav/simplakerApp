import { createStore, Store } from 'redux'
import { rootReducer } from 'src/store/ruducers/rootReducer'
import { Editor } from "src/types"
import { defaultEditor } from "src/store/states/defaultEditorState"
import { ModalStateType } from 'src/components/Modal/Modal'

export type View = {
    modal: ModalStateType
}

export type RootState = {
    editor: Editor,
    view: View,
}

export const defaultState: RootState = {
    editor: defaultEditor,
    view: {
        modal: {
            active: true,
            type: 1,
        }
    }
}

export const store: Store<RootState> = createStore(rootReducer)
