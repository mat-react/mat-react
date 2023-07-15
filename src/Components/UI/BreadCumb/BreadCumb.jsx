import React from 'react';
import { NavLink } from 'react-router-dom';

function BreadCumb({links, current}) {
    return (
        <ul className="flex space-x-2 rtl:space-x-reverse">
            {
                links.map((item, key) => {
                    if(item.title === current){
                        return (
                        <li key={key} className='text-muted'>
                            <span>{item.title}</span>
                        </li>)
                    }else {
                        return (
                            <React.Fragment key={key}>
                                <li className='text-muted'>
                                    <NavLink to={item.to} className={"hover:text-primary"}>
                                        {item.title}
                                    </NavLink>
                                </li>   
                                <li className="flex items-center">
                                    <span className="bullet bg-gray-400 w-[5px!important] h-[2px!important]"></span>
                                </li>
                            </React.Fragment>
                        )
                    }
                })
            }
        </ul>
    );
}

export default BreadCumb;