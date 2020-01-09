import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = (props) => {
    let dialogsElements = props.state.dialogs.map( dialog => <DialogItem name={dialog.name} id={dialog.id} />);
    let messsagesElements = props.state.messages.map( message => <Message message={message.message} />);

    let newMessageElement = React.createRef();

    let addMessage = () => {
        let text = newMessageElement.current.value;
        alert(text)
    }

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                { dialogsElements }
            </div>
            <div className={classes.messages}>
                { messsagesElements }
                <div>
                    <textarea ref={ newMessageElement } />
                </div>
                <div>
                    <button onClick={ addMessage }>Send</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;