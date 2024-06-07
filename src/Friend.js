import React from 'react'

export default function Friend(props) {
    return (
        <div className='friend'>
            <img src={props.image} width='70'></img>
            <div className='text'>
                <h3>{props.name}</h3>
                <p>{props.message}</p>
                <p className='data'>{props.time}</p>
            </div>
            <button className='delete_sms' onClick={()=> {props.deleteFriend(props.id)}}>Delete SMS</button>
        </div>
    )
}
