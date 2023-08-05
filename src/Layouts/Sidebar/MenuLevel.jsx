import React, { useEffect, useState } from "react";
import { List, Collapse} from "@mui/material";

import { hasChildren } from "../../Utils/hasMenuChildren";
import { NavLink, useLocation } from "react-router-dom";
 

const MenuLevel = ({ item }) => {
  const Component = hasChildren(item) ? MultiLevel : SingleLevel;
  return <Component item={item} />;
};

const SingleLevel = ({item}) => { 
    return(
        <li className="nav-item">
            <NavLink className="group text-muted-550 dark:text-muted-400 dark:group-hover:text-white-dark font-medium exact" to={item.to}>
                <div className="flex items-center">
                    {item.icon ? <item.icon className="shrink-0" /> : null }
                    <span className="ltr:pl-3 rtl:pr-3">
                        {item.title}
                    </span>
                </div>
            </NavLink>
        </li>
    )
}

const Single = ({item}) => {
    return(
        <li>
            <NavLink to={item?.to} >{item.title}</NavLink>
        </li>
    )
}

const MultiLevel = ({ item }) => {
  const { items: children } = item;
  const [open, setOpen] = useState(false);

  const location = useLocation();
  // const routeName = location.pathname; 
  const isSubmenuActive = location.pathname.includes(item.route_start)

  useEffect(() => {
    if(isSubmenuActive && item.route_start){
      setOpen(true)
    }
  }, [isSubmenuActive, item.route_start])

  const handleClick = () => {
    const sub_menus = document.getElementsByClassName('sidebar_sub_container');
    for (const sub_menu of sub_menus) {
      sub_menu.classList.remove('active');
    }
    setOpen((prev) => !prev);
  };

  return (
    <React.Fragment>
      <li className="nav-item group" >
        <button type="button" className={["nav-link sidebar_sub_container group text-muted-550 dark:text-muted-400 dark:group-hover:text-white-dark font-medium", open ? "" : ""].join(" ")} onClick={handleClick}>
            <div className="flex items-center">
                <item.icon className="shrink-0" />
                <span className="ltr:pl-3 rtl:pr-3">{item.title}</span>
            </div>
            <div className={["rtl:rotate-180 transition duration-300", open ? "!rotate-90" : ""].join(" ") } >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 5L15 12L9 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                </svg>
            </div>
        </button>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List  component="ul" className="sub-menu text-muted-550 dark:text-muted-400" disablePadding>
            {children.map((child, key) => (
              <Single key={key} item={child} />
            ))}
          </List>
        </Collapse>
      </li>
    </React.Fragment>
  );
};

export default MenuLevel
