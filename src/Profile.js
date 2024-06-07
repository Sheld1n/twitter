import React, { useState } from 'react'

export default function Profile(props) {

    let [name, setName] = useState(props.data.profile.name)
    let [about, setAbout] = useState(props.data.profile.about)

    function editor(){
        let name = prompt('Your Name')
        let about = prompt('Your Info')

        setName(name)
        setAbout(about)
    }

    return (
        <div className='profile'>
            <div className='background'>

            </div>
            <div className='info'>
                <img src={props.data.profile.image} width="200" />
                <div className="fullName">
                    <div>
                        <h1>{name}</h1>
                        <p>{props.data.profile.username}</p>
                    </div>
                    <button>Follow</button>
                </div>
                <div className="AboutUser">
                    <h3>About me</h3>
                    <button className='info_editor' onClick={editor}>Edit Your Info</button>
                    <div className="AboutContainer">
                        <p>
                            {about}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
