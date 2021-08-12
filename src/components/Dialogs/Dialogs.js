import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = (props) => {

    let dialogsElement = props.state.dialogs.map(d =>  <DialogItem name={d.name} id={d.id}/>);
    let messagesElements = props.state.messages.map(m => <Message message={m.message}/>);

    let newMes = React.createRef();
    let clickMessage = () => {
        let text = newMes.current.value;
        alert(text);
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElement}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
            <textarea ref={newMes}></textarea>
            <button onClick={clickMessage}>Click</button>
        </div>
    )
}

export default Dialogs;