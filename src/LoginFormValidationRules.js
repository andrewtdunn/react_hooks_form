export default function validate(values) {
    let errors = {};
    if (!values.visitor) {
        errors.visitor = 'Name is required';
    } else if (/<\/?[a-z][\s\S]*>/i.test(values.visitor)){
        errors.visitor = 'Name is invalid.';
    }
    if (!values.email) {
        errors.email = 'Email address is required';
    } else if (!/^(([^<>()[]\\.,;:\s@"]+(\.[^<>()[]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(values.email)){
        errors.email = 'Email address is invalid';
    }
    if (!values.message) {
        errors.message = 'Message is required';
    } else if (/<\/?[a-z][\s\S]*>/i.test(values.message)){
        errors.message = 'Message must be valid';
    } else if (values.message.length > 10) {
        errors.message = "Too long son!!";
    }
    return errors;
}