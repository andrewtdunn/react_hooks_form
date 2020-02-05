export default function validate(values) {
    console.log("validating", values);
    let errors = {};
    if (!values.visitor) {
        errors.visitor = 'Name is required';
    } else if (/<\/?[a-z][\s\S]*>/i.test(values.visitor)){
        errors.visitor = 'Name is invalid.';
    }
    if (!values.email) {
        errors.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(values.email)){
        errors.email = 'Email address is invalid';
    }
    if (!values.message) {
        errors.message = 'Message is required';
    } else if (/<\/?[a-z][\s\S]*>/i.test(values.message)){
        errors.message = 'Message must be valid';
    }
    return errors;
}