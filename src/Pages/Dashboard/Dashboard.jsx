import React from 'react';

<<<<<<< HEAD
function Dashboard(props) {
    return (
        <div>
            Main Dashboard
=======
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
            
>>>>>>> new_theme
        </div>
    );
}

export default Dashboard;