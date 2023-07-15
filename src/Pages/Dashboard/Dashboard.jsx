import React from 'react';

import BreadCumb from '../../Components/UI/BreadCumb/BreadCumb';

function Dashboard(props) {
    return (
        <div>

            <div>
                <h1 className="text-dark font-bold text-xl">
                    Dashboard
                </h1>
                <BreadCumb links={[{title: "Dashboard", to: "/"}, {title: "Main"}]} current={"Main"} />
            </div>
                

            <div className='mt-10'>
                Main Dashboard
            </div>
            
        </div>
    );
}

export default Dashboard;