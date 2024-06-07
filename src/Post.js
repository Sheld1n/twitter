import React, { useState } from 'react'

export default function Post(props) {

    let textRef = React.createRef()
    let likeRef = React.createRef()
    let postRef = React.createRef()
    let [like_status, setLikeStatus] = useState(0)
    let [likes, setLikes] = useState(0)

    function text() {
        // textRef.current.innerHTML = prompt('Put a text here')
    }

    function like() {
        if (like_status == 0) {
            likeRef.current.src = 'img/liked.png'
            setLikeStatus(1)
            setLikes(likes + 1)
        } else {
            likeRef.current.src = 'img/like.png'
            setLikeStatus(0)
            setLikes(likes - 1)
        }
    }

    function postFocus() {
        postRef.current.style.backgroundColor = '#38534a'
    }

    function postUnfocus() {
        postRef.current.style.backgroundColor = '#45675C'
    }

    return (
        <div class="post" ref={postRef} onMouseEnter={postFocus} onMouseLeave={postUnfocus}>
            <div class="user">
                <img src="img/profile.png" width="50" />
                <p title='user'>{props.user}</p>
            </div>
            <img src={props.image} width="500" />
            <h3 ref={textRef} onClick={text}>{props.text}</h3>
            <div class='like_button'>
                <img className='like' ref={likeRef} onClick={like} src="img/like.png" width="25" />
                <div class='likes'>
                    {likes}
                    <button className='delete_button' onClick={()=> {props.deletePost(props.id)}}>Delete Post</button>
                </div>
            </div>
        </div>
    )
}
