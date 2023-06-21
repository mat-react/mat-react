import React from "react";


const Dashboard = React.lazy(() => import('./Dashboard/Dashboard'))



const routes = [

    {name: "Home", component: Dashboard, exact: true, path: "/"},

];

export default routes