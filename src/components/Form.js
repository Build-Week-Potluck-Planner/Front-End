import React from 'react';
// import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';

function Form(props){
    const { values, errors, change, submit, disabled } = props

    // const [startDate, setStartDate] = useState(new Date())

    const onSubmit = (evt) => {
        evt.preventDefault()
        submit()
    }

    const onChange = (evt) => {
        const { name, value, type, checked } = evt.target
        const valueToUse = type === 'checkbox' ? checked: value
        change(name, valueToUse)
    }

    return (
        <form className='form-container' onSubmit={onSubmit}>
            <div className='form inputs'>
                <label>
                    Name of Potluck
                    <input 
                        value={values.event_name}
                        onChange={onChange}
                        name='event_name'
                        type='text'
                        placeholder='Thanksgiving Potluck'
                    />
                </label>
                <label>
                    Date
                    <input 
                        value={values.date}
                        onChange={onChange}
                        name='date'
                        type='text'
                    /> 
                </label>
                <label>
                    Time
                    <input 
                        value={values.time}
                        onChange={onChange}
                        name='time'
                        type='text'
                    /> 
                </label>
                <label>
                    Description
                    <input 
                        value={values.description}
                        onChange={onChange}
                        name='description'
                        type='text'
                        placeholder='20th Annual Friendsgiving Potluck hosted by John Doe'
                    /> 
                </label>
                <label>
                    Address
                    <input 
                        value={values.address}
                        onChange={onChange}
                        name='address'
                        type='text'
                        placeholder='123 Sesame Street'
                    /> 
                </label>
                <label>
                    City
                    <input 
                        value={values.city}
                        onChange={onChange}
                        name='city'
                        type='text'
                        placeholder='Manhattan'
                    /> 
                </label>
                <label>
                    State
                    <input 
                        value={values.state}
                        onChange={onChange}
                        name='state'
                        type='text'
                        placeholder='New York'
                    /> 
                </label>
                {/* <label>
                    Email
                    <input 
                        value={values.email}
                        onChange={onChange}
                        name='email'
                        type='email'
                        placeholder='Johndoe123@abc.com'
                    /> 
                </label>
                <label>
                    Guests
                    <input 
                        value={values.guests}
                        onChange={onChange}
                        name='guests'
                        type='text'
                        placeholder='Jane Doe'
                    /> 
                </label>
                
                <label>
                    Location
                    <input 
                        value={values.location}
                        onChange={onChange}
                        name='location'
                        type='text'
                    /> 
                </label>
                <h4>Items to bring</h4>
                <label>
                    <input 
                        type='checkbox'
                        name='drinks'
                        checked={values.drinks}
                        onChange={onChange}
                    /> 
                    Drinks
                </label>
                <label>
                    <input 
                        type='checkbox'
                        name='desserts'
                        checked={values.desserts}
                        onChange={onChange}
                    /> 
                    Desserts
                </label>
                <label>
                    <input 
                        type='checkbox'
                        name='entrees'
                        checked={values.entrees}
                        onChange={onChange}
                    /> 
                    Entrees
                </label>
                <label>
                    <input 
                        type='checkbox'
                        name='utensils'
                        checked={values.utensils}
                        onChange={onChange}
                    /> 
                    Utensils
                </label> */}
                <br></br>
                {/* <DatePicker selected={startDate} onChange={date => setStartDate(date)} />
                <br></br> */}
                <button id='submit' disabled={disabled}>Submit</button>
                <br></br>
                <div className='errors'>
                    <div>{errors.name}</div>
                </div>
            </div>
        </form>
    )//return
}//Form

export default Form