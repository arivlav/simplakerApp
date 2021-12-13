import React from 'react'
import './ModalConfirm.css'
import { connect } from 'react-redux'
import { RootState } from 'src/store/store'
import { showModal } from 'src/store/actionCreators/viewAction'

function ModalConfirm(props: Props) {
    return (
        <div className={props.active ? "modal active" : "modal"} onClick={() => props.showModal(false)}>
            <div className={props.active ? "modal__content active" : "modal__content"} onClick={(e) => e.stopPropagation()}>
                <div className="content__header">
                    {props.header}
                    <button className="header__closeBtn" title="Закрыть окно" onClick={() => props.showModal(false)}>X</button>
                </div>
                <div className="clear"></div>
                <hr />
                <div className="content__body">
                    {props.body}
                </div>
                <div className="clear"></div>
                <hr />
                <div className="content__footer">
                    {props.footer}
                </div>
            </div>
        </div>
    );
}

function mapStateToProps(state: RootState) {
    return { active: state.view.modalConfirm.active }
}

const mapDispatchToProps = (dispatch: Function) => {
    return {
        showModal: (active: boolean) => dispatch(showModal(active)),
    }
}

type StateProps = ReturnType<typeof mapStateToProps>
type DispatchProps = ReturnType<typeof mapDispatchToProps>
type OwnProps = {
    header: string;
    body: string;
    footer: string;
}

type Props = StateProps & DispatchProps & OwnProps

export default connect(mapStateToProps, mapDispatchToProps)(ModalConfirm);
