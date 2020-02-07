import React from 'react';
import useForm from "./useForm";
import validate from './LoginFormValidationRules';
import formRules from './formRules';
import FormRulesList from './FormRulesList';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faTimesCircle, faCheckCircle, faEnvelope } from '@fortawesome/free-solid-svg-icons'

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
                                <div className="control has-icons-left has-icons-right">
                                    <input 
                                        className={`input ${!errors.empty && (errors.visitor ? 'is-danger' : 'is-success')}`}
                                        type="text"
                                        name="visitor"
                                        onChange={handleChange}
                                        value={values.visitor || ''}
                                    />
                                    <span className="icon is-small is-left">
                                        <FontAwesomeIcon icon={faUser} /> 
                                    </span>
                                    <span className="icon is-small is-right">
                                        { !errors.empty && 
                                            <FontAwesomeIcon 
                                                icon={ (errors.visitor) ? faTimesCircle : faCheckCircle } 
                                                style={{ color: (errors.visitor) ? 'red' : 'green' }}    
                                            /> 
                                        }
                                    <i className="fas fa-check"></i>
                                    </span>
                                </div>
                                <div className="errorHolder">
                                    { (!errors.empty && errors.visitor) && <p className="help is-danger">{errors.visitor}</p> }
                                </div>
                            </div> 
                            <div className="field">
                                <label className="label">Email</label>
                                <div className="control has-icons-left has-icons-right">
                                    <input 
                                        className={`input ${!errors.empty && (errors.email ? 'is-danger' : 'is-success')}`}
                                        type="text"
                                        name="email"
                                        onChange={handleChange}
                                        value={values.email || ''}
                                    />
                                    <span className="icon is-small is-left">
                                        <FontAwesomeIcon icon={faEnvelope} /> 
                                    </span>
            
                                    <span className="icon is-small is-right">
                                        { !errors.empty && 
                                        <FontAwesomeIcon 
                                            icon={ (errors.email) ? faTimesCircle : faCheckCircle } 
                                            style={{ color: (errors.email) ? 'red' : 'green' }}    
                                        /> }
                                    <i className="fas fa-check"></i>
                                    </span>
                                </div>
                                <div className="errorHolder">
                                    { (!errors.empty && errors.email) && <p className="help is-danger">{errors.email}</p> }
                                </div>
                            </div>
                            <div className="field">
                                <label className="label">Message</label>
                                <div className="control">
                                    <textarea 
                                        className={`input ${!errors.empty && (errors.message ? 'is-danger' : 'is-success')}`}
                                        name="message" 
                                        onChange={handleChange}
                                        value={values.message || ''}
                                        
                                        />
                                </div>
                            </div>
                            <div className="errorHolder">
                                { (!errors.empty && errors.message) && <p className="help is-danger">{errors.message}</p> }
                            </div>
                            <br/>
                            <button type="submit" className="button is-block is-info is-fullwidth" disabled={Object.keys(errors).length !== 0}>SEND</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Form;