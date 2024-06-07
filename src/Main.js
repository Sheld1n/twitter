import React from 'react'
import Post from './Post'
import Posts from './Posts'

export default function Main(props) {
    return (
        <main>
            <Posts posts={props.data.posts}></Posts>
        </main>

    )
}
