import React, {useState} from 'react'
import OptionDetail from './option_detail'
import { setClipboard } from '../../../util/misc_util'
import ConfirmationModal from '../../modals/confirmation_modal'
export default function MessageOptions(props) {
    if(!props.hovered || props.remove) return null
    const [copy, setCopy] = useState(false)
    const [edit, setEdit] = useState(false)
    const [deleteMsg, setDelete] = useState(false)
    const [deleteModal, setDeleteModalOpen] = useState(false)

    function editText(){
        props.setEdit(true)
        props.setHidden(true)
        let msg = document.getElementById(`msg-${props.msg.id}`)
        msg.children[1].style.display = 'none'
        msg.classList.add('edit-bg')
    }

    return (
        <div className="message-options">
            <button className="option" onClick={() => setClipboard(props.msg.body)} onMouseEnter={() => setCopy(true)} onMouseLeave={() => setCopy(false)}>
                <svg className="option-icon copy" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50"><path  d="M15.243 19.194a1 1 0 1 0 0-2h-3.77a1 1 0 0 0-1 1v21.951a1 1 0 0 0 1 1h21.951a1 1 0 0 0 1-1V36.38a1 1 0 1 0-2 0v2.765h-19.95V19.194h2.769z"/><path d="M41.474 9.146H19.522a1 1 0 0 0-1 1v21.951a1 1 0 0 0 1 1h21.951a1 1 0 0 0 1-1V10.146a.998.998 0 0 0-.999-1zm-1 21.951H20.522V11.146h19.951v19.951z"/></svg>
            </button>
            <OptionDetail originalMsg={props.msg} class="left" msg="Copy message" open={copy} />
            <button onClick={editText} className="option" onMouseEnter={() => setEdit(true)} onMouseLeave={() => setEdit(false)}>
                <svg className="option-icon edit" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><path d="M11.41,39l20.3-20.29,3.58-3.59a3,3,0,0,0,0-4.24L32.12,7.71a3.06,3.06,0,0,0-4.24,0l-3.59,3.58-22,22A1,1,0,0,0,2,34v6a1,1,0,0,0,1,1H46V39ZM29.29,9.12a1,1,0,0,1,1.42,0l3.17,3.17a1,1,0,0,1,0,1.42L31,16.59,26.41,12ZM4,39V34.41l21-21L29.59,18l-21,21Z" data-name="32 Edit, Edit Pen, Edition"/></svg>
            </button>
            <OptionDetail originalMsg={props.msg} class="middle" msg="Edit message" open={edit} />

            <button className="option" onClick={() => setDeleteModalOpen(true)} onMouseEnter={() => setDelete(true)} onMouseLeave={() => setDelete(false)}>
                <svg className="option-icon trash" xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 60 60" viewBox="0 0 60 60"><path d="M18.3,56h23.6c2.7,0,4.8-2.2,4.8-4.8V18.7h2.1c0.6,0,1-0.4,1-1v-2.3c0-2.1-1.7-3.7-3.7-3.7h-8.5V9.1c0-1.7-1.4-3.1-3.1-3.1h-8.9c-1.7,0-3.1,1.4-3.1,3.1v2.6H14c-2.1,0-3.7,1.7-3.7,3.7v2.3c0,0.6,0.4,1,1,1h2.1v32.5C13.4,53.8,15.6,56,18.3,56z M44.7,51.2c0,1.6-1.3,2.8-2.8,2.8H18.3c-1.6,0-2.8-1.3-2.8-2.8V18.7h29.3V51.2z M24.5,9.1C24.5,8.5,25,8,25.6,8h8.9c0.6,0,1.1,0.5,1.1,1.1v2.6h-11V9.1z M12.3,15.4c0-1,0.8-1.7,1.7-1.7h32c1,0,1.7,0.8,1.7,1.7v1.3H12.3V15.4z"/><path d="M37.9 49.2c.6 0 1-.4 1-1V24.4c0-.6-.4-1-1-1s-1 .4-1 1v23.8C36.9 48.8 37.4 49.2 37.9 49.2zM30.1 49.2c.6 0 1-.4 1-1V24.4c0-.6-.4-1-1-1s-1 .4-1 1v23.8C29.1 48.8 29.5 49.2 30.1 49.2zM22.2 49.2c.6 0 1-.4 1-1V24.4c0-.6-.4-1-1-1s-1 .4-1 1v23.8C21.2 48.8 21.6 49.2 22.2 49.2z"/></svg>
            </button>
            <OptionDetail originalMsg={props.msg} class="right" msg="Delete message" open={deleteMsg} />

            <ConfirmationModal open={deleteModal} action={() => props.deleteMessage(props.msg.id)} onClose={() => setDeleteModalOpen(false)} actionType="Delete Message" headerMsg="Delete Message" prompt="Do you really want to delete this message? It will be lost forever."/>
        </div>
    )
}
