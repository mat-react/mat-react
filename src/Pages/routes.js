import React from "react";


const Dashboard = React.lazy(() => import('./Dashboard/Dashboard'))
const Travel = React.lazy(() => import('./Dashboard/Travel'))
const Ecommerce = React.lazy(() => import('./Dashboard/Ecommerce'))
const NotFound = React.lazy(() => import('./Error/NotFound'))

// ui
const UiWidgets = React.lazy(() => import("./UI/Widgets/UiWidgets"))
const UIAlert = React.lazy(() => import("./UI/Components/AlertPage"))
const UIButton = React.lazy(() => import("./UI/Components/ButtonPage"))



const routes = [

    {name: "Home", component: Dashboard, exact: true, path: "/"},
    {name: "Travel", component: Travel, exact: true, path: "/dashboard/Travel"},
    {name: "Ecommerce", component: Ecommerce, exact: true, path: "/dashboard/ecommerce"},

    {name: "Alert", component: UIAlert, exact: true, path: "/ui/components/alert"},
    {name: "Button", component: UIButton, exact: true, path: "/ui/components/button"},
    {name: "UiWidgets", component: UiWidgets, exact: true, path: "/ui/widgets"},

    {name: "NotFound", component: NotFound, exact: true, path: "*"},

];

export default routes