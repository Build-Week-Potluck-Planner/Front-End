import React from 'react'

function Event(props){
    const { event_name, date, time, description, address, city, state } = props
    return (
        <div className='event'>
            <h4>Title of event: {event_name}</h4>
            <p>Date: {date}</p>
            <p>Time: {time}</p>
            <p>Description: {description}</p>
            <p>Address: {address}</p>
            <br></br>
            <p>{city}, </p>
            <p>{state}</p>
            {/* <p>Organizer: {organizer}</p>
            <p>Email address of organizer: {email}</p>
            <p>Guests: {guests}</p>
            <p>Location: {location}</p>
            <p>Items: */}
                {/* <ul>
                    {items.map((like, idx) => <li key={idx}>{like}</li>)}
                </ul> */}
            {/* </p> */}
        </div>
    )
}

export default Event