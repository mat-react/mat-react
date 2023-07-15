import React from "react";


const Dashboard = React.lazy(() => import('./Dashboard/Dashboard'))
const NotFound = React.lazy(() => import('./Error/NotFound'))



const routes = [

    {name: "Home", component: Dashboard, exact: true, path: "/"},
    {name: "NotFound", component: NotFound, exact: true, path: "*"},

];

export default routes