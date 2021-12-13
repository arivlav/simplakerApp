import { createStore, Store } from 'redux'
import { rootReducer } from 'src/store/ruducers/rootReducer'
import { Editor } from "src/types"
import { defaultEditor } from "src/store/states/defaultEditorState"

export type View = {
    modalConfirm: ModalConfirm
}

export type ModalConfirm = {
    active: boolean
}

export type RootState = {
    editor: Editor,
    view: View,
}

export const defaultState: RootState = {
    editor: defaultEditor,
    view: {
        modalConfirm: {
            active: true
        }
    }
}

export const store: Store<RootState> = createStore(rootReducer)
