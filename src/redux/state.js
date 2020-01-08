let state = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hi, how are  you?', likesCount: 12},
            {id: 2, message: 'It\'s my first post', likesCount: 11},
            {id: 3, message: 'Bla bla', likesCount: 123},
            {id: 4, message: 'Yo yo yo', likesCount: 345345}
        ]
    },
    dialogsPage: {
        dialogs: [
            {id: 1, name: 'Kolia'},
            {id: 2, name: 'Fedya'},
            {id: 3, name: 'Illia'},
            {id: 4, name: 'Misha'},
            {id: 5, name: 'Olya'},
            {id: 6, name: 'Sasha'}
        ],
        messages: [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'How are you?'},
            {id: 3, message: 'Yo'},
            {id: 4, message: 'Yo'},
            {id: 5, message: 'Yo'}
        ]
    },
    sidebar: {
        friends: [
            {id: 1, friend: 'Kolia', avatar: 'https://via.placeholder.com/140x100'},
            {id: 2, friend: 'Fedya', avatar: 'https://via.placeholder.com/140x101'},
            {id: 3, friend: 'Illia', avatar: 'https://via.placeholder.com/140x102'}
        ]
    }
}

export default state;