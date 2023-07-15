import { useState } from 'react';


// redux
import { useDispatch, useSelector } from 'react-redux';
import { toggleDarkMode } from '../../Store/actions/appSettings';


// @mui
import { MenuItem, Stack, IconButton, Popover } from '@mui/material';
<<<<<<< HEAD
import {WbSunny, DarkMode, Monitor} from '@mui/icons-material/';

import useStyles from '../../Styles/useStyles';
import styled from '@emotion/styled';
import { useTheme } from '@emotion/react';

=======
import {WbSunny, DarkMode } from '@mui/icons-material/';
import { IconDeviceDesktop, IconMoon, IconSunHigh } from '@tabler/icons-react';

import styled from '@emotion/styled';
 
>>>>>>> new_theme

export default function ModeToggler() { 
    const [open, setOpen] = useState(null);

    const handleOpen = (event) => {
        setOpen(event.currentTarget);
    };

    const dispatch = useDispatch();
    const handleClose = (ln) => {
        setOpen(null);
    };

  
    // dark mode enabling / getting by from redux store
    const darkMode = useSelector(state => state.app.darkMode);
    const appMode = useSelector(state => state.app.appMode);

<<<<<<< HEAD
    const classes = useStyles()
    const theme = useTheme()

    const StackItem = styled(MenuItem)({
        color: theme.palette.text.gray[700],
        "&:hover": {
            color: theme.palette.primary,
            background: theme.palette.secondary.primary
        }
=======

    const StackItem = styled(MenuItem)({
>>>>>>> new_theme
    })

    return (
        <>
        <IconButton
            onClick={handleOpen}
            sx={{
                width: 40,
                height: 40,
<<<<<<< HEAD
                bgcolor: (theme) => theme.palette.light,
                borderRadius: "0.475rem",
                color:(theme) => theme.palette.text.primary
=======
                borderRadius: "0.475rem",
>>>>>>> new_theme
            }}
        >
            {
                darkMode ? <DarkMode /> : <WbSunny />
            }
        </IconButton>

        <Popover
            open={Boolean(open)}
            anchorEl={open}
            onClose={handleClose}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            PaperProps={{
            sx: {
                p: 1,
                mt: 1.5,
                ml: 0.75,
                width: 180,
                '& .MuiMenuItem-root': {
                px: 1,
                typography: 'body2',
                borderRadius: 0.75,
                },
            },
            }}
        >
            <Stack spacing={0.75}>
                <StackItem
                    onClick={() => dispatch(toggleDarkMode('l'))} 
                    selected={appMode === "l"}
                >
                    <Stack 
<<<<<<< HEAD
                        className={classes.hoverItem} direction={"row"} 
                        spacing={0.75} alignItems={"center"} 
                    >
                        <WbSunny />
=======
                        direction={"row"} 
                        spacing={0.75} alignItems={"center"} 
                    >
                        <IconSunHigh />
>>>>>>> new_theme
                        <span> Light</span>
                    </Stack>
                </StackItem>
                <StackItem onClick={() => dispatch(toggleDarkMode('d'))} selected={appMode === "d"}>
<<<<<<< HEAD
                    <Stack className={classes.hoverItem} direction={"row"} spacing={0.75} alignItems={"center"} >
                        <DarkMode />
=======
                    <Stack direction={"row"} spacing={0.75} alignItems={"center"} >
                        <IconMoon />
>>>>>>> new_theme
                        <span> Dark</span>
                    </Stack>
                </StackItem>
                <StackItem onClick={() => dispatch(toggleDarkMode('df'))} selected={appMode === "df"}>
<<<<<<< HEAD
                    <Stack className={classes.hoverItem} direction={"row"} spacing={0.75} alignItems={"center"} >
                        <Monitor />
=======
                    <Stack direction={"row"} spacing={0.75} alignItems={"center"} >
                        <IconDeviceDesktop />
>>>>>>> new_theme
                        <span> System</span>
                    </Stack>
                </StackItem>
            </Stack>
        </Popover>
        </>
    );
}
