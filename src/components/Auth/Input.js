import React from 'react'



const Input = ({name, handleChange, autoFocus, label, type, handleShowPassword }) => {
    return (
        <div>
            <input 
            name={name} 
            required
            placeholder={label} 
            type={type} 
            onChange={handleChange} 
            autoFocus={autoFocus}
            className=""
            
            
            />
        </div>
    )
}

export default Input
