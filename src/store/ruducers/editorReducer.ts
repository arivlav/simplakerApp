import { Editor, Identifier, Mode, Slide } from "src/types";
import { defaultEditor } from "src/store/states/defaultEditorState"
import { defaultSlide } from "src/store/states/defaultSlideState"
import { AnyAction } from "redux"
import { generateIdentifier, SLIDE_HEIGHT, SLIDE_WIDTH } from 'src/helpers/editorHelper';
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
export const SET_CONTENT_COORDINATES = 'SET_CONTENT_COORDINATES';
export const ACTIVE_CONTENT = 'ACTIVE_CONTENT';
export const CONTENT_PLACE_DOWN = 'CONTENT_PLACE_DOWN';
export const CHANGE_CONTENT_FILL_COLOR = 'CHANGE_CONTENT_FILL_COLOR';
export const CONTENT_PLACE_UP = 'CONTENT_PLACE_UP';
export const CHANGE_CONTENT_STROKE_COLOR = 'CHANGE_CONTENT_STROKE_COLOR';
export const CHANGE_CONTENT_STROKE_WIDTH = 'CHANGE_CONTENT_STROKE_WIDTH';
export const CHANGE_CONTENT_FONT_FAMILY = 'CHANGE_CONTENT_FONT_FAMILY';
export const CHANGE_CONTENT_FONT_STYLE = 'CHANGE_CONTENT_FONT_STYLE';
export const CHANGE_CONTENT_FONT_SIZE = 'CHANGE_CONTENT_FONT_SIZE';
export const CHANGE_CONTENT_TEXT = 'CHANGE_CONTENT_TEXT';
export const NARROW_CONTENT = 'NARROW_CONTENT';
export const EXTEND_CONTENT = 'EXTEND_CONTENT';
export const EXTEND_VERTICAL_CONTENT = 'EXTEND_VERTICAL_CONTENT';
export const NARROW_VERTICAL_CONTENT = 'NARROW_VERTICAL_CONTENT';


