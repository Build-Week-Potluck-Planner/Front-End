import * as yup from 'yup';

export default yup.object().shape({
    event_name: yup
        .string()
        .required('Please enter a name for the potluck event.')
        .min(6, 'Name of the event must be at least six characters'),
    date: yup
        .number()
        .required('Please enter a date for the potluck event.'),
    time: yup
        .number()
        .required('Please enter a time for the potluck event.'),
    description: yup
        .string()
        .required('Please enter a description for the potluck event.'),
    address: yup
        .string()
        .required('Please enter an address for the potluck event.'),
    city: yup
        .string()
        .required('Please enter a city for the potluck event.'),
    state: yup
        .string()
        .required('Please enter a state for the potluck event.'),
})