import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = (props) => {

    let dialogs = [
        {id: 1, name: 'Kolia'},
        {id: 2, name: 'Fedya'},
        {id: 3, name: 'Illia'},
        {id: 4, name: 'Misha'},
        {id: 5, name: 'Olya'},
        {id: 6, name: 'Sasha'}
    ]

    let messages = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'Yo'},
        {id: 4, message: 'Yo'},
        {id: 5, message: 'Yo'}
    ]

    let dialogsElements = dialogs.map( dialog => <DialogItem name={dialog.name} id={dialog.id} />);
    let messsagesElements = messages.map( message => <Message message={message.message} />);

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                { dialogsElements }
            </div>
            <div className={classes.messages}>
                { messsagesElements }
            </div>
        </div>
    )
}

export default Dialogs;