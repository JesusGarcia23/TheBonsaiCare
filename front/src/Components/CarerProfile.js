import React, {useContext, useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import api from '../services/api';

const CarerProfile = (props) => {
    console.log(props)
    const { id } = props.match.params;
    const [careUser, setCareUser] = useState(null)

    useEffect(() => {
        api.get(`/carerProfile/${id}`)
        .then(profile => {
            setCareUser(profile.data)
        }).catch(err => {
            console.error(err);
        })
    }, [])

    const showUser = () => {
        return careUser !== null ? 
        <div className='careProfile-container'>
        <h3>{careUser.firstName} {careUser.lastName}</h3>
        <Link to={`${careUser._id}/contact`}>Get Quote</Link>
        
        
        </div> :
         <div>Loading</div>
    }

    console.log(careUser);
    return (
        <div>
        {showUser()}
        </div>
    )
}

export default CarerProfile;