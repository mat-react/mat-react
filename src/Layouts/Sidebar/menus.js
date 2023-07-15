import { Dashboard, Storefront, Leaderboard, Mail, BarChart, Widgets } from "@mui/icons-material";

export const menus = [
  {
    icon: Dashboard,
    title: "Dashboard",
    to: "/"
  },
  {
    icon: Storefront,
    title: "E-Commerce",
    to: "dashboard/ecommerce"
  },
  {
    icon: Leaderboard,
    title: "Analytics",
    to: "dashboard/analytics"
  }, 
  {
    type: "title", 
    title: "Apps"
  }, 
  {
    icon: Mail,
    title: "Mailbox",
    items: [
      {
        title: "Inbox",
      },
      {
        title: "Sent",
      }
    ]
  },
  {
    type: "title", 
    title: "UI Element"
  }, 
  {
    icon: BarChart,
    title: "Charts",
    to: "ui/charts"
  }, 
  {
    icon: Widgets,
    title: "Widgets",
    to: "ui/widgets"
  }

];
