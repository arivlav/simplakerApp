import { createStore, Store } from 'redux'
import { rootReducer } from 'src/store/ruducers/rootReducer'
import { Editor } from "src/types"
import { defaultEditor } from "src/store/states/defaultEditorState"

export type RootState = {
    editor: Editor,
    view: Object,
}

export const defaultState: RootState = {
    editor: defaultEditor,
    view: {}
}

export const store: Store<RootState> = createStore(rootReducer)
