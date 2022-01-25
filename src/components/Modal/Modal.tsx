import React from 'react'
import './Modal.css'
import { connect } from 'react-redux'
import { RootState, store } from 'src/store/store'
import { showModal, closeModal, turnRightBar } from 'src/store/actionCreators/viewAction'
import { ACTIVE_CONTENT_FORM, ACTIVE_SLIDE_FORM, EMPTY_RIGHT_BAR } from 'src/components/RightBarContainer/RightBarContainer'
import { newPresentation, deleteSlides, openPresentation, deleteSlide, addContent, deleteContent } from 'src/store/actionCreators/editorAction'
import { clearHistory } from 'src/store/actionCreators/historyAction'
import SingleFooterButton from 'src/components/Modal/ModalElements/Buttons/SingleFooterButton'
import TwoFooterButton from 'src/components/Modal/ModalElements/Buttons/TwoFooterButton'
import { Editor } from 'src/types'

export type ModalStateType = {
    active: Boolean,
    type: Number,
}

type ModalInner = {
    header: string,
    body: string,
    footer: JSX.Element,
    confirmFunction?: Function,
}

export const CONFIRM_CREATE_NEW_PRESENTATION = 1;
export const OPEN_PRESENTATION = 2;
export const SAVE_PRESENTATION = 3;
export const EXPORT_PRESENTATION = 4;
export const PREVIEW_PRESENTATION = 5
export const NOT_CHOICE_SLIDES = 6;
export const CONFIRM_DELETE_SLIDES = 7;
export const CONFIRM_DELETE_SLIDE = 8;
export const ADD_IMAGE = 9;
export const DELETE_CONTENT_CONFIRM = 10;

function createNewPresentation() {
    store.dispatch(newPresentation());
    store.dispatch(clearHistory());
    store.dispatch(closeModal());
}

function openProject() {
    const modal = document.getElementsByClassName("modal")[0];
    const fileDialog = modal.querySelector('[name="fileDialog"]') as HTMLFormElement;
    let documentError = modal.getElementsByClassName("documentError")[0] as HTMLElement;
    if (fileDialog.files[0] === undefined || fileDialog.files[0].type !== "application/json") {
        documentError.textContent = "Select file *.json";
    } else {
        documentError.textContent = "";
        let reader = new FileReader();
        reader.readAsText(fileDialog.files[0]);
        reader.onload = function (e) {
            const result = e.target?.result as string;
            const resultJson = JSON.parse(result);
            let newEditor: Editor = {
                mode: resultJson.mode,
                presentation: resultJson.presentation
            };
            store.dispatch(openPresentation(newEditor));
            store.dispatch(clearHistory());
            store.dispatch(turnRightBar(EMPTY_RIGHT_BAR));
            store.dispatch(closeModal());
        };
    }
}

function deleteSlidesConfirm() {
    store.dispatch(deleteSlides());
    store.dispatch(closeModal());
    store.dispatch(turnRightBar(ACTIVE_SLIDE_FORM));
}

function deleteSlideConfirm() {
    store.dispatch(deleteSlide());
    store.dispatch(closeModal());
    store.dispatch(turnRightBar(ACTIVE_SLIDE_FORM));
}

function addImage() {
    const modal = document.getElementsByClassName("modal")[0];
    const fileDialog = modal.querySelector('[name="fileImageDialog"]') as HTMLFormElement;
    if (fileDialog.files[0] !== undefined) {
        let reader = new FileReader();
        reader.readAsDataURL(fileDialog.files[0]);
        reader.onload = function (e) {
            let newImage = e.target as FileReader;
            store.dispatch(addContent("image", newImage.result as string));
            store.dispatch(turnRightBar(ACTIVE_CONTENT_FORM));
        };
        store.dispatch(closeModal());
    }
}

function deleteContentConfirm() {
    store.dispatch(deleteContent());
    store.dispatch(closeModal());
    store.dispatch(turnRightBar(ACTIVE_SLIDE_FORM));
}

function renderModalInner(typeModal: Number): ModalInner {
    let modalInner: ModalInner = {
        header: '',
        body: '',
        footer: <SingleFooterButton title="OK" />,
    };
    switch (typeModal) {
        case CONFIRM_CREATE_NEW_PRESENTATION:
            modalInner = {
                header: 'Opening presentation',
                body: `<p>Do you really want to open a new document?</p>`,
                footer: <TwoFooterButton title="Open" onclick={createNewPresentation} />,
            };
            break;
        case OPEN_PRESENTATION:
            modalInner = {
                header: 'Confirmation',
                body: `<p>Change file: <input type="file" name="fileDialog"></p><p class="documentError"></p>`,
                footer: <TwoFooterButton title="Confirm" onclick={openProject} />,
            };
            break;
        case SAVE_PRESENTATION:
            const fileName = `${store.getState().editor.presentation.title}.json`;
            modalInner = {
                header: 'Message',
                body: `<p>Your current progress is saved in a file "${fileName}"</p>`,
                footer: <SingleFooterButton title="OK" />,
            };
            break;
        case NOT_CHOICE_SLIDES:
            modalInner = {
                header: 'Message',
                body: `<p>No slide selected</p>`,
                footer: <SingleFooterButton title="OK" />,
            };
            break;
        case CONFIRM_DELETE_SLIDES:
            modalInner = {
                header: 'Confirmation',
                body: `<p>Do you really want to delete selected slides?</p>`,
                footer: <TwoFooterButton title="Confirm" onclick={deleteSlidesConfirm} />,
            }
            break;
        case CONFIRM_DELETE_SLIDE:
            modalInner = {
                header: 'Confirmation',
                body: `<p>Do you really want to delete the active slide?</p>`,
                footer: <TwoFooterButton title="Confirm" onclick={deleteSlideConfirm} />,
            };
            break;
        case ADD_IMAGE:
            modalInner = {
                header: 'Confirmation',
                body: `<p>Add image: <input type="file" name="fileImageDialog"></p>`,
                footer: <TwoFooterButton title="Confirm" onclick={addImage} />,
            }
            break;
        case DELETE_CONTENT_CONFIRM:
            modalInner = {
                header: 'Confirmation',
                body: `<p>Do you really want to delete the active content?</p>`,
                footer: <TwoFooterButton title="Confirm" onclick={deleteContentConfirm} />,
            };

    }
    return modalInner;
}

function Modal(props: Props) {
    const modalInner: ModalInner = renderModalInner(props.modal.type);
    return (
        <div className={props.modal.active ? "modal active" : "modal"} onClick={() => props.closeModal()}>
            <div className={props.modal.active ? "modal__content active" : "modal__content"} onClick={(e) => e.stopPropagation()}>
                <div className="content__header">
                    <h3 className="header__title">{modalInner.header}</h3>
                    <button className="header__closeBtn" title="Close popup" onClick={() => props.closeModal()}>X</button>
                </div>
                <div className="clear"></div>
                <hr />
                <div className="content__body" dangerouslySetInnerHTML={{ __html: modalInner.body }}>
                </div>
                <div className="clear"></div>
                <hr />
                <div className="content__footer">
                    {modalInner.footer}
                </div>
            </div>
        </div>
    );
}

function mapStateToProps(state: RootState) {
    return { modal: state.view.modal }
}

const mapDispatchToProps = (dispatch: Function) => {
    return {
        showModal: (modal_type: Number) => dispatch(showModal(modal_type)),
        closeModal: () => dispatch(closeModal()),
    }
}

type StateProps = ReturnType<typeof mapStateToProps>
type DispatchProps = ReturnType<typeof mapDispatchToProps>

type Props = StateProps & DispatchProps

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
