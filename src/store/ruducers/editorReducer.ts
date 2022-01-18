import { Editor, Identifier, Slide } from "src/types";
import { defaultEditor } from "src/store/states/defaultEditorState"
import { defaultSlide } from "src/store/states/defaultSlideState"
import { AnyAction } from "redux"
import { generateIdentifier } from 'src/helpers/editorHelper';

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


export const editorReducer = (editor: Editor, action: AnyAction): Editor => {
    let newSlideList: Array<Slide> = [];
    let currentSlideList = [...editor.presentation.slideList];
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
            let deleteSlides: Array<Identifier> = [...editor.presentation.selectedSlides.selectedSlides];
            let isNotDelActiveSlide: boolean = false;
            currentSlideList.forEach((identifier, index) => {
                let result = deleteSlides.find((id) => id === currentSlideList[index].id);
                if (result === undefined) {
                    isNotDelActiveSlide = currentSlideList[index].id === editor.presentation.activeSlide;
                    newSlideList.push(currentSlideList[index]);
                };
            });
            if (newSlideList.length > 0) {
                newActiveSlide = (isNotDelActiveSlide) ? editor.presentation.activeSlide : newSlideList[0].id 
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
            let deleteSlide: Identifier = editor.presentation.activeSlide;
            currentSlideList.forEach((identifier, index) => {
                if (deleteSlide !== currentSlideList[index].id) {
                    newSlideList.push(currentSlideList[index]);
                };
            });
            return {
                ...editor,
                presentation: {
                    ...editor.presentation,
                    slideList: newSlideList,
                    activeSlide: (newSlideList.length > 0) ? newSlideList[0].id : "",
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
            let selectedSlides: Array<Identifier> = [];
            let currentSelectedSlides = [...editor.presentation.selectedSlides.selectedSlides]
            if (currentSelectedSlides.length > 0) {
                currentSelectedSlides.forEach((identifier, index) => {
                    if (identifier !== action.slidesIdentifier) {
                        selectedSlides.push(currentSelectedSlides[index]);
                    }
                });
            }
            return {
                ...editor,
                presentation: {
                    ...editor.presentation,
                    selectedSlides: {
                        ...editor.presentation.selectedSlides,
                        selectedSlides: selectedSlides,
                    }
                }
            }
        default:
            return editor
    }
}