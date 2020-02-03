import React, { useContext } from 'react';
import { Context } from '../hookAndContext/context';

const Dashboard = (props) => {
    const userContext = useContext(Context)
    console.log(userContext);
    console.log("Hello");
    return(
        <div>This is DashBoard</div>
    )

}

export default Dashboard