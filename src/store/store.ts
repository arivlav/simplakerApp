import { createStore, Store, applyMiddleware, Middleware, MiddlewareAPI, Dispatch, Action } from 'redux'
import { rootReducer } from 'src/store/ruducers/rootReducer'
import { Editor } from "src/types"
import { defaultEditor } from "src/store/states/defaultEditorState"
import { ModalStateType } from 'src/components/Modal/Modal'
import { addToHistory } from 'src/store/actionCreators/historyAction'
import { UNDO, REDO, ADD_TO_HISTORY } from 'src/store/ruducers/historyReducer'

export type View = {
    modal: ModalStateType,
    rightBarContent: Number,
}

export type History = {
    undo: Array<Editor>;
    redo: Array<Editor>;
}

export type RootState = {
    editor: Editor,
    view: View,
    history: History,
}

export const defaultState: RootState = {
    editor: defaultEditor,
    view: {
        modal: {
            active: false,
            type: 1,
        },
        rightBarContent: 0,
    },
    history: {
        undo: [defaultEditor],
        redo: [],
    }
}

const makeHistory: Middleware = api => next => action => {
    const prev = api.getState().editor;
    const result = next(action);
    const after = api.getState().editor;
    const forbiddenActions: Array<string> = [UNDO, REDO, ADD_TO_HISTORY];
    const isNotForbiddenAction: boolean = (forbiddenActions.find((action) => action === result.type) === undefined);
    if (isNotForbiddenAction && prev !== after) { 
        api.dispatch(addToHistory(api.getState().editor));
    }
    return result;
  };

export const store: Store<RootState> = createStore(rootReducer, applyMiddleware(makeHistory));
