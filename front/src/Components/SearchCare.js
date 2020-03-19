import React, { useState, useContext, useEffect } from 'react';
import { Context } from '../hookAndContext/context';
import api from '../services/api'

const SearchCare = (props) => {

    let searchContext = useContext(Context);

    const [allUsers, setAllUsers] = useState([]);

    let {searchQuery} = searchContext;

    useEffect(() => {
        api.get(`/searchCare`, {withCredentials: true})
        .then(response => {
            setAllUsers(response.data);
        }).catch(err => {
            console.error(err);
        });
    
    }, [])

    const displayUsers = () => {
       return allUsers.map(eachUser => {
           console.log(eachUser);
            return <div className='careUser-box' key={eachUser._id}>
            <h5>{eachUser.firstName} {eachUser.lastName}</h5>
            
            </div>
        })
    }
 
    return (
        <div className='searchCare-container'>
        <div className='searchCare-filter-container'>Filters</div>
        {allUsers.length ? displayUsers() : null}
        
        </div>
    )
}

export default SearchCare;

     // console.log(`/search?${searchQuery}`)
        // api.get(`/search?${searchQuery}`, {withCredentials: true})
        // .then(response => {
        //     console.log(response.data);
        // }).catch(err => {
        //     console.error(err);
        // });