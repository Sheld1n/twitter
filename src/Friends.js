import React, { useState } from 'react'
import Friend from './Friend'

export default function Friends(props) {

  let nameRef = React.createRef()
  let smsRef = React.createRef()
  let dataRef = React.createRef()
  let [friends, setFriends] = useState(props.data.friends)

  let friendsHTML = friends.map(p => {
    return <Friend name={p.name} message={p.message} image={p.image} time={p.time} deleteFriend={deleteFriend} id={p.id}></Friend>
  })

  function addSms() {
    let name = nameRef.current.value.trim()
    let sms = smsRef.current.value.trim()
    let data = dataRef.current.value.trim()

    if (name == '' || sms == '' || data == '') {
      alert('Fields cant be empty')
      return
    }

    let newSMS = {
      id: friends.length + 1,
      image: 'http://localhost:3000/img/profile.png',
      name: name,
      message: sms,
      time: data
    }

    setFriends([...friends, newSMS])

    nameRef.current.value = ''
    smsRef.current.value = ''
    dataRef.current.value = ''
  }

  function deleteFriend(friendid) {
    let agree = prompt('Do you want to delete this post?')
    if(agree == 'yes' || agree == 'Yes'){
      setFriends(friends.filter(p => p.id != friendid))
    } else{
      alert('SMS wasnt deleted')
    }
  }

  return (
    <div className='friends'>
      <h1>My Friends</h1>
      <div className='friends_form'>
        <input type="text" class="name_form" placeholder='Your name here' ref={nameRef} />
        <br></br><br></br>
        <input type="text" class="sms_form" placeholder='Your message for you friends' ref={smsRef} />
        <br></br><br></br>
        <input type="text" class="data_form" placeholder='Data of your message' ref={dataRef} />
        <br></br><br></br>
        <button class="sumbit_sms" onClick={addSms}>Send sms</button>
      </div>
      {friendsHTML}
    </div>
  )
}
