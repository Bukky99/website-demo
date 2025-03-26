import React from "react";

function Field(field) {
    
    return(
        <div className="form-group">
            {field.elementName === 'input' ?
                <input className="form-control"
                id={field.name}
                type={field.type}
                placeholder={field.placeholder}
                data-sb-validations="required"
                //value={field.value}
                onChange={e => field.onChange(e)}
                /> 
                :
                <textarea className="form-control"
                id={field.name}
                placeholder={field.placeholder}
                data-sb-validations="required"
                value={field.value}
                onChange={e => field.onChange(e)}
                />
            }       
        </div>
    )
}
export default Field;