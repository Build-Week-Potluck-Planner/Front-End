import * as yup from 'yup';

export default yup.object().shape({
    name: yup
        .string()
        .required('Please enter a name for the event')
        .min(6, 'Name of the event must be at least six characters'),
        



})