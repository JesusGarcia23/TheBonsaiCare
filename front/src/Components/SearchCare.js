import React, { useState, useContext, useEffect } from 'react';
import { Context } from '../hookAndContext/context';
import api from '../services/api'

const SearchCare = (props) => {

    let searchContext = useContext(Context);

    let {searchQuery} = searchContext;

    useEffect(() => {
        console.log(`/search?${searchQuery}`)
        api.get(`/search?${searchQuery}`, {withCredentials: true})
        .then(response => {
            console.log(response.data);
        }).catch(err => {
            console.error(err);
        });
    
    }, [])
 
    return (
        <div>Search Care</div>
    )
}

export default SearchCare;