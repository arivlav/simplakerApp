import React, { FunctionComponent, useState } from 'react'
import './Modal.css'
import { connect } from 'react-redux'
import { RootState } from 'src/store/store'
import { showModal, closeModal } from 'src/store/actionCreators/viewAction'

export type ModalStateType = {
    active: Boolean,
    type: Number,
}

function Modal(props: Props) {
    return (
        <div className={props.modal.active ? "modal active" : "modal"} onClick={() => props.closeModal()}>
            <div className={props.modal.active ? "modal__content active" : "modal__content"} onClick={(e) => e.stopPropagation()}>
                <div className="content__header">
                    <button className="header__closeBtn" title="Закрыть окно" onClick={() => props.closeModal()}>X</button>
                </div>
                <div className="clear"></div>
                <hr />
                <div className="content__body">
                    dsfasfsdf
                </div>
                <div className="clear"></div>
                <hr />
                <div className="content__footer">
                    l,po,po
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
        showModal: (modal: ModalStateType) => dispatch(showModal(modal)),
        closeModal: () => dispatch(closeModal()),
    }
}

type StateProps = ReturnType<typeof mapStateToProps>
type DispatchProps = ReturnType<typeof mapDispatchToProps>

type Props = StateProps & DispatchProps

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
