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
export const ACTIVE_SLIDE = 'ACTIVE_SLIDE';

export const editorReducer = (editor: Editor, action: AnyAction): Editor => {
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
            return {
                ...editor,
                presentation: {
                    ...editor.presentation,
                    slideList: [
                        ...editor.presentation.slideList,
                        {
                            id: generateIdentifier(),
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
                    activeSlide: action.slide,    
                }
            }    
        case DELETE_SLIDES:
            let newSlideList: Array<Slide> = [];
            let deleteSlides: Array<Identifier> = action.slides;
            let currentSlideList = [...editor.presentation.slideList];
            for (let i = 0; i < currentSlideList.length; i +=1) {
                let result = deleteSlides.find((id) => id === currentSlideList[i].id);
                if (result === undefined) {
                    newSlideList.push(currentSlideList[i]);
                };
            }
            return {
                ...editor,
                presentation: {
                    ...editor.presentation,
                    slideList: newSlideList,
                }
            }
        default:
            return editor
    }
}