import React from 'react';
 
import C from './Sidebar.module.css'


import { Home, PeopleOutline, Assignment } from '@mui/icons-material';
import { NavLink } from 'react-router-dom';
import { Box, Button, Typography } from '@mui/material';
import { useTheme } from '@emotion/react';

import SimpleBarReact from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';


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
            <Box sx={{padding: "8px"}}>   

                <Box sx={{height:theme.palette.height.header, borderBottom: "1px dashed #393945"}} className='flex ai-center almarai absolute top-0 left-0 right-0'>
                    <Box sx={{padding: "0 16px",fontSize: "25px"}} className="">
                        <span style={{color: theme.palette.primary.main}}>MAT</span>
                        <span style={{color: theme.palette.gray[600]}}>-REACT</span>
                    </Box>
                </Box>

                <Box sx={{position:'absolute', top: theme.palette.height.header, padding: "0 8px"}} className='scrollable left-0 right-0'>
                    
                    <SimpleBarReact style={{ maxHeight: "calc(100vh - 70px)" }}>
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
                    </SimpleBarReact>
                </Box>

                
            </Box>
        </Box>

    )
    
}

export default Sidebar;
