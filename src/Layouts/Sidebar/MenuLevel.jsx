import React, { useState } from "react";
import { List, Collapse} from "@mui/material";

import { hasChildren } from "../../Utils/hasMenuChildren";
import { NavLink } from "react-router-dom";
 

const MenuLevel = ({ item }) => {
  const Component = hasChildren(item) ? MultiLevel : SingleLevel;
  return <Component item={item} />;
};

const SingleLevel = ({item}) => { 
    return(
        <li className="nav-item">
            <NavLink className="group" to={item.to}>
                <div className="flex items-center">
                    {item.icon ? <item.icon className="shrink-0 group-hover:!text-primary" /> : null }
                    <span className="text-black ltr:pl-3 rtl:pr-3 dark:text-muted-400 dark:group-hover:text-white-dark">
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
            <NavLink to="" >{item.title}</NavLink>
        </li>
    )
}

const MultiLevel = ({ item }) => {
  const { items: children } = item;
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen((prev) => !prev);
  };

  return (
    <React.Fragment>
      <li className="nav-item group" >
        <button type="button" className="nav-link group" onClick={handleClick}>
            <div className="flex items-center">
                <item.icon className="shrink-0 group-hover:!text-primary" />
                <span className="text-black ltr:pl-3 rtl:pr-3 dark:text-muted-400 dark:group-hover:text-white-dark">{item.title}</span>
            </div>
            <div className={["rtl:rotate-180 transition duration-300", open ? "!rotate-90" : ""].join(" ") } >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 5L15 12L9 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                </svg>
            </div>
        </button>
      </li>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List  component="ul" className="sub-menu text-gray-500 dark:text-muted-400" disablePadding>
          {children.map((child, key) => (
            <Single key={key} item={child} />
          ))}
        </List>
      </Collapse>
    </React.Fragment>
  );
};

export default MenuLevel
