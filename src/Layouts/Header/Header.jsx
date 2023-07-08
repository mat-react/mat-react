import React, {useState} from 'react';

// mui components
import styled from '@emotion/styled';
import {IconButton, Box, useTheme, Typography } from '@mui/material';
import {NotificationsActive, AccountCircle, Settings, Logout} from '@mui/icons-material/';


// redux 
import { useSelector, useDispatch } from 'react-redux';
// import { toggleDarkMode } from '../../Store/actions/appSettings';


// components
import LanguagePopover from './LanguagePopover';
import ModeToggler from './ModeToggler';


const Header = () => { 


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
                                </div>
                                <div className="flex ai-center space-between"> 
                                    <div> Allow Notifications </div>
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
    );
}

export default Header;
