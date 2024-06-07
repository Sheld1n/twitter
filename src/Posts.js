import React, { useState } from 'react'
import Post from './Post'


export default function Posts(props) {

  let titleRef = React.createRef()
  let imageRef = React.createRef()
  let [posts, setPosts] = useState(props.posts)

  let postsHTML = posts.map(p => {
    return <Post user={p.user} text={p.text} image={p.image} deletePost={deletePost} id={p.id}></Post>
  })


  function addPost() {
    let title = titleRef.current.value.trim()
    let image = imageRef.current.value.trim()

    if (title == '' || image == '') {
      alert('Fields cant be empty')
      return
    }

    let newPost = {
      id: posts.length + 1,
      user: 'JalimsVlog',
      text: title,
      image: image
    }

    setPosts([...posts, newPost])

    titleRef.current.value = ''
    imageRef.current.value = ''
  }

  function deletePost(postid) {
    let agree = prompt('Do you want to delete this post?')
    if(agree == 'yes' || agree == 'Yes'){
      setPosts(posts.filter(p => p.id != postid))
    } else{
      alert('Post wasnt deleted')
    }
  }



  return (
    <div>
      <div class="post_form">
        <h1>What did you made today? 😊</h1>
        <div class="form">
          <input type="text" class="title_form" placeholder='Your title here' ref={titleRef} />
          <br></br><br></br>
          <div class="image_select">
            <input type="text" class="image_form" placeholder='Select the image' ref={imageRef} />
            <img src="img/image_select.png" width="20" />
          </div>
          <br></br><br></br>
          <button class="sumbit_button" onClick={addPost}>Sumbit</button>
        </div>
      </div>
      {postsHTML}
    </div>


  )
}
