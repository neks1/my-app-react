import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let posts = [
    {id: 1, message: 'Hi, how are  you?', likesCount: 12},
    {id: 2, message: 'It\'s my first post', likesCount: 11},
    {id: 3, message: 'Bla bla', likesCount: 123},
    {id: 4, message: 'Yo yo yo', likesCount: 345345}
]

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

ReactDOM.render(<App posts={posts} dialogs={dialogs} messages={messages}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
