import React from "react";


const Dashboard = React.lazy(() => import('./Dashboard/Dashboard'))
<<<<<<< HEAD
=======
const NotFound = React.lazy(() => import('./Error/NotFound'))
>>>>>>> new_theme



const routes = [

    {name: "Home", component: Dashboard, exact: true, path: "/"},
<<<<<<< HEAD
=======
    {name: "NotFound", component: NotFound, exact: true, path: "*"},
>>>>>>> new_theme

];

export default routes