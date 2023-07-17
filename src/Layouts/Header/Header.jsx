<<<<<<< HEAD
import React, {useState} from 'react';
import { Link } from 'react-router-dom';

// mui components
import styled from '@emotion/styled';
import {IconButton, Box, useTheme, Typography } from '@mui/material';
import {WbSunny, DarkMode, NotificationsActive, AccountCircle, Settings, Logout} from '@mui/icons-material/';


// redux 
import { useSelector, useDispatch } from 'react-redux';
import { toggleDarkMode } from '../../Store/actions/appSettings';


// components
import ToggleSwitch from '../../Components/Forms/ToggleSwitch';
import LanguagePopover from './LanguagePopover';
import ModeToggler from './ModeToggler';

=======
import React from 'react';
import { NavLink } from 'react-router-dom';

import { IconButton } from '@mui/material';
import { DarkMode, LaptopWindows, Menu, LightMode, Apps, Settings, Comment } from '@mui/icons-material';

import { useDispatch, useSelector } from 'react-redux';
import { toggleDarkMode } from '../../Store/actions/appSettings';

import LanguagePopover from './LanguagePopover';
>>>>>>> new_theme


import { sidebarToggler } from '../../Utils/appFuntions';

const Header = () => { 


<<<<<<< HEAD
    const [dropdownOpened, setDropdownOpened] = useState(false);


    // dropdown handler function
    const dropdownMenuHandler = () => {
        setDropdownOpened(!dropdownOpened)
    }


    // dark mode enabling / getting by from redux store
    const darkMode = useSelector(state => state.app.darkMode);
    const dispatch = useDispatch();



    const theme = useTheme()

    const HeaderComponent = styled('div')({
        zIndex: 999, 
        backgroundColor: theme.palette.background.header,
        height: theme.palette.height?.header,
        left: theme.palette.width?.sidebar,
        boxShadow: theme.palette.shadows?.default
    })

    

    const menuItemButtonStyle = {
        backgroundColor: theme.palette.light,
        width: 40,
        height: 40,
        borderRadius: "10px"
    }

    const LinkItem = styled('div')({
        gridTemplateColumns: "25px auto",
        padding: "15px 20px",
        color: theme.palette.text.primary,
        '&:hover': {
          background: theme.palette.background.default
        }
    })




    return (
        <HeaderComponent className="absolute top-0 right-0">
            <Box 
                className="w-100 flex ai-center space-between relative h-100"
                sx={{
                    padding: '15px 25px',
                    color: theme.palette.text.primary
                }}
            >
                <div className='flex ai-center content-end w-100'>

                    <Box 
                        className="w-auto grid gc-gap-15"
                        sx={{
                            gridTemplateColumns: 'auto auto auto auto',
                        }}
                    >

                        <div>
                            <LanguagePopover />
                        </div>

                        <div>
                            <ModeToggler />
                            {/* <IconButton 
                                className="flex"
                                sx={{ 
                                    width: 40,
                                    height: 40,
                                    bgcolor: (theme) => theme.palette.light,
                                    borderRadius: "0.475rem"
                                 }}
                                onClick={() => dispatch(toggleDarkMode(!darkMode))}
                            >
                                {
                                    darkMode ? <DarkMode /> : <WbSunny />
                                }
                            </IconButton> */}
                        </div>

                        <div>
                            <IconButton 
                                className="flex"
                                sx={{ 
                                    width: 40,
                                    height: 40,
                                    bgcolor: (theme) => theme.palette.light,
                                    borderRadius: "0.475rem",
                                    color:(theme) => theme.palette.text.primary
                                 }}
                            >
                                <NotificationsActive />
                            </IconButton>
                        </div>
                        

                        <div>
                            <IconButton 
                                onClick={dropdownMenuHandler} 
                                className="flex"
                                sx={{ 
                                    width: 40,
                                    height: 40,
                                    bgcolor: (theme) => theme.palette.light,
                                    borderRadius: "0.475rem",
                                    color:(theme) => theme.palette.text.primary
                                }}
                            >
                                <AccountCircle />
                            </IconButton>
                        </div>

                    </Box>

                </div>


                
            </Box>


            {
                dropdownOpened ?
                <>
                    <div onClick={dropdownMenuHandler} className="fixed top-0 left-0 right-0 top-0 bottom-0 transparent"></div>
                    
                    <Box 
                        sx={{
                            backgroundColor: theme.palette.background.paper,
                            right: 20,
                            top: 60,
                            widht: 330,
                            minHeight: 200,
                            boxShadow: theme.shadows[5],

                            [theme.breakpoints.down('sms')]: {
                                width: "auto!important",
                                left: 20
                            },
                        }}
                        className="absolute radius-8 overflow-hidden"
                    >
                        <div className="block height-auto p-15">


                            {/* welcome message */}
                            <Box 
                                className="mb-20 radius-8 mt-10 relative overflow-hidden"
                                sx = {{
                                    backgroundColor: theme.palette.background.default,
                                    color: theme.palette.text.primary,
                                    padding: "20px 20px 30px"
                                }}
                            >
                                
                                <span className="GraphicsSm One"></span>
                                <span className="GraphicsSm Two"></span>

                                <div>
                                    <Typography variant="h4" className="bold mb-10">
                                        Good Mornig!
                                    </Typography>
                                    <div className="fw-600">
                                        Start your jorney. Have a great day!
                                    </div>
                                </div>

                            </Box>
                            {/* welcome message */}



                            {/* switches */}
                            <Box 
                                className="p-20 mb-15 radius-4 bold grid select-none gr-gap-20"
                                sx={{
                                    backgroundColor: theme.palette.primary.dark,
                                    color: theme.palette.text.primary
                                }}
                            >
                                <div className="flex ai-center space-between"> 
                                    <div> Dark Mode </div>
                                    <div>
                                        <ToggleSwitch 
                                            onChange={() => dispatch(toggleDarkMode(!darkMode))} 
                                            checked={darkMode}
                                        />
                                    </div>
                                </div>
                                <div className="flex ai-center space-between"> 
                                    <div> Allow Notifications </div>
                                    <div>
                                        <ToggleSwitch />
                                    </div>
                                </div>
                            </Box>
                            {/* switches */}


                            
                            {/* links */}
                            <div className="mb-15">

                                <LinkItem className="grid ai-center radius-4 bold pointer">
                                    <div className="w-20 h-20">
                                        <Settings className="w-20 h-20" />
                                    </div>
                                    <div>
                                        Account Settings
                                    </div>
                                </LinkItem>

                                <LinkItem className="grid ai-center radius-4 bold pointer">
                                    <div className="w-20 h-20">
                                        <Logout className="w-20 h-20" />
                                    </div>
                                    <div>
                                        Logout
                                    </div>
                                </LinkItem>

                            </div>
                            {/* links */}


                        </div>
                    </Box>
                </>
                :
                null
            }


        </HeaderComponent>
=======
    const dispatch = useDispatch()
    const appMode = useSelector(state => state.app.appMode);


    const appModeChanger = () => {
        let mode = appMode === "light" ? "dark" : appMode === "dark" ? "system" : "light"
        dispatch(toggleDarkMode(mode))
    }


    return (

        <header className="">
            <div className="shadow-sm">
                <div className="relative flex w-full items-center bg-white px-5 py-2.5 dark:bg-muted-800">
                    <div className="horizontal-logo flex items-center justify-between ltr:mr-2 rtl:ml-2 lg:hidden">

                        <NavLink to="/" className="main-logo flex shrink-0 items-center">
                            <span className="align-middle text-2xl font-semibold ltr:ml-1.5 rtl:mr-1.5 dark:text-white-light lg:inline">MAT-REACT</span>
                        </NavLink>

                        <IconButton onClick={() => sidebarToggler()} className="collapse-icon flex flex-none rounded-full bg-white-light/40 p-2 hover:bg-white-light/90 hover:text-primary ltr:ml-2 rtl:mr-2 dark:bg-dark/40 dark:text-[#d0d2d6] dark:hover:bg-dark/60 dark:hover:text-primary lg:hidden">
                            <Menu />
                        </IconButton>
                    </div>
                    <div className="hidden justify-between ltr:mr-2 rtl:ml-2 sm:block">
                    </div>
                    <div className="flex items-center space-x-1.5 ltr:ml-auto rtl:mr-auto rtl:space-x-reverse dark:text-[#d0d2d6] lg:space-x-2">
                        
                        <div>
                            <IconButton onClick={() => appModeChanger()} className="flex items-center rounded-full !text-muted-400 hover:!text-primary">
                                {
                                    appMode === "system" ? <LaptopWindows /> : appMode === "dark" ? <DarkMode /> : <LightMode />
                                }
                            </IconButton>
                        </div>

                        <div><LanguagePopover /></div>

                        <div>
                            <IconButton className={`flex items-center rounded-full !text-muted-400 hover:!text-primary`}>
                                <Comment />
                                <span className="absolute top-0 flex h-3 w-3 ltr:right-0 rtl:left-0">
                                    <span className="absolute top-[-2px] inline-flex h-full w-full animate-ping rounded-full bg-success opacity-75 ltr:-left-[3px] rtl:-right-[3px]"></span>
                                    <span className="relative top-[1px] inline-flex h-[6px] w-[6px] rounded-full bg-success"></span>
                                </span>
                            </IconButton>
                        </div> 

                        <div>
                            <IconButton className="flex items-center rounded-full !text-muted-400 hover:!text-primary">
                                <Apps />
                            </IconButton>
                        </div>

                        <div>
                            <IconButton className="flex items-center rounded-full !text-muted-400 hover:!text-primary">
                                <Settings />
                            </IconButton>
                        </div>

                        <div>
                            <IconButton className='group w-[40px] h-[40px] p-[0!important]'>
                                <span>
                                    <img 
                                        className="h-9 w-9 rounded-full object-cover saturate-50 group-hover:saturate-100" 
                                        src="https://html.vristo.sbthemes.com/assets/images/user-profile.jpeg" alt="User"
                                    />
                                </span>
                            </IconButton>
                        </div>

                    </div>
                </div>

            </div>
        </header>

>>>>>>> new_theme
    );
}

export default Header;
