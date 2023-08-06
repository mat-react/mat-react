import { Dashboard, Storefront, Leaderboard, Mail, BarChart, Widgets, WidgetsRounded } from "@mui/icons-material";

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
        icon: Leaderboard,
        to: "mail/inbox"
      },
      { 
        title: "Sent",
        to: "mail/sent"
      }
    ]
  },
  {
    type: "title", 
    title: "UI Element"
  }, 
  {
    icon: WidgetsRounded,
    title: "Components",
    route_start: "ui/components",
    items: [
      {
        title: "Alert",
        to: "ui/components/alert",
      }, 
      { 
        title: "Button",
        to: "ui/components/button",
      },
      { 
        title: "Progress",
        to: "ui/components/progress"
      },
      { 
        title: "Spinner",
        to: "ui/components/spinner"
      },
      { 
        title: "Toast",
        to: "ui/components/toast"
      }
    ]
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
