import React, { FunctionComponent, useState } from 'react'
//import { ModalType } from 'src/store/store';
import './Modal.css'
// import { connect } from 'react-redux'
// import { ModalType, RootState } from 'src/store/store'
// import { showModal, closeModal } from 'src/store/actionCreators/viewAction'

export type ModalStateType = {
    active: Boolean,
    type: Number,
}

function Modal(modal: ModalStateType = { active: true, type: 1 }) {
    const [modalState, setModalState] = useState(modal);
    const closeModal = () => setModalState({...modalState, active: false })
    return (
        <div className={modal.active ? "modal active" : "modal"} onClick={() => closeModal()}>
            <div className={modal.active ? "modal__content active" : "modal__content"} onClick={(e) => e.stopPropagation()}>
                <div className="content__header">
                    <button className="header__closeBtn" title="Закрыть окно" onClick={() => closeModal()}>X</button>
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

// function mapStateToProps(state: RootState) {
//     return { modal: state.view.modal }
// }

// const mapDispatchToProps = (dispatch: Function) => {
//     return {
//         showModal: (modal: ModalType) => dispatch(showModal(modal)),
//         closeModal: () => dispatch(closeModal()),
//     }
// }

// type StateProps = ReturnType<typeof mapStateToProps>
// type DispatchProps = ReturnType<typeof mapDispatchToProps>

// type Props = StateProps & DispatchProps

// export default connect(mapStateToProps, mapDispatchToProps)(Modal);
