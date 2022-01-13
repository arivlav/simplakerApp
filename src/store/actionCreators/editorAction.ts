import { AnyAction } from 'redux';
import { Editor, Identifier, Mode } from 'src/types';
import { CHANGE_TITLE, ADD_SLIDE, DELETE_SLIDES, CHANGE_STATE_EDITOR, NEW_PRESENTATION, OPEN_PRESENTATION, ACTIVE_SLIDE } from 'src/store/ruducers/editorReducer'

export function changeStateEditor(editor: Editor) {
    return {
        type: CHANGE_STATE_EDITOR,
        editor: editor
    }
}

export function newPresentation(): AnyAction {
    return {
        type: NEW_PRESENTATION,
    }
}

export function openPresentation(editor: Editor): AnyAction {
    return {
        type: OPEN_PRESENTATION,
        editor: editor,
    }
}

export function changeTitle(newTitle: string): AnyAction {
    return {
        type: CHANGE_TITLE,
        title: newTitle,
    }
}

export function addSlide(): AnyAction {
    return {
        type: ADD_SLIDE,
    }
}

export function makeActiveSlide(slide: Identifier): AnyAction {
    return {
        type: ACTIVE_SLIDE,
        activeSlide: slide,
    }
}

export function deleteSlides(slides: Array<Identifier>): AnyAction {
    return {
        type: DELETE_SLIDES,
        slides: slides,
    }
}