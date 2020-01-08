import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
    let postsElements = props.posts
        .map(posts => <Post
            message={posts.message}
            likesCount={posts.likesCount}
            key={posts.id}
        /> );

    let newPostElement = React.createRef();

    let addPost = () => {
        let text = newPostElement.current.value;
        props.addPost(text);
        newPostElement.current.value = '';
    }

    return (
        <div className={classes.myPosts}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea ref={ newPostElement }></textarea>
                </div>
                <div>
                    <button onClick={ addPost }>Add post</button>
                </div>
            </div>
            <div className={classes.posts}>
                { postsElements }
            </div>
        </div>
    )
}

export default MyPosts;