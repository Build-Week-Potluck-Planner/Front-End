import React from 'react'

function Event(props){
    const { name, email, organizer, guests, date, time, location, items } = props
    return (
        <div className='event'>
            <h4>Title of event: {name}</h4>
            <p>Organizer: {organizer}</p>
            <p>Email address of organizer: {email}</p>
            <p>Guests: {guests}</p>
            <p>Date: {date}</p>
            <p>Time: {time}</p>
            <p>Location: {location}</p>
            <p>Items:
                <ul>
                    {items.map((like, idx) => <li key={idx}>{like}</li>)}
                </ul>
            </p>
        </div>
    )
}

export default Event