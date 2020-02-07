import React from 'react';

const FormRulesList = ({formRules, errors}) => {
    return (
        <ul>
            {formRules.map( (rule) => (
                <li 
                    key={rule.id}
                    className={`help ${ (errors[rule.field] != rule.id ) ? 'is-success' : 'is-danger'}`}>
                        {rule.name}
                </li> 
            ))}
        </ul>
    )
}

export default FormRulesList;