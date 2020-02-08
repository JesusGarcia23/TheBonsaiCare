import React, { useContext } from 'react';
import {Link } from 'react-router-dom';
import { Context } from '../hookAndContext/context';

const Dashboard = (props) => {
    const userContext = useContext(Context)
    console.log(userContext);
    return(
        <div>
        <div>This is DashBoard</div>
        <Link to='/createBonsai'>Create new Bonsai</Link>
        </div>
    )

}

export default Dashboard