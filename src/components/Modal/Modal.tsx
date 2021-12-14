import React from 'react'
import ReactDOM from 'react-dom'
import './Modal.css'
import { connect } from 'react-redux'
import { ModalType, RootState } from 'src/store/store'
import { showModal, closeModal } from 'src/store/actionCreators/viewAction'

function Modal(props: Props) {
    return (
        <div className={props.modal.active ? "modal active" : "modal"} onClick={() => props.closeModal()}>
            <div className={props.modal.active ? "modal__content active" : "modal__content"} onClick={(e) => e.stopPropagation()}>
                <div className="content__header">
                    <button className="header__closeBtn" title="Закрыть окно" onClick={() => props.closeModal()}>X</button>
                </div>
                <div className="clear"></div>
                <hr />
                <div className="content__body" dangerouslySetInnerHTML={{ __html: props.modal.body}}>
                </div>
                <div className="clear"></div>
                <hr />
                <div className="content__footer">
                    {props.modal.footer}
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
        showModal: (modal: ModalType) => dispatch(showModal(modal)),
        closeModal: () => dispatch(closeModal()),
    }
}

type StateProps = ReturnType<typeof mapStateToProps>
type DispatchProps = ReturnType<typeof mapDispatchToProps>

type Props = StateProps & DispatchProps

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
