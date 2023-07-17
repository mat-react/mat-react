import React from 'react';
 
<<<<<<< HEAD
import C from './Sidebar.module.css'


import { Home, PeopleOutline, Assignment } from '@mui/icons-material';
import { NavLink } from 'react-router-dom';
import { Box, Button, Typography } from '@mui/material';
import { useTheme } from '@emotion/react';


const Sidebar = () => {

    const menusArray = [
        {
            id: 1,
            type: 'title',
            title: "General"
        },
        {
            id: 3,
            type: 'menu',
            title: "Dashboard",
            icon: Home,
            link: '/'
        },
        {
            id: 3,
            type: 'menu',
            title: "Projects",
            icon: Assignment,
            link: '/projects'
        },
        {
            id: 3,
            type: 'menu',
            title: "Support Ticket",
            icon: PeopleOutline,
            link: '/ticket'
        }
    ]



    const theme = useTheme()


    return(

        <Box 
            className={[C.Sidebar, "absolute left-0 bottom-0"].join(" ")}
            sx={{
                top: 0,
                width: theme.palette.width?.sidebar,
                zIndex: 9999,
                backgroundColor: theme.palette.background.sidebar,
                boxShadow: `0 5px 5px 0 ${theme.palette.shadows?.default}`
            }}
        >
            <div className="p-15-25">   

                <div className='LOGO'>
                    
                </div>

                <div className='scrollable'>
                    <div>
                        <ul>


                            {
                                menusArray.map((i, key) => {

                                    if(i.type === 'title') {
                                        return(
                                            <li key={key}> 
                                                <Box 
                                                    className="radius-4 overflow-hidden text-overflow-ellips mb-15 p-15"
                                                    sx={{
                                                        backgroundColor: theme.palette.primary[700]
                                                    }}
                                                >
                                                    <Typography 
                                                        className='titleSm'
                                                        variant='span'
                                                        sx={{
                                                            color: theme.palette.text.primary
                                                        }}
                                                    >
                                                        {i.title}
                                                    </Typography>
                                                </Box>
                                            </li>
                                        )
                                    }else if(i.type === 'menu') {
                                        return(

                                            <li key={key} className={[C.MenuItem, "mb-5"].join(' ')}> 
                                                <div>
                                                    <NavLink 
                                                        to={i.link} 
                                                        className={({ isActive }) => (isActive ? C.Active : '')}
                                                    >
                                                        <Button 
                                                            style={{
                                                                gridTemplateColumns: "18px auto",
                                                            }}
                                                            className='grid ai-center gc-gap-10 text-capitalize text-left content-start p-10-15 w-100'
                                                        >
                                                            <div className='flex'> <i.icon sx={{color: theme.palette.text?.secondary}} /> </div>
                                                            <div>
                                                                <Typography sx={{color: theme.palette.text?.secondary}} className='f-14 fw-600'>
                                                                    {i.title}
                                                                </Typography>
                                                            </div>
                                                        </Button>
                                                    </NavLink>
                                                </div>
                                            </li>

                                        )
                                    }else {
                                        return('')
                                    }

                                })
                            }


                            

                        </ul>
                    </div>
                </div>

                
            </div>
        </Box>
=======

import { NavLink } from 'react-router-dom';

import SimpleBarReact from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';

import { IconButton } from '@mui/material';

import MenuLevel from './MenuLevel';
import { menus } from './menus';

import Logo from "../../assets/images/Logo.png"

import { sidebarToggler } from '../../Utils/appFuntions';

const Sidebar = () => {




    return(

        <nav className="sidebar fixed top-0 bottom-0 z-50 dark:ltr:border-r dark:rtl:border-l border-muted-200 dark:border-muted-700 h-full min-h-screen w-[260px] dark:shadow-none shadow-[5px_0_25px_0_rgba(94,92,154,0.1)] transition-all duration-300">
            <div className="h-full bg-white dark:bg-muted-800">
                
                <div className="flex items-center justify-between px-4 py-3">
                    <NavLink to={"/"} className="main-logo flex shrink-0 items-center">
                        <img className="ml-[5px] w-8 flex-none" src={Logo} alt="LOGO" />
                        <span className="align-middle text-2xl font-semibold ltr:ml-1.5 rtl:mr-1.5 dark:text-white-light lg:inline">MAT-REACT</span>
                    </NavLink>
                    <IconButton onClick={() => sidebarToggler()}>
                        <svg className="m-auto h-5 w-5 text-muted-400" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13 19L7 12L13 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                            <path opacity="0.5" d="M16.9998 19L10.9998 12L16.9998 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                        </svg>
                    </IconButton>
                </div>


                <SimpleBarReact className='relative h-[calc(100vh-80px)] space-y-0.5 overflow-y-auto overflow-x-hidden p-4 py-0 font-semibold ps ps--active-y'>
                    
                    <ul>
                        {menus.map((item, key) => {
                            if(item.type === "title"){
                                return (
                                    <li key={key}>
                                        <h2 className="-mx-4 pb-0 flex items-center mt-[10px] mb-[2px] py-3 px-7 font-bold uppercase dark:bg-dark dark:bg-opacity-[0.08]">
                                            <span>{item.title}</span>
                                        </h2>
                                    </li>
                                )
                            }else {
                                return (<MenuLevel key={key} item={item} />)
                            }
                        })}
                    </ul>

                </SimpleBarReact>
    
            </div>
        </nav>
>>>>>>> new_theme

    )
    
}

export default Sidebar;
