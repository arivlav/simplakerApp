import React from 'react';
import '../../Modal.css'
import Button from 'src/components/TopBar/Bars/ToolBar/Button/Button'
import { store } from 'src/store/store';
import { closeModal } from 'src/store/actionCreators/viewAction'

type ButtonProps = {
  title: string,
  onclick: Function
}

function SingleFooterButton(props: ButtonProps) {
    return (
      <div className="footer__alignTwoButton">
        <Button className="footer__btn footer__btn_ok" label={props.title} onclick={props.onclick} />
        <Button className="footer__btn footer__btn_cancel" label="Cancel" onclick={() => store.dispatch(closeModal())} />
      </div>
    )
}

export default SingleFooterButton;