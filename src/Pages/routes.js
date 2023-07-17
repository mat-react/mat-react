import React from "react";


const Dashboard = React.lazy(() => import('./Dashboard/Dashboard'))
const Travel = React.lazy(() => import('./Dashboard/Travel'))
const NotFound = React.lazy(() => import('./Error/NotFound'))



const routes = [

    {name: "Home", component: Dashboard, exact: true, path: "/"},
    {name: "Travel", component: Travel, exact: true, path: "/dashboard/ecommerce"},
    {name: "NotFound", component: NotFound, exact: true, path: "*"},

];

export default routes