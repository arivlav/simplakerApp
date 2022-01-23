import { AnyAction } from 'redux';
import { Background, Editor, Identifier, Mode } from 'src/types';
import { 
    CHANGE_TITLE, 
    ADD_SLIDE, 
    DELETE_SLIDES, 
    DELETE_SLIDE, 
    CHANGE_STATE_EDITOR, 
    NEW_PRESENTATION, 
    OPEN_PRESENTATION, 
    ACTIVE_SLIDE,
    SELECTED_SLIDES_ADD, 
    SELECTED_SLIDES_DELETE, 
    SELECTED_SLIDES_OFF, 
    SELECTED_SLIDES_ON, 
    CHANGE_BACKGROUND_SLIDE,
    ADD_CONTENT,
} from 'src/store/ruducers/editorReducer'

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

export function makeActiveSlide(slideId: Identifier): AnyAction {
    return {
        type: ACTIVE_SLIDE,
        activeSlide: slideId,
    }
}

export function deleteSlides(): AnyAction {
    return {
        type: DELETE_SLIDES,
    }
}

export function deleteSlide(): AnyAction {
    return {
        type: DELETE_SLIDE,
    }
}

export function changeSlideBackground(background: Background): AnyAction {
    return {
        type: CHANGE_BACKGROUND_SLIDE,
        background: background,
    }
}

export function selectedSlidesOn(): AnyAction {
    return {
        type: SELECTED_SLIDES_ON,
    }
}

export function selectedSlidesOff(): AnyAction {
    return {
        type: SELECTED_SLIDES_OFF,
    }
}

export function selectedSlidesAdd(slidesIdentifier: Identifier): AnyAction {
    return {
        type: SELECTED_SLIDES_ADD,
        slidesIdentifier: slidesIdentifier,
    }
}

export function selectedSlidesDelete(slidesIdentifier: Identifier): AnyAction {
    return {
        type: SELECTED_SLIDES_DELETE,
        slidesIdentifier: slidesIdentifier,
    }
}

export function addContent(contentType: string, imageUrl: string = ''): AnyAction {
    return {
        type: ADD_CONTENT,
        contentType: contentType,
        imageUrl: imageUrl,
    }
}