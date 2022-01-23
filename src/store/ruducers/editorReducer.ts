import { Content, Editor, Identifier, Slide } from "src/types";
import { defaultEditor } from "src/store/states/defaultEditorState"
import { defaultSlide } from "src/store/states/defaultSlideState"
import { AnyAction } from "redux"
import { generateIdentifier } from 'src/helpers/editorHelper';
import { defaultContent } from "../states/defaultContentState";

export const CHANGE_STATE_EDITOR = 'CHANGE_STATE_EDITOR';
export const CHANGE_TITLE = 'CHANGE_TITLE';
export const NEW_PRESENTATION = 'NEW_PRESENTATION';
export const SAVE_PRESENTATION = 'SAVE_PRESENTATION';
export const OPEN_PRESENTATION = 'OPEN_PRESENTATION';
export const EXPORT_PRESENTATION = 'EXPORT_PRESENTATION';
export const TOGGLE_PRESENTATION_MODE = 'TOGGLE_PRESENTATION_MODE';
export const ADD_SLIDE = 'ADD_SLIDE';
export const DELETE_SLIDES = 'DELETE_SLIDES';
export const DELETE_SLIDE = 'DELETE_SLIDE';
export const ACTIVE_SLIDE = 'ACTIVE_SLIDE';
export const SELECTED_SLIDES_ADD = 'SELECTED_SLIDES_ADD';
export const SELECTED_SLIDES_DELETE = 'SELECTED_SLIDES_DELETE';
export const SELECTED_SLIDES_ON = 'SELECTED_SLIDES_ON';
export const SELECTED_SLIDES_OFF = 'SELECTED_SLIDES_OFF';
export const CHANGE_BACKGROUND_SLIDE = 'CHANGE_BACKGROUND_SLIDE';
export const ADD_CONTENT = 'ADD_CONTENT';
export const DELETE_CONTENT = 'DELETE_CONTENT';


export const editorReducer = (editor: Editor, action: AnyAction): Editor => {
    let newSlideList: Array<Slide> = [];
    let newActiveSlide: Identifier = "";
    switch (action.type) {
        case 'NEW_PRESENTATION':
            return defaultEditor
        case 'SAVE_PRESENTATION':
            return defaultEditor
        case 'OPEN_PRESENTATION':
            return action.editor
        case 'EXPORT_PRESENTATION':
            return defaultEditor
        case 'TOGGLE_PRESENTATION_MODE':
            return {
                ...editor,
                mode: action.mode
            }
        case CHANGE_STATE_EDITOR:
            return action.editor;
        case CHANGE_TITLE:
            return {
                ...editor,
                presentation: {
                    ...editor.presentation,
                    title: action.title
                }
            }
        case ADD_SLIDE:
            newActiveSlide = generateIdentifier();
            return {
                ...editor,
                presentation: {
                    ...editor.presentation,
                    activeSlide: newActiveSlide,
                    slideList: [
                        ...editor.presentation.slideList,
                        {
                            id: newActiveSlide,
                            contentList: defaultSlide.contentList,
                            background: defaultSlide.background,
                            activeContent: defaultSlide.activeContent,
                        },
                    ]
                }
            }
        case ACTIVE_SLIDE:
            return {
                ...editor,
                presentation: {
                    ...editor.presentation,
                    activeSlide: action.activeSlide,
                }
            }
        case DELETE_SLIDES:
            newSlideList = editor.presentation.slideList.filter((slide) => editor.presentation.selectedSlides.selectedSlides.find((identifier) => identifier === slide.id) === undefined);
            if (newSlideList.length > 0) {
                newActiveSlide = (newSlideList.find((slide) => slide.id === editor.presentation.activeSlide) === undefined) ?  newSlideList[0].id : editor.presentation.activeSlide;
            }
            return {
                ...editor,
                presentation: {
                    ...editor.presentation,
                    slideList: newSlideList,
                    activeSlide: newActiveSlide,
                }
            }
        case DELETE_SLIDE:
            newSlideList = editor.presentation.slideList.filter((slide) => slide.id !== editor.presentation.activeSlide);
            return {
                ...editor,
                presentation: {
                    ...editor.presentation,
                    slideList: newSlideList,
                    activeSlide: (newSlideList.length > 0) ? newSlideList[0].id : "",
                }
            }
        case CHANGE_BACKGROUND_SLIDE:
            return {
                ...editor,
                presentation: {
                    ...editor.presentation,
                    slideList: editor.presentation.slideList.map((slide: Slide) => slide.id === editor.presentation.activeSlide
                        ? {
                            ...slide,
                            background: {
                                ...slide.background,
                                type: action.background.type,
                                value: action.background.value,
                            }
                        }
                        : {
                            ...slide,
                        }
                    ),
                }
            }
        case SELECTED_SLIDES_ON:
            return {
                ...editor,
                presentation: {
                    ...editor.presentation,
                    selectedSlides: {
                        ...editor.presentation.selectedSlides,
                        selectedMode: true,
                    }
                }
            }
        case SELECTED_SLIDES_OFF:
            return {
                ...editor,
                presentation: {
                    ...editor.presentation,
                    selectedSlides: {
                        ...editor.presentation.selectedSlides,
                        selectedMode: false,
                        selectedSlides: [],
                    }
                }
            }
        case SELECTED_SLIDES_ADD:
            return {
                ...editor,
                presentation: {
                    ...editor.presentation,
                    selectedSlides: {
                        ...editor.presentation.selectedSlides,
                        selectedSlides: [
                            ...editor.presentation.selectedSlides.selectedSlides,
                            action.slidesIdentifier,
                        ],
                    }
                }
            }
        case SELECTED_SLIDES_DELETE:
            return {
                ...editor,
                presentation: {
                    ...editor.presentation,
                    selectedSlides: {
                        ...editor.presentation.selectedSlides,
                        selectedSlides: editor.presentation.selectedSlides.selectedSlides.filter((identifier) =>identifier !== action.slidesIdentifier),
                    }
                }
            }
        case ADD_CONTENT:
            const contentId = generateIdentifier();
            return {
                ...editor,
                presentation: {
                    ...editor.presentation,
                    slideList: editor.presentation.slideList.map((slide) => slide.id === editor.presentation.activeSlide
                        ? {
                            ...slide, 
                            contentList: [
                                ...slide.contentList,
                                {
                                    id: contentId,
                                    height: defaultContent.height,
                                    width: defaultContent.width,
                                    name: action.contentType,
                                    coordinates: defaultContent.coordinates,
                                    type: {
                                        ...defaultContent.type,
                                        imageUrl: (action.contentType !== null) ? action.imageUrl : defaultContent.type.imageUrl, 
                                    },
                                    zIndex: slide.contentList.length,
                                }
                            ],
                            activeContent: contentId,
                        }
                        : {
                            ...slide,
                        }
                    ),
                }
            }
        default:
            return editor
    }
}