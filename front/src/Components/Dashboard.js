import React, { useContext } from 'react';
import {Link } from 'react-router-dom';
import { Context } from '../hookAndContext/context';

const Dashboard = (props) => {
    const userContext = useContext(Context)
    console.log(userContext);

    const goToCreateBonsai = (event) => {
        event.preventDefault();
        props.history.push('/createBonsai');
    }
    return(
        <div>
        <div>This is DashBoard</div>

        <div className='create-bonsai-square'>
        <h2>Your Bonsais</h2>
        <button  onClick={e => goToCreateBonsai(e)}>Create new bonsai</button>
        </div>

        </div>
    )

}

export default Dashboard