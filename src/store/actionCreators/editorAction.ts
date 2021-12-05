import { AnyAction } from 'redux';
import { Mode } from 'src/types';

const CHANGE_TITLE = 'CHANGE_TITLE';
const SAVE_PRESENTATION = 'SAVE_PRESENTATION';
const OPEN_PRESENTATION = 'OPEN_PRESENTATION';
const EXPORT_PRESENTATION = 'EXPORT_PRESENTATION';
const TOGGLE_PRESENTATION_MODE = 'TOGGLE_PRESENTATION_MODE';    

export function changeTitle(newTitle: string): AnyAction {
    return {
        type: CHANGE_TITLE,
        title: newTitle,
    }
}