import React from 'react';
import useForm from "./useForm";
import validate from './LoginFormValidationRules';

const Form = () => {
    const { values, 
            handleChange, 
            handleSubmit,
            errors } = useForm(login, validate);

    function login() {
        console.log(values);
    }
    return (
        <div className="section is-fullheight">
            <div className="container">
                <div className="column is-4 is-offset-4">
                    <div className="box">
                        <form onSubmit={handleSubmit}>
                            <div className="field">
                            <label className="label">Name</label>   
                                <div className="control">
                                    <input 
                                        className={`input ${errors.visitor && 'is-danger'}`}
                                        type="text" 
                                        name="visitor" 
                                        onChange={handleChange}
                                        value={values.visitor || ''}
                                        />
                                    { errors.visitor && (
                                        <p className="help is-danger">{errors.visitor}</p>
                                    )}
                                </div>
                                <label className="label">Email</label>   
                                <div className="control">
                                    <input 
                                        className={`input ${errors.email && 'is-danger'}`}
                                        type="text" 
                                        name="email" 
                                        onChange={handleChange}
                                        value={values.email || ''}
                                        />
                                    { errors.email && (
                                        <p className="help is-danger">{errors.email}</p>
                                    )}
                                </div>
                                <div className="field">
                                    <label className="label">Message</label>
                                    <div className="control">
                                        <textarea 
                                            className={`input ${errors.message && 'is-danger'}`}
                                            name="message" 
                                            onChange={handleChange}
                                            value={values.message || ''}
                                            />
                                        { errors.message && (
                                            <p className="help is-danger">{errors.message}</p>
                                        )}
                                    </div>
                                </div>
                            </div>
                            <button type="submit" className="button is-block is-info is-fullwidth">Login</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Form;