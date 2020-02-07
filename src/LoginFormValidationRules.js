var emailRegex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

export default function validate(values) {
    let errors = {};
    let messageLength = 250
    if (!(values.visitor || values.email || values.message)){
        errors.empty = true;
    }
    
    if (!values.visitor) {
        errors.visitor = "name required";
    } else if (/<\/?[a-z][\s\S]*>/i.test(values.visitor)){
        errors.visitor = "valid name required";
    }
    if (!values.email) {
        errors.email = "email required";
    } else if (!emailRegex.test(values.email)){
        errors.email = "valid email required";
    }
    if (!values.message) {
        errors.message = "message required";
    } else if (/<\/?[a-z][\s\S]*>/i.test(values.message)){
        errors.message = "valid message required";
    } else if (values.message.length > messageLength) {
        errors.message = `message must be less than ${messageLength} chars`;
    }
    return errors;
}