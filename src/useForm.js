import { useState, useEffect } from 'react';

const useForm = (callback, validate) => {

    const [values, setValues] = useState({});
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    useEffect(() => {  
        if (Object.keys(errors).length === 0 && isSubmitting) {
            callback();
        }
    }, [errors, callback, isSubmitting]);

    useEffect(() => {
        // take action when isVisible Changed
        setErrors(validate(values));
     }, [values, validate])

    const handleSubmit = (event) => {
        console.log("handleSubmit");
        if (event) event.preventDefault();
        setIsSubmitting(true);
    }

    const handleChange = (event) => {
        event.persist();
        console.log(event.target.name, event.target.value);
        setValues(values => ({...values, [event.target.name]: event.target.value}));
        console.log("values", values);
        
    }

    return {
        handleChange,
        handleSubmit,
        values,
        errors,
    }
};

export default useForm;