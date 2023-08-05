import React from "react";


const Dashboard = React.lazy(() => import('./Dashboard/Dashboard'))
const Travel = React.lazy(() => import('./Dashboard/Travel'))
const Ecommerce = React.lazy(() => import('./Dashboard/Ecommerce'))
const NotFound = React.lazy(() => import('./Error/NotFound'))

// ui
const UiWidgets = React.lazy(() => import("./UI/Widgets/UiWidgets"))
const UIAlert = React.lazy(() => import("./UI/Feedback/AlertPage"))



const routes = [

    {name: "Home", component: Dashboard, exact: true, path: "/"},
    {name: "Travel", component: Travel, exact: true, path: "/dashboard/Travel"},
    {name: "Ecommerce", component: Ecommerce, exact: true, path: "/dashboard/ecommerce"},

    {name: "Alert", component: UIAlert, exact: true, path: "/ui/components/alert"},
    {name: "UiWidgets", component: UiWidgets, exact: true, path: "/ui/widgets"},

    {name: "NotFound", component: NotFound, exact: true, path: "*"},

];

export default routes