import React from 'react';
import { NavLink } from 'react-router-dom';

import { IconButton } from '@mui/material';
import { DarkMode, LaptopWindows, Menu, LightMode, Apps, Settings, Comment } from '@mui/icons-material';

import { useDispatch, useSelector } from 'react-redux';
import { toggleDarkMode } from '../../Store/actions/appSettings';

import LanguagePopover from './LanguagePopover';


import { sidebarToggler } from '../../Utils/appFuntions';

const Header = () => { 


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
                                    <span className="absolute top-[-2px] inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75 ltr:-left-[3px] rtl:-right-[3px]"></span>
                                    <span className="relative top-[1px] inline-flex h-[6px] w-[6px] rounded-full bg-primary"></span>
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

    );
}

export default Header;
