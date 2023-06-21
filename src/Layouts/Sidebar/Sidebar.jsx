import React from 'react';
 
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
                backgroundColor: theme.palette.background.paper,
                boxShadow: `0 5px 5px 0 ${theme.palette.shadows?.default}`
            }}
        >
            <div className="p-15-25">   


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
                                                        backgroundColor: theme.palette.background.default
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

    )
    
}

export default Sidebar;