export const editorReducer = (editor: Editor, action: AnyAction): Editor => {
    const extendStep = 10;
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
            let editorMode: Mode;
            if (editor.mode === "edit") {
                editorMode = "view"
            } else {
                editorMode = "edit"
            }
            return {
                ...editor,
                mode: editorMode
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
                    slideList: editor.presentation.slideList.map((slide: Slide) => slide.id === editor.presentation.activeSlide
                        ? {
                            ...slide,
                            activeContent: '',
                        }
                        : {
                            ...slide,
                        }
                    ),
                }
            }
        case DELETE_SLIDES:
            newSlideList = editor.presentation.slideList.filter((slide) => editor.presentation.selectedSlides.selectedSlides.find((identifier) => identifier === slide.id) === undefined);
            if (newSlideList.length > 0) {
                newActiveSlide = (newSlideList.find((slide) => slide.id === editor.presentation.activeSlide) === undefined) ? newSlideList[0].id : editor.presentation.activeSlide;
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
                        selectedSlides: editor.presentation.selectedSlides.selectedSlides.filter((identifier) => identifier !== action.slidesIdentifier),
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
        case DELETE_CONTENT:
            return {
                ...editor,
                presentation: {
                    ...editor.presentation,
                    slideList: editor.presentation.slideList.map((slide) => slide.id === editor.presentation.activeSlide
                        ? {
                            ...slide,
                            contentList: [...slide.contentList].filter((content) => content.id !== slide.activeContent)
                        }
                        : {
                            ...slide,
                        }
                    ),
                }
            }
        case CONTENT_PLACE_UP:
            return {
                ...editor,
                presentation: {
                    ...editor.presentation,
                    slideList: editor.presentation.slideList.map((slide) => slide.id === editor.presentation.activeSlide
                        ? {
                            ...slide,
                            contentList: [...slide.contentList].map((content) => content.id === slide.activeContent
                                ? {
                                    ...content,
                                    zIndex: content.zIndex + 1,
                                }
                                : {
                                    ...content
                                }
                            )
                        }
                        : {
                            ...slide,
                        }
                    ),
                }
            }
        case CONTENT_PLACE_DOWN:
            return {
                ...editor,
                presentation: {
                    ...editor.presentation,
                    slideList: editor.presentation.slideList.map((slide) => slide.id === editor.presentation.activeSlide
                        ? {
                            ...slide,
                            contentList: [...slide.contentList].map((content) => content.id === slide.activeContent
                                ? {
                                    ...content,
                                    zIndex: content.zIndex - 1,
                                }
                                : {
                                    ...content
                                }
                            )
                        }
                        : {
                            ...slide,
                        }
                    ),
                }
            }
        case EXTEND_CONTENT:
            return {
                ...editor,
                presentation: {
                    ...editor.presentation,
                    slideList: editor.presentation.slideList.map((slide) => slide.id === editor.presentation.activeSlide
                        ? {
                            ...slide,
                            contentList: [...slide.contentList].map((content) => content.id === slide.activeContent
                                ? {
                                    ...content,
                                    width: (content.width + 5 <= SLIDE_WIDTH) ? content.width + 5 : SLIDE_WIDTH,
                                }
                                : {
                                    ...content
                                }
                            )
                        }
                        : {
                            ...slide,
                        }
                    ),
                }
            }
        case NARROW_CONTENT:
            return {
                ...editor,
                presentation: {
                    ...editor.presentation,
                    slideList: editor.presentation.slideList.map((slide) => slide.id === editor.presentation.activeSlide
                        ? {
                            ...slide,
                            contentList: [...slide.contentList].map((content) => content.id === slide.activeContent
                                ? {
                                    ...content,
                                    width: (content.width - extendStep >= 0) ? content.width - extendStep : 0,
                                }
                                : {
                                    ...content
                                }
                            )
                        }
                        : {
                            ...slide,
                        }
                    ),
                }
            }
        case EXTEND_VERTICAL_CONTENT:
            return {
                ...editor,
                presentation: {
                    ...editor.presentation,
                    slideList: editor.presentation.slideList.map((slide) => slide.id === editor.presentation.activeSlide
                        ? {
                            ...slide,
                            contentList: [...slide.contentList].map((content) => content.id === slide.activeContent
                                ? {
                                    ...content,
                                    height: (content.height + extendStep <= SLIDE_HEIGHT) ? content.height + extendStep : SLIDE_HEIGHT,
                                }
                                : {
                                    ...content
                                }
                            )
                        }
                        : {
                            ...slide,
                        }
                    ),
                }
            }
        case NARROW_VERTICAL_CONTENT:
            return {
                ...editor,
                presentation: {
                    ...editor.presentation,
                    slideList: editor.presentation.slideList.map((slide) => slide.id === editor.presentation.activeSlide
                        ? {
                            ...slide,
                            contentList: [...slide.contentList].map((content) => content.id === slide.activeContent
                                ? {
                                    ...content,
                                    height: (content.height - 5 >= 0) ? content.height - extendStep : 0,
                                }
                                : {
                                    ...content
                                }
                            )
                        }
                        : {
                            ...slide,
                        }
                    ),
                }
            }
        case CHANGE_CONTENT_FILL_COLOR:
            return {
                ...editor,
                presentation: {
                    ...editor.presentation,
                    slideList: editor.presentation.slideList.map((slide) => slide.id === editor.presentation.activeSlide
                        ? {
                            ...slide,
                            contentList: [...slide.contentList].map((content) => content.id === slide.activeContent
                                ? {
                                    ...content,
                                    type: {
                                        ...content.type,
                                        fillColor: action.color
                                    },
                                }
                                : {
                                    ...content
                                }
                            )
                        }
                        : {
                            ...slide,
                        }
                    ),
                }
            }
        case CHANGE_CONTENT_STROKE_COLOR:
            return {
                ...editor,
                presentation: {
                    ...editor.presentation,
                    slideList: editor.presentation.slideList.map((slide) => slide.id === editor.presentation.activeSlide
                        ? {
                            ...slide,
                            contentList: [...slide.contentList].map((content) => content.id === slide.activeContent
                                ? {
                                    ...content,
                                    type: {
                                        ...content.type,
                                        strokeColor: action.color
                                    },
                                }
                                : {
                                    ...content
                                }
                            )
                        }
                        : {
                            ...slide,
                        }
                    ),
                }
            }
        case CHANGE_CONTENT_STROKE_WIDTH:
            return {
                ...editor,
                presentation: {
                    ...editor.presentation,
                    slideList: editor.presentation.slideList.map((slide) => slide.id === editor.presentation.activeSlide
                        ? {
                            ...slide,
                            contentList: [...slide.contentList].map((content) => content.id === slide.activeContent
                                ? {
                                    ...content,
                                    type: {
                                        ...content.type,
                                        strokeWeight: action.width
                                    },
                                }
                                : {
                                    ...content
                                }
                            )
                        }
                        : {
                            ...slide,
                        }
                    ),
                }
            }
        case CHANGE_CONTENT_FONT_FAMILY:
            return {
                ...editor,
                presentation: {
                    ...editor.presentation,
                    slideList: editor.presentation.slideList.map((slide) => slide.id === editor.presentation.activeSlide
                        ? {
                            ...slide,
                            contentList: [...slide.contentList].map((content) => content.id === slide.activeContent
                                ? {
                                    ...content,
                                    type: {
                                        ...content.type,
                                        fontFamily: action.font
                                    },
                                }
                                : {
                                    ...content
                                }
                            )
                        }
                        : {
                            ...slide,
                        }
                    ),
                }
            }
        case CHANGE_CONTENT_FONT_STYLE:
            return {
                ...editor,
                presentation: {
                    ...editor.presentation,
                    slideList: editor.presentation.slideList.map((slide) => slide.id === editor.presentation.activeSlide
                        ? {
                            ...slide,
                            contentList: [...slide.contentList].map((content) => content.id === slide.activeContent
                                ? {
                                    ...content,
                                    type: {
                                        ...content.type,
                                        fontStyle: action.style
                                    },
                                }
                                : {
                                    ...content
                                }
                            )
                        }
                        : {
                            ...slide,
                        }
                    ),
                }
            }
        case CHANGE_CONTENT_FONT_SIZE:
            return {
                ...editor,
                presentation: {
                    ...editor.presentation,
                    slideList: editor.presentation.slideList.map((slide) => slide.id === editor.presentation.activeSlide
                        ? {
                            ...slide,
                            contentList: [...slide.contentList].map((content) => content.id === slide.activeContent
                                ? {
                                    ...content,
                                    type: {
                                        ...content.type,
                                        fontSize: action.size
                                    },
                                }
                                : {
                                    ...content
                                }
                            )
                        }
                        : {
                            ...slide,
                        }
                    ),
                }
            }
        case CHANGE_CONTENT_TEXT:
            return {
                ...editor,
                presentation: {
                    ...editor.presentation,
                    slideList: editor.presentation.slideList.map((slide) => slide.id === editor.presentation.activeSlide
                        ? {
                            ...slide,
                            contentList: [...slide.contentList].map((content) => content.id === slide.activeContent
                                ? {
                                    ...content,
                                    type: {
                                        ...content.type,
                                        text: action.text
                                    },
                                }
                                : {
                                    ...content
                                }
                            )
                        }
                        : {
                            ...slide,
                        }
                    ),
                }
            }
        case SET_CONTENT_COORDINATES:
            return {
                ...editor,
                presentation: {
                    ...editor.presentation,
                    slideList: editor.presentation.slideList.map((slide) => slide.id === editor.presentation.activeSlide
                        ? {
                            ...slide,
                            contentList: slide.contentList.map((content) => content.id === slide.activeContent
                                ? {
                                    ...content,
                                    coordinates: {
                                        ...content.coordinates,
                                        x: action.x,
                                        y: action.y
                                    }

                                }
                                : {
                                    ...content
                                }
                            )
                        }
                        : {
                            ...slide,
                        }
                    ),
                }
            }
        case ACTIVE_CONTENT:
            return {
                ...editor,
                presentation: {
                    ...editor.presentation,
                    slideList: editor.presentation.slideList.map((slide) => slide.id === editor.presentation.activeSlide
                        ? {
                            ...slide,
                            activeContent: action.activeContent
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