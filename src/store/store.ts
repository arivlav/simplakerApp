import { createStore, Store } from 'redux'
import { rootReducer } from 'src/store/ruducers/rootReducer'
import { Editor } from "src/types"
import { defaultEditor } from "src/store/states/defaultEditorState"

export type View = {
    modal: ModalType
}

export type ModalType = {
    active: boolean,
    header: string,
    body: string,
    footer: string,
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
            header: '',
            body: '',
            footer: '',
        }
    }
}

export const store: Store<RootState> = createStore(rootReducer)
