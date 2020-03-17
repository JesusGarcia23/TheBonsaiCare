import React, {useContext, useEffect} from 'react';
import api from '../services/api';

const CarerProfile = (props) => {
    console.log(props)
    const { id } = props.match.params

    useEffect(() => {
        api.get(`/carerProfile/${id}`)
        .then(profile => {
            console.log(profile);
        }).catch(err => {
            console.error(err);
        })
    }, [])

    return (
        <div>Carer Profile</div>
    )
}

export default CarerProfile;