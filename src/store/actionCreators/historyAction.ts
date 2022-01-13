import { Editor } from 'src/types';
import { ADD_TO_HISTORY, UNDO, REDO, CLEAR_HISTORY } from 'src/store/ruducers/historyReducer'

export function addToHistory(editor: Editor) {
    return {
        type: ADD_TO_HISTORY,
        editor: editor
    }
}

export function undo() {
    return {
        type: UNDO,
    }
}

export function redo() {
    return {
        type: REDO,
    }
}

export function clearHistory() {
    return {
        type: CLEAR_HISTORY,
    }
}