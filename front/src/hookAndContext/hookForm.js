import React, {useState} from 'react';

const useForm = (callback) => {
const [inputs, setInputs] = useState({})

const handleSubmitForm = (data, type, props) => {
    callback(data, type, props);
}

const handleInputChange = (event) => {
    event.preventDefault()
    event.persist()
    setInputs(inputs => ({...inputs, [event.target.name]: event.target.value }));
}
return {
    handleSubmitForm,
    handleInputChange,
    inputs, 
    setInputs
}
}

export default useForm;