import { AnyAction } from 'redux';
import { Background, Editor, Identifier } from 'src/types';
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
    SET_CONTENT_COORDINATES,
    ACTIVE_CONTENT,
    TOGGLE_PRESENTATION_MODE,
    DELETE_CONTENT,
    CONTENT_PLACE_DOWN,
    CONTENT_PLACE_UP,
    CHANGE_CONTENT_STROKE_WIDTH,
    CHANGE_CONTENT_FILL_COLOR,
    CHANGE_CONTENT_STROKE_COLOR,
    CHANGE_CONTENT_FONT_FAMILY,
    CHANGE_CONTENT_FONT_STYLE,
    CHANGE_CONTENT_FONT_SIZE,
    CHANGE_CONTENT_TEXT,
    NARROW_CONTENT,
    EXTEND_CONTENT,
    EXTEND_VERTICAL_CONTENT,
    NARROW_VERTICAL_CONTENT,
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

export function setCoordinates(x: number, y: number): AnyAction {
    return {
        type: SET_CONTENT_COORDINATES,
        x: x,
        y: y,
    }
}

export function setActiveContent(activeContent: string): AnyAction {
    return {
        type: ACTIVE_CONTENT,
        activeContent: activeContent,
    }
}

export function deleteContent(): AnyAction {
    return {
        type: DELETE_CONTENT,
    }
}

export function togglePresentationMode(): AnyAction {
    return {
        type: TOGGLE_PRESENTATION_MODE,
    }
}

export function contentUp(): AnyAction {
    return {
        type: CONTENT_PLACE_UP,
    }
}

export function contentDown(): AnyAction {
    return {
        type: CONTENT_PLACE_DOWN,
    }
}

export function changeContentFillColor(color: string): AnyAction {
    return {
        type: CHANGE_CONTENT_FILL_COLOR,
        color: color,
    }
}

export function changeContentStrokeColor(color: string): AnyAction {
    return {
        type: CHANGE_CONTENT_STROKE_COLOR,
        color: color,
    }
}

export function changeContentStrokeWidth(width: number): AnyAction {
    return {
        type: CHANGE_CONTENT_STROKE_WIDTH,
        width: width,
    }
}

export function changeContentFontFamily(font: string): AnyAction {
    return {
        type: CHANGE_CONTENT_FONT_FAMILY,
        font: font,
    }
}

export function changeContentFontStyle(style: string): AnyAction {
    return {
        type: CHANGE_CONTENT_FONT_STYLE,
        style: style,
    }
}

export function changeContentFontSize(size: number): AnyAction {
    return {
        type: CHANGE_CONTENT_FONT_SIZE,
        size: size,
    }
}

export function changeContentText(text: string): AnyAction {
    return {
        type: CHANGE_CONTENT_TEXT,
        text: text,
    }
}

export function narrowContent(): AnyAction {
    return {
        type: NARROW_CONTENT
    }
}

export function narrowVerticalContent(): AnyAction {
    return {
        type: NARROW_VERTICAL_CONTENT
    }
}

export function extendContent(): AnyAction {
    return {
        type: EXTEND_CONTENT
    }
}

export function extendVerticalContent(): AnyAction {
    return {
        type: EXTEND_VERTICAL_CONTENT
    }
}